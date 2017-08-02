$("#codingSession").on("click",function(tab){
    chrome.tabs.create({url: 'http://google.com'}, function(data){});
    chrome.tabs.create({url: 'http://github.com'}, function(data){});
    chrome.tabs.create({url: 'http://developer.mozilla.org/en-US/docs/Web/javascript'}, function(data){});
    chrome.tabs.create({url: 'http://pythontutor.com'}, function(data){});
  
});
$("#pro").on("click",function(tab){
    chrome.tabs.create({url: 'http://reddit.com'}, function(data){});
    chrome.tabs.create({url: 'http://youtube.com'}, function(data){});
    chrome.tabs.create({url: 'http://amazon.com'}, function(data){});
});
$("#news").on("click",function(tab){
     chrome.tabs.create({url: 'http://reddit.com/r/news/'}, function(data){});
     chrome.tabs.create({url: 'http://theverge.com'}, function(data){});
     chrome.tabs.create({url: 'http://thenextweb.com'}, function(data){});
     chrome.tabs.create({url: 'http://techcrunch.com'}, function(data){});
});
$("#career").on("click",function(tab){
    chrome.tabs.create({url: 'http://monster.com'}, function(data){});
    chrome.tabs.create({url: 'http://indeed.com'}, function(data){});
    chrome.tabs.create({url: 'http://linkedin.com'}, function(data){});
    chrome.tabs.create({url: 'http://goo.gl/4x3q9a'}, function(data){});
});


$("#move-left").on("click",function(){
    chrome.tabs.query({active: true}, function(tabs){
        chrome.tabs.move(tabs[0].id, {index: 0});
    });
});
$("#move-right").on("click",function(){
    chrome.tabs.query({active: true}, function(tabs){
        console.log(tabs);
        chrome.tabs.move(tabs[0].id, {index: -1});
    });
});
