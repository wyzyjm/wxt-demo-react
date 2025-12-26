import { defineConfig } from 'wxt';
import tailwindcss from '@tailwindcss/vite'

const manifest = {
  permissions: ['storage', 'tabs', 'sidePanel'],  // 权限
  action: {
    "default_icon": "128.png"
  },
  'background': {},
  'chrome_url_overrides': {},
  'devtools_page': {},
  'manifest_version': {},
  'options_page': {},
  'options_ui': {},
  'sandbox': {},
  'web_accessible_resources': {},
  content_scripts: [
    {
      matches: [
        "http://*/*",
        "https://*/*",
        "<all_urls>"
      ],
      "js": ["content.ts"],
    }
  ]
}

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  modules: ['@wxt-dev/module-react'],
  webExt: {
    startUrls: ['http://www.baidu.com']  // 启动的页面
  },
  alias:{
    "@":"/src",
    "@/assets":"/src/assets",
    "@/components":"/src/components",
    "@/entrypoints":"/src/entrypoints",
    "@/utils":"/src/utils",
    "@/styles":'/src/styles'
  },
  vite: () => {
    return {
      plugins: [
        tailwindcss()
      ]
    }
  },
  manifest: ({ browser, manifestVersion, mode, command }) => {
    return {
      permissions: ['storage', 'tabs', 'sidePanel'],
      side_panel: {
        default_path: '/src/entrypoints/sidepanel/index.html', // 这里的路径要对应你的入口文件名
      },
    };
  },

});
