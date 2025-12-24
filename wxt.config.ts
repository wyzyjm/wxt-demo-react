import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  modules: ['@wxt-dev/module-react'],
  manifest: ({ browser, manifestVersion, mode, command }) => {
    return {
      permissions: ['storage', 'tabs'],
      content_scripts: [
        {
          matches: ['<all_urls>'], // 匹配所有网址
          js: ['entrypoints/content/index.ts'],
        },
      ],
    };
  },

});
