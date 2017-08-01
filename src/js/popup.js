// $("button").on("click",function(tab){
//   // fist try on changing the background color.
//         //chrome.tabs.executeScript({
//         //   code: "document.body.style.backgroundColor='red'"
//         // });
//     var tabId = activeInfo.tabId;
//     chrome.tabs.query({
//         currentWindow: true,
//         pinned: true
//     }, function(tabs) {
//         // Only move the tab if at least one tab is pinned
//         if (tabs.length > 0) {
//             var lastTab = tabs[ tabs.length - 1 ];
//             var tabIndex = lastTab.index + 1;
//             for (var i=0; i<tabs.length; ++i) {
//                 if (tabs[i].id == tabId) {
//                     // Current tab is pinned, so decrement the tabIndex by one.
//                     --tabIndex;
//                     break;
//                 }
//             }
//             chrome.tabs.move(tabId, {index: tabIndex});
//         }
//     }); // End of chrome.tabs.query
// });