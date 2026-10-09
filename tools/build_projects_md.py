"""Convert every project HTML page in the repo into one Markdown document.

Usage: python tools/build_projects_md.py [输出文件路径]
"""
import os
import re
import sys
import glob

sys.stdout.reconfigure(encoding="utf-8")

from bs4 import BeautifulSoup, NavigableString, Tag, Comment

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(REPO, "PROJECTS.md")
SKIP_FILES = {"index.html"}

TITLE_RE = re.compile(r"(title|name)$")


def clean_ws(s):
    # Escaping happens here so every extracted display string is consistent;
    # angle-bracket text such as "<sid>.mp4" would otherwise be eaten as HTML.
    return esc(re.sub(r"\s+", " ", s).strip())


def esc(s):
    """Escape angle brackets so text like <sid>.mp4 survives as literal text."""
    return s.replace("<", "\\<").replace(">", "\\>")


def flat(s):
    """Collapse newline-separated inline runs into one line."""
    return re.sub(r"\s*\n\s*", " ", s).strip()


BLOCKY = (
    "div", "section", "ul", "ol", "li", "table", "tr", "thead", "tbody",
    "pre", "p", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "figure",
)


def is_skip(el):
    if not isinstance(el, Tag):
        return False
    if el.name in ("script", "style", "noscript", "head", "meta", "link", "title"):
        return True
    cls = " ".join(el.get("class") or [])
    if el.name in ("nav", "footer") or "navbar" in cls or "footer" in cls:
        return True
    if isinstance(el, Comment):
        return True
    return False


def guess_lang(text):
    t = text.lstrip()
    if t.startswith("{") or t.startswith("<"):
        return "json" if t.startswith("{") else "html"
    for kw in ("git clone", "npm ", "pnpm ", "yarn ", "npx ", "cd ", "pip ", "python ", "uvicorn", "docker ", "curl ", "bash", "mkdir", "chmod", "export "):
        if kw in text:
            return "bash"
    if re.search(r"^\s*(def |import |from |class |print\()", text, re.M):
        return "python"
    if re.search(r"^\s*(fn |let |const |func |package )", text, re.M):
        return "js"
    return ""


def inline(el):
    """Render an element subtree as a single markdown inline string."""
    if isinstance(el, NavigableString):
        if isinstance(el, Comment):
            return ""
        # bs4 already decoded entities; escape angle brackets so a renderer
        # does not swallow text like "<sid>.mp4" as raw HTML.
        return clean_ws(str(el))
    if not isinstance(el, Tag):
        return ""
    if is_skip(el):
        return ""
    if el.name == "br":
        return "\n"
    if el.name == "img":
        src = el.get("src") or ""
        alt = clean_ws(el.get("alt") or "") or "image"
        return "" if not src else f"![{alt}]({src})"
    if el.name in ("i", "svg"):
        return ""
    inner = "".join(inline(c) for c in el.children).strip()
    inner = re.sub(r"\s+", " ", inner)
    if not inner:
        return ""
    if el.name == "a":
        href = el.get("href") or ""
        if href.startswith("#") or href in ("index.html", "./index.html", "/"):
            return inner
        return f"[{inner}]({href})"
    if el.name in ("strong", "b"):
        return f"**{inner}**"
    if el.name in ("em", "i"):
        return f"*{inner}*"
    if el.name == "code":
        return f"`{inner}`"
    if el.name == "span" and "badge" in " ".join(el.get("class") or []):
        return f"`{inner}`"
    return inner


def extract_links(section):
    out = []
    for a in section.find_all("a", href=True):
        href = a["href"]
        text = clean_ws(a.get_text(" "))
        if href.startswith(("http://", "https://")):
            out.append((text or href, href))
    seen, uniq = set(), []
    for text, href in out:
        key = (text, href)
        if key in seen:
            continue
        seen.add(key)
        uniq.append((text, href))
    return uniq


def has_class(el, *needles):
    cls = " ".join(el.get("class") or []) if isinstance(el, Tag) else ""
    return any(n in cls for n in needles)


def direct_children(el):
    return [c for c in el.children if isinstance(c, Tag) and not is_skip(c)]


def find_title(el):
    """Return (title_text, remaining_element) for a card-like element."""
    clone = None
    cand = None
    for child in el.find_all(class_=TITLE_RE, recursive=True):
        text = clean_ws(child.get_text(" "))
        if text and len(text) <= 120:
            cand = child
            break
    if cand is None:
        for child in el.find_all(["h3", "h4", "h5"], recursive=True):
            text = clean_ws(child.get_text(" "))
            if text:
                cand = child
                break
    if cand is None:
        return None, el
    title = clean_ws(cand.get_text(" "))
    clone = el.__copy__()
    for c in clone.find_all(class_=TITLE_RE, recursive=True):
        if clean_ws(c.get_text(" ")) == title:
            c.extract()
            break
    for c in clone.find_all(["h3", "h4", "h5"], recursive=True):
        if clean_ws(c.get_text(" ")) == title:
            c.extract()
            break
    return title, clone


def is_card(el):
    if not isinstance(el, Tag) or el.name != "div":
        return False
    cls = " ".join(el.get("class") or [])
    if "card" in cls or "item" in cls:
        return True
    return False


def render_list(el, ordered=False):
    lines = []
    items = [c for c in direct_children(el) if c.name == "li"]
    for i, li in enumerate(items, 1):
        text = flat(inline(li))
        sub = []
        for child in direct_children(li):
            if child.name in ("ul", "ol"):
                sub.extend(render_list(child, child.name == "ol"))
        prefix = f"{i}." if ordered else "-"
        if text:
            lines.append(f"{prefix} {text}")
        else:
            blocks = render_blocks(direct_children(li))
            if len(blocks) == 1:
                lines.append(f"{prefix} {blocks[0]}")
            else:
                lines.append(f"{prefix}")
                lines.extend("  " + b for b in blocks)
        lines.extend("  " + s for s in sub)
    return ["\n".join(lines)] if lines else []


def render_table(el):
    rows = []
    for tr in el.find_all("tr"):
        cells = [clean_ws(c.get_text(" ")) for c in tr.find_all(["th", "td"])]
        if cells:
            rows.append(cells)
    if not rows:
        return []
    width = max(len(r) for r in rows)
    rows = [[c.replace("|", "/") for c in r] + [""] * (width - len(r)) for r in rows]
    out = ["| " + " | ".join(rows[0]) + " |", "|" + "|".join([" --- "] * width) + "|"]
    for r in rows[1:]:
        out.append("| " + " | ".join(r) + " |")
    return ["\n".join(out)]


def has_block_child(el):
    for c in direct_children(el):
        if c.name in ("pre", "table", "ul", "ol", "section", "h2", "h3", "h4"):
            return True
        if is_card(c) and c.find(class_=TITLE_RE) is not None:
            return True
        if len(direct_children(c)) >= 2 and c.name == "div":
            return True
    return False


EMOJI_ONLY = re.compile(
    r"^[ \t\n\U0001F000-\U0001FAFF\U0001F1E6-\U0001F1FF\u2600-\u27BF\u2B00-\u2BFF\uFE0F\u200D]{1,12}$"
)


def render_card(el):
    title, rest = find_title(el)
    if title is None:
        return render_blocks(direct_children(el))
    kids = direct_children(rest)
    while kids:
        icon = inline(kids[0])
        if icon and EMOJI_ONLY.match(icon) and not direct_children(kids[0]):
            title = f"{icon} {title}".strip()
            kids = kids[1:]
        else:
            break
    if not any(
        c.name in ("pre", "table", "ul", "ol", "section", "h2", "h3", "h4") or (is_card(c) and c.find(class_=TITLE_RE))
        for c in kids
    ):
        text = re.sub(r"\s+", " ", " ".join(inline(c) for c in kids)).strip()
        m = re.match(r"^((?:[\U0001F000-\U0001FAFF\u2600-\u27BF\uFE0F\u200D]\s*){1,3})(.*)$", text, re.S)
        if m and m.group(2):
            title = f"{m.group(1).strip()} {title}".strip()
            text = m.group(2).strip()
        return [f"- **{title}**" + (f" — {text}" if text else "")]
    lines = [f"**{title}**"]
    lines.extend(render_blocks(kids))
    return lines


def render_blocks(children):
    out = []
    for el in children:
        out.extend(render_element(el))
    return out


def render_element(el):
    if isinstance(el, NavigableString):
        text = clean_ws(str(el))
        return [text] if text else []
    if not isinstance(el, Tag) or is_skip(el):
        return []
    cls = " ".join(el.get("class") or [])
    name = el.name

    if name in ("h1",):
        return []
    if name in ("h2", "h3", "h4", "h5", "h6"):
        text = flat(inline(el))
        if not text:
            return []
        level = {"h2": "####", "h3": "#####", "h4": "#####", "h5": "######", "h6": "######"}[name]
        return [f"{level} {text}"]
    if name == "pre":
        text = el.get_text("\n").strip("\n")
        if not text.strip():
            return []
        lang = ""
        m = re.search(r"(language|lang)-(\w+)", cls)
        if m:
            lang = m.group(2)
        else:
            lang = guess_lang(text)
        body = "\n".join(["```" + lang] + text.splitlines() + ["```"])
        return [body]
    if name in ("ul", "ol"):
        return render_list(el, name == "ol")
    if name == "table":
        return render_table(el)
    if name == "p":
        text = flat(inline(el))
        return [text] if text else []
    if name == "blockquote":
        text = flat(inline(el))
        return [f"> {text}"] if text else []
    if name == "img":
        src = el.get("src") or ""
        alt = clean_ws(el.get("alt") or "") or "image"
        return [f"![{alt}]({src})"] if src else []

    # container-ish divs
    kids = direct_children(el)
    if "hero" in cls and el.name == "div":
        return render_hero(el)
    if "flow-step" in cls or any(has_class(k, "flow-step") for k in kids):
        steps = [clean_ws(k.get_text(" ")) for k in kids if has_class(k, "flow-step")]
        steps = [s for s in steps if s]
        if len(steps) >= 2:
            return [" → ".join(steps)]
    tag_classes = ("tech-item", "tech-tag", "keyword-tag", "product-tag")
    if kids and all(has_class(k, *tag_classes) for k in kids):
        tags = [clean_ws(k.get_text(" ")) for k in kids]
        tags = [t for t in tags if t and len(t) < 60]
        if tags:
            return [" ".join(f"`{t}`" for t in tags)]
    if name == "div" and (is_card(el) or (len(kids) == 0 and inline(el))):
        if el.find(class_=TITLE_RE) is not None or el.find(["h3", "h4", "h5"]) is not None:
            return render_card(el)
    block_kids = [k for k in kids if k.name in BLOCKY]
    if block_kids:
        return render_blocks(block_kids)
    text = inline(el)
    if not text.strip():
        return []
    if "\n" in text.strip():
        rows = [r.strip() for r in text.split("\n") if r.strip()]
        return ["  \n".join(rows)]
    return [flat(text)] if text else []


def parse_products_js():
    src = open(os.path.join(REPO, "script.js"), encoding="utf-8").read()
    start = src.index("const products")
    end = src.index("\n];", start)
    body = src[start:end]
    # products are 4-space indented object literals; brace counting is unsafe
    # because command strings inside entries contain { } characters.
    opens = [m.start() for m in re.finditer(r"(?m)^\s{4}\{$", body)]
    objs = []
    for i, pos in enumerate(opens):
        stop = opens[i + 1] if i + 1 < len(opens) else len(body)
        objs.append(body[pos:stop])
    products = []
    for raw in objs:
        p = {}
        for key in ("id", "name", "description", "icon", "githubUrl", "category", "difficulty"):
            mm = re.search(rf"{key}\s*:\s*'((?:[^'\\]|\\.)*)'", raw)
            if mm:
                p[key] = mm.group(1)
        for key in ("tags", "features", "techStack", "useCases"):
            mm = re.search(rf"{key}\s*:\s*\[([^\[\]]*)\]", raw, re.S)
            if mm:
                items = re.findall(r"'((?:[^'\\]|\\.)*)'", mm.group(1))
                p[key] = items
        if p.get("id"):
            products.append(p)
    return products


def hero_of(soup):
    hero = soup.find(class_="hero") or soup.find("section")
    info = {"badge": "", "stats": [], "description": ""}
    if not hero:
        return info
    badge = hero.find(class_=re.compile("badge|hero-tags"))
    if badge:
        info["badge"] = clean_ws(badge.get_text(" "))
    p = hero.find("p")
    if p:
        info["description"] = clean_ws(p.get_text(" "))
    for s in hero.find_all(class_=re.compile("stat-item|stat")):
        num = s.find(class_=re.compile("stat-number|stat-value"))
        lab = s.find(class_=re.compile("stat-label"))
        if num and lab:
            info["stats"].append(f"{clean_ws(num.get_text(' '))} {clean_ws(lab.get_text(' '))}")
    return info


def render_hero(el):
    info = hero_of_from_hero(el)
    links = extract_links(el)
    lines = []
    if info["badge"]:
        lines.append(f"> {info['badge']}")
    if info["description"]:
        lines.append(f"**简介**：{info['description']}")
    if info["stats"]:
        lines.append(" ".join(f"`{s}`" for s in info["stats"]))
    if links:
        lines.append(" ".join(f"[{t}]({h})" for t, h in links[:4]))
    return lines


def is_app_page(path):
    """Online-app shells (chat UIs, upload demos) rather than图文 intro pages."""
    html = open(path, encoding="utf-8").read()
    if re.search(r'class="[^"]*(chatbot-container|chat__messages)[^"]*"', html):
        return True
    if re.search(r'class="(section-title|feature-card|skill-card|install-card|category-card|use-case-card|product-features|product-hero|hero-badge)"', html):
        return False
    return len(re.findall(r"<section", html)) < 2


def meta_to_markdown(p):
    lines = []
    if p.get("description"):
        lines.append(f"**简介**：{clean_ws(p['description'])}")
    if p.get("features"):
        lines.append("#### 核心功能\n\n" + "\n".join(f"- {clean_ws(f)}" for f in p["features"]))
    if p.get("useCases"):
        lines.append("#### 适用场景\n\n" + "\n".join(f"- {clean_ws(u)}" for u in p["useCases"]))
    if p.get("techStack"):
        lines.append("#### 技术栈\n\n" + " ".join(f"`{t}`" for t in p["techStack"]))
    lines.append(
        "_该 HTML 是在线应用本体，仓库中无独立图文介绍页，以上内容取自首页项目卡片数据。_"
    )
    return "\n\n".join(lines)


def page_to_markdown(path, meta):
    html = open(path, encoding="utf-8").read()
    soup = BeautifulSoup(html, "html.parser")
    title_tag = soup.find("title")
    page_title = clean_ws(title_tag.get_text()) if title_tag else os.path.basename(path)
    hero_el = soup.find(class_="hero")
    if hero_el:
        h1 = hero_el.find("h1")
        if h1 and clean_ws(h1.get_text()):
            page_title = clean_ws(h1.get_text(" "))

    body = soup.body or soup
    lines = []
    sections = [c for c in body.children if isinstance(c, Tag) and not is_skip(c)]
    # if body wraps content in main/container, dig one level
    flattened = []
    for el in sections:
        if el.name in ("main", "div") and not has_class(el, "hero", "section"):
            flattened.extend([c for c in el.children if isinstance(c, Tag) and not is_skip(c)])
        else:
            flattened.append(el)

    for el in flattened:
        if has_class(el, "hero"):
            lines.extend(render_hero(el))
            continue
        if el.name == "section" or has_class(el, "section"):
            h2 = el.find(class_="section-title") or next(
                (c for c in direct_children(el) if c.name == "h2"), None
            )
            text = clean_ws(h2.get_text(" ")) if h2 else ""
            if h2 is not None:
                h2.extract()
            if text:
                lines.append(f"#### {text}")
            sub = el.find(class_="section-subtitle")
            if sub:
                st = clean_ws(sub.get_text(" "))
                if st:
                    lines.append(f"_{st}_")
                sub.extract()
            lines.extend(render_blocks(direct_children(el)))
            continue
        lines.extend(render_element(el))

    out = "\n\n".join(b for b in lines if b.strip())
    return out, page_title


def hero_of_from_hero(hero):
    info = {"badge": "", "stats": [], "description": ""}
    badge = hero.find(class_=re.compile("badge"))
    if badge:
        info["badge"] = clean_ws(badge.get_text(" "))
    p = hero.find("p")
    if p:
        info["description"] = clean_ws(p.get_text(" "))
    for s in hero.find_all(class_=re.compile("stat-item")):
        num = s.find(class_=re.compile("stat-number"))
        lab = s.find(class_=re.compile("stat-label"))
        if num and lab:
            info["stats"].append(f"{clean_ws(num.get_text(' '))} {clean_ws(lab.get_text(' '))}")
    return info


def main():
    products = parse_products_js()
    by_id = {p.get("id"): p for p in products}
    cat_order = []
    for p in products:
        c = p.get("category", "其他")
        if c not in cat_order:
            cat_order.append(c)

    files = sorted(f for f in glob.glob(os.path.join(REPO, "*.html")) if os.path.basename(f) not in SKIP_FILES)

    rendered = {}
    app_pages, skipped = [], []
    for f in files:
        pid = os.path.splitext(os.path.basename(f))[0]
        meta = by_id.get(pid, {})
        if is_app_page(f):
            if meta:
                app_pages.append(pid)
                rendered[pid] = (meta_to_markdown(meta), meta.get("name", pid))
                continue
            skipped.append(pid)
            continue
        try:
            md, page_title = page_to_markdown(f, meta)
        except Exception as e:  # noqa
            md = f"<!-- 转换失败: {e} -->"
            page_title = pid
        rendered[pid] = (md, page_title)

    ids_in_files = set(rendered)
    missing_meta = sorted(ids_in_files - set(by_id))
    missing_html = sorted(set(by_id) - ids_in_files)

    lines = []
    lines.append("# 梁的智能工具集合 · 全部项目介绍")
    lines.append("")
    lines.append(
        f"本文由仓库根目录的 {len(rendered)} 个项目介绍页（HTML）自动汇总生成，"
        "每个项目保留原始页面中的简介、核心功能、工作流程、安装方式、技术栈与常见问题。"
    )
    lines.append("")

    # overview table
    lines.append("## 项目总览")
    lines.append("")
    lines.append("| # | 项目 | 分类 | 简介 | 仓库 |")
    lines.append("| --- | --- | --- | --- | --- |")
    ordered = [p for p in products if p.get("id") in rendered] + [
        {"id": pid, "name": rendered[pid][1], "description": "", "category": "未分类"}
        for pid in missing_meta
    ]
    for i, p in enumerate(ordered, 1):
        pid = p["id"]
        name = p.get("name") or rendered[pid][1]
        desc = clean_ws(p.get("description", "")) or clean_ws(rendered[pid][0].split("\n\n")[0])[:80]
        desc = desc.replace("|", "/")
        name = name.replace("|", "/")
        gh = p.get("githubUrl", "")
        link = f"{p.get('icon','')} {name}".strip()
        repo = f"[GitHub]({gh})" if gh else "-"
        lines.append(f"| {i} | {link} | {p.get('category','')} | {desc} | {repo} |")
    lines.append("")

    lines.append("## 分类索引")
    lines.append("")
    grouped = {}
    for idx, p in enumerate(ordered, 1):
        grouped.setdefault(p.get("category", "未分类"), []).append((idx, p))
    for c in [x for x in cat_order if x in grouped] + [x for x in grouped if x not in cat_order]:
        items = ", ".join(f"{p.get('icon', '')} {p.get('name', p['id'])}".strip() for _, p in grouped[c])
        lines.append(f"- **{c}**（{len(grouped[c])}）：{items}")
    lines.append("")

    lines.append("---")
    lines.append("")

    for c in [x for x in cat_order if x in grouped] + [x for x in grouped if x not in cat_order]:
        lines.append(f"## {c}")
        lines.append("")
        for idx, p in grouped[c]:
            pid = p["id"]
            md, page_title = rendered[pid]
            name = p.get("name") or page_title
            lines.append(re.sub(r"\s+", " ", f"### {idx}. {p.get('icon','')} {name}").strip())
            lines.append("")
            info = [f"- 分类：{c}"]
            if p.get("difficulty"):
                info.append(f"- 难度：{p['difficulty']}")
            if p.get("githubUrl"):
                info.append(f"- 仓库：{p['githubUrl']}")
            if p.get("tags"):
                info.append(f"- 标签：{' '.join('`'+t+'`' for t in p['tags'][:8])}")
            lines.extend(info)
            lines.append("")
            lines.append(md)
            lines.append("")

    content = "\n".join(lines)
    content = re.sub(r"\n{3,}", "\n\n", content)
    open(OUT, "w", encoding="utf-8").write(content)
    print("wrote", OUT, len(content), "chars")
    print("files:", len(files), "rendered:", len(rendered), "products in script.js:", len(products))
    print("app pages (built from card data):", app_pages)
    print("skipped:", skipped)
    print("html without meta entry:", missing_meta)
    print("meta without html:", missing_html)


if __name__ == "__main__":
    main()
