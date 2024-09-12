new WOW().init();
(function($) {
	$.fn.menumaker = function(options) {
		var navigation = $(this), settings = $.extend({
			title: "",
			format: "dropdown",
			sticky: false
		}, options);

		return this.each(function() {
			navigation.find('li ul').parent().addClass('has-sub');
			multiTg = function() {
				navigation.find(".has-sub ul li.active").parents('.has-sub').addClass('active');
			};
			multiTg();
		});
	};
	$(document).ready(function(){
		$(document).ready(function() {
			$("nav.navigation").menumaker({
				title: "",
				format: "multitoggle"
			});
		});
	});
})(jQuery);

$('.main-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayHoverPause: true,
    dots:  false,
    nav: false,
});


$('.box-faq__group .question').click(function() {
	let faqBlock = $(this).closest('.box-faq')
    let faqGroup = $(this).closest('.box-faq__group');
    if (faqGroup.hasClass('open')) {
        faqGroup.removeClass('open');
    } else {
        faqBlock.find('.box-faq__group.open').removeClass('open');
        faqGroup.addClass('open');
    }
});
$('.testominal-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayHoverPause: true,
    dots:  true,
	nav: true,
    navText: ['<img src="./images/left.png"></span>', '<img src="./images/right.png">'],
});

$(window).scroll(function () {
	
	var statisticNumberPosition = $(".statics-wrapper").offset().top;
  
	var windowHeight = $(window).height();
  
	if (statisticNumberPosition < windowHeight + $(window).scrollTop()) {
	  $(".counter").each(function () {
		var $this = $(this),
		  countTo = $this.attr("data-countto");
		countDuration = parseInt($this.attr("data-duration"));
		$({ counter: $this.text() }).animate(
		  {
			counter: countTo
		  },
		  {
			duration: countDuration,
			easing: "linear",
			step: function () {
			  $this.text(Math.floor(this.counter));
			},
			complete: function () {
			  $this.text(this.counter);
			}
		  }
		);
	  });
	  
  
	  $(window).off("scroll");
	}
});
window.addEventListener('scroll', () => {
    document.querySelectorAll('.progress-bar').forEach(progressBar => {
        if (progressBar.getBoundingClientRect().top < window.innerHeight) {
            progressBar.classList.add('show');
        }
    });
});
  

// $('.main-blog').owlCarousel({
//     items: 2,
//     loop: true,
//     margin: 30,
//     autoplay: true,
//     autoplayHoverPause: true,
//     dots:  true,
//     nav: false,
//     responsive: {
//         0: {
//             items: 1,
//             margin: 0
//         },
//         992: {
//             items: 2,
//         }
//     }
// });


// $(function() {
//     $('nav#menu').mmenu({
//         extensions  : [ 'effect-slide-menu', 'pageshadow' ],
//         searchfield : true,
//         counters    : false,
//         navbar      : {
//             title   : name_company
//         },
//         offCanvas   : {
//             position: "right"
//         },
//         navbars     : [
//         {
//             position    : 'top',
//             content     : [ 'searchfield' ]
//         }, {
//             position    : 'top',
//             content     : [
//             'prev',
//             'title',
//             'close'
//             ]
//         }
//         ]
//     }); 
// });

// productSlider = jQuery(".product_slider").lightSlider({
//     gallery             : true,
//     item                : 1,
//     loop                : true,
//     thumbItem           : 7,
//     slideMargin         : 0,
//     auto                : true,
//     // speed               : 5000,
//     // pause               : 6000,
//     vThumbWidth         : 120,
//     vThumbHeight         : 120,
//     // enableDrag          : true,
//     // currentPagerPosition: 'center',
//     // adaptiveHeight      : true,
//     onSliderLoad        : function (el) {
//         el.lightGallery({
//             selector: '.product_slider .lslide'
//         });
//     },
// });


