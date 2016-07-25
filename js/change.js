// JavaScript Document
//窗口改变头部随机大小
function change(){
	var oHeadBg=document.querySelector('.headBg');
	var clientW=document.documentElement.clientWidth;
	if(clientW<=1366)
	{
		oHeadBg.style.width=1366+'px';
		
	}
	else
	{
		oHeadBg.style.width=100+'%';
			
	}
}

window.onresize=function(){
	change()
    	
}