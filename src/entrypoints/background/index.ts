export default defineBackground(() => {
  console.log('Hello index!', browser, { id: browser.runtime.id });

  // 
  browser.runtime.onInstalled.addListener(async ({ reason }) => {
    console.log('browser.runtime.onInstalled.addListener', reason);

    if (reason !== "install") return;

    // // Open a tab on install
    // await browser.tabs.create({
    //   url: browser.runtime.getURL("/get-started.html"),
    //   active: true,
    // });
  });

  // 
  browser.runtime.onMessage.addListener((message, _, sendResponse) => {
    console.log("Background received message:", message);
    sendResponse({ success: true, data: "这是数据" })
  });
});