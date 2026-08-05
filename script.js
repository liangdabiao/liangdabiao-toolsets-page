// 产品数据
const products = [
    {
        id: 'ai-stop-motion',
        name: 'AI 定格动画生成器',
        description: '基于单张图片创建令人惊艳的定格动画！使用 Gemini Nano AI 技术生成姿势序列和动画帧，让你的照片动起来。',
        icon: '🎬',
        tags: ['AI工具', '定格动画', 'Gemini Nano', 'Next.js'],
        githubUrl: 'https://github.com/liangdabiao/ai-make-face-meme',
        features: [
            '单图生成动画：基于单张图片创建流畅的定格动画',
            'Gemini Nano 驱动：AI 生成姿势序列和动画帧',
            '实时进度反馈：流式响应显示生成进度',
            '动画播放控制：支持帧率调节(1-30 FPS)和播放控制',
            'GIF 导出功能：多种导出方案支持高质量 GIF 生成',
            '帧管理系统：完整的帧编辑、删除、移动功能'
        ],
        techStack: ['Next.js', 'Gemini Nano', 'Framer Motion', 'React', 'TypeScript', 'pnpm'],
        category: 'AI工具',
        difficulty: '中等'
    },
    {
        id: 'claude-data-analysis',
        name: 'Claude 数据分析助手',
        description: '基于 Claude Code 的智能数据分析平台，使用 AI 子代理和斜杠命令革新数据分析工作流程。',
        icon: '📊',
        tags: ['数据分析', 'Claude Code', 'AI子代理', '自动化'],
        githubUrl: 'https://github.com/liangdabiao/claude-data-analysis',
        features: [
            '6个专业AI子代理：数据探索、可视化、代码生成、报告、质量保证、假设生成',
            '直观斜杠命令：/analyze、/visualize、/generate、/report、/quality、/hypothesis',
            '自动化工作流：数据验证、智能上下文、可重现分析',
            '多语言代码生成：Python、R、SQL、JavaScript支持',
            '多种分析类型：探索性、统计、预测、完整分析',
            '丰富的可视化：趋势图、分布图、相关性图、对比图'
        ],
        techStack: ['Claude Code', 'Python', 'R', 'SQL', 'JavaScript', 'Pandas', 'NumPy', 'Scikit-learn'],
        category: '数据分析',
        difficulty: '进阶'
    },
    {
        id: 'a-stock-analysis',
        name: 'A股智能分析系统',
        description: '基于AKShare和CrewAI的专业A股投资分析平台，通过多Agent协作提供智能化的投资决策支持。',
        icon: '📈',
        tags: ['A股分析', 'CrewAI', 'AKShare', '金融科技', '投资分析'],
        githubUrl: 'https://github.com/liangdabiao/easy_investment_Agent_crewai',
        features: [
            '4个专业AI分析师：市场分析师、财务专家、情绪研究员、投资顾问',
            '全面A股数据：实时行情、财务报表、资金流向、市场情绪',
            'A股市场特色：涨跌停分析、政策影响、散户情绪、资金轮动',
            '多维度分析：技术面、基本面、资金面、情绪面综合评估',
            '智能投资建议：评级目标、策略建议、风险控制方案',
            '专业工具集成：AKShare数据源、CrewAI多Agent协作'
        ],
        techStack: ['CrewAI', 'AKShare', 'Python', 'LangChain', 'Ollama', 'Poetry', 'Pandas'],
        category: '金融科技',
        difficulty: '高级'
    },
    {
        id: 'business-idea-validator',
        name: '商业创意验证器',
        description: 'AI驱动的市场调研应用，输入商业创意自动分析小红书、Reddit等平台用户评论，评估商业可行性。',
        icon: '💼',
        tags: ['商业调研', 'AI分析', '数据抓取', '市场验证', '创业工具'],
        githubUrl: 'https://github.com/liangdabiao/Business_Idea_Validator',
        features: [
            '多平台数据源：小红书、Reddit、Hacker News、公众号等',
            'AI智能分析：痛点、兴奋信号、竞争对手、风险信号识别',
            '可视化报告：交互式图表展示验证评分和执行摘要',
            '快速验证流程：一键完成从创意输入到报告生成',
            '专业分析框架：结构化数据提取和评分机制',
            '第三方API集成：ScraperAPI、TikHub等专业数据方案'
        ],
        techStack: ['Streamlit', 'Python', 'OpenAI', 'ScraperAPI', 'Pydantic', 'TikHub API', '数据抓取'],
        category: '商业工具',
        difficulty: '进阶'
    },
    {
        id: 'easy-amazon-voc',
        name: 'Amazon商品评论分析系统',
        description: 'AI驱动的客户之声分析工具，针对Amazon商品评论进行多维度智能分析，生成用户画像和产品反馈报告。',
        icon: '📦',
        tags: ['VOC分析', 'Amazon评论', 'AI分析', '用户画像', '市场调研'],
        githubUrl: 'https://github.com/liangdabiao/easy-amazon-voc',
        features: [
            '多维度分析：人群场景、功能价值、保障价值、体验价值四大维度',
            'AI智能标签提取：使用大模型自动识别评论关键信息',
            '用户画像构建：分析使用场景、购买动机、价格感知等',
            '产品反馈分析：深入分析产品优缺点和用户改进建议',
            '一键式操作：从Easy Scraper爬取到分析完成，简单快捷',
            '数据可视化：生成结构化报告，支持Excel筛选和深度分析'
        ],
        techStack: ['Flask', 'Python', 'OpenAI', 'Easy Scraper', 'ECharts', '字节豆包', '数据分析'],
        category: '商业工具',
        difficulty: '进阶'
    },
    {
        id: 'ai-data-hub',
        name: 'AI数据枢纽',
        description: 'AI项目适用的数据中心框架，提供数据摄取、转换、探索和检索的完整解决方案，集成多种数据库和AI工具。',
        icon: '🏗️',
        tags: ['数据中心', 'AI工具集成', '多数据库支持', 'RAG框架', 'FastAPI'],
        githubUrl: 'https://github.com/liangdabiao/AI_data_hub',
        features: [
            '四层数据架构：Ingestion数据摄取、Transform数据加工、Explore探索分析、Retrieve查询检索',
            '多数据库支持：MongoDB、PostgreSQL、Chroma、Milvus、Aliyun OSS、Supabase等',
            'AI工具集成：OpenAI、LangChain、LangGraph、Tavily Search、小红书、微信公众号',
            '多模态处理：图片处理、文搜图、图搜图功能，向量数据库检索',
            '自动化管道：定时任务调度、数据抓取、清洗转换、向量化处理',
            'RESTful API：FastAPI服务，NL2SQL自然语言查询，多模态检索接口'
        ],
        techStack: ['FastAPI', 'LangChain', 'LangGraph', 'MongoDB', 'PostgreSQL', 'Chroma', 'Milvus', 'Aliyun OSS', 'Docker'],
        category: '基础设施',
        difficulty: '高级'
    },
    {
        id: 'ai-generated-english-podcast-videos',
        name: 'AI生成英语播客视频',
        description: '只需提供一篇文章，全自动生成播客视频对话文案、视频素材、字幕和背景音乐，合成高清播客短视频。支持Web界面和API。',
        icon: '🎙️',
        tags: ['AI播客视频', '英语学习', '视频生成', 'Streamlit', '语音合成', '自动化制作'],
        githubUrl: 'https://github.com/liangdabiao/AI-generated-English-podcast-videos',
        features: [
            '完整MVC架构：代码结构清晰，易于维护，支持API和Web界面',
            'AI文案生成：支持文章自动转换为播客对话文案，也可自定义文案',
            '多尺寸视频：支持竖屏9:16(1080x1920)和横屏16:9(1920x1080)',
            '批量生成：一次生成多个视频，选择最满意的结果',
            '智能语音合成：支持多种语音，实时试听，支持中英文',
            '字幕生成：支持字体、位置、颜色、大小调整，支持字幕描边',
            '背景音乐：随机或指定音乐，可调节背景音乐音量',
            '高清素材：无版权视频素材，支持本地素材上传',
            '多模型接入：OpenAI、DeepSeek、Moonshot、Azure、通义千问、Gemini等'
        ],
        techStack: ['Streamlit', 'FastAPI', 'FFmpeg', 'ImageMagick', 'Azure TTS', 'OpenAI TTS', 'Whisper', 'Pexels API', 'Python 3.11'],
        category: 'AI工具',
        difficulty: '中等'
    },
    {
        id: 'langgraph-multi-agent-rag-customer-support',
        name: 'LangGraph多智能体RAG客服系统',
        description: '基于多智能体和RAG技术的企业级客服系统，支持航班预订、酒店预订、租车、行程推荐、WooCommerce电商集成等功能，具备安全护栏和人工审核机制。',
        icon: '🤝',
        tags: ['多智能体', 'RAG', 'LangGraph', '客服系统', 'LangChain', '企业AI', '智能客服', '安全护栏'],
        githubUrl: 'https://github.com/liangdabiao/langgraph_multi-agent-rag-customer-support',
        features: [
            '多智能体架构：7个专业智能体协作，主助手统筹协调处理复杂跨领域问题',
            'RAG技术：检索增强生成，基于向量数据库的知识检索，确保回答准确性',
            '完整旅行服务：航班预订、酒店预订、租车服务、行程推荐等一站式服务',
            'WooCommerce集成：完整的电商功能，商品查询、订单管理、博客搜索、表单提交',
            '安全护栏机制：越狱防护和相关性检查，智能过滤恶意输入和不相关请求',
            '人工审核流程：GoHumanLoop框架支持，敏感操作需要管理员最终批准',
            '可观测性：集成LangSmith追踪系统，完整监控请求生命周期和系统性能',
            '状态管理：完整的对话状态管理和内存检查点，支持复杂多轮对话'
        ],
        techStack: ['LangGraph', 'LangChain', 'OpenAI', 'Qdrant', 'FastAPI', 'Docker', 'GoHumanLoop', 'WooCommerce API', 'Python 3.12'],
        category: '企业AI',
        difficulty: '高级'
    },
    {
        id: 'llm-agent-resume',
        name: '智能简历筛选系统',
        description: '基于大型语言模型的智能简历筛选系统，通过自然语言交互、智能信息提取、量化匹配算法等功能，显著提高招聘流程中简历筛选的效率和准确性。',
        icon: '📄',
        tags: ['简历筛选', 'LLM', '智能招聘', 'HR工具', 'AI面试', '自然语言处理', '自动化招聘'],
        githubUrl: 'https://github.com/liangdabiao/LLM-Agent-Resume',
        features: [
            '自然语言交互：HR可用自然语言描述招聘需求，系统智能理解并转化为结构化筛选条件',
            '智能信息提取：利用LLM从PDF简历和JD中提取技能、经验、学历、薪资期望等结构化信息',
            '量化匹配算法：结合语义理解和结构化信息，对候选人进行多维度量化评估',
            '多层次筛选：语义初筛 → 硬性条件过滤 → 综合评分排序的漏斗式筛选流程',
            '候选人分析：为HR提供详细的候选人匹配度分析和招聘决策建议',
            'RESTful API：完整的Web API接口，易于与现有HR系统集成和二次开发',
            '向量数据库：基于ChromaDB的简历向量存储和检索，支持高效的语义搜索',
            '批量处理：支持批量上传简历和并发处理，提高大规模招聘的效率'
        ],
        techStack: ['OpenAI', 'FastAPI', 'ChromaDB', 'PyPDF2', 'Pydantic', 'Uvicorn', 'Docker', 'Python 3.8+'],
        category: 'HR工具',
        difficulty: '进阶'
    },
    {
        id: 'resume-matcher-agent-cn',
        name: '简历匹配器',
        description: 'AI驱动的简历优化平台，通过逆向工程招聘算法，帮助求职者精准定制简历，提供关键词匹配、格式优化和ATS筛选建议，提高简历通过率。',
        icon: '🎯',
        tags: ['简历优化', 'ATS筛选', '求职工具', 'AI简历分析', '关键词匹配', '求职助手', '简历匹配'],
        githubUrl: 'https://github.com/liangdabiao/resume-matcher-agent-cn',
        features: [
            '简历分析：支持上传PDF或DOCX格式的简历进行智能分析，提取关键信息',
            '职位描述解析：深度解析职位描述，提取关键要求和技能需求',
            'AI驱动洞察：基于职位要求提供个性化简历改进建议，帮助求职者精准优化',
            '关键词匹配：识别对ATS（申请人跟踪系统）重要的缺失关键词，提高通过率',
            '结构化数据提取：将非结构化的简历和职位数据转换为结构化JSON格式',
            '本地AI处理：支持Ollama本地AI模型服务，确保数据隐私，也可选择OpenAI云端处理',
            '全栈架构：基于Next.js + FastAPI的现代化全栈架构，用户体验优秀',
            '实时优化建议：提供实时的简历优化建议，帮助求职者快速调整简历内容'
        ],
        techStack: ['Next.js 15+', 'React 19', 'FastAPI', 'Python 3.12+', 'Tailwind CSS 4.x', 'Ollama 0.6.7', 'SQLite 3.x', 'TypeScript'],
        category: '求职工具',
        difficulty: '中等'
    },
    {
        id: 'facebook-ads-analyzer',
        name: 'Facebook 广告分析器',
        description: '智能 Facebook 广告数据分析工具，基于不同广告目标自动评估广告表现，识别优秀和差广告，提供数据驱动的优化建议和投放策略方案。',
        icon: '📊',
        tags: ['Facebook广告', '数据分析', 'Claude Skill', '广告优化', '自动化', '投放策略'],
        githubUrl: 'https://github.com/liangdabiao/facebook-ads-analyzer',
        features: [
            '智能评分系统：根据广告目标（互动/转化/流量）应用加权算法评估广告表现',
            '三大目标支持：互动目标关注消息成本、转化目标关注CPA、流量目标关注CTR',
            '自动评级机制：将广告分为优秀(前20%)、中等(60%)、差(后20%)三个等级',
            '智能诊断引擎：自动分析广告表现，识别问题并提供针对性优化建议',
            '数据驱动标准：基于实际数据分布制定判断标准（分位数分析）',
            '完整报告生成：生成详细分析结果、分析报告和投放策略方案三个文件',
            '核心指标计算：CTR、CPC、CPM、转化率、消息成本、互动率等关键指标',
            'Claude Code Skill：直接与Claude对话即可完成分析，无需复杂操作'
        ],
        techStack: ['Python', 'Pandas', 'Claude Code Agent Skill', '数据科学', 'CSV处理', '自动化分析'],
        category: '数据分析',
        difficulty: '中等'
    },
    {
        id: 'bailian-ai-chatbox',
        name: '百炼AI聊天框',
        description: '基于阿里云百炼的轻量级聊天客服系统，只需2个文件实现完整功能，支持流式响应、Markdown渲染和多轮对话。',
        icon: '💬',
        tags: ['阿里云百炼', '聊天机器人', 'Flask', '通义千问', '流式响应', '客服系统'],
        githubUrl: 'https://github.com/liangdabiao/bailian_ai_chatbox',
        features: [
            '极简设计：只需 backend/app.py 和 frontend/index.html 两个文件',
            '流式响应：基于 Server-Sent Events (SSE) 的实时对话体验',
            '智能回退：流式失败时自动切换至非流式模式确保服务可用',
            '阿里云百炼集成：采用通义千问大模型，支持多轮对话',
            '会话管理：支持云端和本地两种会话历史管理方式',
            'Markdown 支持：前端自动渲染 AI 回复中的 Markdown 格式',
            'RESTful API：标准化接口设计，支持 CORS 跨域请求',
            '响应式设计：支持桌面和移动设备，实时打字动画效果'
        ],
        techStack: ['Python 3.7+', 'Flask 2.3.3', '阿里云百炼', '通义千问', 'SSE流式响应', 'JavaScript'],
        category: 'AI工具',
        difficulty: '初级'
    },
    {
        id: 'claude-code-stock-deep-research-agent',
        name: 'Claude Code 股票深度研究代理',
        description: '基于 Claude Code 的专业股票投资尽调系统，采用8阶段研究框架和28个并行智能体，支持A股、港股、美股的全面基本面分析。',
        icon: '🔬',
        tags: ['股票研究', 'Claude Code', '投资尽调', '多智能体', '基本面分析', 'A股', '港股', '美股'],
        githubUrl: 'https://github.com/liangdabiao/Claude-Code-Stock-Deep-Research-Agent',
        features: [
            '8阶段尽调框架：业务基础、行业分析、业务拆解、财务质量、股权治理、市场分歧、估值护城河、综合报告',
            '28个并行智能体：同时执行多维度研究，2-4小时完成完整尽调',
            '投资风格适配：支持价值投资、成长投资、困境反转、红利投资四种风格',
            '多市场覆盖：支持A股、港股、美股及其他全球市场',
            '信号灯评级：🟢🟢🟢 Strong Buy / 🟡🟡🟡 Hold / 🔴🔴 Avoid',
            '质量保证：利润vs现金流交叉验证、同行对比、空头风险分析',
            '估值模型：DCF、反向DCF、相对估值、情景分析',
            '标准化输出：20文件结构化尽调报告，包含财务数据、估值分析、风险监控清单'
        ],
        techStack: ['Claude Code', 'Deep Research Framework', 'Graph of Thoughts', 'WebSearch', 'WebFetch', '多智能体协作'],
        category: '金融科技',
        difficulty: '高级'
    },
    {
        id: 'xhs-business-idea-validator',
        name: '小红书商业创意验证器',
        description: '基于小红书数据的智能市场验证系统，通过数据抓取和 AI 分析来解析市场需求、用户痛点及竞争格局，生成专业市场验证报告。',
        icon: '📱',
        tags: ['小红书', '市场验证', 'MCP架构', '数据分析', '商业调研', 'AI分析'],
        githubUrl: 'https://github.com/liangdabiao/XHS_Business_Idea_Validator',
        features: [
            '小红书数据抓取：自动抓取相关笔记和评论数据，使用用户输入作为搜索关键词',
            'AI 内容分析：使用 LLM 分析用户痛点和市场需求',
            '自动化报告生成：生成专业的 HTML 格式市场验证报告',
            'MCP 服务器架构：基于 Model Context Protocol 的模块化设计',
            '三智能体协作：Scraper Agent（数据抓取）、Analyzer Agent（数据分析）、Reporter Agent（报告生成）',
            '互动评分系统：点赞×1、收藏×2、分享×3、评论×3的加权策略',
            '热点分析：识别热门话题、痛点和需求趋势',
            'Checkpoint 机制：保存每个阶段的执行状态，支持断点续传'
        ],
        techStack: ['Python', 'MCP Protocol', 'OpenAI', 'TikHub', '小红书API', 'Agent架构', '数据抓取'],
        category: '商业工具',
        difficulty: '进阶'
    },
    {
        id: 'claude-data-analysis-ultra',
        name: 'Claude 数据分析终极版',
        description: '基于 Claude Code Skills 的互联网数据分析全自动化智能体，专注拉新、留存、促活、推荐、转化、A/B测试等互联网场景，一键完成多技能分析。',
        icon: '🚀',
        tags: ['数据分析', 'Claude Code Skills', '互联网分析', '电商分析', '自动化', '全栈'],
        githubUrl: 'https://github.com/liangdabiao/claude-data-analysis-ultra-main',
        features: [
            '两个核心命令：/do-all 常规数据分析（带人工反馈）、/do-more 互联网全自动化分析',
            '12个专业技能：RFM客户细分、LTV预测、留存分析、漏斗分析、增长模型、A/B测试分析等',
            '6个智能子代理：数据探索、可视化专家、代码生成、报告撰写、质量保证、假设生成',
            '互联网场景覆盖：拉新、留存、促活、推荐、转化、A/B测试、用户分析',
            '全自动多技能分析：智能匹配技能、按最优顺序执行、生成综合HTML报告',
            '交互式工作流：3个人工反馈检查点，确保分析质量和方向正确',
            '多种代码生成：Python、R、SQL、JavaScript，支持数据清洗、统计分析、机器学习',
            '丰富输出格式：HTML、PDF、Markdown、DOCX，包含20+种图表类型'
        ],
        techStack: ['Claude Code', 'Skills', 'Sub-agents', 'Python', 'R', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
        category: '数据分析',
        difficulty: '进阶'
    },
    {
        id: 'claude-code-deep-research',
        name: 'Claude Code Deep Research',
        description: '基于 Claude Code 的深度研究 Agent 系统，实现类似 OpenAI 和 Google 的 Deep Research 功能，通过 Graph of Thoughts 框架和多智能体协作完成专业研究。',
        icon: '🔍',
        tags: ['深度研究', 'Claude Code', 'Graph of Thoughts', '多智能体', '自动化研究', 'GoT框架'],
        githubUrl: 'https://github.com/liangdabiao/Claude-Code-Deep-Research-main',
        features: [
            'Graph of Thoughts 框架：基于图结构的推理路径管理，支持平衡、深度优先、广度优先三种研究模式',
            '7阶段深度研究流程：问题细化、研究规划、多智能体研究、信息收集、综合分析、引用验证、报告生成',
            '多智能体架构：Web研究Agent（3-5个）、学术/技术Agent（1-2个）、交叉引用Agent（1个）并行协作',
            'A-E质量评级系统：A级同行评审、B级队列研究、C级专家意见、D级预印本、E级轶事推测',
            '引用验证机制：每个事实声明必须包含作者/组织、发布日期、来源标题、URL/DOI、页码',
            '结构化输出：生成1-2页执行摘要、20-50页完整报告、数据、图表、来源、研究笔记、附录',
            '简单易用：仅需一个命令 /deep-research [主题]，全程自动化完成深度研究',
            '灵活配置：支持全球范围、时间范围、来源类型、报告格式等多种研究参数定制'
        ],
        techStack: ['Claude Code', 'Graph of Thoughts', 'MCP Protocol', 'WebSearch', 'WebFetch', 'Playwright', '多智能体协作'],
        category: 'AI工具',
        difficulty: '高级'
    },
    {
        id: 'simple-claude-deep-research-agent',
        name: 'Simple Claude Deep Research Agent',
        description: '简化版多智能体深度研究系统，完全小白友好，通过 Claude Code Skills 技术实现并行子代理执行综合性网络研究，支持直接查询、广度优先和深度优先三种模式。',
        icon: '🎯',
        tags: ['深度研究', 'Claude Code', 'Skills', '多智能体', '小白友好', '并行处理'],
        githubUrl: 'https://github.com/liangdabiao/simple_claude_deep_research_agent',
        features: [
            '三种查询模式：直接查询（1个子代理）、广度优先查询（3个子代理）、深度优先查询（4个子代理）',
            '多智能体协作架构：研究主导代理统筹规划、研究子代理并行执行、引用代理自动添加引用',
            '并行处理能力：支持2-6个子代理同时工作，显著提升研究效率（复杂问题5-10分钟完成）',
            '智能工具集成：Web搜索、Web Fetch、Playwright MCP自动处理JavaScript动态页面',
            '来源质量评估：对信息来源进行批判性评估、交叉验证关键事实、识别偏见和推测',
            '自动化引用生成：研究完成后自动添加引用，支持多种引用格式',
            '完全小白友好：无需编程，一行命令启动 deep-research <查询主题>',
            '高度可定制：可编辑skills文件自定义研究策略和代理行为'
        ],
        techStack: ['Claude Code', 'Claude Code Skills', 'MCP Protocol', 'Playwright', 'WebSearch', 'WebFetch', 'Task工具'],
        category: 'AI工具',
        difficulty: '初级'
    },
    {
        id: 'reddit-business-idea-validator',
        name: 'Reddit Business Idea Validator',
        description: '基于AI的商业创意验证工具，通过收集和分析Reddit平台数据来解析市场需求、用户痛点及竞争格局，帮助出海创业者深入了解消费者需求，发现商业机会。',
        icon: '🎯',
        tags: ['市场调研', 'Reddit API', '商业验证', 'AI分析', '出海创业', '数据分析'],
        githubUrl: 'https://github.com/liangdabiao/Reddit_Business_Idea_Validator',
        features: [
            'Reddit数据智能抓取：自动抓取相关帖子和评论，支持自定义搜索关键词、排序方式、时间范围和抓取数量',
            'AI内容深度分析：使用LLM分析用户痛点和市场需求，包括帖子内容分析、评论情感分析、评论标签分析',
            '自动化报告生成：生成专业的市场验证报告（HTML格式），包含互动评分、活跃度分析、TOP3热门帖子展示',
            '多智能体协作架构：Orchestrator Agent任务编排、Scraper Agent数据抓取、Analyzer Agent数据分析、Reporter Agent报告生成',
            'Checkpoint机制：完整执行过程保存，支持中断恢复，数据可追溯性',
            '数据指标体系：评分系统、互动评分、点赞率分析、时间活跃度分析等多维度指标',
            '灵活配置系统：环境变量配置（.env），支持自定义参数调整，多种搜索参数组合',
            '完整测试体系：Reddit API连接测试、端到端测试、集成测试'
        ],
        techStack: ['Python', 'PRAW', 'OpenAI API', 'Pydantic', 'MCP Protocol', 'httpx', 'pytest'],
        category: '商业工具',
        difficulty: '中级'
    },
    {
        id: 'tikhub-api-skill',
        name: 'TikHub API Helper',
        description: 'Claude Code Agent Skill，帮助用户搜索、发现和调用 TikHub API，实现对抖音、TikTok、小红书等12+主流社交平台数据的自动化调研，通过对话即可轻松调用API。',
        icon: '🔌',
        tags: ['TikHub API', '社交媒体', '数据分析', 'Claude Code', '多平台', 'API集成'],
        githubUrl: 'https://github.com/liangdabiao/tikhub_api_skill',
        features: [
            '智能API搜索：通过关键词、标签或操作ID快速搜索TikHub API，支持中英文关键词',
            '一键API调用：直接通过命令行调用TikHub API，无需手动编写请求代码',
            '多平台全覆盖：支持12+主流社交媒体平台，包括抖音、TikTok、小红书、Instagram、YouTube等',
            '自动鉴权机制：内置开发环境API Token，开箱即用',
            '趋势话题追踪：实时获取各平台热门话题和趋势内容',
            '用户资料分析：深度获取用户信息和社交数据分析',
            '跨平台内容搜索：一键搜索多个平台的相关内容',
            '评论互动分析：获取帖子评论列表，进行用户互动分析'
        ],
        techStack: ['Claude Code', 'Agent Skill', 'TikHub API', 'OpenAPI 3.0', 'Python', 'RESTful API'],
        category: 'API工具',
        difficulty: '初级'
    },
    {
        id: 'prompt-chat',
        name: 'AI Prompt Chat',
        description: 'AI提示词的人工智能助手，支持10大应用场景，包括AI生视频、AI生图、AI编程、结构化提示词、数据分析、去AI味、创意写作、深度调研、实时对话和自主智能体。',
        icon: '💬',
        tags: ['提示词工程', 'AI助手', '多场景', '对话优化', 'Prompt Engineering'],
        githubUrl: '',
        features: [
            'AI生视频：专业的视频生成提示词优化，提升视频质量',
            'AI生图：图像生成提示词优化，支持各种艺术风格',
            'AI编程：代码生成和技术问题解决的提示词优化',
            '结构化提示词：JSON格式的结构化输出提示词设计',
            '数据分析：数据分析和可视化的提示词优化',
            '去AI味：让AI生成的内容更自然、更人性化',
            '创意写作与角色扮演：创意写作和角色扮演场景的提示词',
            '深度调研与搜索：深度研究和搜索的提示词优化',
            '实时语音/对话：实时语音对话的提示词设计',
            '长期运行与自主智能体：自主智能体的提示词工程'
        ],
        techStack: ['AI', 'Prompt Engineering', 'Natural Language Processing', 'Conversation AI'],
        category: 'AI工具',
        difficulty: '初级'
    },
    {
        id: 'skill-ten-prompt-generator',
        name: 'Skill Ten - Prompt Generator',
        description: '基于 Claude Code Agent Skills 的 AI 提示词工程系统 - 10个场景化专家，自动路由，精准生成优秀提示词。通过自然语言请求，系统会自动路由到对应的专业 Skill，帮助用户写出高质量的 AI 提示词。',
        icon: '🎨',
        tags: ['Claude Code', 'Agent Skills', '提示词工程', 'AI', '自动化路由', '多场景'],
        githubUrl: 'https://github.com/liangdabiao/skill-ten-prompt-generator',
        features: [
            '自动场景识别：根据用户输入的关键词，自动匹配最合适的专家 Skill',
            '10大场景覆盖：视频生成、图像生成、AI编程、结构化提示词、数据分析、去AI味、创意写作、深度调研、实时语音、长期运行',
            '结构化框架：每个场景都有经过验证的最佳实践框架和模板',
            '双语支持：完整支持中英文输入和输出',
            'Claude Code集成：基于Agent Skills技术，直接与Claude对话即可使用',
            '智能路由系统：关键词自动识别和场景匹配',
            '专业提示词生成：7层视频结构、S-E-L-C图像框架、TDD编程流程等专业模板',
            '模块化架构：10个独立Skill，易于扩展和定制'
        ],
        techStack: ['Claude Code', 'Agent Skills', 'Markdown', 'YAML', 'Prompt Engineering', 'AI'],
        category: 'AI工具',
        difficulty: '中级'
    },
    {
        id: 'social-research-agent',
        name: '社媒调研智能体',
        description: '基于 Claude Code Skills 的社媒舆情深度调研系统，将社媒分析和深度研究两个技能合二为一，实现对抖音、小红书、微博等12+主流社交平台的自动化舆情分析和市场调研。',
        icon: '🔍',
        tags: ['社媒调研', '舆情分析', 'Claude Code', 'Skills', 'TikHub API', '多平台', '自动化调研'],
        githubUrl: 'https://github.com/liangdabiao/social_research_agent',
        features: [
            '双技能合体：社媒调研+深度研究两个Claude Code Skills完美结合，实现全自动化调研',
            '12+平台覆盖：支持抖音、TikTok、小红书、微博、B站、知乎、Instagram、YouTube等主流社交平台',
            '智能任务编排：AI自动启动Web Search和TikHub API进行多维度深度调研',
            '舆情分析报告：生成包含情感分析、话题趋势、用户画像、竞品对比的专业报告',
            '数据可视化：生成详细的数据分析图表，直观展示调研结果',
            '多智能体协作：社媒Agent抓取数据、研究Agent深度分析、报告Agent生成结论',
            '一键式操作：只需输入调研主题，系统自动完成从数据收集到报告生成的全流程',
            '可定制化：支持自定义调研参数、时间范围、数据源和报告格式'
        ],
        techStack: ['Claude Code', 'Agent Skills', 'TikHub API', 'WebSearch', 'WebFetch', '数据分析', '舆情监控'],
        category: '商业工具',
        difficulty: '进阶'
    },
    {
        id: 'bright-data-mcp-research',
        name: 'Bright Data 深度调研工具',
        description: '基于 Bright Data MCP 和 Claude Code Skills 的电商平台深度调研系统，利用专业网络爬虫技术实现 Amazon 等电商平台的市场分析、竞争研究和产品调研。',
        icon: '🌐',
        tags: ['Bright Data', 'MCP', 'Claude Code', '电商调研', '网络爬虫', '深度研究', '数据分析'],
        githubUrl: 'https://github.com/liangdabiao/Bright-Data-MCP-Claude-Skill-deep-research',
        features: [
            'Bright Data MCP集成：专业级网络爬虫和数据提取能力，支持反机器人保护',
            'Claude Code Skills：一键式深度调研命令，全自动化研究流程',
            '多平台电商研究：支持Amazon、eBay、AliExpress等主流电商平台数据抓取',
            '结构化数据分析：生成JSON和Markdown格式的专业研究报告',
            '市场分析维度：市场规模、品牌竞争、技术趋势、定价策略、利润分析',
            'Demo案例库：3D打印机市场分析、便携式电源站市场数据等实战案例',
            'DuckDuckGo搜索：辅助网络搜索工具，补充市场调研数据',
            '浏览器自动化：处理JavaScript渲染的页面，确保数据收集完整性'
        ],
        techStack: ['Bright Data MCP', 'Claude Code', 'Agent Skills', 'Python', 'DuckDuckGo', '浏览器自动化', '数据抓取'],
        category: '商业工具',
        difficulty: '进阶'
    },
    {
        id: 'market-insight-claude-skill',
        name: '市场洞察 Claude 技能',
        description: '基于 Claude Code Agent Skills 的智能市场洞察系统，采用三段式分析框架（事实调研 → 结构化洞察 → 行动机会清单），将海量信息转化为可落地的商业洞察。',
        icon: '🎯',
        tags: ['市场洞察', 'Claude Code', 'Agent Skills', '商业分析', '竞品研究', '机会识别'],
        githubUrl: 'https://github.com/liangdabiao/market-insight-claude-skill',
        features: [
            '三段式洞察框架：Stage 1 事实调研、Stage 2 结构化洞察、Stage 3 行动机会清单',
            '多智能体协作：调研 Agent（网络调研 + 专家网络）、洞察 Agent（策略分析）、机会 Agent（商业转化）',
            '深度事实调研：市场规模、增长率、用户画像、竞争格局、技术趋势、监管环境',
            '结构化洞察：用户核心需求、最大痛点、解决方案差距、未来趋势、胜负手',
            '行动机会清单：机会优先级排序（P0/P1/P2）、执行策略、ROI估算、风险提示',
            '三种输出格式：执行摘要版（核心洞察+P0机会）、完整报告版（全流程分析）、演示文稿版（团队分享）',
            '小白友好：一行命令 /market-insight [产品/市场]，全程自动化完成深度洞察',
            '商业化落地：每个洞察都指向具体行动，每个机会都包含执行路径'
        ],
        techStack: ['Claude Code', 'Agent Skills', 'WebSearch', 'WebFetch', '多智能体协作', '数据分析'],
        category: '商业工具',
        difficulty: '初级'
    },
    {
        id: 'exa-research-mcp-skill',
        name: 'Exa企业与市场研究工具',
        description: '基于 Claude Code 和 Exa 搜索引擎的 AI 驱动企业与市场研究工具，通过技能系统和代理架构进行公司情报、竞争对手分析和市场研究。',
        icon: '🏢',
        tags: ['Exa搜索', '公司研究', '竞争对手分析', 'Claude Code', '市场研究', 'MCP集成'],
        githubUrl: 'https://github.com/liangdabiao/exa-research-mcp-skill',
        features: [
            '智能公司研究：自动收集公司信息、新闻、社交媒体动态、财务数据和 LinkedIn 资料',
            '竞争对手分析：快速构建竞争对手列表，分析市场定位和竞争格局',
            '市场研究：跟踪行业趋势、并购活动、技术发展，生成专业报告',
            '上下文隔离：所有搜索在独立代理中运行，保持主对话整洁',
            '动态调优：根据用户需求自动调整搜索深度（快速10-20个结果，全面50-100个结果）',
            '四种搜索类别：company公司主页、news新闻报道、tweet社交媒体、people人员资料',
            'MCP集成：使用Exa的模型上下文协议服务器进行高级网络搜索',
            '多智能体架构：研究技能 + 任务代理 + Exa搜索 + 精炼输出的完整流程'
        ],
        techStack: ['Claude Code', 'Exa AI', 'MCP Protocol', 'Agent Skills', '多智能体协作', '公司研究'],
        category: '商业工具',
        difficulty: '中级'
    },
    {
        id: 'monica-crm-claude-skill',
        name: 'Monica CRM Claude 技能',
        description: '聊天就是 CRM - 基于 Monica 开源 CRM 的 Claude Code 技能，通过自然对话轻松管理客户关系、联系人信息、提醒事项和待办任务。',
        icon: '👥',
        tags: ['CRM', 'Claude Code', 'OpenClaw', '客户管理', '联系人', '开源'],
        githubUrl: 'https://github.com/liangdabiao/monica-crm-claude-skill',
        features: [
            '对话式CRM管理：通过自然语言对话添加和管理客户信息，无需复杂操作',
            '客户信息记录：轻松记录姓名、电话、地区等基本信息',
            '智能提醒系统：为客户设置提醒事项，如会议、跟进、生日等重要时间节点',
            '标签管理：为客户添加自定义标签，便于分类和快速识别',
            '待办事项管理：为客户关联待办任务，确保不遗漏任何重要事项',
            '生日提醒：记录客户生日并自动设置提醒，贴心服务提升客户体验',
            'Claude Code集成：完美集成Claude Code和OpenClaw，利用AI记忆功能',
            '开源免费：基于Monica开源CRM，可自主搭建和定制'
        ],
        techStack: ['Claude Code', 'OpenClaw', 'Monica CRM', 'PHP', 'Laravel', 'MySQL', 'Docker'],
        category: '商业工具',
        difficulty: '初级'
    },
    {
        id: 'lego-ai-handbook',
        name: 'AI乐高积木拼搭手册',
        description: '基于"元素-组合-功能"三元框架的AI乐高积木手册，讨论元素、组合、功能在设计和现实世界中的应用，特别是乐高这个领域。乐高积木就像现实世界的编程语言！',
        icon: '🧱',
        tags: ['乐高积木', 'AI手册', 'MOC拼搭', '设计原理', '教育工具', '创意思维'],
        githubUrl: '',
        features: [
            '三元框架理论：元素（标准化模块）+ 组合（互锁结构）→ 功能（创造力培养）',
            '精密元素设计：凸点管系统公差精度达0.002mm，确保任意积木兼容性',
            '物理组合技术：互锁结构、机械联动、动态嵌套，增强结构稳定性',
            '智能集成系统：Mindstorms EV3支持Python编程，实现机器人自动化',
            'SNOT技术：Studs Not On Top，侧面凸粒技术，实现更精细的造型',
            '齿轮传动系统：学习机械原理，搭建可动的机械模型',
            'AI智能助手：基于AI的拼搭建议和创意生成，帮助MOC创作',
            '教育价值：培养空间思维、STEM教育、文化传承和创造力'
        ],
        techStack: ['AI', '乐高积木', 'MOC设计', '教育技术', '创意编程'],
        category: '教育工具',
        difficulty: '初级',
        externalUrl: 'https://chat.348349.xyz/centered-chat'
    },
    {
        id: 'seekmoney-ai',
        name: 'SeekMoney AI - 全网找商机',
        description: '帮助创业者从社交媒体找商机的智能系统！支持6大视频平台，基于AI语义聚类和GLM-4.7思考模型深度分析用户痛点，自动发现商业机会。',
        icon: '💰',
        tags: ['商机发现', 'AI分析', '视频平台', '市场调研', 'GLM-4.7', 'Next.js'],
        githubUrl: 'https://github.com/liangdabiao/SeekMoney-ai',
        features: [
            '6大平台覆盖：抖音、小红书、TikTok、Bilibili、微信视频号、YouTube全平台数据采集',
            'AI语义聚类：基于GLM embedding + DBSCAN的智能聚类，自动发现主题和用户痛点',
            'GLM-4.7深度分析：思考模型深度分析痛点深度、市场格局、MVP计划和市场规模评分',
            '智能优先级评分：需求强度 + 市场规模 + 竞争度三维评分，自动排序商业机会',
            'AI产品建议：自动生成产品方案，包含核心功能、技术栈、开发路线图',
            '数据质量分级：exploratory、preliminary、reliable三级质量评估',
            '结果展示导出：可视化表格、详情查看、一键导出CSV格式报告',
            '中英文双语：完整国际化支持，AI分析根据语言自动输出对应内容'
        ],
        techStack: ['Next.js 15', 'React 19', 'Tailwind CSS 4', 'TypeScript', 'GLM-4.7', 'embedding-3', 'DBSCAN', 'TikHub API'],
        category: '商业工具',
        difficulty: '进阶'
    },
    {
        id: 'seedance-prompt-chat',
        name: 'Seedance 2.0 分镜提示词助手',
        description: '专业的AI视频分镜提示词生成专家，帮助你将想法转化为专业提示词。支持图片参考、视频参考、视频延长等多种场景，配备精美的流式对话界面。',
        icon: '🎬',
        tags: ['视频分镜', '提示词生成', 'Seedance', 'AI视频', '流式对话', '阿里云百炼'],
        githubUrl: '',
        features: [
            '专业分镜生成：支持叙事故事、产品展示、角色动作、风景旅拍等多种分镜场景',
            '多模态输入：支持图片和视频作为参考素材，AI根据参考内容生成专业提示词',
            '视频延长功能：基于已有视频内容生成续写分镜提示词',
            '剧情编辑：支持对视频剧情进行颠覆性修改的分镜提示词生成',
            '流式对话界面：精美的渐变设计，实时打字效果，支持Markdown渲染',
            '文件上传支持：支持图片、视频、PDF、Word等多种格式文件上传',
            '阿里云百炼集成：基于通义千问大模型，支持多轮对话和上下文理解',
            '快捷提示按钮：预设常用分镜场景，一键快速生成专业提示词'
        ],
        techStack: ['HTML5', 'CSS3', 'JavaScript', '阿里云百炼', '通义千问', 'SSE流式响应', 'FastAPI', 'Python'],
        category: 'AI工具',
        difficulty: '初级',
        externalUrl: 'https://liang.348349.xyz/seedance-prompt-chat'
    },
    {
        id: 'seedance2-storyboard-generator',
        name: 'Seedance 2.0 故事转视频工作流',
        description: '基于 Claude Code + Skill + Seedance 2.0 的完整 AI 视频制作工作流，将小说、故事一键转化为多集视频系列。从剧本创作到素材规划，再到分镜脚本生成，实现全流程自动化。',
        icon: '🎥',
        tags: ['AI视频制作', 'Seedance 2.0', 'Claude Code', '剧本创作', '分镜脚本', '视频工作流'],
        githubUrl: 'https://github.com/liangdabiao/Seedance2-Storyboard-Generator',
        features: [
            '三件套工具：Claude Code剧本创作 + Nana Banana Pro生图 + Seedance 2.0视频生成',
            '完整工作流：构思主题 → 写剧本 → 生成素材描述 → 生图 → 写分镜脚本 → 逐集生成视频',
            '四幕剧本结构：起承转合的专业剧本框架，自动生成完整故事',
            '素材编号系统：角色(C01-C99)、场景(S01-S99)、道具(P01-P99)的统一管理',
            'Seedance格式：自动生成时间轴格式提示词，支持0-15秒分段描述',
            '视频延长功能：使用视频延长实现各集无缝衔接，创建连续视频系列',
            '风格一致性：统一风格前缀确保所有素材视觉一致性',
            '示例项目：林冲水浒传、聂风风云、莫泊桑项链等实战案例'
        ],
        techStack: ['Claude Code', 'Agent Skills', 'Seedance 2.0', 'Nana Banana Pro', 'Markdown', 'Python'],
        category: 'AI工具',
        difficulty: '进阶'
    },
    {
        id: 'perler-beads-ai',
        name: 'AI拼豆底稿生成器',
        description: '基于开源项目 Zippland/perler-beads，增加AI优化功能，专门生成拼豆图纸的网站。解决传统拼豆软件颜色识别不准确、杂色多、手动着色困难等问题，真正实现一键生成拼豆图纸！',
        icon: '🧵',
        tags: ['AI工具', '拼豆', '即梦AI', 'Next.js', '图像处理', 'Canvas'],
        githubUrl: 'https://github.com/liangdabiao/perler-beads-ai',
        features: [
            'AI优化功能：基于火山引擎即梦AI 4.0模型，智能转换图片为适合拼豆的像素风格',
            '智能颜色合并：自动合并邻近相似颜色，减少颜色数量和颗粒',
            '多种解析风格：支持不同池化逻辑，适应各类图片风格',
            '多色板支持：MARD、COCO、漫漫、盼盼、咪小窝等多种色号系统',
            '背景自动移除：洪水填充算法自动识别并移除背景',
            '手动编辑工具：着色、橡皮擦、颜色替换、放大镜工具',
            '导出功能：带Key图纸、颜色统计图、采购清单(CSV)',
            '17项核心功能：从底稿生成到专心拼豆模式的全流程支持'
        ],
        techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', '火山引擎即梦AI', 'Canvas API', 'BFS算法'],
        category: 'AI工具',
        difficulty: '中等'
    },
    {
        id: 'do-deepagents-skill',
        name: 'DeepAgents Framework Skill',
        description: '掌握 DeepAgents 框架的技能库，基于 LangChain + LangGraph 构建智能代理，提供规划、文件系统、子代理、上下文压缩等核心能力。',
        icon: '🤖',
        tags: ['DeepAgents', 'LangChain', 'LangGraph', 'AI代理', '技能库', '多智能体'],
        githubUrl: 'https://github.com/liangdabiao/do-deepagents-skill',
        features: [
            '5大内置工具：规划(write_todos)、文件系统(read/write/edit等)、Shell执行、子代理(task)、上下文压缩',
            '4种存储后端：StateBackend、FilesystemBackend、StoreBackend、Sandbox',
            'Skills扩展机制：灵活的技能扩展系统，可自定义Agent能力',
            '中间件系统：完整的中间件架构支持',
            '流式输出：支持流式响应和人机协同',
            '沙箱隔离：安全隔离的执行环境',
            '子代理系统：上下文隔离的任务委派，支持多层嵌套',
            '自动上下文管理：85%窗口时自动摘要压缩'
        ],
        techStack: ['DeepAgents', 'LangChain', 'LangGraph', 'Python', 'Claude Code Skills'],
        category: 'AI工具',
        difficulty: '进阶'
    },
    {
        id: 'simple-agentic-stack',
        name: 'Simple Agentic Stack',
        description: '基于MCP和Skill驱动的AI Agent编排系统。LLM通过自然语言编写的Skill按步骤调用MCP Server提供的工具，完成复杂的多数据源联动任务。传统编程和Agent系统的对应：Skill是程序，MCP是库，LLM是语言。',
        icon: '🔗',
        tags: ['MCP', 'Skill驱动', 'AI Agent', 'DeepSeek', 'FastMCP', 'Python'],
        githubUrl: 'https://github.com/liangdabiao/Simple-Agentic-Stack',
        features: ['MCP工具协议标准化接口','Skill自然语言程序','LLM智能运行时','编排器引擎串联工具调用','多数据源联动','配置驱动架构','安全约束机制','独立测试支持'],
        techStack: ['Python', 'MCP (FastMCP)', 'Anthropic SDK', 'DeepSeek API', 'SQLite', 'httpx'],
        category: '基础设施',
        difficulty: '中级'
    },
    {
        id: 'skill-kefu',
        name: 'SKILL智能客服系统',
        description: '基于LangChain/LangGraph的完整智能客服解决方案。整合11个章节核心功能，包括对话记忆、RAG知识库、情绪识别、意图分类、工单系统、监控评价、计划执行、多Agent系统、MCP技能系统等。',
        icon: '🤖',
        tags: ['LangChain', 'LangGraph', 'RAG', 'FastAPI', 'Streamlit', '多Agent'],
        githubUrl: 'https://github.com/liangdabiao/SKILL-kefu',
        features: ['智能对话引擎','RAG知识库检索','7种情绪识别','16种意图分类','工单系统','智能转人工','对话记忆','工具函数集成'],
        techStack: ['LangChain', 'LangGraph', 'FastAPI', 'Streamlit', 'ChromaDB', 'OpenAI API'],
        category: '企业AI',
        difficulty: '高级'
    },
    {
        id: 'ecom-details-image',
        name: '电商视觉创作Skill',
        description: '面向Claude Code/Codex/OpenClaw的跨境电商和国内电商通用视觉创作Skill。精选25个高质量案例，涵盖纯色底产品主图、场景化生活图、平铺图、电商详情图等，一键生成电商全场景图片。',
        icon: '📸',
        tags: ['电商图片', 'GPT-Image-2', 'Claude Code', '提示词工程', '跨境电商'],
        githubUrl: 'https://github.com/liangdabiao/ecom-details-image',
        features: ['纯色底产品主图','场景化生活图','平铺图/摆拍图','电商详情页图片','社媒推广图','直播间场景图','完整提示词模板','跨境+国内双适配'],
        techStack: ['Claude Code', 'GPT-Image-2', 'Agent Skill', 'Markdown', '提示词工程'],
        category: '商业工具',
        difficulty: '初级'
    },
    {
        id: 'multimodal-rag',
        name: '多模态RAG系统',
        description: '基于多模态Embedding+Zilliz+Qwen视觉理解的多模态RAG系统。支持双引擎Embedding和LLM切换。上传PDF用自然语言提问，系统自动检索最相关页面由AI回答。不做文本提取和OCR，直接将页面图片向量化。',
        icon: '📄',
        tags: ['多模态Embedding', 'Zilliz', 'Qwen VL', 'RAG', 'PDF问答', 'DashScope'],
        githubUrl: 'https://github.com/liangdabiao/Multimodal-RAG',
        features: ['图片级PDF向量化','双引擎Embedding','双引擎LLM生成','Zilliz云向量数据库','自然语言问答','Web界面+API服务','极简依赖安装','灵活配置切换'],
        techStack: ['Python', 'Flask', 'PyMuPDF', 'Cohere Embed', 'DashScope', 'Zilliz', 'Qwen VL'],
        category: 'AI工具',
        difficulty: '中级'
    },
    {
        id: 'geo-content-optimizer',
        name: 'GEO内容优化分析工具',
        description: '输入URL自动抓取页面、执行多角度Google搜索、获取Google AI Overview，对比分析后生成可执行的内容优化建议报告。GEO=Generative Engine Optimization，针对AI搜索场景优化网页内容。零依赖。',
        icon: '🔍',
        tags: ['GEO优化', 'Claude Code', 'AI搜索', '内容优化', 'Google AI Overview', '零依赖'],
        githubUrl: 'https://github.com/liangdabiao/GEO-Content-Optimizer-Skill',
        features: ['自动页面抓取','多角度搜索扩展','Google AI Overview获取','搜索结果结构化摘要','智能对比分析','可执行优化报告','零依赖运行','自然语言触发'],
        techStack: ['Claude Code', 'Claude Skill', 'WebSearch', 'Web Reader', 'Playwright MCP'],
        category: '商业工具',
        difficulty: '中级'
    },
    {
        id: 'hyperframes-fix',
        name: 'HyperFrames-fix',
        description: '一键生成可上传有流量视频。让HyperFrames适应国内需求：流畅中文语音、News Flash信息流快消风格、优化整个生成视频流程。一键完成横版竖版快节奏短视频。',
        icon: '🎬',
        tags: ['HyperFrames', 'MiniMax TTS', '中文语音', '短视频', 'Pexels', '视频生成'],
        githubUrl: 'https://github.com/liangdabiao/hyperframes-fix',
        features: ['MiniMax流畅中文语音','News Flash快消风格','一键自动化视频生成','微信公众号文章解析','横版竖版多比例支持','Vibe Video对话式创作','Pexels图库自动匹配','批量生产优化'],
        techStack: ['HyperFrames', 'MiniMax TTS', 'Pexels API', 'AI Agent', 'Python', 'Markdown'],
        category: 'AI工具',
        difficulty: '中级'
    },
    {
        id: 'fashion-ai',
        name: '电商AI生图爆款流水线',
        description: '输入新品平铺图，自动检索相似爆款、分析风格，生成专业宣传图。跨境电商商家传统方式需要请模特拍摄修图，成本高周期长。本项目实现全自动AI生图流水线。',
        icon: '👗',
        tags: ['Milvus', 'Qwen', 'Gemini', 'GPT Image', '向量检索', '跨境电商'],
        githubUrl: 'https://github.com/liangdabiao/Fashion-AI',
        features: ['以图搜爆款混合检索','AI风格分析','AI生成宣传图','Dense+Sparse+标量三路检索','Milvus向量数据库','多模型灵活切换','多比例多分辨率','全云端API调用'],
        techStack: ['Python', 'Milvus', 'OpenRouter API', 'Qwen', 'Gemini', 'GPT Image', 'NVIDIA Embedding'],
        category: '商业工具',
        difficulty: '中级'
    },
    {
        id: 'llm-wiki',
        name: 'LLM Wiki',
        description: '基于Karpathy llm-wiki方法论，利用AI持续构建和维护个人知识库。支持从多种素材源自动整理为结构化wiki，通过Quartz发布为静态wiki网站。通过Claude Agent SDK提供API接口。',
        icon: '📚',
        tags: ['Claude Agent SDK', 'Quartz', 'FastAPI', '知识库', 'RAG', 'Markdown'],
        githubUrl: 'https://github.com/liangdabiao/llm-wiki',
        features: ['8种素材源采集','智能知识整理','批量素材处理','智能查询检索','深度综合分析','知识图谱可视化','健康检查维护','FastAPI服务接口'],
        techStack: ['Claude Agent SDK', 'FastAPI', 'Quartz v4', 'Python', 'SSE', 'Mermaid', 'Cloudflare Pages'],
        category: 'AI工具',
        difficulty: '中级'
    },
    {
        id: 'llm-wiki-agentic-rag',
        name: 'LLM-Wiki Agentic RAG',
        description: 'Claude Agent SDK + LLM-wiki = 最强大的Agentic RAG。让AI当知识编译器，先把所有资料整理成结构清晰的百科全书，以后提问AI直接翻百科书。',
        icon: '🧠',
        tags: ['Claude Agent SDK', 'LLM-Wiki', 'Agentic RAG', '知识编译器', 'Quartz'],
        githubUrl: 'https://github.com/liangdabiao/llm-wiki-claude-agent-sdk-agentic-rag',
        features: ['知识编译器','智能检索翻阅','Agent SDK驱动','API接口服务','Quartz静态发布','多源素材整合','高效推理','实战验证'],
        techStack: ['Claude Agent SDK', 'LLM-Wiki', 'Quartz', 'Python', 'Agentic RAG'],
        category: 'AI工具',
        difficulty: '进阶'
    },
    {
        id: 'legowiki',
        name: 'Lego Wiki',
        description: '基于Lego框架的知识库系统，帮助用户构建和管理个人知识体系，支持AI辅助整理和可视化展示。',
        icon: '🧱',
        tags: ['Python', 'Markdown', '知识管理', 'AI辅助'],
        githubUrl: 'https://github.com/liangdabiao/legowiki',
        features: ['知识库构建','结构化管理','AI辅助整理','搜索检索','多格式支持','实时协作','版本控制','可视化展示'],
        techStack: ['Python', 'Markdown', '知识管理', 'AI辅助'],
        category: '教育工具',
        difficulty: '初级'
    },
    {
        id: 'brick-mosaic',
        name: '乐高积木马赛克生成器',
        description: '参考开源项目深度定制开发的乐高积木马赛克/像素画生成应用，适应大部分图片生成像素画，还带有功能完全一致的微信小程序版本。所有计算在客户端完成。',
        icon: '🧩',
        tags: ['乐高积木', '像素画', 'Canvas', '微信小程序', '客户端计算'],
        githubUrl: 'https://github.com/liangdabiao/brickMosaic',
        features: ['图片转像素画','多种积木板尺寸','客户端本地计算','微信小程序版本','颜色优化算法','图纸导出PDF','乐高色号匹配','支持大部分图片'],
        techStack: ['JavaScript', 'Canvas API', '微信小程序', 'Taro', 'Vue3'],
        category: 'AI工具',
        difficulty: '中等'
    },
    {
        id: 'amazon-skills-liang',
        name: 'Amazon深度分析Skill',
        description: '在nexscope-ai/Amazon-Skills基础上二次开发的Claude Code Skill，适合中国卖家更加深度方便地进行数据分析。',
        icon: '🛍️',
        tags: ['Claude Code', 'Amazon', '跨境电商', '数据分析', '中国卖家'],
        githubUrl: 'https://github.com/liangdabiao/Amazon-Skills-Liang',
        features: ['深度数据分析','中国卖家优化','产品调研分析','竞品对比','市场趋势追踪','关键词研究','评论分析','利润计算'],
        techStack: ['Claude Code', 'Agent Skill', 'Amazon API', 'Python', '数据分析'],
        category: '商业工具',
        difficulty: '进阶'
    },
    {
        id: 'perler-beads-applet',
        name: '拼豆像素画小程序',
        description: '基于Taro+Vue3开发的拼豆像素画创作微信小程序，支持像素画编辑、作品管理、图片导入、图纸导出等功能。',
        icon: '🎨',
        tags: ['Taro', 'Vue3', '微信小程序', 'Canvas', '拼豆'],
        githubUrl: 'https://github.com/liangdabiao/perlerBeadsApplet',
        features: ['像素画编辑器','作品管理','图片导入生成','图纸导出','微信小程序','拼豆色号匹配','多种尺寸支持','作品分享'],
        techStack: ['Taro', 'Vue3', '微信小程序', 'Canvas API', 'JavaScript'],
        category: 'AI工具',
        difficulty: '中等'
    },
    {
        id: 'sprite-generator',
        name: 'AI精灵图生成器',
        description: '精灵图生成器，适合游戏开发使用。根据单个文本提示生成游戏就绪的精灵图动画。基于302.ai构建。',
        icon: '🎮',
        tags: ['302.ai', '精灵图', '游戏开发', 'Next.js', 'AI生图'],
        githubUrl: 'https://github.com/liangdabiao/302Sprite',
        features: ['文本生成精灵图','游戏就绪动画','多种精灵图类型','帧动画支持','透明背景','批量生成','像素风格','302.ai API集成'],
        techStack: ['302.ai API', 'Next.js', 'React', 'TypeScript', 'Canvas API'],
        category: 'AI工具',
        difficulty: '初级'
    },
    {
        id: 'godogen',
        name: 'Godogen AI游戏开发助手',
        description: '使用Claude Code构建完整Godot 4项目的技能集。AI pipeline设计架构、生成美术资源、编写代码、截取截图并修复问题。输出真正的Godot 4项目。',
        icon: '🎯',
        tags: ['Claude Code', 'Godot 4', 'GDScript', '游戏开发', 'AI生成'],
        githubUrl: 'https://github.com/liangdabiao/Godogen',
        features: ['AI生成Godot 4项目','自动架构设计','美术资源生成','代码自动编写','截图测试反馈','Bug自动修复','完整游戏场景','Claude Code Skills'],
        techStack: ['Claude Code', 'Godot 4', 'GDScript', 'Agent Skills', 'Python'],
        category: 'AI工具',
        difficulty: '进阶'
    },
    {
        id: 'lark-workflow',
        name: '飞书AI效率系统',
        description: '基于Claude Agent/OpenClaw Skill+飞书CLI构建的个人AI效率基础设施，22大工作流Skill覆盖CRM、会议、知识库、审批等全场景。',
        icon: '🚀',
        tags: ['Claude Code', '飞书CLI', 'OpenClaw', '工作流', 'AI效率'],
        githubUrl: 'https://github.com/liangdabiao/lark-workflow-feishu-cli',
        features: ['22大工作流Skill','17个原子Skill','10+飞书模块集成','智能调度中枢','SaaS替代方案','自然语言触发','多维表格操作','数据联动'],
        techStack: ['Claude Code', '飞书CLI', 'lark-cli', 'OpenClaw', 'Python'],
        category: '基础设施',
        difficulty: '进阶'
    },
    {
        id: 'kj-llm-wiki',
        name: '跨境电商AI Wiki',
        description: 'Karpathy-llm-wiki方法的实战应用，生成wiki网站分享实战代码，聚焦跨境电商AI自动化相关wiki文档。',
        icon: '📖',
        tags: ['LLM-Wiki', 'Quartz', '跨境电商', 'AI自动化', 'Wiki'],
        githubUrl: 'https://github.com/liangdabiao/kj-llm-wiki',
        features: ['LLM-Wiki方法实战','跨境电商文档','AI自动化代码','Wiki网站生成','实战案例分享','知识体系整理','Quartz静态发布','Markdown格式'],
        techStack: ['LLM-Wiki', 'Quartz', 'Markdown', 'Python', '跨境电商'],
        category: 'AI工具',
        difficulty: '初级'
    },
    {
        id: 'dingtalk-workflow',
        name: '钉钉AI效率系统',
        description: '基于Claude Code/openclaw Skill+钉钉CLI构建的个人AI效率基础设施，10大工作流Skill覆盖钉钉全场景。',
        icon: '🔔',
        tags: ['Claude Code', 'OpenClaw', 'dws', '钉钉CLI', '工作流'],
        githubUrl: 'https://github.com/liangdabiao/dingtalk-cli-workflow',
        features: ['10大工作流Skill','钉钉全模块覆盖','智能调度','自然语言触发','审批流程自动化','消息处理','日程管理','数据联动'],
        techStack: ['Claude Code', 'OpenClaw Skill', 'dws', '钉钉CLI', 'Python'],
        category: '基础设施',
        difficulty: '进阶'
    },
    {
        id: 'wecomcli-crm',
        name: '企业微信Agent工作台',
        description: '基于wecom-cli搭建的企业微信Agent工作台。通过Claude Code/openclaw+Skills实现AI驱动的CRM客户管理、消息处理、会议日程等企业微信操作。',
        icon: '💬',
        tags: ['wecom-cli', 'Claude Code', '企业微信', 'CRM', 'Agent'],
        githubUrl: 'https://github.com/liangdabiao/wecomcli_crm',
        features: ['CRM客户管理','消息自动处理','会议日程管理','AI驱动的客户服务','企业微信全模块覆盖','自然语言交互','工单系统','数据看板'],
        techStack: ['Claude Code', 'OpenClaw Skill', 'wecom-cli', '企业微信', 'Python'],
        category: '企业AI',
        difficulty: '进阶'
    },
    {
        id: 'fetch-everything',
        name: 'Fetch Everything Skills工具箱',
        description: '一套面向Claude Code/openclaw的高质量Skills合集，涵盖网页抓取、文档提取、电商数据处理、云端部署等场景，特别强化了对中文平台的支持。',
        icon: '🔧',
        tags: ['Claude Code', 'Agent Skills', '网页抓取', '数据处理', '中文平台'],
        githubUrl: 'https://github.com/liangdabiao/fetch-everything',
        features: ['网页抓取Skill','文档提取工具','电商数据处理','中文平台强化','云端部署辅助','API调用封装','数据清洗转换','批量处理支持'],
        techStack: ['Claude Code', 'Agent Skills', 'Python', 'Web Scraping', '数据处理'],
        category: '基础设施',
        difficulty: '初级'
    },
    {
        id: 'amazon-sorftime-research',
        name: '亚马逊选品全维度分析工具',
        description: '基于 Sorftime MCP 服务和 Claude Skills 的亚马逊竞品分析工具集。包含 Listing 全维度穿透分析和全品类选品分析两大核心功能，支持五维评分模型和多站点分析。',
        icon: '🛒',
        tags: ['跨境电商', '亚马逊选品', 'Claude Skills', 'MCP', '数据分析', 'Sorftime'],
        githubUrl: 'https://github.com/liangdabiao/amazon-sorftime-research-MCP-skill',
        features: [
            'Listing级别分析：竞品详情、关键词、评论、趋势数据全维度穿透',
            '品类级别分析：Top100产品数据 + 市场大盘统计分析',
            '五维评分模型：市场规模、增长潜力、竞争烈度、进入壁垒、利润空间',
            '多站点支持：14个亚马逊站点（美、日、英、德、法等）+ TikTok 6站点',
            '关键词分析：流量来源、竞品布局、长尾词挖掘',
            '评论情感分析：优势聚类、痛点识别、改进建议',
            '跨平台分析：TikTok带货视频、达人分析、1688采购成本',
            '多格式报告：Markdown + Excel + HTML Dashboard 三种输出格式'
        ],
        techStack: ['Claude Code CLI', 'MCP Protocol', 'Sorftime API', 'Python', 'YAML', 'Bash', 'Excel/HTML生成'],
        category: '数据分析',
        difficulty: '进阶'
    },
    {
        id: 'sif-amazon-research',
        name: 'Sif Amazon Research Platform',
        description: '基于 Sif MCP 的 Amazon 卖家智能调研平台，提供流量分析、关键词反查、竞品研究、广告分析和 AI 智能诊断等能力，支持 Web UI 可视化仪表盘和 RESTful API 两种使用方式。',
        icon: '📊',
        tags: ['Amazon调研', 'Sif MCP', '流量分析', '关键词研究', '广告分析', '竞品分析'],
        githubUrl: 'https://github.com/liangdabiao/sif-amazon-research',
        features: ['运营分析：流量趋势、销量分析、渠道构成、变体分布','关键词研究：反查关键词、需求分析、竞争评估、机会挖掘','广告分析：广告结构、活动分析、关键词表现、CPC评估','竞品分析：多维度竞品强度评估、攻击点识别、弱点分析','智能诊断：AI驱动的根因分析、异常检测、改进建议','机会挖掘：批量关键词评估、市场验证、价格带分析','综合调研：全维度整合分析、一站式决策报告','13个Amazon站点支持'],
        techStack: ['Node.js', 'Sif MCP', 'Express.js', 'RESTful API', 'Web UI Dashboard', 'JavaScript SDK'],
        category: '商业工具',
        difficulty: '中级'
    },
    {
        id: 'flue-framework-skill',
        name: 'Flue Framework Skill',
        description: '探索 Flue Agent Framework 的完整指南，涵盖 createAgent、init、defineTool、defineAgentProfile、路由、SSE 流式传输、生产部署和所有已知陷阱。深入对比 Flue 与 Claude Agent SDK 的架构差异与选型建议。',
        icon: '🏗️',
        tags: ['Flue', 'Agent Framework', 'TypeScript', 'Sandbox', 'AI Agent'],
        githubUrl: 'https://github.com/liangdabiao/flue-framework-skill',
        features: ['Flue框架核心概念解析','三层沙箱策略详解','与Claude Agent SDK深度对比','架构六维逐层拆解','实战选型决策树','常见坑位预警','生产部署指南','完整技术方案'],
        techStack: ['TypeScript', '@flue/sdk', '@flue/cli', '@flue/connectors', 'Cloudflare Workers', 'Node.js'],
        category: 'AI工具',
        difficulty: '进阶'
    },
    {
        id: 'claudesdk-skill',
        name: 'ClaudeSDK Skill',
        description: '通过 Skill 系统让 AI 自学 Claude Agent SDK，自主构建了一个 TikHub 社交媒体数据对话助手。展示了将任意 Skill 转为对外开放 Agent 的完整流程，包含完整的技术方案和端对端测试。',
        icon: '🧠',
        tags: ['Claude Agent SDK', 'Skill系统', 'TikTok', '社交媒体', 'AI助手'],
        githubUrl: 'https://github.com/liangdabiao/claudesdk-skill',
        features: ['AI自学SDK：通过Skill系统理解SDK文档','自动构建Web应用：从技术方案到实现','多平台支持：40+社交媒体平台','实时消息交互：WebSocket双向通信','完整日志系统：调试和监控','前后端分离：Express+React','端对端测试：自动化验证','生产部署：多种方案支持'],
        techStack: ['Claude Agent SDK', 'Express.js', 'WebSocket', 'React 18', 'Vite', 'Tailwind CSS', 'TikHub API'],
        category: 'AI工具',
        difficulty: '进阶'
    },
    {
        id: 'claudesdk-ecom-image-chat',
        name: 'EcomImageChat',
        description: '基于 Claude Agent SDK 构建的 AI 电商视觉创作 Web 应用。用户通过自然语言描述产品信息，AI 自动匹配 25 个电商场景模板，生成专业的图片 Prompt，并可选调用 GPT-Image-2 API 直接生成商品图片。',
        icon: '🎨',
        tags: ['电商视觉', 'AI生图', 'Claude Agent SDK', '场景模板', 'GPT-Image-2'],
        githubUrl: 'https://github.com/liangdabiao/claudesdk-ecom-image-chat',
        features: ['25个场景模板覆盖电商全场景','两种模式：Prompt模式+Generate模式','Campaign Style Lock确保风格一致','转化驱动力诊断','完整PDP图片包一键生成','图片画廊预览','参考产品图上传','13种图片尺寸支持'],
        techStack: ['Claude Agent SDK', 'Express.js', 'WebSocket', 'React 18', 'Tailwind CSS 4', 'Vite 6', 'GPT-Image-2', 'Python 3'],
        category: '商业工具',
        difficulty: '中级'
    },
    {
        id: 'ecom-details-image-ui',
        name: 'Ecom Details Image UI',
        description: '电商详情页图片提取与展示工具，支持淘宝、京东、拼多多、亚马逊等主流电商平台商品图片批量提取、分类整理和智能展示，助力商品内容创作和数据分析。',
        icon: '🖼️',
        tags: ['电商图片', '批量提取', '图片展示', '多平台支持', '智能分类'],
        githubUrl: 'https://github.com/liangdabiao/ecom-details-image-ui',
        features: ['多平台支持：淘宝、京东、拼多多、亚马逊等主流电商平台','批量提取：支持批量输入商品链接，一次性提取多个商品图片','智能分类：自动识别商品主图、详情图、规格图等','图片展示：美观的图片画廊展示界面，支持预览、缩放、下载','格式转换：支持多种图片格式转换，自动压缩优化','数据分析：统计商品图片数量、大小、分辨率等信息'],
        techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js'],
        category: '商业工具',
        difficulty: '初级'
    },
    {
        id: 'ai-investor',
        name: 'AI Investor',
        description: '基于大语言模型的智能投资助手，提供股票分析、市场预测、投资建议和风险评估等全方位投资决策支持，帮助投资者做出更理性、更精准的投资决策。',
        icon: '📈',
        tags: ['AI投资', '股票分析', '市场预测', '风险评估', '投资建议'],
        githubUrl: 'https://github.com/liangdabiao/ai-investor',
        features: ['股票分析：深度分析股票基本面、技术面、财务指标','市场预测：基于历史数据和AI模型预测市场走势','投资建议：根据风险偏好和投资目标提供个性化建议','风险评估：全面评估投资风险，提供风险控制策略','资讯聚合：自动收集和分析财经资讯','投资组合管理：跟踪收益表现，优化资产配置'],
        techStack: ['Python', 'OpenAI API', 'LangChain', 'Pandas', 'FastAPI', 'React'],
        category: '数据分析',
        difficulty: '进阶'
    },
    {
        id: 'weekend-city-trip',
        name: 'Weekend City Trip',
        description: 'AI驱动的周末城市旅行规划工具，根据你的偏好、预算和时间，智能生成个性化的短途旅行方案，让每个周末都精彩无限。',
        icon: '🏙️',
        tags: ['AI旅行', '周末出游', '城市推荐', '行程规划', '个性化'],
        githubUrl: 'https://github.com/liangdabiao/weekend-city-trip',
        features: ['城市推荐：根据距离、天气、季节智能推荐','景点规划：智能规划景点路线，优化游览顺序','美食推荐：根据口味偏好推荐当地特色美食','住宿安排：根据预算和位置偏好推荐住宿','交通规划：规划最佳出行路线，对比多种交通方式','行程优化：智能优化行程安排，确保充足游览时间'],
        techStack: ['React', 'TypeScript', 'Next.js', 'OpenAI API', 'Google Maps API', 'Tailwind CSS'],
        category: 'AI工具',
        difficulty: '中级'
    },
    {
        id: 'amazon-listing-alexa-optimizer',
        name: 'Amazon Listing Alexa 优化检查器',
        description: '面向Alexa for Shopping时代的Amazon Listing诊断与优化Skill，从关键词堆砌升级为AI可理解的产品信号，输出8维评分、P0/P1/P2问题清单和7天行动计划。',
        icon: '🛒',
        tags: ['Amazon', 'Listing优化', 'Alexa', 'AI电商', 'Claude Skill'],
        githubUrl: 'https://github.com/liangdabiao/amazon-listing-alexa-optimizer',
        features: ['8维评分框架：每维度0-10分，换算为100分制综合得分','AI四问覆盖检查：是什么/给谁/解决什么问题/差异化','硬性规则强制：标题≤75字符，Highlights≤125字符','自动触发：检测到Listing优化意图即自动启用','结构化报告：评分+问题清单+改写前后对比+7天行动计划','5大常见误区自检清单，避免AI搜索时代优化陷阱'],
        techStack: ['Claude Code Skill', 'Markdown', 'References框架', 'Prompt驱动', 'WorkBuddy Agent', 'Codex Loader'],
        category: '商业工具',
        difficulty: '进阶'
    },
    {
        id: 'geolook',
        name: 'GeoLook GEO全流程平台',
        description: '自托管的端到端GEO（生成式引擎优化）实施平台，帮助品牌获得DeepSeek、豆包、ChatGPT、Perplexity等AI引擎的引用，覆盖分析-诊断-计划-工单-执行-验收全流程。',
        icon: '🌐',
        tags: ['GEO', 'AI搜索优化', '品牌曝光', '302.AI', 'OpenRouter'],
        githubUrl: 'https://github.com/liangdabiao/geolook',
        features: ['全流程管线：分析→诊断→计划→工单→执行→验收闭环','一个API Key聚合10家LLM平台+9家搜索提供商（302.AI）','每引擎引用份额/位置/提及率量化追踪','六维站点审计+差距诊断，定位优化空间','自动生成实施工单，86%可程序化验收','OpenRouter模式适配西方开源模型（Llama/Mistral/Qwen等）'],
        techStack: ['Python', '302.AI', 'OpenRouter', 'Bocha', 'Tavily', 'Exa', 'Perplexity', 'Markdown Skill'],
        category: '商业工具',
        difficulty: '高级'
    },
    {
        id: 'podcast-shorts-remotion',
        name: '播客短视频生成器',
        description: '将播客/配音音频转换为1080×1920竖屏短视频的Remotion Skill，自动生成中文字幕、章节场景、底部进度条和主题配色，一站式流水线。',
        icon: '🎙️',
        tags: ['播客视频', 'Remotion', 'Whisper', '竖屏短视频', '字幕生成'],
        githubUrl: 'https://github.com/liangdabiao/podcast-shorts-remotion',
        features: ['Whisper转录→Remotion渲染完整流水线','快速模式：ffmpeg+whisper+npm install并行执行','字幕宽度规则（≤20视觉宽度；CN=1, ASCII=0.6）自动换行','5种场景类型：封面/列表/数据/对比/结尾','6款预设主题配色方案','预渲染预览（540×960）作为最终剪辑参考'],
        techStack: ['Python 3.10+', 'OpenAI Whisper', 'FFmpeg', 'Remotion 4', 'React 19', 'TypeScript', 'Node.js 16+'],
        category: 'AI工具',
        difficulty: '进阶'
    },
    {
        id: 'story-handdrawn-remotion',
        name: '手绘日记漫画视频生成器',
        description: 'Remotion Skill将中文故事文本转化为"手绘日记漫画"风格竖屏视频，采用完全免费管线（Agnes Image + edge-tts），每句子三阶段呈现：文字→黑白线稿→彩色插画。',
        icon: '✏️',
        tags: ['手绘漫画', 'Remotion', '故事视频', 'Agnes Image', 'edge-tts'],
        githubUrl: 'https://github.com/liangdabiao/story-handdrawn-remotion',
        features: ['每句三阶段横向擦除呈现（文字→黑白→彩色）','免费默认后端：Agnes Image 2.1 Flash + edge-tts','付费可选：apiz CLI（fal-ai/nano-banana-2）手写字幕','两种输入模式：故事文本或上传手绘扫描稿','两种转场：硬切（默认）或翻页效果','Agent加载器中按主题关键词自动激活'],
        techStack: ['Remotion 4.x', 'React', 'Agnes Image 2.1 Flash', 'apiz CLI', 'MiniMax T2A v2', 'edge-tts', 'FFmpeg', 'MaShanZheng字体'],
        category: 'AI工具',
        difficulty: '进阶'
    },
    {
        id: 'wechat-article-remotion',
        name: '公众号文章视频生成器',
        description: 'Agent Skill将任意微信公众号文章（mp.weixin.qq.com/s/...）转换为演播厅风格Remotion竖屏视频，暖白画布、镜像透视网格背景、顶部章节进度条，完整保留原图不被裁剪。',
        icon: '💬',
        tags: ['公众号', '文章转视频', 'Remotion', '内容创作', 'TTS'],
        githubUrl: 'https://github.com/liangdabiao/wechat-article-remotion',
        features: ['通过ideaflow API进行文章转Markdown抓取','7种场景类型：封面/列表/数据/对比/结尾/文章图片/图片堆栈','双TTS引擎：MiniMax T2A v2（付费）+ edge-tts（免费无Key）','跨Skill共享素材库（9款字体+7款音效）','1080×1920 @ 30fps，无画中画让原文图片主导','关键词字幕高亮（蓝色 #2f6fff）'],
        techStack: ['Remotion 4.0.484', 'React 19.1.0', 'TypeScript 5.8.3', 'Node.js 20/22', 'Python 3.10+', 'edge-tts', 'ideaflow API', 'FFmpeg'],
        category: 'AI工具',
        difficulty: '进阶'
    },
    {
        id: 'geometry-math-proof-remotion',
        name: '数学证明动画生成器',
        description: 'Agent Skill自动将数学证明（勾股定理、欧拉公式、积分等）转换为3Blue1Brown/Khan Academy风格的Remotion视频，代码绘制几何图形与分步揭示公式。',
        icon: '📐',
        tags: ['数学证明', 'Remotion', '教育动画', '3Blue1Brown', '几何'],
        githubUrl: 'https://github.com/liangdabiao/geometry-math-proof-remotion',
        features: ['深色背景#0d0d12搭配高饱和4色配色（红/蓝/绿/黄）','SVG代码绘制几何+strokeDasharray绘制动画（无位图）','右侧公式面板分步揭示，关键变量黄色高亮','TTS驱动时间轴（真实音频帧写回F/durationInFrames）','章节聚焦变暗（1.0激活 vs 0.45变暗）','Q.E.D.结尾卡片含历史/作者署名'],
        techStack: ['Remotion 4.0', 'React 19', 'TypeScript', 'Python 3.8+', 'MiniMax TTS', 'edge-tts', 'FFmpeg', 'Pillow'],
        category: '教育工具',
        difficulty: '高级'
    },
    {
        id: 'paper-cutout-remotion',
        name: '剪纸分层动画生成器',
        description: 'Agent Skill将故事板脚本转换为剪纸分层视频：背景、主角、配角、前景分别渲染为独立PNG，以不同节奏运动，通过遮挡（非3D）创造纵深感。',
        icon: '🏯',
        tags: ['剪纸动画', 'Remotion', '分层动画', '故事板', 'apiz'],
        githubUrl: 'https://github.com/liangdabiao/paper-cutout-remotion',
        features: ['4层模型（背景→背景角色→主角→前景）显式zIndex','apiz生成绿幕角色表，split_sheet_green.py色键抠像','TTS 3层回退：apiz speak→MiniMax直连→edge-tts（免费）','PaperActor组件含primary/secondary/tertiary角色运动预设','锁定样式文件（theme.ts/ui.tsx/cutout.tsx），仅Root.tsx+scenes.tsx可编辑','Config.setConcurrency(2)避免Windows临时目录竞争'],
        techStack: ['Remotion 4', 'React 19', 'apiz CLI', 'Python', 'Pillow', 'NumPy', 'edge-tts', 'MiniMax TTS'],
        category: 'AI工具',
        difficulty: '高级'
    },
    {
        id: 'edulab',
        name: 'EduLab 互动教学Skill套件',
        description: '8个Agent Skill集合，自动生成自包含的互动HTML教学页面，覆盖化学、物理、几何、科普领域，配备Canvas 2D/Three.js动画、分步讲解和滑块参数控制。',
        icon: '📚',
        tags: ['教育工具', '互动教学', 'Three.js', 'Canvas', 'STEM'],
        githubUrl: 'https://github.com/liangdabiao/edulab',
        features: ['8个Skill横跨3个架构家族（Canvas教程、sympy内核、单文件科普）','化学：edu-chem-reaction（3D分子形变/机理引擎）、edu-chem-tutorial（分步课程）','物理：edu-physics（2D Canvas）、edu-physics-3d（Three.js+OrbitControls）','几何：edu-plane/solid/analytic-geometry覆盖平面/立体/解析','edu-sci-viz科普风格（暖奶油纸+海军蓝实验区+KaTeX）','3种输入模式：文字题、随机生成、图片上传（视觉OCR）'],
        techStack: ['Python', 'sympy', 'JavaScript', 'Three.js', 'Canvas 2D', 'KaTeX', 'MathJax', 'HTML5'],
        category: '教育工具',
        difficulty: '高级'
    },
    {
        id: 'apiz-skill',
        name: 'APIZ 多模型创作Skill',
        description: '两个互补的Claude/Codex Skill封装apiz.ai网关——apiz（图像/视频/音频模型CLI完整参考）+ apiz-use（中国电商实战剧本：淘宝主图改版、产品视频、角色一致性、图片本地化）。',
        icon: '🎨',
        tags: ['APIZ', 'AI创作', '电商主图', '视频生成', 'Claude Skill'],
        githubUrl: 'https://github.com/liangdabiao/apiz-skill',
        features: ['6款图像模型（Image 4.0、Nano Banana Pro、Gemini 3 Pro Image、ChatGPT Images 2.0）','24款视频模型（Kling V3/O3、Seedance 2.0、Sora 2、Veo 3.1、Grok Imagine Video）','7款音频模型（海螺TTS/克隆/音乐、火山ASR/字幕）','所有模型ID、成功率、参数内嵌——Agent无需查询命令','电商剧本：先样本后批量、apiz upload防热链、负面提示词','覆盖图片本地化、角色微表情控制、对口型、分镜脚本'],
        techStack: ['apiz CLI', 'Node.js', 'MCP Server', 'Python SDK', 'Claude Code', 'Codex', 'WorkBuddy'],
        category: 'AI工具',
        difficulty: '中等'
    },
    {
        id: 'staticshield-skill',
        name: 'StaticShield 静态加密Skill',
        description: 'Agent Skill将静态HTML（及整站）加密为自解密页面，采用AES-256-CBC + PBKDF2（100万次迭代）+ HMAC-SHA256，全程自然语言控制，零后端零依赖，可部署任意静态托管。',
        icon: '🔐',
        tags: ['HTML加密', 'AES-256', '网络安全', '静态站点', 'Claude Skill'],
        githubUrl: 'https://github.com/liangdabiao/staticshield-skill',
        features: ['AES-256-CBC（PKCS#7）+ PBKDF2-SHA256 100万次迭代 + HMAC Encrypt-then-MAC','--bundle内联CSS/JS/图片为单一加密HTML；--directory批量加密为ZIP','CSPRNG自动生成16位密码，可选SHA-512模式','分享链接#pwd=URL哈希（密码永不发送服务器），N天记住密码','自定义Logo（默认原favicon）、密码提示、分层/叠加加密','WebCrypto客户端完全解密，HTTPS/localhost/file://均可'],
        techStack: ['Node.js ≥18', 'Web Crypto API', 'HTML5', 'CSS3', 'GitHub Pages', 'Vercel', 'Netlify', 'S3'],
        category: '基础设施',
        difficulty: '进阶'
    },
    {
        id: 'geogebra-webchat',
        name: 'GeoGebra WebChat',
        description: 'AI驱动的数学几何白板，将自然语言描述转化为浏览器中的交互GeoGebra图形，支持实时拖拽/缩放/旋转、2D/3D几何、KaTeX公式渲染和多模型切换。',
        icon: '📐',
        tags: ['GeoGebra', '数学白板', 'AI绘图', '交互几何', 'SolidJS'],
        githubUrl: 'https://github.com/liangdabiao/Geogebra-WebChat',
        features: ['自然语言绘图：AI自动生成并执行GeoGebra命令','实时交互画布（拖拽/缩放/旋转）与代数面板同步','流式Markdown+KaTeX公式渲染','2D和3D几何支持','OpenAI兼容API多模型支持（DeepSeek、Qwen、GPT等）','服务端API Key注入，对浏览器隐藏密钥'],
        techStack: ['SolidJS', 'Vite', 'Vercel AI SDK v6', 'GeoGebra CDN', 'marked', 'KaTeX', 'Bun'],
        category: '教育工具',
        difficulty: '进阶'
    },
    {
        id: 'textbooks',
        name: 'Mathigon 互动教科书',
        description: '屡获殊荣的Mathigon互动数学教育平台fork，面向12-18岁学生，搭配自研"mathigon textbooks skill"实现一行命令生成STEM课程。',
        icon: '📚',
        tags: ['Mathigon', '互动教材', 'STEM教育', '在线课程', '数学'],
        githubUrl: 'https://github.com/liangdabiao/textbooks',
        features: ['基于Markdown的互动课程内容（content.md）','TypeScript互动元素（functions.ts）','每课程独立SCSS样式','YAML提示系统支持虚拟导师','共享bios、词汇表、Web组件','GitLocalize翻译工作流+Google Cloud TTS音频解说'],
        techStack: ['Node.js 14+', '@mathigon/core', '@mathigon/fermat', '@mathigon/hilbert', '@mathigon/euclid', '@mathigon/boost', '@mathigon/studio', 'FFmpeg'],
        category: '教育工具',
        difficulty: '中等'
    },
    {
        id: 'video-skills-toolkit',
        name: '视频Skill工具包',
        description: '6个可复用Remotion Agent Skill集合，将短视频制作（脚本→音频→字幕→动画→音效/BGM）转化为可重复的流水线，覆盖谈话头像、公众号、数学证明、剪纸、手绘故事、字幕生成。',
        icon: '🎬',
        tags: ['Remotion', '视频制作', 'Skill集合', '短视频', 'AI视频'],
        githubUrl: 'https://github.com/liangdabiao/video-skills-toolkit',
        features: ['talking-head-remotion：演播厅风格谈话头像模板','wechat-article-remotion：公众号文章转视频（图片不被裁剪）','geometry-math-proof-remotion：3Blue1Brown风格数学证明动画','paper-cutout-remotion：多层剪纸景深动画','sketch-story-remotion：手绘"学习AI"故事模板','audio-to-subtitles：音频/视频转SRT/VTT/JSON字幕'],
        techStack: ['Remotion', 'React/TypeScript', 'Python脚本', 'MiniMax TTS', 'SVG几何', 'FFMPEG', 'Bun'],
        category: 'AI工具',
        difficulty: '高级'
    },
    {
        id: 'course-site-skill',
        name: 'Course Site 课程网站Skill',
        description: 'Agent Skill将任意Markdown文件夹转化为精美的零代码静态课程网站，包含课程、测验、进度追踪，支持⌘K全局搜索和AI学习路径建议。',
        icon: '🎓',
        tags: ['课程网站', 'Markdown', '静态站点', '在线教育', 'Claude Skill'],
        githubUrl: 'https://github.com/liangdabiao/course-site-skill',
        features: ['自动扫描MD仓库，建议阶段/课程边界','将原始MD重写为专业中文课程格式','每课程生成6道题（1预习+3检测+2课后）','通过templates/.brand.json自定义品牌','⌘K全局搜索+AI学习路径建议','部署到EdgeOne Pages、Cloudflare、Vercel、GitHub Pages、OSS/S3'],
        techStack: ['Python', 'HTML/CSS模板', 'Markdown', 'JSON', 'Claude Code', 'Codex', 'Workbuddy', 'EdgeOne Pages'],
        category: '教育工具',
        difficulty: '中等'
    },
    {
        id: 'stem-illustration-skill',
        name: 'STEM插图生成Skill',
        description: '面向STEM领域的AI图像生成Skill，制作科研示意图、教学插图、技术图表，覆盖6个学科24个场景模板，4种风格变体，内置学术诚信守卫与10条STEM提示铁律。',
        icon: '🔬',
        tags: ['STEM插图', '科研图', '示意图', '教学插画', 'Claude Skill'],
        githubUrl: 'https://github.com/liangdabiao/stem-illustration-skill',
        features: ['24个场景模板（信号通路、机理、质粒、架构等）','6个学科：生命科学、医学、化学、物理、工程、数学','4种风格变体：学术/教科书/信息图/3D渲染','双图像API支持（OpenAI同步+apimart.ai异步）','学术诚信守卫（拦截伪造实验数据）','10条STEM提示铁律（十六进制颜色、字体、术语等）'],
        techStack: ['Python', 'OpenAI图像API', 'apimart.ai', 'JSON模板', 'matplotlib', 'LLM Agents', 'SKILL.md', 'Pillow'],
        category: '教育工具',
        difficulty: '进阶'
    }
];

// DOM元素
const productsGrid = document.getElementById('productsGrid');
const footerProducts = document.getElementById('footerProducts');
const contactForm = document.getElementById('contactForm');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 只在主页执行产品渲染
    const productsGrid = document.getElementById('productsGrid');
    const footerProducts = document.getElementById('footerProducts');

    if (productsGrid && footerProducts) {
        renderProducts();
        renderFooterProducts();
        setupProductFilters();
    }

    setupNavigation();
    setupMobileMenu();
    setupSmoothScroll();
    setupContactForm();
    setupAnimations();
});

// 设置产品筛选功能
function setupProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 更新按钮状态
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.background = 'white';
                btn.style.color = 'var(--primary-color)';
            });
            this.classList.add('active');
            this.style.background = 'var(--primary-color)';
            this.style.color = 'white';

            // 获取筛选类别
            const filter = this.dataset.filter;

            // 筛选产品
            const filteredProducts = filter === 'all'
                ? products
                : products.filter(product => product.category === filter);

            // 重新渲染产品
            renderFilteredProducts(filteredProducts);
        });
    });
}

// 渲染筛选后的产品
function renderFilteredProducts(filteredProducts) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <div style="font-size: 4rem; margin-bottom: 20px;">🔍</div>
                <h3 style="font-size: 1.5rem; margin-bottom: 10px;">暂无相关产品</h3>
                <p style="color: #666;">请尝试选择其他分类</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-product-id="${product.id}" data-category="${product.category}">
            <div class="product-icon">${product.icon}</div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-tags">
                ${product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')}
            </div>
            <div style="display: flex; gap: 10px; margin-top: 15px;">
                <a href="${getProductPageUrl(product.id)}" class="product-link" data-product-id="${product.id}" style="flex: 1; text-align: center;">
                    了解详情 →
                </a>
                <a href="${getDocPageUrl(product.id)}" class="product-link" style="flex: 1; text-align: center; background: #f0f0f0; color: #333;">
                    📖 文档
                </a>
            </div>
        </div>
    `).join('');

    // 添加点击事件
    document.querySelectorAll('.product-card').forEach(element => {
        element.addEventListener('click', function(e) {
            if (e.target.classList.contains('product-link')) {
                // 如果是链接，允许默认跳转行为
                return;
            }
            const productId = this.dataset.productId;
            showProductDetail(productId);
        });
    });
}

// 获取产品页面URL
function getProductPageUrl(productId) {
    // 首先检查产品是否有外部URL
    const product = products.find(p => p.id === productId);
    if (product && product.externalUrl) {
        return product.externalUrl;
    }

    // 使用预定义的页面映射
    const productPages = {
        'ai-stop-motion': './ai-stop-motion.html',
        'claude-data-analysis': './claude-data-analysis.html',
        'a-stock-analysis': './a-stock-analysis.html',
        'business-idea-validator': './business-idea-validator.html',
        'easy-amazon-voc': './easy-amazon-voc.html',
        'ai-data-hub': './ai-data-hub.html',
        'ai-generated-english-podcast-videos': './ai-generated-english-podcast-videos.html',
        'langgraph-multi-agent-rag-customer-support': './langgraph-multi-agent-rag-customer-support.html',
        'llm-agent-resume': './llm-agent-resume.html',
        'resume-matcher-agent-cn': './resume-matcher-agent-cn.html',
        'facebook-ads-analyzer': './facebook-ads-analyzer.html',
        'bailian-ai-chatbox': './bailian-ai-chatbox.html',
        'claude-code-stock-deep-research-agent': './claude-code-stock-deep-research-agent.html',
        'xhs-business-idea-validator': './xhs-business-idea-validator.html',
        'claude-data-analysis-ultra': './claude-data-analysis-ultra.html',
        'claude-code-deep-research': './claude-code-deep-research.html',
        'simple-claude-deep-research-agent': './simple-claude-deep-research-agent.html',
        'reddit-business-idea-validator': './reddit-business-idea-validator.html',
        'tikhub-api-skill': './tikhub-api-skill.html',
        'prompt-chat': './prompt-chat.html',
        'skill-ten-prompt-generator': './skill-ten-prompt-generator.html',
        'social-research-agent': './social-research-agent.html',
        'seekmoney-ai': './seekmoney-ai.html',
        'monica-crm-claude-skill': './monica-crm-claude-skill.html',
        'bright-data-mcp-research': './bright-data-mcp-research.html',
        'market-insight-claude-skill': './market-insight-claude-skill.html',
        'exa-research-mcp-skill': './exa-research-mcp-skill.html',
        'seedance-prompt-chat': 'https://liang.348349.xyz/seedance-prompt-chat',
        'seedance2-storyboard-generator': './seedance2-storyboard-generator.html',
        'perler-beads-ai': './perler-beads-ai.html',
        'amazon-sorftime-research': './amazon-sorftime-research.html',
        'do-deepagents-skill': './do-deepagents-skill.html',
        'simple-agentic-stack': './simple-agentic-stack.html',
        'skill-kefu': './skill-kefu.html',
        'ecom-details-image': './ecom-details-image.html',
        'multimodal-rag': './multimodal-rag.html',
        'geo-content-optimizer': './geo-content-optimizer.html',
        'hyperframes-fix': './hyperframes-fix.html',
        'fashion-ai': './fashion-ai.html',
        'llm-wiki': './llm-wiki.html',
        'llm-wiki-agentic-rag': './llm-wiki-agentic-rag.html',
        'legowiki': './legowiki.html',
        'brick-mosaic': './brick-mosaic.html',
        'amazon-skills-liang': './amazon-skills-liang.html',
        'perler-beads-applet': './perler-beads-applet.html',
        'sprite-generator': './sprite-generator.html',
        'godogen': './godogen.html',
        'lark-workflow': './lark-workflow.html',
        'kj-llm-wiki': './kj-llm-wiki.html',
        'dingtalk-workflow': './dingtalk-workflow.html',
        'wecomcli-crm': './wecomcli-crm.html',
        'fetch-everything': './fetch-everything.html',
        'ecom-details-image-ui': './ecom-details-image-ui.html',
        'ai-investor': './ai-investor.html',
        'weekend-city-trip': './weekend-city-trip.html',
        'amazon-listing-alexa-optimizer': './amazon-listing-alexa-optimizer.html',
        'geolook': './geolook.html',
        'podcast-shorts-remotion': './podcast-shorts-remotion.html',
        'story-handdrawn-remotion': './story-handdrawn-remotion.html',
        'wechat-article-remotion': './wechat-article-remotion.html',
        'geometry-math-proof-remotion': './geometry-math-proof-remotion.html',
        'paper-cutout-remotion': './paper-cutout-remotion.html',
        'edulab': './edulab.html',
        'apiz-skill': './apiz-skill.html',
        'staticshield-skill': './staticshield-skill.html',
        'geogebra-webchat': './geogebra-webchat.html',
        'textbooks': './textbooks.html',
        'video-skills-toolkit': './video-skills-toolkit.html',
        'course-site-skill': './course-site-skill.html',
        'stem-illustration-skill': './stem-illustration-skill.html'
    };
    return productPages[productId] || `./${productId}.html`;
}

// 获取文档页面URL
function getDocPageUrl(productId) {
    return `./docs/docs/${productId}.html`;
}

// 渲染产品卡片
function renderProducts() {
    if (!productsGrid) return;

    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" data-product-id="${product.id}" data-category="${product.category}">
            <div class="product-icon">${product.icon}</div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-tags">
                ${product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')}
            </div>
            <div style="display: flex; gap: 10px; margin-top: 15px;">
                <a href="${getProductPageUrl(product.id)}" class="product-link" data-product-id="${product.id}" style="flex: 1; text-align: center;">
                    了解详情 →
                </a>
                <a href="${getDocPageUrl(product.id)}" class="product-link" style="flex: 1; text-align: center; background: #f0f0f0; color: #333;">
                    📖 文档
                </a>
            </div>
        </div>
    `).join('');

    // 添加点击事件
    document.querySelectorAll('.product-card').forEach(element => {
        element.addEventListener('click', function(e) {
            if (e.target.classList.contains('product-link')) {
                // 如果是链接，允许默认跳转行为
                return;
            }
            const productId = this.dataset.productId;
            showProductDetail(productId);
        });
    });
}

// 渲染页脚产品链接
function renderFooterProducts() {
    if (!footerProducts) return;

    footerProducts.innerHTML = products.map(product => `
        <li><a href="/product/${product.id}" data-product-id="${product.id}">${product.name}</a></li>
    `).join('');

    footerProducts.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = this.dataset.productId;
            showProductDetail(productId);
        });
    });
}

// 显示产品详情
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // 创建产品详情模态框
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="modal-header">
                    <div class="modal-icon">${product.icon}</div>
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                </div>
                <div class="modal-body">
                    <h3>功能特点</h3>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <div class="product-tags">
                        ${product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" onclick="useProduct('${product.id}')">立即使用</button>
                    <button class="btn btn-secondary modal-close-btn">关闭</button>
                </div>
            </div>
        </div>
    `;

    // 添加模态框样式
    if (!document.getElementById('modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .product-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 2000;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .modal-overlay {
                background: rgba(0, 0, 0, 0.5);
                padding: 20px;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .modal-content {
                background: white;
                border-radius: 12px;
                max-width: 600px;
                width: 100%;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
            }
            .modal-close {
                position: absolute;
                top: 15px;
                right: 15px;
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #64748b;
            }
            .modal-header {
                padding: 30px 30px 20px;
                text-align: center;
            }
            .modal-icon {
                font-size: 3rem;
                margin-bottom: 1rem;
            }
            .modal-header h2 {
                margin-bottom: 0.5rem;
            }
            .modal-body {
                padding: 0 30px 20px;
            }
            .modal-body h3 {
                margin-bottom: 1rem;
            }
            .modal-body ul {
                margin-bottom: 1.5rem;
                padding-left: 20px;
            }
            .modal-body li {
                margin-bottom: 0.5rem;
                color: #64748b;
            }
            .modal-footer {
                padding: 20px 30px 30px;
                display: flex;
                gap: 1rem;
                justify-content: center;
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(modal);

    // 添加关闭事件
    const closeModal = () => {
        modal.remove();
        document.body.style.overflow = '';
    };

    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-close-btn').addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    });

    document.body.style.overflow = 'hidden';
}

// 使用产品功能
function useProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // 如果是AI定格动画生成器，直接跳转到产品详情页
    if (productId === 'ai-stop-motion') {
        window.location.href = '/product.html';
        return;
    }

    // 如果是Claude数据分析助手，跳转到专门的页面
    if (productId === 'claude-data-analysis') {
        window.location.href = '/claude-data-analysis.html';
        return;
    }

    // 如果是A股智能分析系统，跳转到专门的页面
    if (productId === 'a-stock-analysis') {
        window.location.href = '/a-stock-analysis.html';
        return;
    }

    // 如果是商业创意验证器，跳转到专门的页面
    if (productId === 'business-idea-validator') {
        window.location.href = '/business-idea-validator.html';
        return;
    }

    // 如果是Amazon商品评论分析系统，跳转到专门的页面
    if (productId === 'easy-amazon-voc') {
        window.location.href = '/easy-amazon-voc.html';
        return;
    }

    // 如果是AI数据枢纽，跳转到专门的页面
    if (productId === 'ai-data-hub') {
        window.location.href = '/ai-data-hub.html';
        return;
    }

    // 如果是AI生成英语播客视频，跳转到专门的页面
    if (productId === 'ai-generated-english-podcast-videos') {
        window.location.href = '/ai-generated-english-podcast-videos.html';
        return;
    }

    // 如果是LangGraph多智能体RAG客服系统，跳转到专门的页面
    if (productId === 'langgraph-multi-agent-rag-customer-support') {
        window.location.href = '/langgraph-multi-agent-rag-customer-support.html';
        return;
    }

    // 如果是智能简历筛选系统，跳转到专门的页面
    if (productId === 'llm-agent-resume') {
        window.location.href = '/llm-agent-resume.html';
        return;
    }

    // 如果是简历匹配器，跳转到专门的页面
    if (productId === 'resume-matcher-agent-cn') {
        window.location.href = '/resume-matcher-agent-cn.html';
        return;
    }

    // 如果是Facebook广告分析器，跳转到专门的页面
    if (productId === 'facebook-ads-analyzer') {
        window.location.href = '/facebook-ads-analyzer.html';
        return;
    }

    // 如果是百炼AI聊天框，跳转到专门的页面
    if (productId === 'bailian-ai-chatbox') {
        window.location.href = '/bailian-ai-chatbox.html';
        return;
    }

    // 如果是Claude Code股票深度研究代理，跳转到专门的页面
    if (productId === 'claude-code-stock-deep-research-agent') {
        window.location.href = '/claude-code-stock-deep-research-agent.html';
        return;
    }

    // 如果是小红书商业创意验证器，跳转到专门的页面
    if (productId === 'xhs-business-idea-validator') {
        window.location.href = '/xhs-business-idea-validator.html';
        return;
    }

    // 如果是Claude数据分析终极版，跳转到专门的页面
    if (productId === 'claude-data-analysis-ultra') {
        window.location.href = '/claude-data-analysis-ultra.html';
        return;
    }

    // 如果是Claude Code Deep Research，跳转到专门的页面
    if (productId === 'claude-code-deep-research') {
        window.location.href = '/claude-code-deep-research.html';
        return;
    }

    // 如果是Simple Claude Deep Research Agent，跳转到专门的页面
    if (productId === 'simple-claude-deep-research-agent') {
        window.location.href = '/simple-claude-deep-research-agent.html';
        return;
    }

    // 如果是Reddit Business Idea Validator，跳转到专门的页面
    if (productId === 'reddit-business-idea-validator') {
        window.location.href = '/reddit-business-idea-validator.html';
        return;
    }

    // 如果是TikHub API Helper，跳转到专门的页面
    if (productId === 'tikhub-api-skill') {
        window.location.href = '/tikhub-api-skill.html';
        return;
    }

    // 如果是AI Prompt Chat，跳转到专门的页面
    if (productId === 'prompt-chat') {
        window.location.href = '/prompt-chat.html';
        return;
    }

    // 如果是Skill Ten - Prompt Generator，跳转到专门的页面
    if (productId === 'skill-ten-prompt-generator') {
        window.location.href = '/skill-ten-prompt-generator.html';
        return;
    }

    // 如果是社媒调研智能体，跳转到专门的页面
    if (productId === 'social-research-agent') {
        window.location.href = '/social-research-agent.html';
        return;
    }

    // 如果是Bright Data深度调研工具，跳转到专门的页面
    if (productId === 'bright-data-mcp-research') {
        window.location.href = '/bright-data-mcp-research.html';
        return;
    }

    // 如果是市场洞察Claude技能，跳转到专门的页面
    if (productId === 'market-insight-claude-skill') {
        window.location.href = '/market-insight-claude-skill.html';
        return;
    }

    // 如果是Exa企业与市场研究工具，跳转到专门的页面
    if (productId === 'exa-research-mcp-skill') {
        window.location.href = '/exa-research-mcp-skill.html';
        return;
    }

    // 如果是Monica CRM Claude技能，跳转到专门的页面
    if (productId === 'monica-crm-claude-skill') {
        window.location.href = '/monica-crm-claude-skill.html';
        return;
    }

    // 如果是SeekMoney AI，跳转到专门的页面
    if (productId === 'seekmoney-ai') {
        window.location.href = '/seekmoney-ai.html';
        return;
    }

    // 如果是Seedance 2.0 分镜提示词助手，跳转到外部网站
    if (productId === 'seedance-prompt-chat') {
        window.open(product.externalUrl || 'https://liang.348349.xyz/seedance-prompt-chat', '_blank');
        return;
    }

    // 如果是Seedance2 Storyboard Generator，跳转到专门的页面
    if (productId === 'seedance2-storyboard-generator') {
        window.location.href = '/seedance2-storyboard-generator.html';
        return;
    }

    // 如果是AI乐高积木拼搭手册，跳转到外部网站
    if (productId === 'lego-ai-handbook') {
        window.open(product.externalUrl || 'https://chat.348349.xyz/centered-chat', '_blank');
        return;
    }

    // 如果是AI拼豆底稿生成器，跳转到专门的页面
    if (productId === 'perler-beads-ai') {
        window.location.href = '/perler-beads-ai.html';
        return;
    }

    // 如果是亚马逊选品全维度分析工具，跳转到专门的页面
    if (productId === 'amazon-sorftime-research') {
        window.location.href = '/amazon-sorftime-research.html';
        return;
    }

    // 如果是DeepAgents Framework Skill，跳转到专门的页面
    if (productId === 'do-deepagents-skill') {
        window.location.href = '/do-deepagents-skill.html';
        return;
    }

    // 新增项目跳转
    const newProductPages = {
        'simple-agentic-stack': 'simple-agentic-stack.html',
        'skill-kefu': 'skill-kefu.html',
        'ecom-details-image': 'ecom-details-image.html',
        'multimodal-rag': 'multimodal-rag.html',
        'geo-content-optimizer': 'geo-content-optimizer.html',
        'hyperframes-fix': 'hyperframes-fix.html',
        'fashion-ai': 'fashion-ai.html',
        'llm-wiki': 'llm-wiki.html',
        'llm-wiki-agentic-rag': 'llm-wiki-agentic-rag.html',
        'legowiki': 'legowiki.html',
        'brick-mosaic': 'brick-mosaic.html',
        'amazon-skills-liang': 'amazon-skills-liang.html',
        'perler-beads-applet': 'perler-beads-applet.html',
        'sprite-generator': 'sprite-generator.html',
        'godogen': 'godogen.html',
        'lark-workflow': 'lark-workflow.html',
        'kj-llm-wiki': 'kj-llm-wiki.html',
        'dingtalk-workflow': 'dingtalk-workflow.html',
        'wecomcli-crm': 'wecomcli-crm.html',
        'fetch-everything': 'fetch-everything.html',
        'sif-amazon-research': 'sif-amazon-research.html',
        'flue-framework-skill': 'flue-framework-skill.html',
        'claudesdk-skill': 'claudesdk-skill.html',
        'claudesdk-ecom-image-chat': 'claudesdk-ecom-image-chat.html',
        'ecom-details-image-ui': 'ecom-details-image-ui.html',
        'ai-investor': 'ai-investor.html',
        'weekend-city-trip': 'weekend-city-trip.html',
        'amazon-listing-alexa-optimizer': 'amazon-listing-alexa-optimizer.html',
        'geolook': 'geolook.html',
        'podcast-shorts-remotion': 'podcast-shorts-remotion.html',
        'story-handdrawn-remotion': 'story-handdrawn-remotion.html',
        'wechat-article-remotion': 'wechat-article-remotion.html',
        'geometry-math-proof-remotion': 'geometry-math-proof-remotion.html',
        'paper-cutout-remotion': 'paper-cutout-remotion.html',
        'edulab': 'edulab.html',
        'apiz-skill': 'apiz-skill.html',
        'staticshield-skill': 'staticshield-skill.html',
        'geogebra-webchat': 'geogebra-webchat.html',
        'textbooks': 'textbooks.html',
        'video-skills-toolkit': 'video-skills-toolkit.html',
        'course-site-skill': 'course-site-skill.html',
        'stem-illustration-skill': 'stem-illustration-skill.html'
    };

    if (newProductPages[productId]) {
        window.location.href = '/' + newProductPages[productId];
        return;
    }

    // 对于其他产品，显示开发中提示
    alert(`正在启动 ${product.name}...\n\n功能开发中，敬请期待！`);

    // 关闭模态框
    document.querySelector('.product-modal')?.remove();
    document.body.style.overflow = '';
}

// 导航设置
function setupNavigation() {
    // 高亮当前导航项
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    function highlightNav() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink?.classList.add('active');
            } else {
                navLink?.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNav);
    highlightNav();
}

// 移动端菜单
function setupMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');

        // 动画汉堡菜单
        const bars = this.querySelectorAll('.bar');
        if (navMenu.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // 点击链接后关闭菜单
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const bars = navToggle.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });
}

// 平滑滚动
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 联系表单
function setupContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // 验证表单数据
        if (!data.name || !data.email || !data.message) {
            alert('请填写所有必填字段');
            return;
        }

        // 验证邮箱格式
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('请输入有效的邮箱地址');
            return;
        }

        // 构建Server酱推送内容
        const shortTitle = `${data.name}：${data.email}`;
        const longContent = `姓名：${data.name}\n邮箱：${data.email}\n消息：${data.message}`;

        // 发送到Server酱
        sendToServerChan(shortTitle, longContent, data);
    });
}

// 发送消息到Server酱
async function sendToServerChan(shortTitle, longContent, formData) {
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = '发送中...';
    submitBtn.disabled = true;

    try {
        // 注意：这里使用测试URL，实际使用时请替换为您的Server酱 Key
        // 测试Key：SCT234551TNJnEupFOBpL4SSKv74ibkqeR
        const serverChanUrl = `https://sctapi.ftqq.com/SCT234551TNJnEupFOBpL4SSKv74ibkqeR.send`;

        const params = new URLSearchParams();
        params.append('title', shortTitle);
        params.append('desp', longContent);

        const response = await fetch(`${serverChanUrl}?${params.toString()}`, {
            method: 'GET',
            mode: 'no-cors' // 由于跨域限制，使用no-cors模式
        });

        // 由于使用no-cors模式，我们无法直接读取响应状态
        // 但Server酱通常会成功发送

        alert(`消息已成功发送！我们会尽快回复您。`);
        document.getElementById('contactForm').reset();

    } catch (error) {
        console.error('发送失败:', error);

        // 如果Server酱发送失败，显示备用提示
        alert(`消息提交成功！我们会尽快回复您。\n\n姓名：${formData.name}\n邮箱：${formData.email}`);

        // 也可以选择重定向到邮箱客户端
        // const mailtoUrl = `mailto:your-email@example.com?subject=来自网站的联系消息&body=${encodeURIComponent(longContent)}`;
        // window.open(mailtoUrl);

    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// 动画效果
function setupAnimations() {
    // 滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察需要动画的元素
    document.querySelectorAll('.product-card, .feature-card, .stat-card, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Hero动画
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
}

// 添加导航项活动状态样式
const activeNavStyle = document.createElement('style');
activeNavStyle.textContent = `
    .nav-link.active {
        color: var(--primary-color) !important;
    }
    .nav-link.active::after {
        transform: scaleX(1) !important;
    }
`;
document.head.appendChild(activeNavStyle);