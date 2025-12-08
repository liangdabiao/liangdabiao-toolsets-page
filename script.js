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