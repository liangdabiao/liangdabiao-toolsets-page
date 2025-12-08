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
    ];

// DOM元素
const productsGrid = document.getElementById('productsGrid');
const footerProducts = document.getElementById('footerProducts');
const contactForm = document.getElementById('contactForm');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    renderFooterProducts();
    setupNavigation();
    setupMobileMenu();
    setupSmoothScroll();
    setupContactForm();
    setupAnimations();
});

// 渲染产品卡片
function renderProducts() {
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-icon">${product.icon}</div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-tags">
                ${product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')}
            </div>
            <a href="/product/${product.id}" class="product-link" data-product-id="${product.id}">
                了解详情 →
            </a>
        </div>
    `).join('');

    // 添加点击事件
    document.querySelectorAll('.product-card, .product-link').forEach(element => {
        element.addEventListener('click', function(e) {
            if (e.target.classList.contains('product-link')) {
                e.preventDefault();
            }
            const productId = this.dataset.productId;
            showProductDetail(productId);
        });
    });
}

// 渲染页脚产品链接
function renderFooterProducts() {
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

    // 对于其他产品，显示开发中提示
    alert(`正在启动 ${product.name}...\\n\\n功能开发中，敬请期待！`);

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

        // 模拟发送表单
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '发送中...';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert(`感谢您的消息，${data.name}！我们会尽快回复您。`);
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
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