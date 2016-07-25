    $(function () {
        $(".zhezhao").height($("body").height())
        $(".zhezhao").width($("body").width())
        $(".zp1").click(function () {
			var name1=encodeURI($("font",$(this)).html()),name2=encodeURI("酒店");
            $(".zhezhao").show();
			$(".con").html('<iframe id="if1" name="if1" scrolling="no"  frameborder="0" width="960" height="670" src="弹出层1.html?name1='+name1+'&name2='+name2+'"></iframe>');
            $(".tanchuceng").show();
        })
		
		$(".zp2").click(function(){
		var name1=encodeURI($("font",$(this)).html()),name2=encodeURI("酒店");
		$(".zhezhao").show();
		$(".con").html('<iframe id="if2" name="if2" scrolling="no"  frameborder="0" width="960" height="670" src="弹出层2.html?name1='+name1+'&name2='+name2+'"></iframe>');
		$(".tanchuceng").show();
	})
	
	$(".zp3").click(function(){
		var name1=encodeURI($("font",$(this)).html()),name2=encodeURI("酒店");
		$(".zhezhao").show();
		$(".con").html('<iframe id="if3" name="if3" scrolling="no"  frameborder="0" width="960" height="670" src="弹出层3.html?name1='+name1+'&name2='+name2+'"></iframe>');
		$(".tanchuceng").show();
	})
	
	$(".zp4").click(function(){
		var name1=encodeURI($("font",$(this)).html()),name2=encodeURI("酒店");
		$(".zhezhao").show();
		$(".con").html('<iframe id="if4" name="if4" scrolling="no"  frameborder="0" width="960" height="670" src="弹出层4.html?name1='+name1+'&name2='+name2+'"></iframe>');
		$(".tanchuceng").show();
	})
	
	$(".zp5").click(function(){
		var name1=encodeURI($("font",$(this)).html()),name2=encodeURI("酒店");
		$(".zhezhao").show();
		$(".con").html('<iframe id="if5" name="if5" scrolling="no"  frameborder="0" width="960" height="670" src="弹出层5.html?name1='+name1+'&name2='+name2+'"></iframe>');
		$(".tanchuceng").show();
	})
	
	$(".zp6").click(function(){
		var name1=encodeURI($("font",$(this)).html()),name2=encodeURI("酒店");
		$(".zhezhao").show();
		$(".con").html('<iframe id="if6" name="if6" scrolling="no"  frameborder="0" width="960" height="670" src="弹出层6.html?name1='+name1+'&name2='+name2+'"></iframe>');
		$(".tanchuceng").show();
	})
	
	$(".zp7").click(function(){
		var name1=encodeURI($("font",$(this)).html()),name2=encodeURI("购物中心");
		$(".zhezhao").show();
		$(".con").html('<iframe id="if7" name="if7" scrolling="no"  frameborder="0" width="960" height="670" src="弹出层7.html?name1='+name1+'&name2='+name2+'"></iframe>');
		$(".tanchuceng").show();
	})
	
	$(".zp8").click(function(){
		var name1=encodeURI($("font",$(this)).html()),name2=encodeURI("购物中心");
		$(".zhezhao").show();
		$(".con").html('<iframe id="if8" name="if8" scrolling="no"  frameborder="0" width="960" height="670" src="弹出层8.html?name1='+name1+'&name2='+name2+'"></iframe>');
		$(".tanchuceng").show();
	})
	
	$(".zp9").click(function(){
		var name1=encodeURI($("font",$(this)).html()),name2=encodeURI("购物中心");
		$(".zhezhao").show();
		$(".con").html('<iframe id="if9" name="if9" scrolling="no"  frameborder="0" width="960" height="670" src="弹出层9.html?name1='+name1+'&name2='+name2+'"></iframe>');
		$(".tanchuceng").show();
	})
	
	$(".zp10").click(function(){
		var name1=encodeURI($("font",$(this)).html()),name2=encodeURI("公共设施");
		$(".zhezhao").show();
		$(".con").html('<iframe id="if10" name="if10" scrolling="no"  frameborder="0" width="960" height="670" src="弹出层10.html?name1='+name1+'&name2='+name2+'"></iframe>');
		$(".tanchuceng").show();
	})
	
	$(".zp11").click(function(){
		var name1=encodeURI($("font",$(this)).html()),name2=encodeURI("公共设施");
		$(".zhezhao").show();
		$(".con").html('<iframe id="if11" name="if11" scrolling="no"  frameborder="0" width="960" height="670" src="弹出层11.html?name1='+name1+'&name2='+name2+'"></iframe>');
		$(".tanchuceng").show();
	})
	
	$(".zp12").click(function(){
		var name1=encodeURI($("font",$(this)).html()),name2=encodeURI("公共设施");
		$(".zhezhao").show();
		$(".con").html('<iframe id="if12" name="if12" scrolling="no"  frameborder="0" width="960" height="670" src="弹出层12.html?name1='+name1+'&name2='+name2+'"></iframe>');
		$(".tanchuceng").show();
	})
	
	$(".zp13").click(function(){
		var name1=encodeURI($("font",$(this)).html()),name2=encodeURI("公共设施");
		$(".zhezhao").show();
		$(".con").html('<iframe id="if13" name="if13" scrolling="no"  frameborder="0" width="960" height="670" src="弹出层13.html?name1='+name1+'&name2='+name2+'"></iframe>');
		$(".tanchuceng").show();
	})
	
        $(".g").click(function () {
            $(".zhezhao").hide();
            $(".tanchuceng").hide();
        })

    })

