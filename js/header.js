$(document).ready(function(){
	$('.menu').click(function(){
		if($(this).find('.submenu').css('display') == 'none'){
			$('.submenu').slideUp();	
			$(this).find('.submenu').slideDown();
		} else {
			$(this).find('.submenu').slideUp();
		}
	});
});
$(document).on("click", function(event){
    var $trigger = $(".menu");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".submenu").slideUp();
    }     
});



$(document).ready(function(){
	$('.search').click(function(){
		$(this).find('.search-menu').fadeToggle();
	});
});
$(document).on("click", function(event){
    var $trigger = $(".search");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".search-menu").fadeOut();
    }     
});