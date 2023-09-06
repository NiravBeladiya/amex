$(document).ready(function () {

$('.toggle-btn').click(function(){
	$("body").toggleClass('menu_opan');
})

$('.moving-company-list').hide();

	$('.plus-icon').click(function(){
		$('.moving-company-list').slideToggle('linear');
})
	
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