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
	    responsive: {
        0: {
            nav:false
        },
        992: {
            nav: true
        }
    }
});

$(window).scroll(function () {
    // Kiểm tra xem lớp 'statics-wrapper' có tồn tại không
    if ($(".statics-wrapper").length) {
        var statisticNumberPosition = $(".statics-wrapper").offset().top;
        var windowHeight = $(window).height();

        if (statisticNumberPosition < windowHeight + $(window).scrollTop()) {
            $(".counter").each(function () {
                var $this = $(this),
                    countTo = $this.attr("data-countto");
                var countDuration = parseInt($this.attr("data-duration"));
                
                // Thực hiện hoạt ảnh đếm
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

            // Tắt sự kiện cuộn
            $(window).off("scroll");
        }
    }
});
window.addEventListener('scroll', () => {
    document.querySelectorAll('.progress-bar').forEach(progressBar => {
        if (progressBar.getBoundingClientRect().top < window.innerHeight) {
            progressBar.classList.add('show');
        }
    });
});
  

$('.main-partner').owlCarousel({
    items: 1,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayHoverPause: true,
    dots:  false,
    nav: false,
	stagePadding: 50,
});

$('.main-overview').owlCarousel({
    items: 1,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayHoverPause: true,
    dots:  true,
    nav: false,
	stagePadding: 25,
});
$('.main-team').owlCarousel({
    items: 1,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayHoverPause: true,
    dots:  true,
    nav: false,
    responsive: {
        0: {
            items: 1,
            margin: 0,
        },
        768: {
            items: 2,
        }
    }
});


$(function() {
    $('nav#menu').mmenu({
        extensions  : [ 'effect-slide-menu', 'pageshadow' ],
        searchfield : true,
        counters    : false,
        navbar      : {
            title   : name_company
        },
        offCanvas   : {
            position: "right"
        },
        navbars     : [
        {
            position    : 'top',
            content     : [ 'searchfield' ]
        }, {
            position    : 'top',
            content     : [
            'prev',
            'title',
            'close'
            ]
        }
        ]
    }); 
});

$('.pricing-table__package li a').click(function(e){
    e.preventDefault()
    let parent_block = $(this).closest('.pricing-wrap')
    let parent_li = $(this).closest('li')
    parent_block.find('li.active').removeClass('active');
    parent_li.addClass('active')
    let id_package = $(this).attr('href')
    parent_block.find('.pricing-table__box').css('display', 'none')
    $(id_package).css('display', 'block')
})

var scrollingElements = document.querySelectorAll('.problem-inner');
var startX;

scrollingElements.forEach(function (scrollingElement) {
    scrollingElement.addEventListener('touchstart', function (e) {
      startX = e.touches[0].pageX;
    });

    scrollingElement.addEventListener('touchmove', function (e) {
      var deltaX = startX - e.touches[0].pageX;
      scrollingElement.scrollLeft += deltaX;
      startX = e.touches[0].pageX;
      e.preventDefault(); 
    });

    scrollingElement.addEventListener('mousedown', function (e) {
        startX = e.pageX;
    });

    scrollingElement.addEventListener('mousemove', function (e) {
        if (e.buttons === 1) {
            var deltaX = startX - e.pageX;
            scrollingElement.scrollLeft += deltaX;
            startX = e.pageX;
            e.preventDefault();
        }
    });

        scrollingElement.addEventListener('mouseup', function () {
        startX = 0;
    });
});


if (window.innerWidth >= 992) {
    const teamImage = document.querySelector('.team-box .team-img img');

    if (teamImage) {
        const height = teamImage.clientHeight - 50;
        $('.team-info__auto').css('max-height', height);
    }
}

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


