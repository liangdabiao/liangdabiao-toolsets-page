# -*- coding: utf-8 -*-
# 新增 30 个项目的数据（第 1 部分：1-15）
# 字段说明：
#   slug: 页面文件名与配图目录名 | id: 产品ID | repo: GitHub 仓库名
#   name: 卡片名 | category: 分类 | icon: 图标 | difficulty: 难度
#   badge/title/hero: 详情页头部 | stars: star 数 | tags/desc: 卡片数据
#   features: [(emoji, 标题, 描述)x6] | why: (h3, p) 高亮框
#   images: 配图列表 | workflow: 流程步骤 | install: [(标题, 代码/说明)]
#   tech: 技术栈 | faq: [(问题, 回答)x3] | c1/c2/bg: 主题色

PROJECTS_1 = [
{
    'slug': 'make-prompt-seedance2', 'id': 'make-prompt-seedance2', 'repo': 'make-prompt-seedance2',
    'name': 'Seedance 2.0 分镜提示词助手', 'category': '视频生成', 'icon': '🎬', 'difficulty': '入门',
    'badge': 'AI 视频提示词 · 即梦 Seedance 2.0', 'title': 'Seedance 2.0 分镜提示词助手',
    'stars': 701,
    'hero': '用即梦、豆包生成视频总翻车？问题往往不在模型，而在提示词太笼统。告诉它你想做什么，它还你一份可直接粘贴使用的完整分镜提示词。',
    'desc': '即梦 Seedance 2.0 提示词专家：看懂参考图、自动判断创作路线，产出可直接使用的结构化分镜提示词。',
    'tags': ['Seedance 2.0', '提示词工程', '分镜', 'AI 视频', '即梦'],
    'why': ('人物脸崩、产品变形、镜头乱跳，往往是那句笼统的提示词惹的祸',
            'AI 视频生成的质量上限，很大程度上由提示词决定。make-prompt-seedance2 把提示词按结构写细——基础参数、镜头语言、核心主体、商业场景、强制约束五大模块，并支持 @图片1 这类素材引用语法锁住主体，让生成结果更贴近你要的样子。'),
    'features': [
        ('🖼️', '参考图理解', '先看懂你上传的产品图：颜色、材质、形态直接写进提示词，让 AI 生成更贴近原物'),
        ('🧭', '路线自动判断', '自动判断该走通用创意、抖音带货、品牌广告片、真人感探店还是改已有视频路线'),
        ('🎯', '结构化分镜写法', '带货按黄金 3 秒钩子 + 卖点演示 + 促单结构；广告片追求电影级质感'),
        ('📎', '素材引用语法', '支持 @图片1 作为首帧、@视频1 参考运镜，把你的图/视频喂给模型锁住主体'),
        ('🚀', '多平台即用', '写好的提示词可直接粘贴到即梦、小云雀、豆包使用，无需改写'),
        ('⏱️', '带货专项优化', '针对电商带货场景的钩子结构与强制约束库，专门提升完播和转化')
    ],
    'images': ['assets/make-prompt-seedance2/01.png', 'assets/make-prompt-seedance2/02.png'],
    'workflow': ['描述视频需求', '上传参考图', 'AI 判断路线', '生成分镜提示词', '粘贴到即梦生成'],
    'install': [
        ('1. 安装技能到 AI 助手', 'git clone https://github.com/liangdabiao/make-prompt-seedance2.git\n# 放入 ~/.workbuddy/skills/make-prompt-seedance2/ 或 ~/.claude/skills/'),
        ('2. 上传参考图', '在 codex / workbuddy 等 agent 中上传你的产品白底图或参考视频'),
        ('3. 说出你的需求', '例如：帮我做个抖音带货视频，要抓人、要讲卖点'),
        ('4. 复制提示词使用', '按提示中的上传顺序和 @引用对应关系，粘贴到即梦生成')
    ],
    'tech': ['Claude Code / Codex / Workbuddy', 'Seedance 2.0', '即梦', '小云雀', '豆包', '提示词工程'],
    'faq': [
        ('Q: 写好的提示词在哪些平台能用？', 'A: 可直接粘贴到即梦（Seedance 2.0）、小云雀、豆包使用，提示词中会说明素材上传顺序与 @引用对应关系。'),
        ('Q: 完全不会写提示词的人能用吗？', 'A: 可以。你只需要用大白话描述想做什么视频、上传参考图，结构化提示词由技能自动完成。'),
        ('Q: 支持写实的真人脸部素材吗？', 'A: 不支持。该技能面向产品/场景类视频，请注意其能力边界，具体以项目文档为准。')
    ],
    'c1': '#f59e0b', 'c2': '#d97706', 'bg': '#fffbeb'
},
{
    'slug': 'crewai-stock-analysis-system', 'id': 'crewai-stock-analysis-system', 'repo': 'crewai_stock_analysis_system',
    'name': 'CrewAI 智能股票分析系统', 'category': '金融科技', 'icon': '📈', 'difficulty': '进阶',
    'badge': 'CrewAI 多智能体 · 股票分析', 'title': 'CrewAI 智能股票分析系统',
    'stars': 182,
    'hero': '基于 CrewAI 搭建的股票分析系统：多维度分析、批量处理、实时监控、智能预警一应俱全，还带一个直观的 Web 管理界面。',
    'desc': '基于 CrewAI 的股票分析系统：多维度分析、批量处理、实时监控、智能预警，带 Web 管理界面。',
    'tags': ['CrewAI', '股票分析', '多智能体', '实时监控', 'Web 界面'],
    'why': ('想把多智能体协作用在真实的投研场景？',
            '单个 AI 分析一只股票已经不容易，批量分析、持续监控、异常预警更是麻烦事。CrewAI 智能股票分析系统用多个 Agent 分工协作，把这些环节串成流水线，并提供一个不用敲命令的 Web 管理界面，添加股票、查看分析、接收预警都在浏览器里完成。'),
    'features': [
        ('🧠', 'AI 多维度分析', '多个智能体分工协作，从基本面到技术面给出立体的股票分析'),
        ('📦', '批量分析处理', '一次添加多只股票，系统自动排队分析，无需逐只手动操作'),
        ('📡', '价格指标实时监控', '持续跟踪股价与关键指标变化，异常波动及时捕捉'),
        ('🚨', '智能预警通知', '触发预设条件自动预警并通知，不用一直盯盘'),
        ('🖥️', 'Web 管理界面', '直观的浏览器管理后台：添加股票、查看分析、管理预警'),
        ('🤝', 'CrewAI 多 Agent 协作', '基于 CrewAI 框架的角色分工与流程控制，工程结构清晰')
    ],
    'images': ['assets/crewai-stock-analysis-system/01.png'],
    'workflow': ['启动服务', 'Web 添加股票', 'AI 多维度分析', '实时监控预警', '查看分析报告'],
    'install': [
        ('1. 克隆项目', 'git clone https://github.com/liangdabiao/crewai_stock_analysis_system.git'),
        ('2. 安装依赖', 'pip install -r requirements.txt'),
        ('3. 启动服务', 'python app.py  # 或按项目文档启动 Web 服务'),
        ('4. 打开管理界面', '浏览器访问本地服务地址，添加股票即可开始分析')
    ],
    'tech': ['CrewAI', 'Python', '多智能体协作', 'Web 管理界面', '金融数据', '智能预警'],
    'faq': [
        ('Q: 支持哪些市场？', 'A: 项目面向股票分析场景构建，具体支持范围以仓库文档为准，可在其基础上扩展数据源。'),
        ('Q: 分析结果可以作为投资建议吗？', 'A: 不可以。分析结果仅供学习研究参考，不构成任何投资建议，投资决策请自行判断。'),
        ('Q: 适合什么人群使用？', 'A: 想学习多智能体系统落地投研场景的开发者，以及需要批量监控工具辅助研究的用户。')
    ],
    'c1': '#10b981', 'c2': '#059669', 'bg': '#ecfdf5'
},
{
    'slug': 'autogen-financial-analysis', 'id': 'autogen-financial-analysis', 'repo': 'autogen-financial-analysis',
    'name': 'AutoGen 企业级金融分析系统', 'category': '金融科技', 'icon': '🏦', 'difficulty': '高级',
    'badge': '微软 AutoGen · 企业级金融分析', 'title': 'AutoGen 企业级金融分析系统',
    'stars': 162,
    'hero': '用微软 AutoGen 多智能体框架搭建的企业级金融分析系统：财务分析、风险评估、量化投资分析，一个系统全包。',
    'desc': '微软 AutoGen 企业级金融分析系统：财务分析、风险评估、VaR、压力测试、蒙特卡洛、量化选股。',
    'tags': ['AutoGen', '金融分析', 'VaR', '蒙特卡洛', '量化投资'],
    'why': ('企业级金融分析，难在数据多、模型重、口径杂',
            '财务分析要整合多个数据源，风险评估要跑 VaR、压力测试、蒙特卡洛模拟，量化选股还要因子模型和机器学习预测。这套系统用 AutoGen 多智能体架构把这些环节组织成协作流程，每个 Agent 负责自己最擅长的一块，最终产出交互式可视化报告。'),
    'features': [
        ('🔌', '多数据源整合', '整合 Yahoo Finance、Alpha Vantage、Quandl 等金融数据源'),
        ('🤖', '多 Agent 协作分析', '基于 AutoGen 的多智能体架构，分工完成智能财务分析'),
        ('⚠️', 'VaR 与压力测试', '风险价值计算与压力测试，量化评估组合风险敞口'),
        ('🎲', '蒙特卡洛模拟', '海量路径模拟收益分布，给投资决策概率化依据'),
        ('📐', '因子模型与组合优化', '因子选股、投资组合优化、机器学习预测一应俱全'),
        ('📊', '可视化报告', '实时监控告警 + 交互式可视化报告，结果一目了然')
    ],
    'images': ['assets/autogen-financial-analysis/01.png'],
    'workflow': ['配置数据源 API', '输入分析需求', '多 Agent 协作', '风险评估运算', '输出可视化报告'],
    'install': [
        ('1. 克隆项目', 'git clone https://github.com/liangdabiao/autogen-financial-analysis.git'),
        ('2. 安装依赖', 'pip install -r requirements.txt'),
        ('3. 配置数据源', '填写 Yahoo Finance / Alpha Vantage 等 API Key'),
        ('4. 启动分析', '启动系统，输入分析需求，等待多 Agent 产出报告')
    ],
    'tech': ['Microsoft AutoGen', 'Python', 'Yahoo Finance', 'Alpha Vantage', 'VaR / 蒙特卡洛', '机器学习'],
    'faq': [
        ('Q: 需要哪些数据源密钥？', 'A: 主要涉及 Yahoo Finance、Alpha Vantage、Quandl 等，按需配置即可，部分数据源可免密钥使用。'),
        ('Q: 和单 Agent 方案比有什么优势？', 'A: 多 Agent 分工让数据获取、分析、风控、报告各司其职，复杂流程更易维护和扩展。'),
        ('Q: 适合什么场景？', 'A: 适合想学习企业级多智能体系统搭建的开发者，以及需要批量金融分析能力的研究团队。')
    ],
    'c1': '#0ea5e9', 'c2': '#0284c7', 'bg': '#f0f9ff'
},
{
    'slug': 'video-clone-lite', 'id': 'video-clone-lite', 'repo': 'video-clone-lite',
    'name': '轻量视频复刻工具', 'category': '视频生成', 'icon': '🎞️', 'difficulty': '入门',
    'badge': 'AI 视频复刻 · 电商短视频', 'title': '轻量视频复刻工具',
    'stars': 113,
    'hero': '刷到一条好视频想照着做？给它一条参考视频，自动换成你的商品和效果，产出同结构新片，过程可控可改，还不用装一堆重型组件。',
    'desc': '轻量视频复刻：给一条参考视频，自动换商品换效果产出同结构新片，过程可控可改。',
    'tags': ['视频复刻', '电商短视频', '轻量部署', 'AI 视频', '素材替换'],
    'why': ('同类工具要装 10G 奇怪组件，效果还很一般',
            '想复刻一条带货视频的结构，何必被重型工具劝退？video-clone-lite 把「分析参考视频 → 替换商品/效果 → 生成同结构新片」做成轻量流程，依赖克制、过程可干预，生成结果不满意随时改。'),
    'features': [
        ('🔍', '视频结构分析', '自动分析参考视频的叙事结构和镜头语言'),
        ('🔄', '商品效果替换', '把参考视频里的商品、效果替换成你的，保留原结构'),
        ('⚙️', '全流程自动化', '从分析到生成自动完成，人工只需提供素材和需求'),
        ('✋', '过程可控可改', '关键环节可人工介入调整，不满意就改那一版'),
        ('🪶', '轻量依赖', '不装大型组件，普通环境即可跑起来'),
        ('🛒', '电商场景适配', '为带货、种草类短视频复刻场景优化')
    ],
    'images': ['assets/video-clone-lite/01.png'],
    'workflow': ['提供参考视频', 'AI 分析结构镜头', '替换商品效果', '生成新视频', '人工调整确认'],
    'install': [
        ('1. 获取项目', 'git clone https://github.com/liangdabiao/video-clone-lite.git'),
        ('2. 安装为 AI 技能', '将技能目录放入 ~/.workbuddy/skills/ 或 ~/.claude/skills/'),
        ('3. 提供素材', '给出参考视频 + 想替换的商品/效果描述'),
        ('4. 按流程执行', 'AI 按技能流程复刻，中途可随时调整需求')
    ],
    'tech': ['AI Agent Skill', '视频分析', '视频生成', '电商短视频', '轻量部署'],
    'faq': [
        ('Q: 和市面上的视频复刻工具比呢？', 'A: 最大区别是轻量：不依赖一堆重型组件，普通环境就能跑，且复刻过程开放可改。'),
        ('Q: 哪些部分可以替换？', 'A: 主要是商品和效果，视频的结构、镜头节奏会参考原片保留。'),
        ('Q: 有版权风险吗？', 'A: 请仅用于复刻你自己有权使用的内容，注意原片版权和平台规则。')
    ],
    'c1': '#ef4444', 'c2': '#dc2626', 'bg': '#fef2f2'
},
{
    'slug': 'wordpress-kefu-ai-agent', 'id': 'wordpress-kefu-ai-agent', 'repo': 'wordpress_kefu_ai_agent',
    'name': 'WordPress AI 智能客服', 'category': '企业AI', 'icon': '💬', 'difficulty': '入门',
    'badge': 'WordPress · 自适应智能客服', 'title': 'WordPress AI 智能客服',
    'stars': 68,
    'hero': '不用 Coze、不用 Dify，两个文件就给 WordPress 加上一个能真正干活的自适应智能客服，自己掌控、稍作配置即可上线。',
    'desc': '不用 Coze/Dify 的 WordPress 自适应智能客服，两个文件即可部署上线。',
    'tags': ['WordPress', '智能客服', '自适应 Agent', '极简部署', '独立站'],
    'why': ('第三方客服平台绑定重、数据不受自己掌控',
            '很多智能客服方案要么绑定平台账号，要么拖家带口上一整套系统。这个项目反其道而行：两个简单文件，稍作配置就能给 WordPress（或其他网站）加一个自适应的智能客服，对话逻辑和数据都握在自己手里。'),
    'features': [
        ('📄', '两个文件部署', '极简结构，不用搭平台、不用引一堆依赖，放上就能跑'),
        ('🧠', '自适应智能客服', 'Agentic 设计，能根据访客问题自适应回答，不是关键词机器人'),
        ('🔓', '不依赖第三方平台', '不用 Coze、不用 Dify，无平台绑定，数据自主可控'),
        ('🌐', '不限于 WordPress', '为 WP 打造，同样适合挂到其他独立站点使用'),
        ('🛠️', '程序员友好', '需要一点点代码配置能力，改哪里、怎么改都清清楚楚'),
        ('⚡', '快速上线', '填好模型 API 配置即可投入使用')
    ],
    'images': ['assets/wordpress-kefu-ai-agent/01.png'],
    'workflow': ['放置文件到站点', '配置模型 API', '网站挂载客服', '访客对话', '持续优化'],
    'install': [
        ('1. 克隆项目', 'git clone https://github.com/liangdabiao/wordpress_kefu_ai_agent.git'),
        ('2. 放置文件', '将两个核心文件放到你的站点/WordPress 主题目录'),
        ('3. 配置 API', '填写大模型 API 密钥等配置项'),
        ('4. 上线使用', '刷新站点，客服入口即出现在页面上')
    ],
    'tech': ['WordPress', '自适应 Agent', '大模型 API', '极简部署', '独立站'],
    'faq': [
        ('Q: 真的只要两个文件吗？', 'A: 是的，项目主打极简：后端一个文件 + 前端一个文件，配置好模型 API 即可运行。'),
        ('Q: 只能用在 WordPress 上吗？', 'A: 不是。它为 WP 场景打造，但本质是通用站点客服组件，其他网站也可接入。'),
        ('Q: 需要什么技术能力？', 'A: 需要一点点代码配置能力，适合独立站站长和程序员自助部署。')
    ],
    'c1': '#21759b', 'c2': '#18596f', 'bg': '#f0f7fa'
},
{
    'slug': 'investment-agent-langgraph-crewai', 'id': 'investment-agent-langgraph-crewai', 'repo': 'investment_Agent_langgraph_crewai',
    'name': 'CrewAI 多智能体 A 股投研系统', 'category': '金融科技', 'icon': '📊', 'difficulty': '进阶',
    'badge': 'CrewAI · A 股智能投研', 'title': 'CrewAI 多智能体 A 股投研系统',
    'stars': 59,
    'hero': '基于 CrewAI 框架的 A 股智能投资分析系统：多个智能体分工协作完成投资决策分析，角色分明、流程清晰。',
    'desc': 'CrewAI 多智能体 A 股投研系统，角色分工协作输出投资决策参考（教育研究用途）。',
    'tags': ['CrewAI', 'A 股', '多智能体', '投资分析', 'LangGraph'],
    'why': ('一个人看 A 股，信息永远看不全',
            '行情、财务、资金流、市场情绪……每个维度都值得单独研究。这套系统让多个智能体各管一个维度，分工协作后汇总成投资决策参考，是学习多智能体投研流程的完整样本。'),
    'features': [
        ('👥', '多智能体协作', '多个 Agent 分工协作，各管一个分析维度'),
        ('🎭', '角色分工清晰', '每个智能体职责明确，流程可控、易于理解'),
        ('🇨🇳', 'A 股场景适配', '面向 A 股市场数据与分析口径设计'),
        ('🧭', '投资决策参考', '输出结构化的决策参考，而非简单结论'),
        ('🔗', 'LangGraph / CrewAI 生态', '紧跟主流多智能体框架生态，便于二次开发'),
        ('🎓', '教育研究定位', '仅供教育和研究目的，不构成实际投资建议')
    ],
    'images': ['assets/investment-agent-langgraph-crewai/01.png'],
    'workflow': ['配置环境', '输入分析标的', '多 Agent 分头分析', '汇总协作结论', '输出决策参考'],
    'install': [
        ('1. 克隆项目', 'git clone https://github.com/liangdabiao/investment_Agent_langgraph_crewai.git'),
        ('2. 安装依赖', 'pip install -r requirements.txt'),
        ('3. 配置模型与数据', '配置 LLM API 与 A 股数据源'),
        ('4. ' '运行分析', 'python main.py  # 输入标的，等待多智能体产出')
    ],
    'tech': ['CrewAI', 'LangGraph', 'Python', 'A 股数据', '多智能体'],
    'faq': [
        ('Q: 和站上的 A股智能分析系统什么区别？', 'A: 两者都是多智能体 A 股投研项目，可对照学习不同的框架组织方式，选一个顺手的深入研究即可。'),
        ('Q: 支持港股、美股吗？', 'A: 项目面向 A 股场景，其他市场需要自行扩展数据源。'),
        ('Q: 结论可以直接照着操作吗？', 'A: 不可以。系统仅供教育研究，不构成投资建议，决策请自行判断。')
    ],
    'c1': '#14b8a6', 'c2': '#0d9488', 'bg': '#f0fdfa'
},
{
    'slug': 'simple-review-analyzer', 'id': 'simple-review-analyzer', 'repo': 'simple-review-analyzer',
    'name': '电商评论 VOC 分析工具', 'category': '商业工具', 'icon': '🔍', 'difficulty': '入门',
    'badge': '电商评论 · VOC 用户之声', 'title': '电商评论 VOC 分析工具',
    'stars': 52,
    'hero': '好评差评混成堆、没空一条条看？丢一份评论 CSV 进去，它还你打标明细、深度洞察报告和一个可视化看板。',
    'desc': '电商评论 VOC 分析：22 维度打标、用户画像、竞品对比，输出洞察报告和可视化看板。',
    'tags': ['VOC', '评论分析', '用户画像', '竞品分析', '可视化看板'],
    'why': ('产品该改啥、差评卡在哪、哪个卖点打动人，不能全凭感觉',
            '卖家后台里成百上千条评论，明明知道"用户有话说"却没空看。simple-review-analyzer 把评论表格变成三样东西：打标后的明细数据、一份深度洞察报告、一个能直接打开看的可视化看板，让"谁在买、骂什么、夸什么"一目了然。'),
    'features': [
        ('🏷️', '22 维度智能打标', '人群、场景、功能、质量、服务、体验、竞品对比、复购意愿全维度自动贴标'),
        ('👤', '用户画像归纳', '从评论里归纳 3–4 类典型用户，每类配精选"黄金样本"评论'),
        ('📣', 'VOC 客户之声', '汇总用户痛点、情感分布和关键词，知道大家到底在意什么'),
        ('📊', '黑金可视化看板', '一个黑金风格 HTML 页面，6 个交互图表，浏览器直接打开就能展示'),
        ('⚔️', '竞品对比分析', '把对手的评论也喂进去，对比双方优劣势，找差异化机会'),
        ('📥', 'CSV 进、三件套出', '输入评论 CSV，输出打标明细 + 洞察报告 + 可视化看板')
    ],
    'images': ['assets/simple-review-analyzer/01.png', 'assets/simple-review-analyzer/02.png'],
    'workflow': ['导出评论 CSV', 'AI 22 维打标', '归纳用户画像', '挖掘 VOC 痛点', '输出报告看板'],
    'install': [
        ('1. 安装技能到 AI 助手', 'git clone https://github.com/liangdabiao/simple-review-analyzer.git\n# 放入 ~/.workbuddy/skills/ 或 ~/.claude/skills/'),
        ('2. ' '准备评论数据', '从店铺后台导出评论为 CSV（自家产品或竞品均可）'),
        ('3. 对话发起分析', '对 AI 说：这是评论表 reviews.csv，帮我分析用户都在吐槽啥、又夸啥'),
        ('4. ' '获取三件套', '获得打标明细、深度洞察报告和可视化看板 HTML')
    ],
    'tech': ['AI Agent Skill', 'CSV 数据分析', '22 维标签体系', 'VOC 洞察', 'HTML 可视化看板', '竞品分析'],
    'faq': [
        ('Q: 数据从哪里来？', 'A: 需要你自己先从店铺后台或工具导出评论 CSV，它负责分析，不负责从平台抓取。'),
        ('Q: 一次分析多少条合适？', 'A: 推荐 100 条左右，平衡速度与质量；分析数量贪多反而性价比低。'),
        ('Q: 结论可以直接采信吗？', 'A: 打标是 AI 理解后的归纳，适合找方向和做展示，关键结论建议回原评论核对。')
    ],
    'c1': '#f97316', 'c2': '#ea580c', 'bg': '#fff7ed'
},
{
    'slug': 'claudesdk-amazon-skills-chat', 'id': 'claudesdk-amazon-skills-chat', 'repo': 'claudesdk-amazon-skills-chat',
    'name': '亚马逊 54 技能 AI 助手', 'category': '商业工具', 'icon': '🛒', 'difficulty': '进阶',
    'badge': 'Claude Agent SDK · 亚马逊全链路', 'title': '亚马逊 54 技能 AI 助手',
    'stars': 42,
    'hero': 'Claude Agent SDK 版亚马逊卖家全链路助手：54 个专业技能一站集成，对话完成选品、关键词、Listing、FBA、PPC。',
    'desc': 'Claude Agent SDK 版亚马逊助手：对话调用 54 个技能，覆盖选品/Listing/FBA/PPC 全链路。',
    'tags': ['Claude Agent SDK', '亚马逊', '54 技能', '选品', 'PPC'],
    'why': ('亚马逊运营工具不少，能装进一个对话框的没有几个',
            '选品调研、关键词挖掘、Listing 优化、FBA 费用计算、PPC 广告——每个环节都有专门工具，切换来切换去效率尽失。这个项目把 54 个亚马逊专业技能装进一个 Claude Agent SDK 应用，浏览器里说句话就能调动整个技能库。'),
    'features': [
        ('🧰', '54 个专业技能', '亚马逊运营全链路技能一站集成，随叫随到'),
        ('💬', '自然语言对话', '不用学工具操作，说人话就能完成运营工作'),
        ('🔎', '选品调研', '市场、竞品、关键词数据调研技能开箱即用'),
        ('📝', 'Listing 优化', '标题、五点、详情文案优化技能随时调用'),
        ('💰', 'FBA 费用计算', '利润、费用结构快速核算，辅助定价决策'),
        ('📣', 'PPC 广告', '广告投放分析与优化技能，省钱提效')
    ],
    'images': ['assets/claudesdk-amazon-skills-chat/01.png'],
    'workflow': ['启动 Express 服务', '浏览器打开对话', '描述运营需求', '自动调用技能', '查看结果'],
    'install': [
        ('1. 克隆项目', 'git clone https://github.com/liangdabiao/claudesdk-amazon-skills-chat.git'),
        ('2. 安装依赖', 'npm install'),
        ('3. 配置密钥', '配置 Claude API Key 等环境变量'),
        ('4. 启动对话', 'npm start  # 浏览器打开后直接对话使用')
    ],
    'tech': ['Claude Agent SDK', 'Express', 'Node.js', '亚马逊运营技能', '自然语言交互'],
    'faq': [
        ('Q: 54 个技能具体覆盖什么？', 'A: 覆盖选品调研、关键词、Listing、FBA、PPC 等亚马逊运营主要环节，详见仓库文档。'),
        ('Q: 需要亚马逊官方 API 吗？', 'A: 视具体技能而定，部分技能需要相应数据源支持，配置方式见项目文档。'),
        ('Q: 和站上的 Amazon-Skills-Liang 什么关系？', 'A: 技能库同源；这个是 Claude Agent SDK 对话版，那个是技能大仓，可按使用场景选择。')
    ],
    'c1': '#ca8a04', 'c2': '#a16207', 'bg': '#fefce8'
},
{
    'slug': 'deep-search-write', 'id': 'deep-search-write', 'repo': 'deep_search_write',
    'name': '双智能体写作方案', 'category': '商业工具', 'icon': '✍️', 'difficulty': '入门',
    'badge': 'AI 写作 · 双智能体协作', 'title': '双智能体写作方案',
    'stars': 31,
    'hero': '写作智能体负责成文、知识库智能体负责找资料配内容，两个 Agent 合作产出图文并茂的公众号、小红书或博客帖子。',
    'desc': '写作+知识库双智能体协作，自动配图配资料，产出图文并茂的公众号/小红书/博客帖子。',
    'tags': ['AI 写作', '双智能体', '公众号', '小红书', '知识库'],
    'why': ('一个人写图文帖，找资料半小时、成文一小时、配图半天',
            '内容创作里最耗人的不是写，是边写边找资料、找配图。这套轻量方案把活儿拆给两个智能体：知识库 Agent 负责检索资料、组织素材，写作 Agent 专注成文与配图安排，一次输入选题，产出可用的图文初稿。'),
    'features': [
        ('🤝', '双 Agent 协作', '写作智能体 + 知识库智能体，一个管成文、一个管资料'),
        ('🔎', '自动找资料', '知识库 Agent 自动检索组织素材，不用手动翻资料'),
        ('🖼️', '自动配图', '根据内容自动安排配图位置与素材'),
        ('📱', '多平台文体', '适配公众号、小红书、博客等不同平台的内容风格'),
        ('🪶', '轻量易接入', '方案轻量，不挑环境，容易集成到现有工作流'),
        ('📄', '初稿即用', '产出真正可用的图文初稿，人工润色后即可发布')
    ],
    'images': ['assets/deep-search-write/01.png'],
    'workflow': ['输入选题', '知识库 Agent 找资料', '写作 Agent 成文', '自动配图', '输出初稿'],
    'install': [
        ('1. 克隆项目', 'git clone https://github.com/liangdabiao/deep_search_write.git'),
        ('2. 配置模型', '配置 LLM API 与知识库数据源'),
        ('3. 安装为技能（可选）', '也可放入 ~/.workbuddy/skills/ 作为 agent 技能使用'),
        ('4. ' '输入选题', '给一个选题，两个 Agent 自动配合产出初稿')
    ],
    'tech': ['AI Agent', '知识库 RAG', '多智能体协作', '内容创作', '公众号 / 小红书'],
    'faq': [
        ('Q: 能生成哪些平台的内容？', 'A: 主要面向微信公众号、小红书、博客等图文平台，文体可按平台调整。'),
        ('Q: 生成后需要人工润色吗？', 'A: 建议润色。AI 初稿提供了结构与素材，人工把关事实与风格后质量更稳。'),
        ('Q: 支持接入自己的知识库吗？', 'A: 支持，可配置自己的知识库数据源作为素材基础。')
    ],
    'c1': '#ec4899', 'c2': '#db2777', 'bg': '#fdf2f8'
},
{
    'slug': 'claudesdk-seedance-chat', 'id': 'claudesdk-seedance-chat', 'repo': 'claudesdk-seedance-chat',
    'name': 'Seedance 脚本分镜对话应用', 'category': 'AI对话', 'icon': '🎬', 'difficulty': '入门',
    'badge': 'Claude Agent SDK · 视频脚本创作', 'title': 'Seedance 脚本分镜对话应用',
    'stars': 30,
    'hero': '基于 Claude Agent SDK 的 Web 应用：对话生成 Seedance 2.0 视频脚本和分镜提示词，从故事分析到分镜全流程覆盖。',
    'desc': 'Claude Agent SDK 版 Seedance 2.0 视频脚本与分镜创作 Web 应用，对话式全流程。',
    'tags': ['Claude Agent SDK', 'Seedance 2.0', '视频脚本', '分镜', 'Web 应用'],
    'why': ('有了视频模型，缺的是把创意变成可执行脚本的那一步',
            'Seedance 2.0 能生成视频，但从一个模糊的故事想法到一份可执行的分镜脚本，中间隔着结构分析、节奏设计、提示词工程。这个应用把整条链路搬进对话框：描述你的故事，它从分析到分镜一步步帮你落成脚本。'),
    'features': [
        ('💬', '对话生成脚本', '自然语言描述故事，自动生成专业视频脚本'),
        ('🎬', '自动分镜提示词', '脚本自动拆解为分镜，并生成对应提示词'),
        ('📖', '故事分析', '先分析故事结构与节奏，再落分镜，不跳步'),
        ('🔁', '全流程覆盖', '从故事分析到分镜脚本，一个应用内完成'),
        ('🖥️', 'Web 界面', '浏览器直接使用，无需命令行基础'),
        ('⚡', 'SDK 驱动', '基于 Claude Agent SDK，能力可持续扩展')
    ],
    'images': ['assets/claudesdk-seedance-chat/01.png'],
    'workflow': ['启动服务', '描述故事创意', 'AI 分析结构', '生成脚本分镜', '导出使用'],
    'install': [
        ('1. 克隆项目', 'git clone https://github.com/liangdabiao/claudesdk-seedance-chat.git'),
        ('2. 安装依赖', 'npm install'),
        ('3. 配置密钥', '配置 Claude API Key'),
        ('4. 启动应用', 'npm run dev  # 浏览器打开后描述你的故事')
    ],
    'tech': ['Claude Agent SDK', 'React / Node', 'Seedance 2.0', '视频脚本', '分镜设计'],
    'faq': [
        ('Q: 和站上的分镜提示词助手什么区别？', 'A: 分镜提示词助手是装在 agent 里的技能；这个是有 Web 界面的完整应用，交互更友好。'),
        ('Q: 生成的脚本去哪里用？', 'A: 可直接用于 Seedance 2.0 等视频模型生成，按需微调提示词效果更佳。'),
        ('Q: 需要编程基础吗？', 'A: 使用不需要，部署需要基础的 Node.js 环境知识。')
    ],
    'c1': '#8b5cf6', 'c2': '#7c3aed', 'bg': '#f5f3ff'
},
{
    'slug': 'hstech-2026-ai-summary', 'id': 'hstech-2026-ai-summary', 'repo': 'HSTECH_2026_AI_SUMMARY',
    'name': '恒生科技 2026 AI 全景报告', 'category': '金融科技', 'icon': '🇭🇰', 'difficulty': '入门',
    'badge': '港股 · AI 尽调报告', 'title': '恒生科技 2026 AI 全景报告',
    'stars': 26,
    'hero': '用股票尽调 Agent 对恒生科技成分股做的 2026 年度全面分析：多空观点都有呈现，帮你理性了解相关公司。',
    'desc': '用股票尽调 Agent 对恒生科技成分股做的 2026 年度全景分析报告，多空观点兼备。',
    'tags': ['恒生科技', '港股', '尽调报告', 'AI 分析', '2026'],
    'why': ('港股科技板块公司多、信息散，一份系统性报告太难了',
            '这份仓库本身就是产品：它用 Claude-Code-Stock-Deep-Research-Agent 尽调系统对恒生科技成分股逐一分析，输出 2026 年度全景报告，多空观点并列呈现，供大家理性参考。'),
    'features': [
        ('🏢', '成分股逐一分析', '对恒生科技指数成分股公司逐家深度分析'),
        ('🤖', '多智能体尽调生成', '基于成熟的股票尽调 Agent 系统自动产出'),
        ('📅', '2026 年度全景', '覆盖年度维度的全景式梳理'),
        ('⚖️', '多空观点呈现', '不只讲多头逻辑，看空风险同样列出'),
        ('📖', '开源可查', '报告全文在仓库公开，随时查阅引用'),
        ('🧭', '理性参考定位', '帮助理性了解公司，不构成投资建议')
    ],
    'images': ['assets/hstech-2026-ai-summary/01.png'],
    'workflow': ['打开 GitHub 仓库', '浏览报告目录', '按公司阅读', '交叉验证观点', '形成自己判断'],
    'install': [
        ('1. 访问仓库', '浏览器打开 https://github.com/liangdabiao/HSTECH_2026_AI_SUMMARY'),
        ('2. ' '阅读报告', '按目录查看各成分股的分析报告'),
        ('3. ' '按需引用', '报告可自由查阅引用，请注意信息来源与时效')
    ],
    'tech': ['Claude Code Stock Agent', '尽调框架', '恒生科技指数', '多空分析', '开源报告'],
    'faq': [
        ('Q: 报告多久更新一次？', 'A: 按年度版本维护，具体更新频率以仓库动态为准。'),
        ('Q: 可以作为投资依据吗？', 'A: 仅供参考，不构成投资建议。AI 生成内容需交叉验证，决策请自行判断。'),
        ('Q: 覆盖哪些公司？', 'A: 覆盖恒生科技指数成分股，具体名单以报告目录为准。')
    ],
    'c1': '#6366f1', 'c2': '#4f46e5', 'bg': '#eef2ff'
},
{
    'slug': 'product-motion-gif', 'id': 'product-motion-gif', 'repo': 'product-motion-gif',
    'name': '产品动图 GIF 生成器', 'category': '图像创作', 'icon': '🎞️', 'difficulty': '入门',
    'badge': 'GPT-Image 2.5 · 产品动图', 'title': '产品动图 GIF 生成器',
    'stars': 26,
    'hero': '单张产品照丢进去，GPT-Image 2.5 一次生成多格帧图、自动合成循环 GIF，不会设计软件也能做动图素材。',
    'desc': 'GPT-Image 2.5 一次生成多格帧图并合成产品循环动图 GIF，零设计基础可用。',
    'tags': ['GPT-Image 2.5', 'GIF', '产品动图', '电商素材', '零基础'],
    'why': ('商品详情页想放个动图，AE 不会、PS 太慢',
            '循环播放的产品动图是详情页和社媒的吸睛利器，但传统制作要么学设计软件、要么一帧帧抠。这个 skill 用 GPT-Image 2.5 一次性生成多格帧图再合成 GIF，一次调用搞定，专门给不会设计软件但需要动图素材的人用。'),
    'features': [
        ('🖼️', '单图生多格帧', '一张产品照片，自动生成连贯的多格帧图序列'),
        ('🔁', '自动合成 GIF', '帧图序列自动合成为循环播放的产品动图'),
        ('⚡', '一次 API 调用', '整个流程一次调用完成，不用逐帧操作'),
        ('🙅', '零设计基础', '不需要 AE/PS，会打字就能用'),
        ('🛒', '电商适配', '为电商卖家和运营的素材需求优化'),
        ('📦', '开箱即用', '提供产品照和简单描述即可生成')
    ],
    'images': ['assets/product-motion-gif/01.png'],
    'workflow': ['提供产品照片', 'AI 生成帧图序列', '合成循环 GIF', '下载使用'],
    'install': [
        ('1. 安装技能到 AI 助手', 'git clone https://github.com/liangdabiao/product-motion-gif.git\n# 放入 ~/.workbuddy/skills/ 或 ~/.claude/skills/'),
        ('2. ' '准备产品照', '准备一张清晰的产品照片'),
        ('3. ' '一句话描述', '对 AI 描述你想要的动图效果'),
        ('4. ' '获取 GIF', '获得循环播放的产品动图文件')
    ],
    'tech': ['GPT-Image 2.5', 'GIF 合成', 'AI Agent Skill', '电商素材', '零基础'],
    'faq': [
        ('Q: 什么产品图都能做吗？', 'A: 清晰的产品照效果最佳，复杂场景图可能受限，建议先用白底或简洁背景的图测试。'),
        ('Q: 动图风格可以指定吗？', 'A: 可以用自然语言描述期望效果，但风格受模型能力限制，以实际生成结果为准。'),
        ('Q: 生成的 GIF 可以商用吗？', 'A: 请结合生图模型的服务条款与自身业务场景判断使用边界。')
    ],
    'c1': '#06b6d4', 'c2': '#0891b2', 'bg': '#ecfeff'
},
{
    'slug': 'liangdabiao-github-io', 'id': 'liangdabiao-github-io', 'repo': 'liangdabiao.github.io',
    'name': 'Agent 技术教学站', 'category': '教育工具', 'icon': '📚', 'difficulty': '入门',
    'badge': 'AI Agent 框架 · 系统课程', 'title': 'Agent 技术教学站',
    'stars': 17,
    'hero': 'liangdabiao 的 Agent 小册子：阿里云百炼、LangGraph、Claude/OpenAI Agent SDK、DeepAgents、EdgeOne Makers 等主流框架系统课程，免费阅读。',
    'desc': 'Agent 技术教学站：百炼/LangGraph/Claude/OpenAI Agent SDK/DeepAgents/EdgeOne 等系统课程。',
    'tags': ['Agent 教学', 'LangGraph', 'Claude Agent SDK', 'DeepAgents', 'EdgeOne'],
    'why': ('学 Agent 开发，资料散落在各处，缺一张系统地图',
            '这个站点把主流 Agent 框架课程按体系组织：阿里云百炼、LangGraph、Claude Agent SDK、OpenAI Agents SDK、DeepAgents、DeerFlow、Flue、Vercel Eve、Cloudflare Agents、EdgeOne Makers、Agent Skills——每门课从概念讲到实战，免费阅读、持续更新。'),
    'features': [
        ('🗺️', '多框架系统课程', '主流 Agent 框架各设专题，从入门到精通'),
        ('🧪', '概念到实战', '每门课程不止讲概念，配套可跑通的实战示例'),
        ('🆓', '免费阅读', '全部课程免费开放，浏览器直接学'),
        ('🔄', '持续更新', '跟随框架版本持续修订，不过时'),
        ('📝', '文章 + 示例', '图文讲解配合代码示例，学练结合'),
        ('🎯', '按框架逐个学', '课程模块化，建议选定框架逐个攻克')
    ],
    'images': ['assets/liangdabiao-github-io/01.png'],
    'workflow': ['访问教学站', '选择框架课程', '按章节学习', '跑通示例', '动手实战'],
    'install': [
        ('1. 在线学习', '浏览器访问 GitHub Pages 站点即可阅读全部课程'),
        ('2. ' '本地部署（可选）', 'git clone https://github.com/liangdabiao/liangdabiao.github.io.git\n按静态站点方式部署'),
        ('3. ' '按框架学习', '建议选定一个框架，按课程顺序逐个章节攻克')
    ],
    'tech': ['GitHub Pages', '阿里云百炼', 'LangGraph', 'Claude Agent SDK', 'OpenAI Agents SDK', 'DeepAgents'],
    'faq': [
        ('Q: 完全小白能学吗？', 'A: 课程覆盖从入门开始的内容，但具备基础编程知识会学得更顺。'),
        ('Q: 课程更新频率如何？', 'A: 持续更新中，框架有新版本时会跟进修订。'),
        ('Q: 可以和站上其他项目对照学吗？', 'A: 可以。站上很多项目就是这些框架的实战案例，学完课程直接看源码。')
    ],
    'c1': '#3b82f6', 'c2': '#2563eb', 'bg': '#eff6ff'
},
{
    'slug': 'claudesdk-financial-chart-chat', 'id': 'claudesdk-financial-chart-chat', 'repo': 'claudesdk-financial-chart-chat',
    'name': 'A 股财经图表对话助手', 'category': 'AI对话', 'icon': '📈', 'difficulty': '入门',
    'badge': 'Claude Agent SDK · 财经图表', 'title': 'A 股财经图表对话助手',
    'stars': 16,
    'hero': '说句话就能查 A 股数据画图表：自然语言输入公司名或需求，自动查询上市公司财务数据，生成 6 种专业图表。',
    'desc': '自然语言查 A 股数据自动出 6 种专业图表，Baostock 主用 + akshare 自动降级。',
    'tags': ['Claude Agent SDK', 'A 股', '财报图表', 'Baostock', '可视化'],
    'why': ('看财报要的数据，翻网站、导表格、做图表太折腾',
            '「看下茅台近三年营收」——这句话以前意味着开网站、找数据、拉表格、画图四步。这个助手把四步合并成一次对话：自然语言进去，专业图表出来，财务数据查询和可视化一次完成。'),
    'features': [
        ('💬', '自然语言查数', '输入公司名或需求，自动查询 A 股上市公司数据'),
        ('📊', '6 种专业图表', '营收利润、毛利率、趋势、对比等专业图表自动生成'),
        ('🗄️', 'Baostock 主用', '以 Baostock 为主要数据源，数据稳定可靠'),
        ('🔄', 'akshare 自动降级', '主数据源不可用时自动切换 akshare，保证可用性'),
        ('🗂️', '图表管理', '生成的图表可管理、可回看'),
        ('📜', '执行日志', '完整执行日志，查数和生成过程可追溯')
    ],
    'images': ['assets/claudesdk-financial-chart-chat/01.png'],
    'workflow': ['启动服务', '对话提问', '自动查数', '生成图表', '管理导出'],
    'install': [
        ('1. 克隆项目', 'git clone https://github.com/liangdabiao/claudesdk-financial-chart-chat.git'),
        ('2. 安装依赖', 'npm install'),
        ('3. 配置密钥', '配置 Claude API Key'),
        ('4. 启动对话', 'npm run dev  # 例如提问：看下茅台近三年营收')
    ],
    'tech': ['Claude Agent SDK', 'Baostock', 'akshare', 'A 股财务数据', '图表可视化'],
    'faq': [
        ('Q: 支持哪些类型的图表？', 'A: 覆盖营收利润、毛利率、趋势、对比等 6 种专业图表类型。'),
        ('Q: 数据可靠吗？', 'A: 数据以公开数据源（Baostock/akshare）为准，关键数据建议交叉核对。'),
        ('Q: 能查港股、美股吗？', 'A: 当前面向 A 股上市公司数据，其他市场需自行扩展数据源。')
    ],
    'c1': '#65a30d', 'c2': '#4d7c0f', 'bg': '#f7fee7'
},
]
