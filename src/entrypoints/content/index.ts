// ContentScriptContext
export default defineContentScript({
  matches: ['<all_urls>'],
  main(ctx) {
    console.log('Hello content.', ctx);
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
