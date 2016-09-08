require.config({
	paths:{
		jquery:'jquery-1.7.2',
		move:'move-end'
	}
});
requirejs(['show'],function(mod){
	mod.show('#box','mouseover');
	mod.show('#box1','click');	
});

