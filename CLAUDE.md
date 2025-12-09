# CLAUDE.md - AI工具集合项目文档

## 项目概述

这是一个展示多个AI工具产品的落地页网站，基于Cloudflare Workers部署。项目包含主页面和10个子页面，每个子页面详细介绍一个AI工具产品。

## 常用开发命令

### 本地开发
```bash
# 启动本地开发服务器
wrangler dev

# 指定端口启动
wrangler dev --port 8080
```

### 部署
```bash
# 部署到Cloudflare Workers
wrangler deploy

# 部署到特定环境
wrangler deploy --env production
```

### 项目管理
```bash
# 预览部署配置
wrangler tail

# 查看项目配置
wrangler whoami
```

## 代码架构

### 核心文件结构
```
cfpage/
├── index.html                    # 主页面
├── [产品名称].html              # 各产品详情页
├── styles.css                   # 全局样式
├── script.js                    # 主要JavaScript逻辑
├── worker.js                    # Cloudflare Workers脚本
├── wrangler.toml               # Workers配置
└── DEPLOYMENT.md               # 部署指南
```

### 1. HTML页面架构

#### 主页面 (index.html:82-84)
```html
<div class="products-grid" id="productsGrid">
    <!-- 产品卡片将通过 JavaScript 动态生成 -->
</div>
```

#### 导航系统 (index.html:14-27)
- 响应式导航栏
- 平滑滚动锚点跳转
- 移动端汉堡菜单

#### 联系表单 (index.html:178-189)
- 集成Server酱推送服务
- 实时微信通知功能
- 表单验证和提交处理

### 2. CSS样式系统 (styles.css)

#### CSS变量系统 (styles.css:1-25)
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #64748b;
    --success-color: #22c55e;
    --danger-color: #ef4444;
    --warning-color: #f59e0b;
    /* 更多颜色和尺寸变量 */
}
```

#### 响应式设计断点 (styles.css:26-50)
- 移动端: < 768px
- 平板端: 768px - 1024px
- 桌面端: > 1024px

#### 组件样式
- 导航栏: `.navbar`, `.nav-menu`
- 产品卡片: `.product-card`, `.products-grid`
- 按钮系统: `.btn`, `.btn-primary`, `.btn-secondary`
- 联系表单: `.contact-form`, `.form-group`

### 3. JavaScript逻辑系统 (script.js)

#### 产品数据管理 (script.js:1-200)
```javascript
const products = [
    {
        id: 'ai-stop-motion-generator',
        name: 'AI定格动画生成器',
        description: '基于Gemini Nano的图片动画生成工具',
        icon: '🎬',
        tags: ['Gemini Nano', 'OpenCV', '图片处理'],
        githubUrl: 'https://github.com/liangdabiao/ai-make-face-meme',
        details: '详细产品描述...'
    },
    // ... 更多产品数据
];
```

#### 核心功能函数

##### 产品渲染 (script.js:350-400)
```javascript
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        productsGrid.innerHTML = products.map(product => `
            <div class="product-card" data-product-id="${product.id}">
                <!-- 产品卡片HTML -->
            </div>
        `).join('');
    }
}
```

##### Server酱集成 (script.js:600-650)
```javascript
async function sendToServerChan(shortTitle, longContent, formData) {
    const serverChanUrl = `https://sctapi.ftqq.com/SCT234551TNJnEupFOBpL4SSKv74ibkqeR.send`;
    const params = new URLSearchParams();
    params.append('title', shortTitle);
    params.append('desp', longContent);

    const response = await fetch(`${serverChanUrl}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors'
    });
}
```

##### 表单处理 (script.js:500-580)
- 联系表单验证
- Server酱通知发送
- 用户反馈显示

##### 导航功能 (script.js:200-250)
- 平滑滚动
- 移动端菜单切换
- 页面内锚点导航

### 4. Cloudflare Workers配置 (worker.js)

#### 静态文件服务 (worker.js:1-100)
```javascript
// 静态文件映射
const staticFiles = {
    '/': './index.html',
    '/styles.css': './styles.css',
    '/script.js': './script.js',
    // ... 更多文件映射
};
```

#### API路由 (worker.js:150-250)
- 联系表单提交处理
- CORS配置
- 错误处理

## 重要工作流程

### 1. 添加新产品流程

1. **更新产品数据** (script.js:1-200)
   ```javascript
   {
       id: 'new-product',
       name: '新产品名称',
       description: '产品描述',
       icon: '🎯',
       tags: ['标签1', '标签2'],
       githubUrl: 'https://github.com/user/repo',
       pageUrl: './new-product.html'
   }
   ```

2. **创建产品页面**
   - 复制现有产品HTML模板
   - 更新页面标题和内容
   - 确保导航链接正确

3. **更新导航** (script.js:400-450)
   - 添加新产品到导航映射
   - 确保所有页面链接一致

### 2. Server酱配置流程

1. **获取推送Key** (DEPLOYMENT.md:174-177)
   - 访问Server酱官网
   - 注册并获取Key
   - 替换script.js中的Key

2. **测试推送功能** (DEPLOYMENT.md:189-191)
   - 使用测试Key: `SCT234551TNJnEupFOBpL4SSKv74ibkqeR`
   - 填写联系表单测试
   - 确认微信通知接收

### 3. 部署流程

1. **Cloudflare Workers部署** (DEPLOYMENT.md:55-75)
   ```bash
   wrangler login
   wrangler deploy
   ```

2. **静态托管部署** (DEPLOYMENT.md:29-53)
   - GitHub Pages
   - Vercel
   - Netlify

## 代码模式

### 1. 条件JavaScript执行
为防止在详情页出现JavaScript错误：
```javascript
// 检查元素是否存在再执行
const productsGrid = document.getElementById('productsGrid');
if (productsGrid) {
    renderProducts();
}
```

### 2. 响应式图片处理
```html
<img src="github-image-url"
     alt="描述"
     loading="lazy"
     onerror="this.style.display='none'">
```

### 3. CSS模块化
```css
/* 组件样式使用BEM命名规范 */
.product-card { }
.product-card__header { }
.product-card__content { }
```

## 项目特色

### 技术栈
- **前端**: HTML5, CSS3, Vanilla JavaScript
- **部署**: Cloudflare Workers
- **样式**: CSS Variables, Flexbox, Grid
- **API**: Fetch API, Server酱推送

### AI技术集成
- **Gemini Nano**: 图片动画生成
- **OpenAI API**: 数据分析
- **Claude Code**: 代码分析
- **CrewAI**: 多智能体协作
- **LangGraph**: RAG客服系统

### 数据存储
- **MongoDB**: 主要数据存储
- **PostgreSQL**: 关系型数据
- **Chroma**: 向量数据库
- **Milvus**: 大规模向量搜索

## 故障排除

### 常见问题及解决方案

1. **JavaScript错误**: 检查元素存在性
2. **CSS加载问题**: 确认文件路径
3. **Server酱推送失败**: 验证Key配置
4. **部署问题**: 检查wrangler.toml配置

### 调试方法
1. 使用浏览器开发者工具
2. 检查Network面板文件加载
3. 使用wrangler tail查看Workers日志

## 项目联系信息
- **邮箱**: 497070928@qq.com
- **GitHub**: https://github.com/liangdabiao
- **社交媒体**: https://linux.do/u/liangdabiao

## 许可证
本项目所有页面保留所有权利。