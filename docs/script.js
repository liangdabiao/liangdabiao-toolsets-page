// 产品数据
const products = [
    {
        id: 'ai-stop-motion',
        name: 'AI 定格动画生成器',
        description: '基于单张图片创建令人惊艳的定格动画！使用 Gemini Nano AI 技术生成姿势序列和动画帧，让你的照片动起来。',
        icon: '🎬',
        tags: ['AI工具', '定格动画', 'Gemini Nano', 'Next.js'],
        githubUrl: 'https://github.com/liangdabiao/ai-make-face-meme',
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
        category: '商业工具',
        difficulty: '中级'
    }
];

// DOM元素
const projectList = document.getElementById('project-list');
const featuredProducts = document.getElementById('featured-products');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    renderProjectList();
    renderFeaturedProducts();
    setupEventListeners();
    setActiveProjectFromUrl();
});

// 渲染项目列表
function renderProjectList() {
    if (projectList) {
        // 按类别分组
        const categories = {};
        products.forEach(product => {
            if (!categories[product.category]) {
                categories[product.category] = [];
            }
            categories[product.category].push(product);
        });

        // 渲染分组列表
        let html = '';
        for (const [category, items] of Object.entries(categories)) {
            html += `<li class="category-header">${category}</li>`;
            items.forEach(product => {
                html += `
                <li>
                    <a href="https://liang.348349.xyz/docs/docs/${product.id}.html" data-project="${product.id}">
                        ${product.icon} ${product.name}
                    </a>
                </li>`;
            });
        }

        projectList.innerHTML = html;
    }
}

// 渲染特色产品
function renderFeaturedProducts() {
    if (featuredProducts) {
        // 选取前9个产品作为特色展示
        const featured = products.slice(0, 9);

        featuredProducts.innerHTML = featured.map(product => `
            <div class="product-card">
                <h3>${product.icon} ${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-tags">
                    ${product.tags.slice(0, 3).map(tag => `<span class="product-tag">${tag}</span>`).join('')}
                </div>
                <div class="product-links">
                    <a href="https://liang.348349.xyz/docs/docs/${product.id}.html" class="doc-link">📖 查看文档</a>
                    ${product.githubUrl ? `<a href="${product.githubUrl}" target="_blank" class="github-link">📂 GitHub</a>` : ''}
                </div>
            </div>
        `).join('');
    }
}

// 设置事件监听器
function setupEventListeners() {
    // 搜索功能
    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // 快速导航链接
    document.querySelectorAll('[data-project]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            window.location.href = `https://liang.348349.xyz/docs/docs/${projectId}.html`;
        });
    });
}

// 执行搜索
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (!searchTerm) return;
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    
    // 简单的搜索结果显示
    alert(`搜索 "${searchTerm}" 找到 ${filteredProducts.length} 个结果。在实际实现中，这将引导您到搜索结果页面。`);
}

// 根据URL设置活动项目
function setActiveProjectFromUrl() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    
    if (filename !== 'index.html' && filename.endsWith('.html')) {
        const projectId = filename.replace('.html', '');
        const activeLink = document.querySelector(`.main-nav a[data-project="${projectId}"]`);
        if (activeLink) {
            // 移除其他活动链接
            document.querySelectorAll('.main-nav a.active').forEach(el => {
                el.classList.remove('active');
            });
            // 添加活动类
            activeLink.classList.add('active');
            
            // 滚动到该元素
            activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
}

// 工具函数：将文本转换为URL友好的slug
function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

// 工具函数：转义HTML特殊字符
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// 工具函数：简单的markdown渲染器
function simpleMarkdown(text) {
    if (!text) return '';
    
    // 转换粗体
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // 转换斜体
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // 转换标题
    text = text.replace(/^### (.*$)/gm, '<h3>$1</h3>');
    text = text.replace(/^## (.*$)/gm, '<h2>$1</h2>');
    text = text.replace(/^# (.*$)/gm, '<h1>$1</h1>');
    // 转换链接
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
    // 转换代码块
    text = text.replace(/`(.*?)`/g, '<code>$1</code>');
    // 转换换行
    text = text.replace(/\n\n/g, '</p><p>');
    text = text.replace(/\n/g, '<br>');
    
    return '<p>' + text + '</p>';
}