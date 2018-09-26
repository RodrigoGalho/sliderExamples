$(document).ready(function(){
	$('.slider').slick({
		dots: false,
		arrows: true,
		asNavFor: ".slider-thumb"
	});

	$('.slider-thumb').slick({
		arrows: false,
		fade: true,
		asNavFor: ".slider"
	});
});