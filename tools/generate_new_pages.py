# -*- coding: utf-8 -*-
"""
生成 30 个新项目详情页，并更新 script.js（products 数组 + productPages 映射）。
用法：python tools/generate_new_pages.py
"""
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from new_projects_data_1 import PROJECTS_1
from new_projects_data_2 import PROJECTS_2

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROJECTS = PROJECTS_1 + PROJECTS_2

PAGE_TEMPLATE = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@@TITLE@@ | @@BADGE@@</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        .hero {
            background: linear-gradient(135deg, @@C1@@ 0%, @@C2@@ 100%);
            color: white;
            padding: 100px 20px;
            text-align: center;
        }
        .hero h1 { font-size: 3em; margin-bottom: 20px; }
        .hero p { font-size: 1.3em; max-width: 800px; margin: 0 auto 30px; opacity: 0.95; }
        .hero-badge { display: inline-block; background: rgba(255,255,255,0.2); padding: 10px 25px; border-radius: 25px; margin-bottom: 20px; font-size: 0.95em; }
        .hero-stats { display: flex; justify-content: center; gap: 50px; margin-top: 50px; flex-wrap: wrap; }
        .stat-item { text-align: center; }
        .stat-number { font-size: 2.5em; font-weight: bold; display: block; }
        .stat-label { font-size: 0.9em; opacity: 0.9; }
        .section { padding: 80px 20px; max-width: 1200px; margin: 0 auto; }
        .section-title { text-align: center; font-size: 2.5em; margin-bottom: 20px; color: var(--primary-color); }
        .section-subtitle { text-align: center; color: var(--secondary-color); margin-bottom: 50px; font-size: 1.1em; }
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 25px; margin-top: 40px; }
        .feature-card { background: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); transition: transform 0.3s, box-shadow 0.3s; border-left: 4px solid @@C1@@; }
        .feature-card:hover { transform: translateY(-5px); box-shadow: 0 8px 30px rgba(0,0,0,0.12); }
        .feature-icon { font-size: 2.5em; margin-bottom: 15px; }
        .feature-title { font-size: 1.3em; font-weight: bold; margin-bottom: 10px; color: var(--text-color); }
        .feature-description { color: var(--secondary-color); line-height: 1.8; }
        .tech-stack { display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; margin-top: 30px; }
        .tech-item { background: @@C1@@; color: white; padding: 12px 24px; border-radius: 25px; font-size: 0.95em; transition: background 0.3s; }
        .tech-item:hover { background: @@C2@@; }
        .workflow-diagram { background: white; border-radius: 12px; padding: 40px; margin: 40px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
        .workflow-flow { display: flex; align-items: center; justify-content: center; gap: 20px; flex-wrap: wrap; margin: 30px 0; }
        .flow-step { background: linear-gradient(135deg, @@C1@@ 0%, @@C2@@ 100%); color: white; padding: 20px 30px; border-radius: 10px; text-align: center; font-weight: bold; }
        .flow-arrow { font-size: 2em; color: @@C1@@; }
        .category-card { background: white; border-radius: 12px; padding: 30px; margin: 20px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border-top: 4px solid @@C1@@; }
        .category-title { font-size: 1.4em; font-weight: bold; margin-bottom: 15px; color: @@C1@@; }
        .category-content { color: var(--secondary-color); line-height: 1.8; }
        .feature-highlight { background: linear-gradient(135deg, @@BG@@ 0%, @@BG2@@ 100%); border-radius: 12px; padding: 30px; margin: 30px 0; border-left: 4px solid @@C1@@; }
        .feature-highlight h3 { color: @@C2@@; margin-bottom: 15px; }
        .feature-highlight p { color: var(--text-primary); line-height: 1.8; }
        .code-block { background: #1e1e1e; color: #d4d4d4; padding: 20px; border-radius: 8px; margin: 20px 0; font-family: 'Courier New', monospace; line-height: 1.6; overflow-x: auto; }
        .install-card { background: #f8f9fa; border-radius: 12px; padding: 25px; margin: 15px 0; border-left: 4px solid @@C1@@; }
        .install-title { font-size: 1.2em; font-weight: bold; margin-bottom: 10px; color: @@C1@@; }
        .showcase-grid { display: grid; grid-template-columns: 1fr; gap: 30px; margin-top: 40px; }
        .showcase-item { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); text-align: center; }
        .showcase-item img { max-width: 100%; border-radius: 8px; }
        .showcase-caption { margin-top: 15px; color: var(--secondary-color); font-size: 0.95em; }
        @media (max-width: 768px) {
            .hero h1 { font-size: 2em; }
            .hero-stats { gap: 30px; }
            .features-grid { grid-template-columns: 1fr; }
            .flow-arrow { transform: rotate(90deg); }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo"><a href="index.html">🌐 AI工具集合</a></div>
            <ul class="nav-menu">
                <li><a href="index.html">首页</a></li>
                <li><a href="#features">核心功能</a></li>
                <li><a href="#workflow">工作流程</a></li>
                <li><a href="#install">安装配置</a></li>
                <li><a href="#contact">联系我们</a></li>
            </ul>
            <div class="hamburger"><span></span><span></span><span></span></div>
        </div>
    </nav>

    <section class="hero">
        <div class="hero-badge">@@BADGE@@</div>
        <h1>@@TITLE@@</h1>
        <p>@@HERO@@</p>
        <div class="hero-stats">
            <div class="stat-item"><span class="stat-number">@@STARS@@</span><span class="stat-label">GitHub Star</span></div>
            <div class="stat-item"><span class="stat-number">@@ICON@@</span><span class="stat-label">@@CATEGORY@@</span></div>
            <div class="stat-item"><span class="stat-number">@@DIFFICULTY@@</span><span class="stat-label">上手难度</span></div>
        </div>
        <div style="margin-top: 40px;">
            <a href="https://github.com/liangdabiao/@@REPO@@" class="btn btn-primary" style="background: white; color: @@C1@@;">查看 GitHub</a>
            <a href="#features" class="btn btn-secondary" style="border: 2px solid white; color: white;">了解更多</a>
        </div>
    </section>

    <section class="section">
        <h2 class="section-title">为什么需要 @@TITLE@@？</h2>
        <p class="section-subtitle">@@WHY_H3@@</p>
        <div class="feature-highlight">
            <h3>@@WHY_H3@@</h3>
            <p>@@WHY_P@@</p>
        </div>
    </section>

    <section id="features" class="section" style="background: #f8f9fa;">
        <h2 class="section-title">核心功能</h2>
        <p class="section-subtitle">@@FEATURES_SUB@@</p>
        <div class="features-grid">
@@FEATURE_CARDS@@
        </div>
    </section>
@@SHOWCASE@@
    <section id="workflow" class="section">
        <h2 class="section-title">工作流程</h2>
        <p class="section-subtitle">从输入到产出，一步到位</p>
        <div class="workflow-diagram">
            <div class="workflow-flow">
@@FLOW_STEPS@@
            </div>
        </div>
    </section>

    <section id="install" class="section">
        <h2 class="section-title">安装与使用</h2>
        <p class="section-subtitle">快速开始</p>
@@INSTALL_CARDS@@
    </section>

    <section class="section" style="background: #f8f9fa;">
        <h2 class="section-title">技术栈</h2>
        <p class="section-subtitle">现代化技术组合</p>
        <div class="tech-stack">
@@TECH_ITEMS@@
        </div>
    </section>

    <section class="section">
        <h2 class="section-title">常见问题</h2>
        <p class="section-subtitle">关于 @@TITLE@@ 的常见疑问</p>
@@FAQ_CARDS@@
    </section>

    <footer class="footer" id="contact">
        <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h3>关于项目</h3>
                <p>@@FOOTER_ABOUT@@</p>
            </div>
            <div class="footer-section">
                <h3>快速链接</h3>
                <ul>
                    <li><a href="index.html">返回首页</a></li>
                    <li><a href="https://github.com/liangdabiao/@@REPO@@">GitHub 仓库</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>联系我们</h3>
                <p>邮箱：497070928@qq.com</p>
                <p>GitHub：https://github.com/liangdabiao</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 @@TITLE@@. All rights reserved.</p>
        </div>
            </div>
    </footer>

    <script src="script.js"></script>
    <script>
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
            });
        });
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger) {
            hamburger.addEventListener('click', () => { navMenu.classList.toggle('active'); hamburger.classList.toggle('active'); });
        }
    </script>
</body>
</html>
"""


def esc(s):
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


def build_feature_cards(p):
    out = []
    for icon, title, desc in p['features']:
        out.append(
            '            <div class="feature-card">\n'
            '                <div class="feature-icon">%s</div>\n'
            '                <h3 class="feature-title">%s</h3>\n'
            '                <p class="feature-description">%s</p>\n'
            '            </div>' % (icon, esc(title), esc(desc))
        )
    return '\n'.join(out)


def build_flow(p):
    parts = []
    for i, step in enumerate(p['workflow']):
        parts.append('                <div class="flow-step">%s</div>' % esc(step))
        if i < len(p['workflow']) - 1:
            parts.append('                <div class="flow-arrow">→</div>')
    return '\n'.join(parts)


def build_install(p):
    out = []
    for title, code in p['install']:
        out.append(
            '        <div class="install-card">\n'
            '            <div class="install-title">%s</div>\n'
            '            <pre class="code-block">%s</pre>\n'
            '        </div>' % (esc(title), esc(code))
        )
    return '\n'.join(out)


def build_tech(p):
    return '\n'.join('            <div class="tech-item">%s</div>' % esc(t) for t in p['tech'])


def build_faq(p):
    out = []
    for q, a in p['faq']:
        out.append(
            '        <div class="category-card">\n'
            '            <div class="category-title">%s</div>\n'
            '            <div class="category-content">%s</div>\n'
            '        </div>' % (esc(q), esc(a))
        )
    return '\n'.join(out)


def build_showcase(p):
    if not p.get('images'):
        return ''
    items = []
    for img in p['images']:
        caption = os.path.basename(img)
        items.append(
            '            <div class="showcase-item">\n'
            '                <img src="%s" alt="%s 配图" loading="lazy">\n'
            '                <div class="showcase-caption">%s</div>\n'
            '            </div>' % (img, esc(p['title']), esc(caption))
        )
    return (
        '\n    <section class="section" style="background: #f8f9fa;">\n'
        '        <h2 class="section-title">效果预览</h2>\n'
        '        <p class="section-subtitle">小黑手绘风格插图</p>\n'
        '        <div class="showcase-grid">\n'
        + '\n'.join(items) +
        '\n        </div>\n'
        '    </section>\n'
    )


def render_page(p):
    html = PAGE_TEMPLATE
    repl = {
        '@@TITLE@@': esc(p['title']),
        '@@BADGE@@': esc(p['badge']),
        '@@HERO@@': esc(p['hero']),
        '@@STARS@@': str(p['stars']),
        '@@ICON@@': p['icon'],
        '@@CATEGORY@@': esc(p['category']),
        '@@DIFFICULTY@@': esc(p['difficulty']),
        '@@REPO@@': p['repo'],
        '@@C1@@': p['c1'],
        '@@C2@@': p['c2'],
        '@@BG@@': p['bg'],
        '@@BG2@@': p['bg'],
        '@@WHY_H3@@': esc(p['why'][0]),
        '@@WHY_P@@': esc(p['why'][1]),
        '@@FEATURES_SUB@@': esc('%s 的六大能力' % p['title']),
        '@@FEATURE_CARDS@@': build_feature_cards(p),
        '@@FLOW_STEPS@@': build_flow(p),
        '@@INSTALL_CARDS@@': build_install(p),
        '@@TECH_ITEMS@@': build_tech(p),
        '@@FAQ_CARDS@@': build_faq(p),
        '@@SHOWCASE@@': build_showcase(p),
        '@@FOOTER_ABOUT@@': esc(p['desc']),
    }
    for k, v in repl.items():
        html = html.replace(k, v)
    return html


def js_str(s):
    # 生成单行 JS 单引号字符串，与既有代码风格一致
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"


def build_product_entry(p):
    features = ',\n'.join('            %s' % js_str(f) for f in
                          ['%s：%s' % (t, d) for _, t, d in p['features']])
    tech = ',\n'.join('            %s' % js_str(t) for t in p['tech'])
    tags = ', '.join(js_str(t) for t in p['tags'])
    return (
        "    {\n"
        "        id: %s,\n"
        "        name: %s,\n"
        "        description: %s,\n"
        "        icon: %s,\n"
        "        tags: [%s],\n"
        "        githubUrl: 'https://github.com/liangdabiao/%s',\n"
        "        pageUrl: './%s.html',\n"
        "        features: [\n%s\n        ],\n"
        "        techStack: [\n%s\n        ],\n"
        "        category: %s,\n"
        "        difficulty: %s\n"
        "    }," % (
            js_str(p['id']), js_str(p['name']), js_str(p['desc']), js_str(p['icon']),
            tags, p['repo'], p['slug'], features, tech,
            js_str(p['category']), js_str(p['difficulty']),
        )
    )


def update_script_js(path, projects):
    # 用 newline='' 读写，保持原文件 LF 行尾不被转换
    with open(path, encoding='utf-8', newline='') as f:
        src = f.read()

    # 1) products 数组末尾插入（最后一个元素可能没有尾逗号，需自动补上）
    arr_start = src.index('const products = [')
    arr_end = src.index('\n];', arr_start)
    prefix = src[:arr_end].rstrip()
    sep = '' if prefix.endswith(',') else ','
    entries = '\n'.join(build_product_entry(p) for p in projects)
    src = prefix + sep + '\n' + entries + src[arr_end:]

    # 2) productPages 映射末尾插入（同理处理尾逗号）
    map_start = src.index('const productPages = {')
    map_end = src.index('\n    };', map_start)
    prefix2 = src[:map_end].rstrip()
    sep2 = '' if prefix2.endswith(',') else ','
    lines = '\n'.join("        '%s': './%s.html'," % (p['id'], p['slug']) for p in projects)
    src = prefix2 + sep2 + '\n' + lines + src[map_end:]

    # 统一行尾为 LF（与仓库其他文件及 blob 一致）
    src = src.replace('\r\n', '\n')

    with open(path, 'w', encoding='utf-8', newline='') as f:
        f.write(src)
    return len(src)


def main():
    # 生成详情页
    os.makedirs(os.path.join(ROOT, 'assets'), exist_ok=True)
    for p in PROJECTS:
        out = os.path.join(ROOT, p['slug'] + '.html')
        with open(out, 'w', encoding='utf-8', newline='') as f:
            f.write(render_page(p))
        print('page:', out)

    # 更新 script.js
    n = update_script_js(os.path.join(ROOT, 'script.js'), PROJECTS)
    print('script.js updated, size:', n)
    print('total projects added:', len(PROJECTS))


if __name__ == '__main__':
    main()
