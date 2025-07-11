/* global chrome */

chrome.runtime.sendMessage({ action: "getData" }, (response) => {
  if (chrome.runtime.lastError) {
    console.error("Message error:", chrome.runtime.lastError.message);
    return;
  }

  if (response && response.result) {
    console.log(response.result);
  } else {
    console.warn("No result received");
  }
});

