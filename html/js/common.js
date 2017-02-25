$(function() {

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(window).ready(function() {
    $(".program__box-item").animated("flipInY");
    $(".advantages__item_float_left").animated("fadeInLeft");
    $(".advantages__item_float_right").animated("fadeInRight");
    $(".text-content__wrapper p").animated("fadeInLeft");
    $(".reviews__item-img").animated("flipInY");
    $(".misssion__column-left").animated("fadeInLeft");
    $(".misssion__column-right").animated("fadeInRight");
    $(".build__item-img-box").animated("rotateIn");
    $(".positions__left-sect").animated("fadeInUp");
    $(".positions__right-sect").animated("fadeInUp");
    $(".about-company__text p").animated("fadeInLeft");
    $(".certificates__img-item img").animated("flipInY");
    $(".begin__item_to-right").animated("fadeInLeft");
    $(".begin__item_to-left").animated("fadeInRight");
});