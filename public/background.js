/* global chrome */

if (typeof chrome !== "undefined" && chrome.runtime) {
  chrome.runtime.sendMessage({ action: "getData" }, (response) => {
    console.log(response.result);
  });
}
