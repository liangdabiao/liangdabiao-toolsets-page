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
    id: 'text-converter',
    name: '文本转换器',
    description: '支持多种文本格式转换，包括大小写转换、编码解码、格式清理等功能。',
    icon: '📝',
    tags: ['文本处理', '格式转换', '实用工具'],
    features: [
      '大小写转换（大写、小写、首字母大写等）',
      '编码解码（Base64, URL编码等）',
      '文本格式清理（去除空格、特殊字符等）',
      'JSON格式化和验证',
      'Markdown转HTML'
    ]
  },
  {
    id: 'color-picker',
    name: '颜色选择器',
    description: '专业的颜色选择和转换工具，支持多种颜色格式，提供调色板和渐变生成功能。',
    icon: '🎨',
    tags: ['设计工具', '颜色管理', '前端开发'],
    features: [
      '颜色选择器和吸管工具',
      '多格式转换（HEX, RGB, HSL等）',
      '调色板生成和管理',
      '渐变色生成器',
      '颜色对比度检查'
    ]
  },
  {
    id: 'qr-generator',
    name: '二维码生成器',
    description: '快速生成各种类型的二维码，支持自定义样式和批量生成功能。',
    icon: '📱',
    tags: ['二维码', '生成工具', '移动端'],
    features: [
      '文本、链接、WiFi等多种内容类型',
      '自定义颜色和样式',
      'Logo嵌入功能',
      '批量生成和下载',
      '扫描统计功能'
    ]
  },
  {
    id: 'password-generator',
    name: '密码生成器',
    description: '安全可靠的密码生成工具，支持自定义规则和强度检测。',
    icon: '🔐',
    tags: ['安全工具', '密码管理', '隐私保护'],
    features: [
      '可自定义长度和字符类型',
      '密码强度评估',
      '密码安全性检查',
      '批量密码生成',
      '密码历史记录'
    ]
  },
  {
    id: 'image-compressor',
    name: '图片压缩器',
    description: '在线图片压缩工具，支持多种格式，在保持质量的同时减小文件大小。',
    icon: '🖼️',
    tags: ['图片处理', '优化工具', '文件压缩'],
    features: [
      '多格式支持（JPG, PNG, WebP等）',
      '智能质量压缩',
      '批量处理功能',
      '尺寸调整和裁剪',
      '预览和对比功能'
    ]
  },
  {
    id: 'json-formatter',
    name: 'JSON格式化工具',
    description: '专业的JSON格式化、验证和转换工具，支持高亮显示和错误检查。',
    icon: '{}',
    tags: ['开发工具', '数据处理', '格式化'],
    features: [
      'JSON格式化和美化',
      '语法验证和错误提示',
      'JSON与其他格式转换',
      'JSONPath查询和测试',
      'API调试功能'
    ]
  }
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