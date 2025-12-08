// Cloudflare Workers 脚本
const API_ROUTES = {
  '/api/products': handleGetProducts,
  '/api/contact': handleContact,
  '/product/': handleProductDetail
};

// 静态文件缓存
const STATIC_CACHE = {
  'index.html': 'text/html',
  'styles.css': 'text/css',
  'script.js': 'application/javascript'
};

// 产品数据
const products = [
  {
    id: 'ai-face-meme',
    name: 'AI 面包表情生成器',
    description: '基于 AI 技术的面部表情包生成工具，让你的表情包创作更加有趣和简单！支持多种风格和自定义选项。',
    icon: '🤖',
    tags: ['AI工具', '表情包', '图像处理', '开源项目'],
    githubUrl: 'https://github.com/liangdabiao/ai-make-face-meme',
    features: [
      'AI 智能面部识别和表情生成',
      '多种表情包风格模板',
      '自定义文字和贴纸',
      '高质量图片输出',
      '开源免费使用',
      '支持批量处理'
    ],
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
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
    githubUrl: 'https://github.com/liangdabiao/langgraph_multi-agent_rag-customer-support',
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

// 主处理函数
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  // 处理 API 路由
  for (const [route, handler] of Object.entries(API_ROUTES)) {
    if (path.startsWith(route)) {
      return handler(request, url);
    }
  }

  // 处理静态文件
  if (STATIC_CACHE[path] || path === '/') {
    return serveStaticFile(path === '/' ? 'index.html' : path.slice(1));
  }

  // 处理产品详情页
  if (path.startsWith('/product/')) {
    return serveProductPage(path.slice(9));
  }

  // 404 页面
  return new Response('Not Found', { status: 404 });
}

// 处理静态文件
async function serveStaticFile(filename) {
  const contentType = STATIC_CACHE[filename] || 'text/plain';

  try {
    // 在实际部署中，你需要将静态文件上传到 Cloudflare KV 或其他存储
    // 这里提供示例代码，实际使用时需要适配
    if (filename === 'index.html') {
      return new Response(getIndexHTML(), {
        headers: { 'Content-Type': contentType }
      });
    } else if (filename === 'styles.css') {
      return new Response(getStylesCSS(), {
        headers: { 'Content-Type': contentType }
      });
    } else if (filename === 'script.js') {
      return new Response(getScriptJS(), {
        headers: { 'Content-Type': contentType }
      });
    }
  } catch (error) {
    return new Response('File not found', { status: 404 });
  }
}

// 处理产品详情页
async function serveProductPage(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) {
    return new Response('Product not found', { status: 404 });
  }

  const html = generateProductPage(product);
  return new Response(html, {
    headers: { 'Content-Type': 'text/html' }
  });
}

// 生成产品详情页
function generateProductPage(product) {
  return `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${product.name} - 我的工作箱</title>
    <meta name="description" content="${product.description}">
    <link rel="stylesheet" href="/styles.css">
    <style>
        .product-detail {
            padding: 120px 0 60px;
        }
        .product-hero {
            background: linear-gradient(135deg, var(--surface) 0%, var(--background) 100%);
            padding: 60px 0;
        }
        .product-hero-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }
        .product-hero-icon {
            font-size: 5rem;
            margin-bottom: 1rem;
        }
        .product-hero h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        .product-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin: 1.5rem 0;
        }
        .product-features {
            margin: 3rem 0;
        }
        .product-features h3 {
            margin-bottom: 1.5rem;
        }
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
        }
        .feature-item {
            background: var(--surface);
            padding: 1.5rem;
            border-radius: var(--radius);
        }
        .feature-item h4 {
            margin-bottom: 0.5rem;
            color: var(--primary-color);
        }
        .product-actions {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }
        .github-btn {
            background: #333;
            color: white;
            padding: 12px 24px;
            border-radius: var(--radius);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: var(--transition);
        }
        .github-btn:hover {
            background: #555;
            transform: translateY(-2px);
        }
        .tech-stack {
            margin-top: 2rem;
        }
        .tech-stack h4 {
            margin-bottom: 1rem;
        }
        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
        .tech-tag {
            background: var(--primary-color);
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.875rem;
        }
        @media (max-width: 768px) {
            .product-hero-content {
                grid-template-columns: 1fr;
                gap: 2rem;
                text-align: center;
            }
            .product-hero h1 {
                font-size: 2rem;
            }
            .product-actions {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <a href="/" class="nav-logo">我的工具箱</a>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="/" class="nav-link">首页</a>
                </li>
                <li class="nav-item">
                    <a href="/#products" class="nav-link">产品</a>
                </li>
                <li class="nav-item">
                    <a href="/#about" class="nav-link">关于</a>
                </li>
                <li class="nav-item">
                    <a href="/#contact" class="nav-link">联系</a>
                </li>
            </ul>
            <div class="nav-toggle">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>

    <section class="product-detail">
        <div class="product-hero">
            <div class="container">
                <div class="product-hero-content">
                    <div>
                        <div class="product-hero-icon">${product.icon}</div>
                        <h1>${product.name}</h1>
                        <p>${product.description}</p>
                        <div class="product-tags">
                            ${product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')}
                        </div>
                        ${product.githubUrl ? `
                        <div class="product-actions">
                            <a href="${product.githubUrl}" class="github-btn" target="_blank">
                                <span>📂</span>
                                <span>查看 GitHub</span>
                            </a>
                            <a href="/" class="btn btn-secondary">返回首页</a>
                        </div>
                        ` : ''}
                    </div>
                    <div class="product-hero-visual">
                        <div class="tool-icon" style="font-size: 8rem; text-align: center;">${product.icon}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="product-features">
                <h3>功能特点</h3>
                <div class="feature-grid">
                    ${product.features.map(feature => `
                        <div class="feature-item">
                            <h4>✨ ${feature}</h4>
                            <p>体验这个强大功能带来的便利</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            ${product.techStack ? `
            <div class="tech-stack">
                <h4>技术栈</h4>
                <div class="tech-tags">
                    ${product.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            ` :}

            ${product.githubUrl ? `
            <div style="text-align: center; margin: 3rem 0;">
                <h3>开源项目</h3>
                <p>这是一个开源项目，欢迎贡献代码和反馈问题！</p>
                <div style="margin: 1.5rem 0;">
                    <a href="${product.githubUrl}" class="btn btn-primary" target="_blank">
                        访问 GitHub 仓库
                    </a>
                </div>
            </div>
            ` : ''}
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>我的工具箱</h3>
                    <p>专注于创造实用高效的工具产品</p>
                </div>
                <div class="footer-section">
                    <h4>快速链接</h4>
                    <ul>
                        <li><a href="/">首页</a></li>
                        <li><a href="/#products">产品</a></li>
                        <li><a href="/#about">关于我们</a></li>
                        <li><a href="/#contact">联系我们</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 我的工具箱. 保留所有权利.</p>
            </div>
        </div>
    </footer>

    <script src="/script.js"></script>
</body>
</html>`;
}

// API 处理函数
async function handleGetProducts(request, url) {
  const productId = url.searchParams.get('id');

  if (productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
      return new Response(JSON.stringify({ error: 'Product not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return new Response(JSON.stringify(product), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify(products), {
    headers: { 'Content-Type': 'application/json' }
  });
}

async function handleContact(request, url) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const data = await request.json();

    // 这里可以添加发送邮件或其他处理逻辑
    console.log('Contact form submission:', data);

    return new Response(JSON.stringify({ success: true, message: '消息已发送' }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

async function handleProductDetail(request, url) {
  const productId = url.pathname.split('/')[2];
  const product = products.find(p => p.id === productId);

  if (!product) {
    return new Response(JSON.stringify({ error: 'Product not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify(product), {
    headers: { 'Content-Type': 'application/json' }
  });
}

// 静态文件内容（在实际部署时，你应该使用 Cloudflare KV 或其他存储）
function getIndexHTML() {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的工具箱 - 高效工具产品集合</title>
    <meta name="description" content="发现我们精心打造的一系列实用工具，让您的数字生活更加高效便捷">
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <a href="/" class="nav-logo">我的工具箱</a>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#home" class="nav-link">首页</a>
                </li>
                <li class="nav-item">
                    <a href="#products" class="nav-link">产品</a>
                </li>
                <li class="nav-item">
                    <a href="#about" class="nav-link">关于</a>
                </li>
                <li class="nav-item">
                    <a href="#contact" class="nav-link">联系</a>
                </li>
            </ul>
            <div class="nav-toggle">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>

    <main>
        <section id="home" class="hero">
            <div class="container">
                <div class="hero-content">
                    <div>
                        <h1 class="hero-title">高效工具，让生活更简单</h1>
                        <p class="hero-subtitle">探索我们精心打造的一系列实用工具，提升您的工作效率，简化日常任务</p>
                        <div class="hero-actions">
                            <a href="#products" class="btn btn-primary">探索产品</a>
                            <a href="#about" class="btn btn-secondary">了解更多</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="products" class="products">
            <div class="container">
                <div class="section-header">
                    <h2>我们的产品</h2>
                    <p>为解决实际问题而生的实用工具</p>
                </div>
                <div class="products-grid" id="productsGrid">
                    <!-- 产品卡片将通过 JavaScript 动态生成 -->
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2024 我的工具箱. 保留所有权利.</p>
            </div>
        </div>
    </footer>

    <script>
        const products = ${JSON.stringify(products)};

        document.addEventListener('DOMContentLoaded', function() {
            renderProducts();
            setupMobileMenu();
            setupSmoothScroll();
        });

        function renderProducts() {
            const grid = document.getElementById('productsGrid');
            grid.innerHTML = products.map(product => \`
                <div class="product-card">
                    <div class="product-icon">\${product.icon}</div>
                    <h3 class="product-title">\${product.name}</h3>
                    <p class="product-description">\${product.description}</p>
                    <div class="product-tags">
                        \${product.tags.map(tag => \`<span class="product-tag">\${tag}</span>\`).join('')}
                    </div>
                    <a href="/product/\${product.id}" class="product-link">
                        了解详情 →
                    </a>
                </div>
            \`).join('');
        }

        function setupMobileMenu() {
            const navToggle = document.querySelector('.nav-toggle');
            const navMenu = document.querySelector('.nav-menu');

            navToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
            });
        }

        function setupSmoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        }
    </script>
</body>
</html>`;
}

function getStylesCSS() {
  return `/* 基础样式 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #3b82f6;
    --primary-dark: #2563eb;
    --secondary-color: #64748b;
    --background: #ffffff;
    --surface: #f8fafc;
    --text-primary: #1e293b;
    --text-secondary: #64748b;
    --border-color: #e2e8f0;
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --radius: 8px;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* 导航栏 */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-color);
    z-index: 1000;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.nav-logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: var(--text-primary);
    font-weight: 500;
}

.nav-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.bar {
    width: 25px;
    height: 3px;
    background: var(--text-primary);
    margin: 3px 0;
}

/* 按钮 */
.btn {
    display: inline-block;
    padding: 12px 24px;
    border: none;
    border-radius: var(--radius);
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-primary {
    background: var(--primary-color);
    color: white;
}

.btn-secondary {
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
}

/* Hero Section */
.hero {
    padding: 120px 0 80px;
    background: linear-gradient(135deg, var(--surface) 0%, var(--background) 100%);
}

.hero-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.hero-subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
}

.hero-actions {
    display: flex;
    gap: 1rem;
}

/* Products Section */
.products {
    padding: 80px 0;
    background: var(--surface);
}

.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-header h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.product-card {
    background: white;
    border-radius: var(--radius);
    padding: 2rem;
    box-shadow: var(--shadow-md);
    transition: transform 0.3s ease;
}

.product-card:hover {
    transform: translateY(-5px);
}

.product-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.product-title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
}

.product-description {
    color: var(--text-secondary);
    margin-bottom: 1rem;
}

.product-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.product-tag {
    background: var(--surface);
    color: var(--text-secondary);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.875rem;
}

.product-link {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
}

/* Footer */
.footer {
    background: var(--text-primary);
    color: white;
    padding: 2rem 0;
    text-align: center;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background: white;
        width: 100%;
        padding: 2rem;
        transition: left 0.3s ease;
    }

    .nav-menu.active {
        left: 0;
    }

    .nav-toggle {
        display: flex;
    }

    .hero-title {
        font-size: 2rem;
    }

    .hero-actions {
        flex-wrap: wrap;
        justify-content: center;
    }

    .products-grid {
        grid-template-columns: 1fr;
    }
}`;
}

function getScriptJS() {
  return `// JavaScript 代码已在 HTML 中内联`;
}