$(document).ready(function () {

$('.toggle-btn').click(function(){
	$("body").toggleClass('menu_opan');
})

$('.moving-company-list').hide();

	$('.plus-icon').click(function(){
		$('.moving-company-list').slideToggle('linear');
})

	$('.plus-icon').click(function(){
	$(".plus-icon").toggleClass('plus-icon-rotat');
})

	$('.right-btn-scroll').click(function(){
	$(".right-btn").toggleClass('right-btn-scroll-open');
})

	//fixed header
    $(window).scroll(function() {
        var header = $('header');
        var scroll = $(window).scrollTop();
        var homeScroll = 100;
        if (scroll > homeScroll) {
            header.addClass('fixed');
            jQuery('#return-to-top').fadeIn(300);
        } else {
            header.removeClass('fixed');
            jQuery('#return-to-top').fadeOut(300);
        }
    });
	
	$('.Testimonial').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    dots:true,
		    item:3,
		    navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    }
		})

});

