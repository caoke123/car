# MotorX - 汽车展示网站

一个基于 Next.js 14 构建的现代化汽车展示和销售网站。

## 🚀 项目特性

- **现代化框架**: 基于 Next.js 14 和 React 18
- **响应式设计**: 完美适配桌面和移动设备
- **多种布局**: 6种不同的首页布局选择
- **丰富功能**: 汽车列表、详情页、经销商信息、博客系统
- **优雅动画**: WOW.js 动画效果和平滑滚动
- **数据可视化**: Chart.js 图表展示

## 🛠️ 技术栈

- **前端框架**: Next.js 14.0.1
- **UI库**: React 18.2.0
- **样式管理**: Sass + Bootstrap + 自定义CSS
- **图表库**: Chart.js + React Chart.js 2
- **轮播组件**: Swiper.js
- **动画库**: WOW.js, React CountUp
- **字体**: Google Fonts (DM Sans, Plus Jakarta Sans)

## 📦 安装与运行

### 环境要求
- Node.js 16+ 
- npm 或 yarn

### 本地开发

1. 克隆项目
```bash
git clone https://github.com/caoke123/car.git
cd car
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

### 构建部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 编译样式文件
npm run sass
```

## 📁 项目结构

```
├── app/                    # Next.js App Router 页面
│   ├── car-list/          # 汽车列表页
│   ├── listing-details/   # 汽车详情页
│   ├── dashboard/         # 用户仪表板
│   ├── blog/              # 博客页面
│   └── ...
├── components/            # React 组件
│   ├── layout/           # 布局组件
│   ├── sections/         # 页面区块
│   ├── elements/         # UI元素
│   └── slider/           # 轮播组件
├── public/assets/        # 静态资源
│   ├── css/             # 样式文件
│   ├── images/          # 图片资源
│   └── scss/            # SCSS源文件
└── util/                 # 工具函数
```

## 🎨 页面展示

- **首页**: 多种布局选择 (home02-home06)
- **汽车列表**: 筛选和展示功能
- **汽车详情**: 详细信息和图片展示
- **经销商页面**: 经销商信息展示
- **博客系统**: 文章展示和详情页
- **用户中心**: 个人仪表板和库存管理

## 🔧 自定义配置

### 样式自定义
项目使用 SCSS 进行样式管理，主要配置文件：
- `public/assets/scss/app.scss` - 主样式文件
- `public/assets/scss/abstracts/_variable.scss` - 变量配置
- `public/assets/scss/component/` - 组件样式

### 图片资源
图片资源存放在 `public/assets/images/` 目录，包含：
- 汽车图片
- Logo和图标
- 背景图片
- 用户头像等

## 📄 许可证

本项目仅供学习和演示使用。

## 📞 联系方式

如有问题或建议，请联系项目维护者。

---

⭐ 如果这个项目对您有帮助，请给个Star！