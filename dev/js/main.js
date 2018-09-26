$(document).ready( () => {
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

	$('.slider-add').slick({
		dots: false,
		arrows: true,
		asNavFor: ".slider-thumb"
	});

	$('.add-thumb').click( function(){
		let img = $(this).data("slide");
		$('.slider-add').slick('slickAdd','<div><img src="dev/img/' + img + '" />');

		let numberSlides = $(".slider-add .slick-slide").size();
		console.log(Math.floor(numberSlides/2));
		$('.slider-add').slick('slickGoTo', numberSlides-1 , true);
	});
} );