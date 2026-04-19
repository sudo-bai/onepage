# Onepage - 自定义新标签页浏览器扩展

一个简洁美观的浏览器新标签页扩展，基于现代化的React应用，提供快速导航、搜索引擎切换和个性化快捷方式。

## 功能特性

- 🚀 **快速启动** - 替换浏览器默认新标签页，立即访问常用网站
- 🎨 **美观界面** - 现代化的深色主题，平滑的动画效果
- 🔍 **智能搜索** - 支持多搜索引擎快速切换（Google、Bing、DuckDuckGo等）
- 📍 **自定义快捷方式** - 添加、编辑、删除常用网站快捷方式
- 🖼️ **图标缓存** - 自动缓存网站图标，减少网络请求
- 🔄 **数据管理** - 支持导入/导出备份数据
- 📱 **响应式设计** - 适配各种屏幕尺寸
- 🔧 **本地运行** - 完全离线运行，保护隐私

## 安装方法

### 从源码安装

1. 克隆仓库：
   ```bash
   git clone https://github.com/<你的用户名>/onepage.git
   ```

2. 加载扩展：
   - 打开 `brave://extensions/` 或 `chrome://extensions/`
   - 开启右上角的"开发者模式"
   - 点击"加载已解压的扩展程序"
   - 选择 `onepage` 目录

3. 打开新标签页即可使用

### 从发布版本安装

1. 访问 [Releases](https://github.com/<你的用户名>/onepage/releases) 页面
2. 下载最新版本的 `.zip` 文件
3. 解压到本地目录
4. 按照"从源码安装"的步骤2加载扩展

## 项目结构

```
onepage/
├── manifest.json          # 扩展清单文件
├── app/                   # 构建后的前端应用
│   ├── index.html        # 主页面
│   ├── assets/           # 静态资源（CSS、JS）
│   ├── hover-fixes.css   # 视觉修复样式
│   └── menu-layer-fix.js # 菜单层级修复
├── style.css             # 选项页面样式
├── options.html          # 扩展选项页面
├── LICENSE               # GNU GPL v2 许可证
└── README.md             # 项目说明
```

## 构建说明

本项目基于 [homepage](https://github.com/sudo-bai/homepage) 项目构建，使用以下技术栈：

- **前端框架**: React + Vite
- **样式**: Tailwind CSS
- **构建工具**: npm + Vite

### 从源码构建

如果你想自定义功能或修改样式：

1. 安装依赖：
   ```bash
   npm install
   ```

2. 开发模式运行：
   ```bash
   npm run dev
   ```

3. 构建生产版本：
   ```bash
   npm run build
   ```

4. 构建后的文件位于 `dist/` 目录，复制到 `app/` 目录即可

## 使用说明

### 添加快捷方式
1. 点击右下角的"+"按钮
2. 输入网站URL和标题
3. 点击保存

### 切换搜索引擎
1. 点击搜索框左侧的搜索引擎图标
2. 从下拉菜单中选择喜欢的搜索引擎
3. 输入关键词即可使用选中的搜索引擎搜索

### 管理数据
1. 点击右上角的设置图标
2. 选择"导出备份"下载当前数据
3. 选择"导入备份"恢复之前的数据

## 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 许可证

本项目采用 **GNU General Public License v2.0** 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 致谢

- 基于 [homepage](https://github.com/sudo-bai/homepage) 项目构建
- 图标来自 [Lucide React](https://lucide.dev/)
- 使用 [Tailwind CSS](https://tailwindcss.com/) 进行样式设计

---

**注意**: 本项目为个人使用而开发，可能会根据个人需求进行定制化修改。