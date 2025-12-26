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
  },
}); 
