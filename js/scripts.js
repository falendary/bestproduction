//Универсаньный клин - на iPad очень удобно
var ua = navigator.userAgent,
    clickevent = (ua.match(/iPad/i)) ? "touchstart" : "click";

$(document).ready(function(){
	
	// var wh = $('.wrapper-holder').height(),
	// 		windh = $(window).height() - $('.header-top-wide').height(),
	// 		padtop = (windh - wh) / 2;
	// $('.wrapper-holder').css('padding-top', padtop);		
	// //
	// $(window).on('resize', function() {
	// 	var wh = $('.wrapper-holder').height(),
	// 		windh = $(window).height() - $('.header-top-wide').height(),
	// 		padtop = (windh - wh) / 2;
	// 	$('.wrapper-holder').css('padding-top', padtop);
	// });
	// //
	/*
	Суперклассный код для работы вкладок в портфолио. Классы нужно будет вернуть, если чё
	$('.categories a').on('click', function() {
		$this = $(this);
		var cattxt = $this.text();
		
		 $('.cattxt').text('/ '+cattxt);
		 $('.categories a').removeClass('act');
		 $this.addClass('act');
		
		 var curid = $this.attr('data-id');
		$('.case-holder[id]').hide();
		$('#'+ curid).fadeIn(700);
		return false;
	});*/
	//
	// $('.case-item').on('click', function() {
	// 	var $this = $(this);
	// 	var curid = $this.attr('data-id');
	// 	$('.gallery-block a.fancybox[id]').hide();
	// 	$('#'+ curid).fadeIn(700);
	// 	return false;
	// });
	//
	$('.portfolio').on('mouseover', function() {
		$('.portf-links').css('display','block');
	});
	$('.portf-links').on('mouseover', function() {
		$('.portf-links').css('display','block');
	});
	$('.portfolio').on('mouseleave', function() {
		$('.portf-links').css('display','none');
	});
	$('.portf-links').on('mouseleave', function() {
		$('.portf-links').css('display','none');
	});
	//
	$('.fancybox').fancybox();
	//
	$('#slider1, #slider2').tinycarousel({
		bullets   : true,
		buttons   : false,
		axis   : "y",
		animationTime: 100
	});
	
});