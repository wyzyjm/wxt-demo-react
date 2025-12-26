import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const openSidebar = async () => {
    try {
      console.log('Attempting to open sidebar...');
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      console.log('Current tab:', tab);

      if (tab?.windowId) {
        console.log('Opening sidebar for window:', tab.windowId);
        await chrome.sidePanel.open({ windowId: tab.windowId });
        console.log('Sidebar opened successfully');
      } else {
        console.error('No window ID found for current tab');
      }
    } catch (error) {
      console.error('Failed to open sidebar:', error);
    }
  };

  const sendMessage = async () => {
    console.log('发送消息');

    try {
      const message = {
        type: "hello",
        payload: "world123"
      }
      const response = browser.runtime.sendMessage(message);
      console.log("popup", { response });
    } catch (error) {
      console.log('报错了');
    }
  }

  return (
    <div className='w-2xs flex flex-col flex-wrap justify-center items-center py-3'>
      <div className='py-1 cursor-pointer font-bold' onClick={sendMessage}>发送消息</div>
      <div className='py-1 cursor-pointer' onClick={openSidebar}>打开侧边栏</div>
    </div>
  );
}

export default App;
