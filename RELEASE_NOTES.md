# Onepage Extension v2.1.0

## 新版本发布

这是Onepage浏览器扩展的初始发布版本。

### 功能特性

- 🚀 替换浏览器默认新标签页为自定义主页
- 🎨 现代化的深色主题界面
- 🔍 支持多搜索引擎快速切换（Google、Bing、DuckDuckGo等）
- 📍 可自定义的网站快捷方式
- 🖼️ 智能图标缓存系统
- 🔄 数据备份与恢复功能
- 📱 响应式设计，适配各种屏幕

### 变更日志

**v2.1.0** (初始版本)
- 初始发布：基于homepage项目的完整浏览器扩展
- 包含视觉修复：解决下拉菜单方块虚影问题
- 优化图标加载：使用canvas缓存减少网络请求
- 添加GNU GPL v2许可证
- 完整的安装和使用文档

### 安装说明

1. 下载 `onepage-extension-2.1.0.zip`
2. 解压到本地目录
3. 打开浏览器扩展页面 (`brave://extensions/` 或 `chrome://extensions/`)
4. 开启"开发者模式"
5. 点击"加载已解压的扩展程序"
6. 选择解压后的目录
7. 打开新标签页即可使用

### 文件列表

```
onepage-extension-2.1.0.zip
├── manifest.json          # 扩展清单 (v3)
├── app/                   # 构建的前端应用
│   ├── index.html        # 主页面
│   ├── assets/           # 静态资源
│   ├── hover-fixes.css   # 视觉修复样式
│   └── menu-layer-fix.js # 菜单层级修复
├── style.css             # 选项页面样式
├── options.html          # 扩展选项页面
├── LICENSE               # GNU GPL v2 许可证
└── README.md             # 详细使用说明
```

### 系统要求

- Chrome 88+ / Chromium 88+ / Brave 1.20+
- 支持Manifest V3的浏览器

### 许可证

本扩展采用 GNU General Public License v2.0 许可证。详情请查看 [LICENSE](LICENSE) 文件。

### 反馈与支持

如有问题或建议，请在GitHub仓库中提交Issue。

---

**注意**: 本扩展为个人使用而开发，可能会根据个人需求进行定制化修改。