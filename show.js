define(['jquery','move'],function($,M){
		function show(id,clc){  
		var w=50;
		for(var i=1;i<$(id+' li').length;i++){
			$(id+' li:eq('+i+')').css('left',$(id).outerWidth()-w*($(id+' li').length-i));
		}
		$(id+' li')[clc](function(){
			for(var i=0;i<$(id+' li').length;i++){
				if(i<=$(this).index()){
					M.move($(id+' li')[i],{left:i*w});
				}else{
					M.move($(id+' li')[i],{left:$(id).outerWidth() - w * ($(id+' li').length - i)});
				}
			}
		});
		}

		return {
			show:show
		};
});