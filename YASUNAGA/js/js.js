$(document).ready(function(){
	$('.caip_px_tow_B_right a').mouseover(function(){
		$(this).stop().animate({"top":"-150px"}, 200); 
	})
	$('.caip_px_tow_B_right a').mouseout(function(){
		$(this).stop().animate({"top":"0"}, 200); 
	})
})

$(document).ready(function(){
	$('.zj_zr_list a').mouseover(function(){
		$(this).stop().animate({"top":"-160px"}, 200); 
	})
	$('.zj_zr_list a').mouseout(function(){
		$(this).stop().animate({"top":"0"}, 200); 
	})
})