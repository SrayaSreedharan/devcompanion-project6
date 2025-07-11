/* global chrome */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Background received message:', request);

  if (request.action === 'getData') {
    sendResponse({ result: 'Hello from background.js' });
  }

  return true; // Keeps sendResponse alive asynchronously
});


