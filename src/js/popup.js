// chrome.tabs.get(tabId, function(tab) {
//   chrome.tabs.highlight({'tabs': tab.index}, function() {});
// });
chrome.tabs.getCurrent(tabId, function() { 
    chrome.tabs.highlight({'tabs': tab.index}, function() {});
    document.getElementById("button").style.color = "red";
});