// JavaScript Document
(function(win,doc){
	function change(){
		doc.documentElement.style.fontSize=doc.documentElement.clientWidth/320*10+'px';	
	}	
	change();
	win.addEventListener('resize',change,false);
})(window,document);

window.addEventListener('DOMContentLoaded',function(){
	var oUl=document.querySelector('.banner_pic');
	var aLi=oUl.children;
	
	var x=-aLi[0].offsetWidth;
	var iNow=0;
	
	var bReady=true;
	
	oUl.addEventListener('touchstart',function(ev){
		if(!bReady)return;
		bReady=false;
		oUl.style.WebkitTransition='none';
		
		var downX=ev.targetTouches[0].pageX;
		
		var disX=downX-x;
		function fnMove(ev){
			x=ev.targetTouches[0].pageX-disX;
			oUl.style.WebkitTransition='0.4s all ease';
			
			oUl.style.WebkitTransform='translate3d('+x+'px,0,0)';
			
			
		};
		
		function fnEnd(ev){
			oUl.removeEventListener('touchmove',fnMove,false);
			oUl.removeEventListener('touchend',fnEnd,false);
			oUl.style.WebkitTransition='0.4s all ease';
			var upX=ev.changedTouches[0].pageX;			
			var dX=Math.abs(downX-upX);
			if(dX>50){
				if(downX-upX>0){
					iNow++;
					if(iNow==aLi.length-1)iNow=aLi.length-2;
					x=-iNow*aLi[0].offsetWidth;
					oUl.style.WebkitTransform='translate3d('+x+'px,0,0)';
					
				}else{
					iNow--;
					if(iNow==-2)iNow=-1;
					x=-iNow*aLi[0].offsetWidth;
					oUl.style.WebkitTransform='translate3d('+x+'px,0,0)';	
				}
			}else{
				x=-iNow*aLi[0].offsetWidth;
				oUl.style.WebkitTransform='translate3d('+x+'px,0,0)';
			}
			
			function moveEnd(){
				bReady=true;
				oUl.removeEventListener('transitionend',moveEnd,false);
				
				if(iNow==aLi.length-2){
					iNow=0;
					oUl.style.WebkitTransition='none';
					x=-iNow*aLi[0].offsetWidth;
					oUl.style.WebkitTransform='translate3d('+x+'px,0,0)';
				}else if(iNow==-1){
					iNow=aLi.length-3;
					oUl.style.WebkitTransition='none';
					x=-iNow*aLi[0].offsetWidth;
					oUl.style.WebkitTransform='translate3d('+x+'px,0,0)';
				}
				
			}
			
			oUl.addEventListener('transitionend',moveEnd,false);
			
		}
		
		oUl.addEventListener('touchmove',fnMove,false);
		oUl.addEventListener('touchend',fnEnd,false);
		
		ev.preventDefault();
	},false);
},false);