function introduction() {
	if ( $(window).height() < 567 ) {
		$('.introduction').css({
			'position': 'relative',
			'margin': '64px 0 -64px'
		});
	}
	else {
		$('.introduction').css({
			'position': 'absolute',
			'margin': '0'
		});
	}
}
$(document).ready(function() {
	if ( $('.introduction').length > 0 ) {
		introduction();
	}
	if ( $('.item').length > 0 ) {
		$('.item .gallery .big img').hide();
		$('.jcarousel').jcarousel({
			scroll: 1,
			animation: 500,
			easing: 'easeInOutQuad',
			wrap: 'circular'
		});
		$('.item .gallery .jcarousel li a').bind('click', function() {
			$(this).parents('.gallery').find('.big img').hide();
			$(this).parents('.gallery').find('.big img[data-big='+$(this).attr('href')+']').stop(true,true).fadeIn(500);
			return false;
		}).filter(':first').click();
	}
});
$(window).resize(function() {
	if ( $('.introduction').length > 0 ) {
		introduction();
	}
});
$(window).load(function() {
	$('.header .menu li').each(function() {
		if ( $(this).find('span').height() > 18 ) {
			$(this).find('span').css({
				'margin': '-9px 0 -9px -5px'
			});
		}
	});
	if ( $('.item').length > 0 ) {
		var scroll = $('.item .information > div').jScrollPane();
		var api = scroll.data('jsp');
		scroll.bind('mousewheel', function (event, delta, deltaX) { 
			api.scrollByY(delta*-100);
			return false;
		});
	}
});