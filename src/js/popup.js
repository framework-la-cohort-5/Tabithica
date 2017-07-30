// chrome.tabs.get(tabId, function(tab) {
//   chrome.tabs.highlight({'tabs': tab.index}, function() {});
// });
// chrome.tabs.getCurrent(tabId, function() { 
//     chrome.tabs.highlight({'tabs': tab.index}, function() {});
//     document.getElementById("button").style.color = "red";
// });

// function updateTab() {
//     browser.browserAction.onClicked.addListener(() => {
        
//         function onError(error) {
//         console.log(`Error: ${error}`);
//   }

//     var css = "body { border: 20px dotted pink; }";
//     var insertingCSS = browser.tabs.insertCSS({code: css});
//      insertingCSS.then(null, onError);
//      document.getElementById("button").style.color = "red";
//     });
// }