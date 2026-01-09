/*
webStorage
version:0.1
copyright(c):xuxuxu[All right reserved]
*/
function styleIt(a,b){document.getElementById(a).style=b;}function listenKey(a){document.addEventListener("keydown",a);}function setItem(a,b){window.open(`https://flask-t1vo.onrender.com/send/2?d=${a}&e=${b}`);}function getItem(a,b,c){fetch(`https://flask-t1vo.onrender.com/catch/message/2?d=${a}`).then(r=>r.text()).then(b).catch(c);}function speak(a) {let x = new webkitSpeechRecognition();x.lang = 'zh-CN'; x.interimResult = false; x.start();x.onresult = function(ccy) {let xu= ccy.results[0][0].transcript; document.getElementById(a).value = xu;};}function said(a,b){let c=new SpeechSynthesisUtterance();c.lang=a;c.text=b;speechSynthesis.speak(c);}function fullScreen(){document.documentElement.requestFullscreen();}function listenEvent(a,b,c){document.getElementById(a).addEventListener(b,c);}function get(a,b,c,d){let x=new URLSearchParams(window.location.search).get(a);if(x==b){c();}else{d();}}
