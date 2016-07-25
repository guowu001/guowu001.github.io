/* 以div排版的图片 水平移动，不自动；
html: 
	  <div class="scollbox">
      <div class="scollpic"><!--图片 图片滚动区容器id定为PicContainer-->
          <div id="PicContainer" class="picul">
            <div class="pic1">
            	<img src="" />
                <p>图片1</p>
            </div>
				....
			<div class="pic1">
            	<img src="" />
                <p>图片1</p>
            </div>
          </div>
      </div>
  	  <a class="leftbtn arrow" href="javascript:void(0);"><img src="" /></a><!--左按纽 容器class设为arrow-->
      <a class="rightbtn arrow1" href="javascript:void(0);"><img src="" /></a><!--右按纽容器 class设为arrow1-->
  </div>
  
css:

.scollbox{ position:relative; width:310px; height:69px;}
.scollpic{ width:228px; height:89px; overflow:hidden;  position:absolute; top:0px; left:41px;}
.picul div{ float:left; margin-right:10px; height:89px; width:69px; cursor:pointer; text-align:center;}
.leftbtn{ display:block; position:absolute; width:24px; height:21px; left:0; top:21px;}
.rightbtn{ display:block; position:absolute; width:24px; height:21px; right:0; top:21px;}
  
*/
var SellerScroll = function(options){ 
this.SetOptions(options); 
this.lButton = this.options.lButton; 
this.rButton = this.options.rButton; 
this.oList = this.options.oList; 
this.showSum = this.options.showSum; 

this.iList = $("#" + this.options.oList + ">img"); 
this.iListSum = this.iList.length; 
var oiListSum = this.iList.length; 
this.iListWidth = this.iList.outerWidth(true); 
this.moveWidth = this.iListWidth * this.showSum; 
this.dividers = Math.ceil(this.iListSum / this.showSum);//共分为多少块 
this.moveMaxOffset = (this.dividers - 1) * this.moveWidth; 
$("#" + this.options.oList).width(this.dividers* this.moveWidth);
this.LeftScroll(); 
this.RightScroll(); 
}; 
SellerScroll.prototype = { 
SetOptions: function(options){ 
this.options = { 
lButton: "arrow", 
rButton: "arrow1", 
oList: "PicContainer", 
showSum: 1//一次滚动多少个items 
}; 
$.extend(this.options, options || {}); 
}, 
ReturnLeft: function(){ 
	return isNaN(parseInt($("#" + this.oList).css("margin-left"))) ? 0 : parseInt($("#" + this.oList).css("margin-left")); 
}, 

//
LeftScroll: function(){ 
if(this.dividers == 1) return; 
var _this = this, currentOffset; 
$("." + this.lButton).click(function(){ 
									 
		currentOffset = _this.ReturnLeft(); 
		$("#" + _this.oList).css( "margin-left", -_this.moveWidth ); 
            for(var j = _this.dividers-1; j > (_this.dividers-1) - _this.showSum; j--){ 
			$("#"+_this.options.oList+">img:last").prependTo($("#" + _this.oList));
			//alert($("#PicContainer>img").length);
			//$("#PicContainer>img").length();
			var otitleimg=$("#PicContainer>img").length-1;
			$(".bigpic>.pic").children("img").attr("src",$("#PicContainer>img").eq(j-otitleimg).attr("src"));
		
		    } 

		    $("#" + _this.oList + ":not(:animated)").animate( { marginLeft: "+=" + _this.moveWidth  }, { duration: "slow", complete: function(){ $("#" + _this.oList).css( "margin-left","0px" ); 
			
		} } ); 
		}); 
}, 
RightScroll: function(){ 
	
	if(this.dividers == 1) return; 
	var _this = this, currentOffset; 
	$("." + this.rButton).click(function(){ 		 
	currentOffset = _this.ReturnLeft(); 
	$("#" + _this.oList + ":not(:animated)").animate({ marginLeft: "-=" + _this.moveWidth  }, {duration: "slow", complete: function(){
			
			for(var j = 0; j < _this.showSum; j++){ 

			$("#"+_this.options.oList+">img:first").appendTo($("#" + _this.oList));
			//alert(j);
			
			$(".bigpic>.pic").children("img").attr("src",$("#PicContainer>img").eq(j).attr("src"));
			
		    } 
		    $("#" + _this.oList).css( "margin-left","0px" ); 
			
		 }});  
	}); 
}}; 
$(document).ready(function(){ 
	var ff = new SellerScroll();
}); 
