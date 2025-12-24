export default defineBackground(() => {
  console.log('Hello index!', browser, { id: browser.runtime.id });

  browser.action.onClicked.addListener(() => {
    // ...
  });
});