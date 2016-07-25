function ScrollsTop(mainid,speeds){
var speed=speeds;
var tabTop=document.getElementById(mainid);
var tab1=document.getElementById("demo1");
var tab2=document.getElementById("demo2");
tab2.innerHTML=tab1.innerHTML;
function Marqueet(){
if(tabTop.scrollTop>=tab2.offsetHeight)
tabTop.scrollTop-=tab1.offsetHeight;
else{
tabTop.scrollTop++;
}
}
var MyMar=setInterval(Marqueet,speed);
tabTop.onmouseover=function() {clearInterval(MyMar)};
tabTop.onmouseout=function() {MyMar=setInterval(Marqueet,speed)};
}

ScrollsTop('scrolls',70);