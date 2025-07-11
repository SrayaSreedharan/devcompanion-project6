/* global chrome */
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

// Example: Send message only if someone connects or on some event
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getData') {
    sendResponse({ result: 'Hello from background.js' });
  }

  return true; // Required for async sendResponse
});

