// 背景图诊断和修复工具
// 在浏览器控制台运行这段代码来诊断背景图问题

function diagnoseBackground() {
  console.log('=== 背景图诊断工具 ===\n');
  
  // 1. 检查所有可能的缓存 key
  const keys = [
    'cached_bg_v2_api',
    'cached_bg_v2_bing',
    'cached_bg_v2_upload',
    'cached_bg_url_api',
    'cached_bg_url_bing',
    'cached_bg_url_upload',
    'cached_bg_b64_api',
    'cached_bg_b64_bing',
    'cached_bg_b64_upload',
    'bg-config'
  ];
  
  console.log('1. 检查 localStorage 缓存:');
  keys.forEach(key => {
    const value = localStorage.getItem(key);
    if (value) {
      const len = value.length;
      const preview = value.substring(0, 50) + (len > 50 ? '...' : '');
      console.log(`  ✓ ${key}: ${len} bytes - ${preview}`);
    } else {
      console.log(`  ✗ ${key}: 无数据`);
    }
  });
  
  // 2. 检查 bg-config
  const bgConfig = localStorage.getItem('bg-config');
  if (bgConfig) {
    console.log('\n2. 背景配置:');
    try {
      const config = JSON.parse(bgConfig);
      console.log(`  类型：${config.type}`);
      console.log(`  自定义 API: ${config.customApi || '默认'}`);
    } catch(e) {
      console.log(`  解析失败：${e}`);
    }
  }
  
  // 3. 检查当前背景
  const rootEl = document.getElementById('root');
  if (rootEl) {
    const firstChild = rootEl.firstChild;
    if (firstChild) {
      const style = window.getComputedStyle(firstChild);
      console.log('\n3. 当前背景样式:');
      console.log(`  backgroundImage: ${style.backgroundImage}`);
      console.log(`  backgroundColor: ${style.backgroundColor}`);
    }
  }
  
  console.log('\n=== 诊断完成 ===');
}

function clearOldCache() {
  console.log('正在清除旧缓存...');
  const oldKeys = [
    'cached_bg_v2_api',
    'cached_bg_v2_bing',
    'cached_bg_v2_upload',
    'cached_bg_url_api',
    'cached_bg_url_bing',
    'cached_bg_url_upload'
  ];
  
  oldKeys.forEach(key => {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
      console.log(`已清除：${key}`);
    }
  });
  
  console.log('清除完成！请刷新页面重新加载背景图。');
}

function forceReloadBackground() {
  console.log('强制重新加载背景图...');
  // 触发 bgConfig 变化来重新加载
  const bgConfig = localStorage.getItem('bg-config');
  if (bgConfig) {
    const config = JSON.parse(bgConfig);
    config.type = config.type || 'default';
    localStorage.setItem('bg-config', JSON.stringify(config));
    console.log('已触发背景重新加载，请观察控制台是否有错误。');
  } else {
    console.log('未找到背景配置，使用默认设置...');
    localStorage.setItem('bg-config', JSON.stringify({type: 'default'}));
  }
}

// 使用说明
console.log('背景图诊断工具已加载。请在控制台运行以下命令：');
console.log('  diagnoseBackground()     - 诊断当前状态');
console.log('  clearOldCache()          - 清除旧缓存');
console.log('  forceReloadBackground()  - 强制重新加载背景');
