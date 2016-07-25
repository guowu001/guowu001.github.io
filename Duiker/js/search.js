// JavaScript Document
(function($){
	
	//搜索框
		jQuery.fn.searchdiv = function(options){
			var opts= $.extend({}, $.fn.searchdivli, options);	
			return this.each(function(){	
				var $this = $(this);
				$this.addClass(opts.initClass);
				$this.focus(function(){
					var val = $this.val();
					$this.removeClass(opts.initClass);
					if(val==opts.initVal){
						$this.val("");	
					}
				});
				$this.blur(function(){
					var val = $this.val();
					if(val==""){
						$this.addClass("search_color");
						$this.val(opts.initVal);		
					}	
				});
			})
		};
		$.fn.searchdivli = {	
			initClass:"search_color",
			initVal:""
		}

})(jQuery)