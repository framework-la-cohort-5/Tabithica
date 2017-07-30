<<<<<<< HEAD
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
=======
$("button").on("click",function(tab){



  // fist try on changing the background color.
  //chrome.tabs.executeScript({
  //   code: "document.body.style.backgroundColor='red'"
  // });
});
>>>>>>> f88dfea076f8a58ad8945ee27716f998478f7c67
