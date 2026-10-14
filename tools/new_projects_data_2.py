# -*- coding: utf-8 -*-
# 新增 30 个项目的数据（第 2 部分：16-30）

PROJECTS_2 = [
{
    'slug': 'claudesdk-market-insight-chat', 'id': 'claudesdk-market-insight-chat', 'repo': 'claudesdk-market-insight-chat',
    'name': '用户需求洞察对话平台', 'category': '商业工具', 'icon': '💡', 'difficulty': '入门',
    'badge': 'Claude Agent SDK · 用户洞察', 'title': '用户需求洞察对话平台',
    'stars': 15,
    'hero': '输入产品或服务描述，AI 按三段式框架（用户画像 → 情绪洞察 → 产品机会）自动执行，10 分钟产出可落地的分析。',
    'desc': '三段式用户需求洞察平台：画像→情绪→机会，10 分钟产出可落地分析。',
    'tags': ['Claude Agent SDK', '用户洞察', '需求分析', '产品机会', '三段式'],
    'why': ('"用户到底要啥"这个问题，凭猜是没有答案的',
            '这套平台把用户洞察拆成标准的三段式框架：先画用户画像，再挖情绪动因，最后落到产品机会。你只输入产品描述，AI 自动调用洞察技能执行完整流程，10 分钟拿到一份结构化的可落地分析。'),
    'features': [
        ('🧭', '三段式洞察框架', '用户画像 → 情绪洞察 → 产品机会，标准流程自动执行'),
        ('👥', '用户画像输出', '目标用户是谁、特征是什么，结构化呈现'),
        ('💗', '情绪动因分析', '不止于行为，深挖背后的情绪驱动'),
        ('🎯', '产品机会识别', '从洞察落到具体产品机会，可执行'),
        ('💬', '对话式操作', '不用写代码，输入描述即可开跑'),
        ('⚡', 'SDK 驱动', '基于 Claude Agent SDK，能力可持续扩展')
    ],
    'images': ['assets/claudesdk-market-insight-chat/01.png'],
    'workflow': ['启动服务', '输入产品描述', 'AI 三段式分析', '产出洞察', '落地参考'],
    'install': [
        ('1. 克隆项目', 'git clone https://github.com/liangdabiao/claudesdk-market-insight-chat.git'),
        ('2. 安装依赖', 'npm install'),
        ('3. 配置密钥', '配置 Claude API Key'),
        ('4. 启动对话', 'npm run dev  # 输入产品/服务描述即可')
    ],
    'tech': ['Claude Agent SDK', '用户洞察', '三段式框架', '产品机会分析', 'Web 应用'],
    'faq': [
        ('Q: 三段式框架具体是什么？', 'A: 用户画像 → 情绪洞察 → 产品机会，先搞懂人、再搞懂动机、最后落到机会点。'),
        ('Q: 适合什么阶段的产品？', 'A: 适合需求探索期的产品、运营和创业者，用于方向验证。'),
        ('Q: 结论怎么用？', 'A: 作为方向参考使用，重要决策建议结合一手调研二次验证。')
    ],
    'c1': '#c026d3', 'c2': '#a21caf', 'bg': '#fdf4ff'
},
{
    'slug': 'claudesdk-exa-chat', 'id': 'claudesdk-exa-chat', 'repo': 'claudesdk-exa-chat',
    'name': 'Exa 对话式调研平台', 'category': '深度研究', 'icon': '🔎', 'difficulty': '进阶',
    'badge': 'Claude Agent SDK + Exa · 调研平台', 'title': 'Exa 对话式调研平台',
    'stars': 13,
    'hero': 'Claude Agent SDK + Exa 搜索引擎的 AI 搜索研究平台：企业调研、外贸市场、竞品研究，对话完成多维度深度分析。',
    'desc': 'Claude Agent SDK + Exa 的对话式调研平台：企业/外贸/竞品多维搜索研究。',
    'tags': ['Claude Agent SDK', 'Exa', '企业调研', '外贸分析', '竞品研究'],
    'why': ('搜索谁都会，搜出结构化洞察是另一回事',
            '普通搜索引擎返回的是链接列表，做调研还得自己读、自己筛、自己组织。这套平台把 Exa 的高质量检索能力接进 Claude Agent SDK：企业调研、外贸市场分析、竞品研究都是内置技能，对话即可完成从搜索到结构化报告的全程。'),
    'features': [
        ('🏢', '企业调研', '公司背景、业务、动态一站式调研技能'),
        ('🌏', '外贸市场分析', '目标国市场、行业格局结构化分析'),
        ('⚔️', '竞品研究', '竞品动态与差异化信息收集整理'),
        ('🔍', 'Exa 高质量检索', 'Exa 搜索引擎提供语义级高质量检索能力'),
        ('📑', '结构化报告', '调研结果自动整理为结构化报告'),
        ('💬', '对话式操作', '浏览器对话提问，无需命令行')
    ],
    'images': ['assets/claudesdk-exa-chat/01.png'],
    'workflow': ['启动 Express 服务', '浏览器对话', '多维度搜索', '深度分析', '生成报告'],
    'install': [
        ('1. 克隆项目', 'git clone https://github.com/liangdabiao/claudesdk-exa-chat.git'),
        ('2. 安装依赖', 'npm install'),
        ('3. 配置密钥', '配置 Claude API Key 与 Exa API Key'),
        ('4. 启动服务', 'npm start  # 浏览器打开后对话提问')
    ],
    'tech': ['Claude Agent SDK', 'Exa Search', 'Express', '企业调研', '外贸分析'],
    'faq': [
        ('Q: Exa 需要付费吗？', 'A: Exa 为第三方服务，按其官方额度政策使用，需要相应 API 权限。'),
        ('Q: 适合什么调研？', 'A: 企业调研、外贸市场分析、竞品研究等公开信息类调研场景。'),
        ('Q: 报告是什么格式？', 'A: 输出结构化调研报告，便于直接用于汇报与决策参考。')
    ],
    'c1': '#475569', 'c2': '#334155', 'bg': '#f8fafc'
},
{
    'slug': 'claudesdk-amazon-chat', 'id': 'claudesdk-amazon-chat', 'repo': 'claudesdk-amazon-chat',
    'name': '亚马逊竞品 Listing 穿透分析', 'category': '商业工具', 'icon': '🕵️', 'difficulty': '进阶',
    'badge': 'Claude Agent SDK · 竞品情报', 'title': '亚马逊竞品 Listing 穿透分析',
    'stars': 12,
    'hero': '输入竞品 ASIN，全维度穿透分析：文案逻辑、评论情感、关键词布局、市场动态，自动生成竞品情报报告并存档。',
    'desc': '亚马逊竞品 Listing 穿透分析：文案/评论情感/关键词/市场动态，情报报告自动存档。',
    'tags': ['Claude Agent SDK', '亚马逊', '竞品分析', 'Listing', '情报报告'],
    'why': ('看竞品不能只看排名，要看它为什么卖得好',
            '一条竞品 Listing 里藏着文案逻辑、评论口碑、关键词布局和市场动态。这个工具输入 ASIN 就把这些维度一次穿透，自动生成竞品情报报告并存档，竞品监控变成可持续的情报积累。'),
    'features': [
        ('📝', '文案逻辑分析', '拆解竞品标题、五点、详情文案的写法与说服逻辑'),
        ('💬', '评论情感分析', '评论情感倾向与高频反馈点自动归纳'),
        ('🔑', '关键词布局分析', '竞品关键词覆盖与布局结构解析'),
        ('📈', '市场动态跟踪', '竞品及所在市场的动态变化跟踪'),
        ('🗄️', '报告自动存档', '情报报告自动生成并保存，便于回溯对比'),
        ('🎯', 'ASIN 即输即用', '输入竞品 ASIN 即可启动全维度分析')
    ],
    'images': ['assets/claudesdk-amazon-chat/01.png'],
    'workflow': ['启动服务', '输入竞品 ASIN', 'AI 多维度分析', '生成情报报告', '存档复用'],
    'install': [
        ('1. 克隆项目', 'git clone https://github.com/liangdabiao/claudesdk-amazon-chat.git'),
        ('2. 安装依赖', 'npm install'),
        ('3. 配置密钥与数据源', '配置 Claude API Key 及所需数据源'),
        ('4. 启动分析', 'npm start  # 输入竞品 ASIN 开始穿透分析')
    ],
    'tech': ['Claude Agent SDK', '亚马逊数据', '竞品分析', '情感分析', 'Listing 优化'],
    'faq': [
        ('Q: 数据从哪里来？', 'A: 通过项目配置的数据源获取，需要相应的数据源支持，详见仓库文档。'),
        ('Q: 支持哪些亚马逊站点？', 'A: 视数据源覆盖范围而定，以项目文档说明为准。'),
        ('Q: 报告可以导出吗？', 'A: 情报报告自动存档，可随时查阅回顾。')
    ],
    'c1': '#f43f5e', 'c2': '#e11d48', 'bg': '#fff1f2'
},
{
    'slug': 'ecom-details-image-plugin', 'id': 'ecom-details-image-plugin', 'repo': 'ecom-details-image-plugin',
    'name': 'DeepSeek Harness 电商图插件', 'category': '图像创作', 'icon': '🖼️', 'difficulty': '进阶',
    'badge': 'dsh 插件 · 电商生图', 'title': 'DeepSeek Harness 电商图插件',
    'stars': 12,
    'hero': '把电商图片技能改造成 dsh 插件：在 DeepSeek Harness 里说一句话，就写出合规电商 Prompt 并真实出图，画廊卡片展示结果。',
    'desc': 'ecom-details-image 的 DeepSeek Harness 插件版：对话写合规 Prompt 并真实出图。',
    'tags': ['DeepSeek Harness', 'dsh 插件', '电商图', 'AI 生图', 'Prompt'],
    'why': ('电商图片方法论很成熟，缺的是离生图更近一步的落地形态',
            'ecom-details-image 的技能方法论被打包成 DeepSeek Harness 插件后，模型在对话里就能写出合规的电商 Prompt 并直接调生图接口出图，结果以画廊卡片形式呈现——从提示词到成图，一步到位。'),
    'features': [
        ('🧩', 'dsh 插件形态', '作为 DeepSeek Harness 插件安装使用，与对话流程无缝融合'),
        ('🖼️', '真实出图', '不止写提示词，直接调用生图接口生成真实图片'),
        ('🛍️', '全场景覆盖', '主图、详情页、社媒图、直播、广告素材全覆盖'),
        ('🃏', '画廊卡片展示', '生成结果以画廊卡片形式在网页界面呈现'),
        ('✅', 'Prompt 合规校验', '提示词自带合规校验，降低违规风险'),
        ('💬', '一句话生成', '直接说"生成一张白色马克杯的电商主图"即可')
    ],
    'images': ['assets/ecom-details-image-plugin/01.png'],
    'workflow': ['安装 dsh 插件', '对话描述需求', '生成合规 Prompt', '真实出图', '画廊查看'],
    'install': [
        ('1. 克隆项目', 'git clone https://github.com/liangdabiao/ecom-details-image-plugin.git'),
        ('2. 安装到 dsh', '按项目文档将插件安装到 DeepSeek Harness'),
        ('3. 配置生图接口', '配置所需的生图 API 接口'),
        ('4. 对话生成', '在 dsh 中直接说：生成一张白色马克杯的电商主图')
    ],
    'tech': ['DeepSeek Harness', 'dsh 插件', '电商 Prompt', 'AI 生图', '画廊 UI'],
    'faq': [
        ('Q: 什么是 dsh？', 'A: DeepSeek Harness 的简称，一个可挂载插件的 AI 助手环境。'),
        ('Q: 和站上的电商视觉创作 Skill 什么关系？', 'A: 同源方法论：那个是通用 Skill，这个是 dsh 插件版，能直接出图。'),
        ('Q: 需要什么接口？', 'A: 需要 dsh 环境和可用的生图接口，配置方式见项目文档。')
    ],
    'c1': '#9333ea', 'c2': '#7e22ce', 'bg': '#faf5ff'
},
{
    'slug': 'lego-cinematic-remix', 'id': 'lego-cinematic-remix', 'repo': 'lego-cinematic-remix',
    'name': '乐高积木动画制片 Skill', 'category': '视频生成', 'icon': '🧱', 'difficulty': '入门',
    'badge': '乐高动画 · AI 制片', 'title': '乐高积木动画制片 Skill',
    'stars': 12,
    'hero': '乐高积木搭成小镇、积木小人在里面演戏，再用电影镜头拍下来——一句话生成整套乐高风动画。',
    'desc': '乐高积木小镇动画制片 Skill：一句话让积木小人演戏，电影镜头成片。',
    'tags': ['乐高', '动画制片', 'AI 视频', '亲子内容', '一句话生成'],
    'why': ('"拍一个功夫小子被保镖追着满楼梯跑的故事"',
            '这样一句话，这个 skill 就能自动完成整套动画制片流程：搭积木场景、放积木角色、排电影镜头、生成成片。适合把小说情节、亲子故事变成乐高风动画。'),
    'features': [
        ('🗣️', '一句话生成', '描述故事即可启动整套动画制片流程'),
        ('🏗️', '场景角色全自动', '积木场景、角色、镜头全部自动生成'),
        ('🎥', '电影级镜头', '按电影镜头语言拍摄积木小人的表演'),
        ('📖', '小说改编友好', '适合把小说、故事改编为积木动画'),
        ('🎬', '完整制片流程', '从剧本到成片的完整动画制片管线'),
        ('👨‍👩‍👧', '亲子内容适配', '乐高爱好者与亲子内容创作者的趁手工具')
    ],
    'images': ['assets/lego-cinematic-remix/01.png'],
    'workflow': ['加载技能', '描述故事', '搭建场景角色', '电影镜头拍摄', '成片输出'],
    'install': [
        ('1. 安装技能到 AI 助手', 'git clone https://github.com/liangdabiao/lego-cinematic-remix.git\n# 放入 ~/.workbuddy/skills/ 或 ~/.claude/skills/'),
        ('2. ' '描述故事', '对 AI 描述你想拍的故事，例如：拍一个功夫小子被追着满楼梯跑的故事'),
        ('3. ' '等待制片', 'AI 自动完成场景搭建、角色表演与镜头拍摄'),
        ('4. ' '获取成片', '获得乐高风动画成片')
    ],
    'tech': ['AI Agent Skill', '乐高风格', '动画制片', '视频生成', '亲子内容'],
    'faq': [
        ('Q: 适合做什么内容？', 'A: 适合乐高爱好者、亲子内容创作者，以及想把小说情节视觉化的用户。'),
        ('Q: 生成需要多久？', 'A: 视故事长度与排队情况而定，以实际生成时长为准。'),
        ('Q: 剧本可以自己定吗？', 'A: 可以，直接描述你想要的故事内容和节奏即可。')
    ],
    'c1': '#e11d48', 'c2': '#be123c', 'bg': '#fff1f2'
},
{
    'slug': 'simple-ai-toolset', 'id': 'simple-ai-toolset', 'repo': 'simple_ai_toolset',
    'name': '后端程序员轻量 Coze 框架', 'category': '基础设施', 'icon': '🧰', 'difficulty': '进阶',
    'badge': 'AI 开发框架 · FastAPI', 'title': '后端程序员轻量 Coze 框架',
    'stars': 12,
    'hero': '给普通后端程序员的 AI 开发基础框架，功能类似 Coze：FastAPI、搜索、RPA、Agent、Mongo、多模态，按需启用。',
    'desc': '面向后端程序员的类 Coze 框架：FastAPI/搜索/RPA/Agent/Mongo/多模态按需启用。',
    'tags': ['FastAPI', 'AI 框架', 'RPA', 'Agent', 'MongoDB'],
    'why': ('想转 AI 开发的后端程序员，缺一个熟悉的地基',
            'Coze 式平台对非程序员友好，但程序员想要的是能改、能扩、能部署在自己服务器上的代码。simple-ai-toolset 用后端熟悉的 FastAPI + MongoDB 栈，把搜索、文档解析向量化、RPA、Agent、多模态这些常用能力做成可按需启用的模块。'),
    'features': [
        ('🔌', 'FastAPI 后端', '以后端程序员最熟悉的方式组织 AI 服务接口'),
        ('🔍', '搜索与向量化', '文档解析与向量化能力开箱即用'),
        ('🤖', 'RPA 与爬虫', 'RPA、爬虫模块助力数据获取自动化'),
        ('🧠', '自定义 Agent', 'Agent 框架按需组合，构建业务智能体'),
        ('🗄️', 'MongoDB 对接', '主流数据库与第三方接口对接支持'),
        ('🎨', '多模态理解生成', '多模态能力 + 可控 JSON 结构返回')
    ],
    'images': ['assets/simple-ai-toolset/01.png'],
    'workflow': ['克隆框架', '按需启用模块', '开发业务逻辑', '对接第三方', '上线服务'],
    'install': [
        ('1. 克隆项目', 'git clone https://github.com/liangdabiao/simple_ai_toolset.git'),
        ('2. 安装依赖', 'pip install -r requirements.txt'),
        ('3. 配置服务', '配置 MongoDB 与大模型服务'),
        ('4. ' '按需开发', '启用所需模块，在其基础上开发业务')
    ],
    'tech': ['FastAPI', 'Python', 'MongoDB', 'RAG 向量化', 'RPA', '多模态'],
    'faq': [
        ('Q: 和 Coze 比有什么区别？', 'A: Coze 是平台，这是代码框架：可自部署、可深度改造，适合有编程能力的人。'),
        ('Q: 需要什么基础？', 'A: 熟悉传统后端开发即可，AI 部分按模块逐步上手。'),
        ('Q: 模块可以裁剪吗？', 'A: 可以，各模块设计为按需启用，不必全量引入。')
    ],
    'c1': '#0d9488', 'c2': '#0f766e', 'bg': '#f0fdfa'
},
{
    'slug': 'langgraph-runtime-skill-agent', 'id': 'langgraph-runtime-skill-agent', 'repo': 'langgraph-runtime-skill-agent',
    'name': 'Skill 转 HTTP API 运行时', 'category': '基础设施', 'icon': '🔌', 'difficulty': '进阶',
    'badge': 'langgraph-runtime · 技能服务化', 'title': 'Skill 转 HTTP API 运行时',
    'stars': 12,
    'hero': '基于 langgraph-runtime 的 agent：把本地 Agent Skill 包装成 HTTP/SSE API，模型负责编排、脚本负责执行、流式返回。',
    'desc': '把本地 Agent Skill 包装成 HTTP/SSE API 服务：模型编排 + 脚本确定性执行。',
    'tags': ['langgraph-runtime', 'Agent Skill', 'HTTP API', 'SSE', '技能服务化'],
    'why': ('本地 Skill 很好用，但产品化还差一个 API 的距离',
            '这套基于 langgraph-runtime 的 agent 把本地 Skill 包装成 HTTP 服务：用户发 SSE 请求，模型自动选择技能、读取 SKILL.md、调用脚本或搜索网页，再流式返回结果——模型管判断编排，脚本管确定性执行，技能产品化的最短路径。'),
    'features': [
        ('📦', 'Skill 自动包装', '本地 Agent Skill 自动包装为 HTTP/SSE API'),
        ('🧠', '模型判断编排', '模型负责选择技能、规划执行路径'),
        ('📜', '脚本确定执行', '脚本负责确定性执行，结果稳定可复现'),
        ('🌊', 'SSE 流式返回', '流式输出，前端接入体验流畅'),
        ('🔗', '前端易接入', '标准 HTTP 接口，任意前端都能接'),
        ('🚀', '技能产品化', '把个人技能快速变成可对外服务的能力')
    ],
    'images': ['assets/langgraph-runtime-skill-agent/01.png'],
    'workflow': ['放入 Skill 目录', '启动 runtime', '发送 SSE 请求', '自动选择技能', '流式返回结果'],
    'install': [
        ('1. 克隆项目', 'git clone https://github.com/liangdabiao/langgraph-runtime-skill-agent.git'),
        ('2. 安装依赖', 'pip install -r requirements.txt'),
        ('3. 放入 Skill', '将 Agent Skill 目录放入指定 skills 目录'),
        ('4. 启动调用', '启动 runtime，按接口文档发送 SSE 请求')
    ],
    'tech': ['langgraph-runtime', 'Agent Skill', 'HTTP / SSE API', 'Python', '流式响应'],
    'faq': [
        ('Q: 什么是 Skill 服务化？', 'A: 把原本装在本地 agent 里的技能，包装成可被任意客户端调用的 HTTP API。'),
        ('Q: 适合什么任务？', 'A: 适合流程清晰、可被技能描述覆盖的任务，例如文档处理、数据查询等。'),
        ('Q: 前端怎么接入？', 'A: 通过标准 SSE 接口接收流式结果，浏览器和客户端均可直接对接。')
    ],
    'c1': '#7c3aed', 'c2': '#6d28d9', 'bg': '#f5f3ff'
},
{
    'slug': 'lark-crm-feishu-cli', 'id': 'lark-crm-feishu-cli', 'repo': 'lark-crm-feishu-cli',
    'name': '飞书多维表格 CRM', 'category': '企业AI', 'icon': '📋', 'difficulty': '进阶',
    'badge': '飞书 CLI · 对话式 CRM', 'title': '飞书多维表格 CRM',
    'stars': 11,
    'hero': '基于飞书 CLI 的 Agent Skill：把多维表格封装成会聊天的 CRM，不用记表名字段，自然语言增删改查客户信息。',
    'desc': '飞书多维表格变身会聊天的 CRM：自然语言增删改查客户信息。',
    'tags': ['飞书', '多维表格', 'CRM', 'lark-cli', '自然语言'],
    'why': ('用飞书表格管客户的小团队，被表名字段名劝退',
            '多维表格本身就是轻量 CRM，但每次增删改查都要记表名、字段和命令。这个 skill 基于 lark-cli 把表格封装成对话式管理：用自然语言说意图就行，"把张三的意向等级改成高"直接生效。'),
    'features': [
        ('🃏', '表格封装 CRM', '多维表格自动封装为对话式 CRM 系统'),
        ('💬', '自然语言增删改查', '说人话即可完成客户信息管理操作'),
        ('🧠', '零命令记忆', '不用记表名、字段名和命令参数'),
        ('⚙️', 'lark-cli 驱动', '基于 lark-cli 运行，与飞书生态无缝衔接'),
        ('👥', '小团队适配', '适合用飞书表格管客户的小团队'),
        ('🪶', '轻量 CRM', '不上一套重系统，表格即 CRM')
    ],
    'images': ['assets/lark-crm-feishu-cli/01.png'],
    'workflow': ['配置飞书 CLI', '连接多维表格', '对话表达意图', '自动执行操作', '管理客户信息'],
    'install': [
        ('1. 安装 lark-cli', '按飞书 CLI 文档完成安装与授权'),
        ('2. 安装技能', 'git clone https://github.com/liangdabiao/lark-crm-feishu-cli.git\n# 放入 ~/.workbuddy/skills/ 或 ~/.claude/skills/'),
        ('3. 配置表格', '配置好多维表格与字段映射'),
        ('4. 对话操作', '直接用自然语言管理客户信息')
    ],
    'tech': ['飞书 CLI', '多维表格', 'Agent Skill', 'CRM', '自然语言交互'],
    'faq': [
        ('Q: 需要飞书开发者权限吗？', 'A: 需要配置飞书 CLI 与相应表格权限，按项目文档操作即可。'),
        ('Q: 复杂权限和流程支持吗？', 'A: 复杂权限和审批流程仍需在飞书侧手动配置，技能负责日常对话操作。'),
        ('Q: 和站上的飞书 AI 效率系统什么关系？', 'A: 那个是 20 大工作流的完整效率系统；这个是专注 CRM 场景的轻量技能。')
    ],
    'c1': '#0284c7', 'c2': '#0369a1', 'bg': '#f0f9ff'
},
{
    'slug': 'directing-xiaohei-videos', 'id': 'directing-xiaohei-videos', 'repo': 'directing-xiaohei-videos',
    'name': '小黑动画视频导演', 'category': '视频生成', 'icon': '✏️', 'difficulty': '入门',
    'badge': '手绘动画 · 一句话出片', 'title': '小黑动画视频导演',
    'stars': 11,
    'hero': '白底手绘小黑动画导演：给个主题或一篇文章，它发明隐喻、拆分镜、生成动画、配旁白，交一条约 1 分钟竖屏成片。',
    'desc': '小黑手绘动画导演：给主题或文章，全流程产出约 1 分钟竖屏成片，默认免费管线。',
    'tags': ['小黑动画', '手绘视频', '短视频', '零成本', '分镜导演'],
    'why': ('白底上手绘的小黑，一秒"有点怪"，下一秒突然看懂',
            '一个实心黑色小家伙在白画布上认真做件有点傻的事——这就是小黑动画的杀伤力。这个技能让 AI 当导演：你给主题或文章，它发明隐喻构图、拆六场分镜、写解说词、生成动画、免费配音、叠手写批注，一条约 1 分钟的竖屏成片就此诞生。'),
    'features': [
        ('🗣️', '一句话出片', '「用小黑视频讲讲注意力是怎么被切碎的」，等一会儿拿到成片'),
        ('🎬', '全流程导演', '隐喻构图 → 六场分镜 → 解说词 → 动画 → 配音 → 叠字 → 质检'),
        ('✅', '两阶段确认', '先出导演方案（分镜+解说词+批注规划），你点头才开做'),
        ('🆓', '默认免费管线', 'Agnes 免费首帧图 + 免费关键帧动画 + edge-tts 配音，一条 0 元'),
        ('🎨', '隐喻构图发明', '低科技怪机器 + 小黑动作主体，把抽象道理变成可视动作'),
        ('📝', '旁白字幕批注', '旁白 240-270 字配手写批注，知识区观点类视频利器')
    ],
    'images': ['assets/directing-xiaohei-videos/01.png', 'assets/directing-xiaohei-videos/02.png'],
    'workflow': ['给主题/文章', 'AI 出导演方案', '确认方案', '生成动画配音叠字', '质检成片'],
    'install': [
        ('1. 安装技能到 AI 助手', 'git clone https://github.com/liangdabiao/directing-xiaohei-videos.git\n# 放入 ~/.workbuddy/skills/ 或 ~/.claude/skills/'),
        ('2. ' '准备免费 Key', '自备免费 Agnes API key（官网免费领取）'),
        ('3. ' '描述主题', '对 AI 说：用小黑视频讲讲《穷爸爸富爸爸》的核心原理'),
        ('4. ' '确认等片', '批准导演方案后等待成片（免费管线约 30-45 分钟）')
    ],
    'tech': ['AI Agent Skill', '手绘动画', 'Agnes 生图', 'edge-tts 配音', '分镜导演', '短视频'],
    'faq': [
        ('Q: 真的零成本吗？', 'A: 默认全免费管线（Agnes 免费图 + 免费动画 + edge-tts），一条视频 0 元；赶时间可切付费快速通道。'),
        ('Q: 支持横屏吗？', 'A: 竖屏 9:16 为默认，16:9 横屏也可，改比例会自动重出方案。'),
        ('Q: 和站上的小黑插图技能什么关系？', 'A: 那是静态配图版（ian-xiaohei-illustrations），这个是视频导演版，姊妹技能。')
    ],
    'c1': '#d97706', 'c2': '#b45309', 'bg': '#fffbeb'
},
{
    'slug': 'stock-deep-research', 'id': 'stock-deep-research', 'repo': 'stock-deep-research-skill',
    'name': '股票尽调一体化引擎', 'category': '深度研究', 'icon': '🔬', 'difficulty': '进阶',
    'badge': '投研尽调 · 多研究员并行', 'title': '股票尽调一体化引擎',
    'stars': 5,
    'hero': '说一句"帮我研究下茅台"，它像投研团队一样问清需求、派多个研究员并行尽调，交出带完整引用的报告。',
    'desc': '股票尽调一体化引擎：问清需求→8 阶段并行尽调→交叉验证→带引用报告（只研究不荐股）。',
    'tags': ['股票尽调', '投研', '多智能体', '交叉验证', '引用评级'],
    'why': ('翻财报、搜公告、看研报，半天下来还是分不清干货和话术',
            '想搞明白"这家公司生意好不好、财务实不实、价格贵不贵"，门槛不低。这套技能把研究拆成完整流水线：先问清你的投资风格和关注点，再派多个 AI 研究员并行跑 8 阶段尽调，强制交叉验证，每个事实都标来源和权威度评级。'),
    'features': [
        ('🎯', '需求澄清先行', '先问清投资风格、持有周期、关注点和风险偏好，再生成研究计划'),
        ('🔬', '8 阶段尽调', '公司事实、行业周期、业务拆解、财务质量、股权治理、市场分歧、估值护城河 + 综合报告'),
        ('👥', '多研究员并行', '多个 AI 研究员分头干活，比串行快得多'),
        ('⚖️', '强制交叉验证', '经营现金流对账净利润、同行全面对标，必列 3-5 个看空风险'),
        ('📚', 'A-E 来源评级', '每个声明标来源并评级（A 年报/E 论坛），附幻觉检测'),
        ('🚦', '信号灯评级', '报告末尾给三绿/三黄/两红信号灯，但明确不预测股价、不荐股')
    ],
    'images': ['assets/stock-deep-research/01.png', 'assets/stock-deep-research/02.png'],
    'workflow': ['说出研究标的', '澄清需求生成计划', '8 阶段并行尽调', '交叉验证', '产出尽调报告'],
    'install': [
        ('1. 安装技能到 AI 助手', 'git clone https://github.com/liangdabiao/stock-deep-research-skill.git\n# 放入 ~/.workbuddy/skills/ 或 ~/.claude/skills/'),
        ('2. ' '说出标的', '对 AI 说：帮我研究一下贵州茅台 600519 值不值得投资'),
        ('3. ' '确认研究计划', '回答风格、周期、关注点等问题，确认计划'),
        ('4. ' '获取报告', '获得带完整引用的尽调报告与信号灯评级')
    ],
    'tech': ['AI Agent Skill', '8 阶段尽调', 'GoT 图控制', '引用评级', '幻觉检测', '投研框架'],
    'faq': [
        ('Q: 和站上的股票深度研究代理什么关系？', 'A: 同源方法论：那个是 Claude Code 版项目，这个是技能版，装在 agent 里随取随用。'),
        ('Q: 能研究非股票主题吗？', 'A: 可以，走通用研究流程产出带引用的行业报告，也能检查已有报告的引用质量。'),
        ('Q: 会给出买卖建议吗？', 'A: 不会。只做研究不做建议：不预测股价、不给买卖点，决定要你自己下。')
    ],
    'c1': '#dc2626', 'c2': '#b91c1c', 'bg': '#fef2f2'
},
{
    'slug': 'deep-research-agent', 'id': 'deep-research-agent', 'repo': 'deep-research-agent-skill',
    'name': '深度研究报告生成器', 'category': '深度研究', 'icon': '📑', 'difficulty': '进阶',
    'badge': '多研究员 · 深度研究', 'title': '深度研究报告生成器',
    'stars': 4,
    'hero': '丢个主题进去，多个 AI 研究员并行搜索、交叉比对，吐出一份带完整引用的结构化研究报告文件夹。',
    'desc': '多研究员并行深度研究：丢个主题进去，吐出带完整引用和权威评级的报告文件夹。',
    'tags': ['深度研究', '多研究员', '引用验证', '调研报告', 'AI Agent Skill'],
    'why': ('搜三小时，收藏夹塞满，拼出来的东西自己都没底',
            '老板甩来一句"研究一下 AI 在医疗行业的现状"，普通做法是开浏览器搜到天黑。deep-research-agent 真去网上搜、多方比对、再整理成可交差的文档：多个研究员并行，图式思考规划路径，矛盾来源分析可信度，每个数据标来源和 A-E 评级。'),
    'features': [
        ('🎯', '需求主动确认', '先确认研究范围、格式、时间段和来源要求，不一上来瞎搜'),
        ('👥', '多研究员并行', '同时派出多个 AI 研究员分头查资料，效率倍增'),
        ('🧠', '图式思考规划', '像下棋一样规划研究路径、给每条线索打分'),
        ('⚖️', '矛盾来源分析', '不同来源说法矛盾时，分析谁更可信，共识与分歧都摆出'),
        ('📚', 'A-E 权威评级', '每个数据标来源并按权威度评级，附编造数据检测'),
        ('📁', '完整报告文件夹', '执行摘要、全文、关键数据、参考文献、来源质量表、引用验证报告')
    ],
    'images': ['assets/deep-research-agent/01.png', 'assets/deep-research-agent/02.png'],
    'workflow': ['给出研究主题', '确认范围格式', '并行搜索', '整合比对', '输出报告文件夹'],
    'install': [
        ('1. 安装技能到 AI 助手', 'git clone https://github.com/liangdabiao/deep-research-agent-skill.git\n# 放入 ~/.workbuddy/skills/ 或 ~/.claude/skills/'),
        ('2. ' '给出主题', '对 AI 说：帮我深度研究一下 2025 年 AI Agent 的产业趋势'),
        ('3. ' '确认要求', '确认范围、格式、时间范围与来源要求'),
        ('4. ' '获取报告', '获得包含摘要、全文、文献与验证报告的完整文件夹')
    ],
    'tech': ['AI Agent Skill', '多研究员并行', 'GoT 图思考', '引用验证', '报告生成'],
    'faq': [
        ('Q: 复杂主题要跑多久？', 'A: 一般 5 到 20 分钟，视主题复杂度而定，中途可打断调整方向。'),
        ('Q: 主题多具体合适？', 'A: 越具体越好："研究 2025 年 AI 在医疗影像诊断的应用现状"优于"研究 AI"。'),
        ('Q: 引用怎么评级？', 'A: 按 A 到 E 评级：A 是年报、政府文件等一手资料，E 是论坛传闻等不可靠内容。')
    ],
    'c1': '#4f46e5', 'c2': '#4338ca', 'bg': '#eef2ff'
},
{
    'slug': 'datalogic', 'id': 'datalogic', 'repo': 'datalogic',
    'name': '咖哥数据分析实战教程', 'category': '数据分析', 'icon': '📊', 'difficulty': '进阶',
    'badge': '数据分析 · 案例教程', 'title': '咖哥数据分析实战教程',
    'stars': 40,
    'hero': '继承佳哥开源项目、注入大量 AI 分析的数据分析案例教程：从裂变策略效果评估到 XGBoost Uplift 建模，完整走一遍数据驱动增长。',
    'desc': 'AI 加强版数据分析案例教程：裂变策略评估到 XGBoost Uplift 建模完整实战。',
    'tags': ['数据分析', '案例教程', 'XGBoost', 'Uplift 建模', '增长模型'],
    'why': ('数据分析不能只停在"哪个策略转化率高"',
            '这个项目以《数据分析咖哥十话》第 10 话"裂变驱动增长循环"为蓝本，用一个模拟电商裂变数据集，从宏观策略评估一路做到 Uplift 因果建模，完整演示"从相关到因果"的分析思维。每个步骤都有可运行代码、分析报告和可视化图表。'),
    'features': [
        ('🧪', '五步分析流程', '效果评估 → 用户细分 → 深度剖析 → 成本效益 → 增长建模，由浅入深'),
        ('📈', '裂变策略效果评估', '对比助力砍价、拼团狂买、无裂变三种策略的整体转化率'),
        ('👥', '用户细分策略', '设备、城市、RFM、历史行为多维交叉，找个性化策略依据'),
        ('🤝', '策略协同洞察', '挖掘"助力+拼团"协同效应与策略匹配度影响'),
        ('🧠', 'XGBoost Uplift 建模', '识别对策略响应差异最大的用户，实现精准营销'),
        ('📉', 'Qini 曲线分析', '用 Qini 曲线评估增量模型区分度，区分相关与因果')
    ],
    'images': [],
    'workflow': ['克隆项目', '按目录顺序', '运行分析脚本', '阅读分析报告', '二次开发'],
    'install': [
        ('1. 克隆项目', 'git clone https://github.com/liangdabiao/datalogic.git'),
        ('2. 安装依赖', 'pip install pandas numpy matplotlib seaborn scipy scikit-learn xgboost'),
        ('3. 按序运行', 'cd "10 增长模型"\npython "01_裂变策略效果评估\\conversion_analysis.py"'),
        ('4. 核心建模', 'python "05_增长建模_xgboost_qini\\xgboost_uplift_modeling.py"\npython "05_增长建模_xgboost_qini\\qini_curve_analysis.py"')
    ],
    'tech': ['Python', 'pandas', 'XGBoost', 'scikit-learn', 'RFM 模型', 'Qini 曲线'],
    'faq': [
        ('Q: 适合什么水平的人？', 'A: 适合有 Python 基础、想系统学习增长分析的同学，每个步骤都有详细报告可对照。'),
        ('Q: 数据集是什么？', 'A: 一个模拟的电商用户裂变行为数据集（裂变.csv），随项目提供。'),
        ('Q: 能复现结果吗？', 'A: 可以。按目录顺序运行脚本即可复现全部分析与图表。')
    ],
    'c1': '#b45309', 'c2': '#92400e', 'bg': '#fffbeb'
},
{
    'slug': 'ai-engineering-from-scratch', 'id': 'ai-engineering-from-scratch', 'repo': 'ai-engineering-from-scratch',
    'name': 'AI 工程从零学教程', 'category': '教育工具', 'icon': '🎓', 'difficulty': '高级',
    'badge': 'AI Agent · 系统教程', 'title': 'AI 工程从零学教程',
    'stars': 37,
    'hero': '503 节课、20 个阶段、约 320 小时：从线性代数到自主智能体集群，每个算法都从原始数学手推，每课都产出可复用工件。',
    'desc': '503 节课 20 阶段约 320 小时的 AI 工程系统教程，每个算法从数学手推，MIT 开源。',
    'tags': ['AI 教程', 'Agent', '系统课程', 'MIT', '从零手推'],
    'why': ('论文一篇、微调博客一篇、agent demo 一个——碎片永远拼不起来',
            '这套课程是一根完整的脊柱：20 个阶段从线性代数堆到自主智能体集群，每个算法都先从原始数学推导再写代码——反向传播、分词器、注意力、agent 循环，全部手工实现。503 节课，每节都产出一个可复用工件：一个提示词、一个技能、一个 agent 或一个 MCP server。免费、开源、MIT。'),
    'features': [
        ('📚', '503 节系统课', '20 个阶段线性进阶，数学是地板、agent 与生产是屋顶'),
        ('🧮', '从数学到手推', '每个算法先从原始数学推导，再写代码，不吃夹生饭'),
        ('🌐', '四语言实现', 'Python、TypeScript、Rust、Julia 四种语言对照实现'),
        ('🧰', '每课产出工件', '提示词、技能、agent、MCP server，学完即有沉淀'),
        ('🆓', 'MIT 免费开源', '完全免费开放，可在自己笔记本上跑通'),
        ('🔥', '持续更新', '2026 持续更新中，已有 15 万+ 读者')
    ],
    'images': [],
    'workflow': ['访问教学站', '选择阶段课程', '读课推导数学', '写代码跑测试', '保留复用工件'],
    'install': [
        ('1. 在线学习', '浏览器访问 aiengineeringfromscratch.com 阅读全部课程'),
        ('2. ' '本地克隆（可选）', 'git clone https://github.com/liangdabiao/ai-engineering-from-scratch.git'),
        ('3. ' '按阶段学习', '建议从第一阶段开始按顺序推进，跳过下层直接看上层的课容易翻车')
    ],
    'tech': ['Python', 'TypeScript', 'Rust', 'Julia', '线性代数', 'Agent / MCP'],
    'faq': [
        ('Q: 完全零基础能学吗？', 'A: 课程从线性代数等基础开始设计，但具备基础编程知识会顺利很多。'),
        ('Q: 全部学完要多久？', 'A: 约 320 小时，可按自己的基础跳过已掌握的阶段。'),
        ('Q: 和其他 AI 教程比有什么不同？', 'A: 强调"build it by hand"：每个算法从数学推到代码实现，不追 Demo 热度。')
    ],
    'c1': '#1d4ed8', 'c2': '#1e40af', 'bg': '#eff6ff'
},
{
    'slug': 'reddit-research', 'id': 'reddit-research', 'repo': 'reddit-research',
    'name': 'Reddit 免认证调研方法论', 'category': '深度研究', 'icon': '🔍', 'difficulty': '进阶',
    'badge': 'Reddit 调研 · 免认证方法论', 'title': 'Reddit 免认证调研方法论',
    'stars': 36,
    'hero': '不用 Reddit API、不用登录态的 Reddit 深度调研方法论：走 Arctic Shift 社区档案，给 AI agent 直接读，可挂服务器自动化。',
    'desc': '免认证 Reddit 调研方法论：Arctic Shift 档案 API + 五坑规避 + 10 模块深度调研框架。',
    'tags': ['Reddit', '调研方法论', 'Arctic Shift', '痛点挖掘', 'AI Agent Skill'],
    'why': ('Reddit 是痛点金矿，但官方 API 申请难、登录态易失效',
            '这套方法论走 Arctic Shift 社区档案 API：免 key、免认证、免代理直连，实测可挂服务器自动化跑。更值钱的是它把踩过的坑写成文档——五个必知坑每一个都能让调研结论翻车，配套脚本开箱即用。'),
    'features': [
        ('🔓', '免认证采集', '不用申请 Reddit API、不用登录态、不用代理，走 Arctic Shift 档案'),
        ('⚠️', '五个必知坑', 'URL 加 .json 已封、关键词过滤失效、样本量先算、展示帖剔除、软文剔除'),
        ('📋', '深度调研 10 模块', '讨论总结/痛点/现有方案/看重特性/竞品提及/场景/客户语言/搜索意图/PAA/图片创意'),
        ('🧹', '软文剔除机制', '电商类 sub 的 KOC 软文自动剔除，避免结论反向'),
        ('📜', '标题级痛点分析', '自动规避作品展示帖霸榜，标题级判据收敛样本'),
        ('🤖', 'AI agent 直接读', 'SKILL.md 自带 frontmatter，装进 agent 命中场景自动加载')
    ],
    'images': [],
    'workflow': ['安装 skill', 'AI 读取 SKILL.md', '探测样本量', '分页全量采集', '标题级分析出报告'],
    'install': [
        ('1. 安装技能', 'git clone https://github.com/liangdabiao/reddit-research.git\n# 放入 ~/.workbuddy/skills/reddit-research/ 或 ~/.claude/skills/reddit-research/'),
        ('2. ' 'AI 读取方法论', '对 AI 说：帮我调研 Reddit 上「Oura Ring 用户都在抱怨什么」'),
        ('3. ' '深度调研（可选）', '品类/品牌调研追加读取 deep_research_10_modules.md 按 10 模块执行')
    ],
    'tech': ['Arctic Shift API', 'Python 脚本', 'AI Agent Skill', '分页重试', '痛点 SOP'],
    'faq': [
        ('Q: 数据合规吗？', 'A: Arctic Shift 是社区档案项目，请遵守 Reddit ToS：勿做成产品功能、勿用于 AI 训练、勿转售。'),
        ('Q: ' '数据延迟多少？', 'A: 约 36 小时，适合调研分析，不适合实时监控。'),
        ('Q: 适合什么场景？', 'A: 市场调研、竞品分析、用户痛点挖掘、SEO 内容生产。')
    ],
    'c1': '#be185d', 'c2': '#9d174d', 'bg': '#fdf2f8'
},
{
    'slug': 'nce-flow', 'id': 'nce-flow', 'repo': 'NCE-Flow',
    'name': '新概念英语在线点读', 'category': '教育工具', 'icon': '🎧', 'difficulty': '入门',
    'badge': '英语学习 · 点读站', 'title': '新概念英语在线点读',
    'stars': 32,
    'hero': '新概念英语 1-4 册在线点读：点任意一句从该句连读，自动高亮居中，中英三态切换，纯静态零依赖。',
    'desc': '新概念英语在线点读站：点句连读、中英三态、纯静态零依赖，可直接 Pages 部署。',
    'tags': ['新概念英语', '点读', '英语学习', '零依赖', 'GitHub Pages'],
    'why': ('练听力最顺手的姿势：点一句、从这句连读下去',
            'NCE Flow 把新概念英语 1-4 册做成极简点读站：点任意一句，从该句开始连续播放，当前句自动高亮居中；EN / EN+CN / CN 三态语言视图随时切换。纯静态 HTML/CSS/JS，零依赖，可直接部署到任意静态平台。'),
    'features': [
        ('👆', '句子级点读', '点击任意一句从该句连读，自动高亮并居中'),
        ('🌐', '三态语言视图', 'EN / EN+CN / CN 一键切换，偏好持久化保存'),
        ('🎨', '现代 UI', 'Apple 风格、浅深色自适应、顺滑过渡动画'),
        ('🪶', '零依赖部署', '纯静态站点，GitHub Pages / EdgeOne 等任意平台可跑'),
        ('📄', 'LRC 双语兼容', '支持同行双语与同时间戳上下两行两种 LRC 格式'),
        ('🔄', '批量翻译脚本', '内置 translate_lrc.py，纯英文 LRC 一键转双语')
    ],
    'images': [],
    'workflow': ['打开站点', '选择课程', '点句子连读', '切换语言视图', '跟读学习'],
    'install': [
        ('1. 获取完整代码', 'git clone https://github.com/liangdabiao/NCE-Flow.git\n# 或从 Releases 下载含完整音频的压缩包'),
        ('2. ' '本地运行', 'python3 -m http.server 8080\n# 访问 http://localhost:8080'),
        ('3. ' '部署上线', '直接部署到 GitHub Pages / EdgeOne 等静态平台即可')
    ],
    'tech': ['纯静态 HTML/CSS/JS', 'LRC 歌词', 'GitHub Pages', 'EdgeOne', '零依赖'],
    'faq': [
        ('Q: 音频完整吗？', 'A: 请用 git clone 或 Releases 压缩包获取，页面右上角的 Download ZIP 可能不含完整 mp3。'),
        ('Q: 支持几册？', 'A: 覆盖新概念英语 NCE1 到 NCE4 全四册。'),
        ('Q: 能自己部署吗？', 'A: 可以，纯静态站点，理论上支持任意静态托管平台。')
    ],
    'c1': '#047857', 'c2': '#065f46', 'bg': '#ecfdf5'
},
{
    'slug': 'stemviz', 'id': 'stemviz', 'repo': 'STEMViz',
    'name': 'STEM 概念动画生成器', 'category': '教育工具', 'icon': '🔬', 'difficulty': '进阶',
    'badge': '豆包大模型 · 教学动画', 'title': 'STEM 概念动画生成器',
    'stars': 18,
    'hero': '基于豆包大模型的 STEM 教学动画生成器：输入一个概念，多智能体自动拆解、生成 Manim 动画、配旁白字幕，出完整教学视频。',
    'desc': '豆包大模型 STEM 教学动画生成器：概念进、带旁白字幕的动画视频出。',
    'tags': ['STEM', '教学动画', 'Manim', '豆包大模型', '多智能体'],
    'why': ('"讲解勾股定理"——这句话进去，一条带旁白字幕的教学视频出来',
            'STEMViz 串起豆包大模型的全套能力：LLM 推理拆解概念、生成 Manim 动画代码，多模态模型"观看"无声动画后写出时间轴旁白，TTS 合成语音，FFmpeg 合成烧录字幕。概念解析、动画生成、脚本、配音、合成，五个 Agent 一条流水线。'),
    'features': [
        ('🎬', '全自动动画生成', '输入概念 → 输出带旁白的完整教学视频，无需手动剪辑'),
        ('🧠', '多智能体架构', '概念解析 + Manim 代码生成 + 视频理解多 Agent 协作'),
        ('🎙️', 'AI 旁白生成', '多模态大模型观看动画后生成情境化旁白（SRT）'),
        ('🔊', '豆包 TTS 语音', '高质量中文语音合成，支持多音色与语速调整'),
        ('⚡', '并行处理', '多场景代码并发生成，渲染失败自动修复重试'),
        ('🖥️', 'Gradio Web 界面', '简洁易用的浏览器界面，也支持命令行调用')
    ],
    'images': [],
    'workflow': ['输入 STEM 概念', '概念解析拆子概念', 'Manim 生成动画', '视频理解写旁白', 'TTS 配音合成'],
    'install': [
        ('1. 克隆项目', 'git clone https://github.com/liangdabiao/STEMViz.git'),
        ('2. 安装依赖', 'pip install -r requirements.txt\n# 另需安装 FFmpeg 与 LaTeX（MiKTeX）'),
        ('3. 配置密钥', 'cp .env.example .env\n# 填入豆包火山方舟 API Key 与 TTS API Key'),
        ('4. 启动使用', 'python app.py  # 浏览器打开 http://127.0.0.1:7860')
    ],
    'tech': ['豆包大模型', 'Manim', '火山方舟', 'FFmpeg', 'Gradio', 'TTS'],
    'faq': [
        ('Q: 生成一条视频要多久？', 'A: 约 10-30 分钟，取决于概念复杂度与场景数量。'),
        ('Q: 需要哪些 API？', 'A: 豆包火山方舟 API Key（LLM + 多模态理解）和豆包 TTS API Key（语音合成）。'),
        ('Q: 数学公式渲染异常怎么办？', 'A: 确保 MiKTeX 已安装并加入 PATH；不装 LaTeX 会降级为纯文本渲染，效果较差。')
    ],
    'c1': '#6d28d9', 'c2': '#5b21b6', 'bg': '#f5f3ff'
},
]
