$(function() {
	$(document).ready(function(){

		$('.nav-hamburger').on('click', function(e){
			e.preventDefault();
			$('.nav-mob').toggleClass('open');
		});

		$('.nav-mob .has-sub > a').on('click', function(e){
			e.preventDefault();
			$(this).parent().find('.sub-menu').addClass('open');
		});

		$('.nav-mob .sub-menu__back').on('click', function(e){
			e.preventDefault();
			$(this).parents('.sub-menu').removeClass('open');
		});

		if( $('.timeline').length ){
			$('.timeline').slick({
				slidesToShow: 4,
				slidesToScroll: 2,
				swipeToSlide: true,
				infinite: false,
				dots: true,
			});
		}

	});

	if (screen.width <= 768){

	}




	// слайдер карточек товара на странице товара
	$('.prodCart-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		autoplay: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});









});
