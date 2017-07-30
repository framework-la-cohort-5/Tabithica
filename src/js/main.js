function updateTab() {
    browser.browserAction.onClicked.addListener(() => {
        
        function onError(error) {
        console.log(`Error: ${error}`);
  }

    var css = "body { button: 20px dotted pink; }";
    var insertingCSS = browser.tabs.insertCSS({code: css});
     insertingCSS.then(null, onError);
     document.getElementById("button").style.color = "red";
    });
}
chrome.browserAction.onClicked.addListener(updateTab);
updateTab();
