import ReactDOM from 'react-dom/client';
import AppIntegrated from './app_integrated'
import AppShadow from './app_shadow'

// ContentScriptContext
export default defineContentScript({
  matches: ['<all_urls>'],
  main(ctx) {
    console.log('Hello content.', ctx);
    // 1. 会受css影响
    const ui_css = createIntegratedUi(ctx, {
      position: 'inline',
      anchor: 'body',
      onMount: (container) => {
        const root = ReactDOM.createRoot(container);
        root.render(<AppIntegrated />);
        return root;
      },
      onRemove: (root) => {
        root?.unmount();
      },
    });
    // ui_css.mount();
    // 2. 不受css影响
    const uiShadow = createShadowRootUi(ctx, {
      name: "testa",
      position: 'inline',
      anchor: 'body',
      onMount: (container) => {
        const app = document.createElement('div');
        container.append(app);

        const root = ReactDOM.createRoot(app);
        root.render(<AppShadow />);
        return root;
      },
      onRemove: (root) => {
        root?.unmount();
      },
    })
    uiShadow.mount()
    // browser.runtime.onMessage.addListener((message, _, sendResponse) => {
    //   console.log("Content script received message:", message);
    //   sendResponse(Math.random());
    //   return true;
    // });


    /* ctx 对象提供了多个辅助工具，用于在上下文失效后阻止异步代码运行：
      ctx.addEventListener(...);
      ctx.setTimeout(...);
      ctx.setInterval(...);
      ctx.requestAnimationFrame(...);
     */

    /* 手动检查上下文是否被无效化：
      if (ctx.isValid) {
        // do something
      }
      // OR
      if (ctx.isInvalid) {
        // do something
      }
    */


    //  注入ui
  },
}); 
