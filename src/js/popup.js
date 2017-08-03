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
    chrome.tabs.create({url: 'http://facebook.com'}, function(data){});
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
        chrome.tabs.move(tabs[0].id, {index: -1});
    });
});
$("#sort").on("click",function(){
    chrome.tabs.query({index: 0}, function(tabs){
        let mtab = tabs[0].id;
        chrome.tabs.move(mtab, {index: -1});
    });
    chrome.tabs.query({index: 1}, function(tabs){
        let mtab = tabs[0].id;
        chrome.tabs.move(mtab, {index: -1});
    });
});


// my css animations

var style = {
  width: "65px",
  height: "45px",
  textDecoration: "underline",
  fontWeight: "bold",
}

var style2 = {
  width: "60px",
  height: "40px",
  textDecoration: "none",
  fontWeight: "normal",
}

var style3 = {
  width: "125px",
  height: "45px",
  textDecoration: "underline",
  fontWeight: "bold",
}

var style4 = {
  width: "120px",
  height: "40px",
  textDecoration: "none",
  fontWeight: "normal",
}

$(".regButton").mouseover(function(){
  $(this).css(style);
})

$(".regButton").mouseout(function(){
  $(this).css(style2);
})

$("#sort").mouseover(function(){
  $(this).css(style3);
})

$("#sort").mouseout(function(){
  $(this).css(style4);
})

// color change
$("#red").on("click",function(tab){
chrome.tabs.executeScript({
  code: "document.body.style.backgroundColor='red'"
  });
 });
 $("#green").on("click",function(tab){
 chrome.tabs.executeScript({
   code: "document.body.style.backgroundColor='green'"
   });
  });
  $("#blue").on("click",function(tab){
  chrome.tabs.executeScript({
    code: "document.body.style.backgroundColor='blue'"
    });
   });
   $("#yellow").on("click",function(tab){
   chrome.tabs.executeScript({
     code: "document.body.style.backgroundColor='yellow'"
     });
    });
