/* ----------------------------------------------------------------

[ Custom code ]

01. ScrollIt
02. Preloader
03. Navbar scrolling background
04. Close navbar-collapse when a clicked
05. Sections background image from data background 
06. Animations
07. YouTubePopUp
08. CountUp Numbers
09. Projects owlCarousel
10. Testimonials owlCarousel
11. News owlCarousel
12. Team owlCarousel
13. Clients owlCarousel
14. Services owlCarousel
15. MagnificPopup (Image, Youtube, Vimeo and custom popup)
16. Scroll back to top
17. Slider
18. Accordion Box

------------------------------------------------------------------- */

$(function() {
    "use strict";
    var wind = $(window);
    
    // ScrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -70            // offste (in px) for fixed top navigation
    });
    
    // Preloader
	$("#preloader").fadeOut(900);
	$(".preloader-bg").delay(800).fadeOut(900);
	var wind = $(window);  
    
    // Navbar scrolling background
    wind.on("scroll",function () {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");
        if(bodyScroll > 100){
            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo.png');
        }else{
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo-light.png');
        }
    });
    
    // Close navbar-collapse when a clicked
    $(".navbar-nav .dropdown-item a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    // Sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function(indx){
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    
    // Isotope Active Masonry Gallery
	$('.gallery-items').imagesLoaded(function () {
		// Add isotope on click filter function
		$('.gallery-filter li').on('click', function () {
			$(".gallery-filter li").removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr('data-filter');
			$(".gallery-items").isotope({
				filter: selector
				, animationOptions: {
					duration: 750
					, easing: 'linear'
					, queue: false
				, }
			});
			return false;
		});
		$(".gallery-items").isotope({
			itemSelector: '.single-item'
			, layoutMode: 'masonry'
		, });
	});

    // Animations
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function () {
                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            }
                            else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            }
                            else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            }
                            else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    $(function () {
        contentWayPoint();
    });
    
    // YouTubePopUp
    $("a.vid").YouTubePopUp();
    
    // CountUp Numbers
    $('.numbers .count').countUp({
        delay: 10,
        time: 1500
    });
    
    // Projects owlCarousel
    $('.projects .owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:true,
        autoplay: false,
        dots: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    
    // Testimonials owlCarousel
    $('.testimonials .owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:true,
        autoplay: false,
        dots: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    
    // News owlCarousel *
    $('.news .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        nav: false,
        navText: ["<span class='lnr norc-small-left'></span>","<span class='lnr norc-small-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            600: {
                items: 2,
                dots: true,
                nav: false
            },
            1000: {
                items: 3
            }
        }
    });
    
    // Team owlCarousel *
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: false,
        nav: false,
        navText: ["<span class='lnr norc-small-left'></span>","<span class='lnr norc-small-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            600: {
                items: 2,
                dots: true,
                nav: false
            },
            1000: {
                items: 3
            }
        }
    });
    
    // Clients owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        loop: true
        , margin: 10
        , mouseDrag: true
        , autoplay: false
        , dots: false
        , responsiveClass: true
        , responsive: {
            0: {
                margin: 10
                , items: 2
            }
            , 600: {
                items: 3
            }
            , 1000: {
                items: 4
            }
        }
    });
    
    // Services owlCarousel
    $('.services .owl-carousel').owlCarousel({
		loop: true
		, margin: 30
		, mouseDrag: true
		, autoplay: false
		, dots: true
		, autoplayHoverPause: true
		, responsiveClass: true
		, responsive: {
			0: {
				items: 1
			, }
			, 600: {
				items: 2
			}
			, 1000: {
				items: 3
			}
		}
	});
    
    // Services 2 owlCarousel
    $('.services2 .owl-carousel').owlCarousel({
		loop: true
		, margin: 30
		, mouseDrag: true
		, autoplay: false
		, dots: true
		, autoplayHoverPause: true
		, responsiveClass: true
		, responsive: {
			0: {
				items: 1
			, }
			, 600: {
				items: 2
			}
			, 1000: {
				items: 3
			}
		}
	});
    
    // Services 3 owlCarousel
    $('.services-3 .owl-carousel').owlCarousel({
		loop: true
		, margin: 30
		, mouseDrag: true
		, autoplay: false
		, dots: true
		, autoplayHoverPause: true
		, responsiveClass: true
		, responsive: {
			0: {
				items: 1
			, }
			, 600: {
				items: 2
			}
			, 1000: {
				items: 3
			}
		}
	});
    
    // MagnificPopup
    $(".img-zoom").magnificPopup({
        type: "image"
        , closeOnContentClick: !0
        , mainClass: "mfp-fade"
        , gallery: {
            enabled: !0
            , navigateByImgClick: !0
            , preload: [0, 1]
        }
    })
    $('.magnific-youtube, .magnific-vimeo, .magnific-custom').magnificPopup({
        disableOn: 700
        , type: 'iframe'
        , mainClass: 'mfp-fade'
        , removalDelay: 300
        , preloader: false
        , fixedContentPos: false
    });
    
    // Scroll back to top
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = progress;
        };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery(".progress-wrap").addClass("active-progress");
            } else {
                jQuery(".progress-wrap").removeClass("active-progress");
            }
        });
    jQuery(".progress-wrap").on("click", function (event) {
            event.preventDefault();
            jQuery("html, body").animate({ scrollTop: 0 }, duration);
            return false;
        });
    

});

// Slider 
$(document).ready(function() {
    var owl = $('.header .owl-carousel');
    // Slider owlCarousel - (Inner Page Slider)
    $('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: false,
        navText: ['<i class="norc-small-left" aria-hidden="true"></i>', '<i class="norc-small-right" aria-hidden="true"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                dots: true
            },
            600: {
                dots: true
            },
            1000: {
                dots: true
            }
        }
    });
    
    // Slider owlCarousel
    $('.slider-fade .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        dots: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        nav: false,
        navText: ['<i class="norc-small-left" aria-hidden="true"></i>', '<i class="norc-small-right" aria-hidden="true"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                nav: false
            },
            600: {
                dots: false
            },
            1000: {
                dots: true
            }
        }
    });
    owl.on('changed.owl.carousel', function(event) {
        var item = event.item.index - 2;     // Position of the current item
        $('h4').removeClass('animated fadeInUp');
        $('h1').removeClass('animated fadeInUp');
        $('p').removeClass('animated fadeInUp');
        $('.button-primary').removeClass('animated fadeInUp');
        $('.button-tersiyer').removeClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.button-primary').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.button-tersiyer').addClass('animated fadeInUp');
    });
});

// Accordion
$(".accordion").on("click", ".title", function () {
		$(this).next().slideDown();
		$(".accordion-info").not($(this).next()).slideUp();
	});
$(".accordion").on("click", ".item", function () {
		$(this).addClass("active").siblings().removeClass("active");
	});
