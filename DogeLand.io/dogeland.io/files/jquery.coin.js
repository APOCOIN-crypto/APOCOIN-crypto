(function($){

$.fn.coin = function(coinClass, content, trail, callback){	
	coinClass = coinClass || "coin";
	content = content || "100$";
	trail = trail || "175px";

	var offset = this.offset();
	var coin = $(document.createElement('div'));
	$(coin).addClass(coinClass).css({position:'absolute',zIndex:'99999999',top:offset.top,left:offset.left}).html(content);
	$('body').append(coin);
	$(coin).animate({top: "-=" + trail,opacity: ["0", "linear"]}, 2000, 'swing', function(){
		$(coin).remove();
		callback ? callback() : null ;
	});
};

})( jQuery );
