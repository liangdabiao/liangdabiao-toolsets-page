# 智能工具集合 - AI产品展示落地页

一个现代化的AI工具产品展示落地页，基于 Cloudflare Workers 部署，展示10个开源AI项目，包含产品展示、详情页面和联系表单等功能。

## 🚀 功能特点

- 📱 **响应式设计** - 完美适配桌面端和移动端
- ⚡ **Cloudflare Workers 部署** - 全球加速，零维护成本
- 🎨 **现代UI设计** - 简洁美观的用户界面
- 🤖 **AI产品展示** - 展示10个真实的AI开源项目
- 📋 **详情页面** - 每个产品都有独立的详细介绍页面
- 📧 **Server酱集成** - 联系表单自动推送到微信
- 🛠️ **易于定制** - 模块化设计，易于扩展和修改
- 🔗 **GitHub集成** - 直接链接到各项目的GitHub仓库

## 📋 AI产品展示

### 🎬 AI定格动画生成器
- **GitHub**: https://github.com/liangdabiao/ai-make-face-meme
- **技术栈**: Gemini Nano, OpenCV, Next.js
- **描述**: 基于Gemini Nano的图片动画生成工具，将静态图片转换为流畅的动画效果
- **功能**:
  - AI智能动画生成
  - 多种动画风格模板
  - 高质量GIF输出
  - 批量处理功能
  - 开源免费使用

### 📊 Claude数据分析助手
- **GitHub**: https://github.com/liangdabiao/claude-data-analysis
- **技术栈**: Claude Code, Python, Pandas, Streamlit
- **描述**: 智能数据分析平台，利用Claude进行自动化数据处理和可视化分析
- **功能**:
  - 智能数据清洗
  - 自动化图表生成
  - 自然语言查询
  - 报告自动生成

### 📈 A股智能分析系统
- **GitHub**: https://github.com/liangdabiao/easy_investment_Agent_crewai
- **技术栈**: CrewAI, Python, FastAPI, PostgreSQL
- **描述**: 专业投资分析平台，使用多智能体协作进行股票市场分析
- **功能**:
  - 多智能体协作分析
  - 实时市场数据处理
  - 风险评估模型
  - 投资策略建议

### 💡 商业创意验证器
- **GitHub**: https://github.com/liangdabiao/Business_Idea_Validator
- **技术栈**: LangChain, Python, MongoDB, API集成
- **描述**: AI驱动的市场调研应用，帮助验证商业创意的可行性
- **功能**:
  - 市场分析
  - 竞争对手调研
  - 财务模型预测
  - 可行性评估报告

### 📦 Amazon商品评论分析系统
- **GitHub**: https://github.com/liangdabiao/easy-amazon-voc
- **技术栈**: Python, NLP, Elasticsearch, 数据抓取
- **描述**: 客户之声分析工具，深度分析Amazon商品评论
- **功能**:
  - 情感分析
  - 关键词提取
  - 趋势分析
  - 竞品对比

### 🏗️ AI数据枢纽
- **GitHub**: https://github.com/liangdabiao/AI_data_hub
- **技术栈**: Python, FastAPI, Chroma, Milvus
- **描述**: AI项目数据中心框架，统一管理和处理多源数据
- **功能**:
  - 数据集成管理
  - 向量数据库支持
  - API接口服务
  - 数据质量监控

### 🎙️ AI生成英语播客视频
- **GitHub**: https://github.com/liangdabiao/AI-generated-English-podcast-videos
- **技术栈**: TTS, Video Processing, AI Script Generation
- **描述**: 自动化播客视频生成工具，从文本到完整的英语播客视频
- **功能**:
  - AI脚本生成
  - 自然语音合成
  - 自动视频制作
  - 多语言支持

### 🤖 LangGraph多智能体RAG客服系统
- **GitHub**: https://github.com/liangdabiao/langgraph_multi-agent-rag-customer-support
- **技术栈**: LangGraph, RAG, Qdrant, 企业级部署
- **描述**: 企业级智能客服解决方案，使用RAG和多智能体架构
- **功能**:
  - 智能问答系统
  - 多轮对话管理
  - 知识库集成
  - 24/7自动服务

### 📋 智能简历筛选系统
- **GitHub**: https://github.com/liangdabiao/LLM-Agent-Resume
- **技术栈**: LLM, Resume Parsing, Skill Matching
- **描述**: 基于LLM的自动化招聘解决方案，智能筛选和匹配简历
- **功能**:
  - 简历智能解析
  - 技能自动匹配
  - 候选人排名
  - 面试安排自动化

### 🎯 简历匹配器
- **GitHub**: https://github.com/liangdabiao/resume-matcher-agent-cn
- **技术栈**: AI Matching, Chinese NLP, Recruitment Analytics
- **描述**: AI驱动的简历优化平台，专门针对中文简历进行匹配分析
- **功能**:
  - 简历优化建议
  - 职位匹配度分析
  - 技能差距识别
  - 求职策略推荐

## 🛠️ 技术栈

### 前端技术
- **基础**: HTML5, CSS3, Vanilla JavaScript
- **样式**: CSS Variables, Flexbox, Grid, Responsive Design
- **交互**: DOM API, Fetch API, ES6+
- **部署**: Cloudflare Workers, Wrangler CLI

### AI技术框架
- **大语言模型**: Claude Code, OpenAI GPT, Gemini Nano
- **多智能体**: CrewAI, LangGraph, LangChain
- **向量数据库**: Chroma, Milvus, Qdrant
- **数据处理**: Pandas, Numpy, Scikit-learn
- **Web框架**: FastAPI, Next.js, Streamlit, Flask

### 数据存储
- **关系数据库**: PostgreSQL, MongoDB
- **缓存**: Redis
- **搜索**: Elasticsearch
- **文件存储**: 本地存储, 云存储

## 📦 安装和部署

### 方法一：静态托管部署（推荐）

#### GitHub Pages 部署
1. **上传文件到GitHub仓库**
   ```bash
   git add .
   git commit -m "Add AI tools showcase website"
   git push origin main
   ```

2. **启用GitHub Pages**
   - 在仓库设置中启用GitHub Pages
   - 选择源分支为main
   - 访问 `https://username.github.io/repo-name`

#### Vercel 部署
```bash
npm install -g vercel
vercel --prod
```

#### Netlify 部署
- 直接拖拽文件夹到 Netlify 网页
- 或使用 Netlify CLI: `netlify deploy --prod`

### 方法二：Cloudflare Workers 部署

#### 1. 环境准备
确保已安装 Node.js (版本 >= 16)：
```bash
node --version
```

#### 2. 安装 Wrangler CLI
```bash
npm install -g wrangler
```

#### 3. 登录 Cloudflare
```bash
wrangler login
```

#### 4. 配置项目
编辑 `wrangler.toml` 文件，修改域名：
```toml
name = "ai-tools-showcase"
main = "worker.js"
compatibility_date = "2024-01-01"

[env.production]
routes = [
  { pattern = "your-domain.com/*", zone_name = "your-domain.com" }
]
```

#### 5. 本地开发
```bash
wrangler dev
```

#### 6. 部署
```bash
wrangler deploy
```

## 📁 项目结构

```
cfpage/
├── index.html                           # 主页模板
├── product.html                         # AI 定格动画生成器详情页
├── claude-data-analysis.html            # Claude 数据分析助手详情页
├── a-stock-analysis.html                # A股智能分析系统详情页
├── business-idea-validator.html         # 商业创意验证器详情页
├── easy-amazon-voc.html                 # Amazon商品评论分析系统详情页
├── ai-data-hub.html                     # AI数据枢纽详情页
├── ai-generated-english-podcast-videos.html # AI生成英语播客视频详情页
├── langgraph-multi-agent-rag-customer-support.html # LangGraph多智能体RAG客服系统详情页
├── llm-agent-resume.html                    # 智能简历筛选系统详情页
├── resume-matcher-agent-cn.html              # 简历匹配器详情页
├── styles.css                           # 样式文件
├── script.js                            # 前端交互脚本
├── worker.js                            # Cloudflare Workers 主脚本
├── wrangler.toml                        # Wrangler 配置文件
├── package.json                         # 项目依赖配置
└── README.md                            # 项目说明文档
```

## 🎨 自定义配置

### 添加新产品

在 `script.js` 中的 `products` 数组中添加新产品：

```javascript
{
    id: 'new-project',
    name: '新项目名称',
    description: '项目描述...',
    icon: '🎯',
    tags: ['标签1', '标签2'],
    githubUrl: 'https://github.com/username/repo',
    pageUrl: './new-project.html',
    features: ['功能1', '功能2'],
    techStack: ['技术1', '技术2']
}
```

然后创建对应的产品详情页面 `new-project.html`。

### 修改样式

编辑 `styles.css` 文件中的 CSS 变量：

```css
:root {
    --primary-color: #3b82f6;      /* 主色调 */
    --secondary-color: #64748b;     /* 次要颜色 */
    --background: #ffffff;          /* 背景色 */
    --surface: #f8fafc;             /* 表面色 */
    --text-primary: #1e293b;        /* 主文字色 */
    --text-secondary: #64748b;      /* 次要文字色 */
}
```

### 自定义域名

1. 在 Cloudflare Dashboard 中添加你的域名
2. 配置 DNS 记录指向 Workers
3. 修改 `wrangler.toml` 中的域名配置
4. 重新部署 Workers

## 📊 性能优化

- **静态资源缓存**: Workers 自动处理静态文件缓存
- **全球CDN**: Cloudflare 全球网络加速
- **压缩优化**: 自动压缩 HTML, CSS, JS
- **图片优化**: 支持现代图片格式 (WebP, AVIF)

## 📧 Server酱配置

联系表单集成了Server酱推送服务，当用户提交表单时会自动发送通知到微信。

### 配置步骤

1. **获取Server酱 Key**
   - 访问 [Server酱官网](https://sct.ftqq.com/)
   - 注册账号并获取推送Key

2. **修改配置**
   在 `script.js` 中找到以下代码并替换Key：
   ```javascript
   const serverChanUrl = `https://sctapi.ftqq.com/YOUR_ACTUAL_KEY.send`;
   ```

3. **测试功能**
   - 使用测试Key: `SCT234551TNJnEupFOBpL4SSKv74ibkqeR`
   - 填写联系表单测试推送效果

## 🔧 故障排除

### 常见问题

1. **JavaScript错误**
   - 检查元素是否存在性（使用条件检查）
   - 确认文件路径正确
   - 查看浏览器控制台错误信息

2. **Server酱推送失败**
   - 验证Key配置是否正确
   - 检查网络连接
   - 确认Server酱服务状态

3. **样式显示异常**
   - 检查 CSS 文件路径
   - 确认响应式断点设置
   - 验证CSS变量定义

4. **产品详情页 404**
   - 确认产品HTML文件存在
   - 检查页面链接路径
   - 验证文件命名规范

### 调试方法

1. **浏览器开发者工具**
   - F12 打开控制台查看错误
   - Network面板检查文件加载
   - 移动端模拟测试

2. **本地开发**
   ```bash
   wrangler dev --local
   ```

3. **性能优化检查**
   - 使用Lighthouse进行性能测试
   - 检查图片压缩和懒加载
   - 验证响应式设计

## 📝 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献指南

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📞 联系方式

- **邮箱**: 497070928@qq.com
- **GitHub**: https://github.com/liangdabiao
- **社交媒体**: https://linux.do/u/liangdabiao

## 🌟 致谢

感谢以下开源项目和服务：

### 技术平台
- [Cloudflare Workers](https://workers.cloudflare.com/) - 部署平台
- [Wrangler](https://github.com/cloudflare/wrangler) - CLI 工具
- [Server酱](https://sct.ftqq.com/) - 微信推送服务

### AI项目展示
本网站展示的所有AI项目均为开源项目，感谢以下技术框架的支持：
- [Gemini Nano](https://ai.google.dev/) - Google的轻量级AI模型
- [Claude Code](https://claude.com/claude-code) - Anthropic的代码助手
- [CrewAI](https://crewai.com/) - 多智能体协作框架
- [LangGraph](https://langchain-ai.github.io/langgraph/) - AI工作流框架
- [Chroma](https://www.trychroma.com/) - 开源向量数据库
- [Milvus](https://milvus.io/) - 高性能向量数据库
- [Qdrant](https://qdrant.tech/) - 向量搜索引擎

## 📚 相关文档

- [DEPLOYMENT.md](./DEPLOYMENT.md) - 详细部署指南
- [CLAUDE.md](./CLAUDE.md) - Claude Code开发文档
- [需求文档](./需求.txt) - 项目需求说明

---

🎊 **恭喜！你现在拥有了一个专业的AI工具展示网站！**