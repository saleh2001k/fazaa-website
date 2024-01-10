(function ($) {
	var ua = window.navigator.userAgent;
	var isIE = /MSIE|Trident/.test(ua);

	if ( !isIE ) {
		//IE specific code goes here
		"use strict";
	}

	/** Adobe typekit font */
	try{Typekit.load({ async: true });}catch(e){};

  /*======================
    Sticky header
   ========================*/

		const body = document.body;
		const scrollUp = "scroll-up";
		const scrollDown = "scroll-down";
		let lastScroll = 100;
		window.addEventListener("scroll", () => {
		    const currentScroll = window.pageYOffset;
		    if (currentScroll <= 0)
		    {
		      body.classList.remove(scrollUp);
		      return;
		    }
		    if (currentScroll > lastScroll && !body.classList.contains(scrollDown))
		    {
		      // down
		      body.classList.remove(scrollUp);
		      body.classList.add(scrollDown);
		    }
		    else if ( currentScroll < lastScroll && body.classList.contains(scrollDown) )
		    {
		      // up
		      body.classList.remove(scrollDown);
		      body.classList.add(scrollUp);

		    }
		    lastScroll = currentScroll;
		});

    /*======================
      Mobile menu 
     ========================*/

		$("#hamburger").on("click", function () {
			$(".mobile-nav").addClass("show");
			$(".offcanvas-overlay").addClass("overlay-open");
		});

    $("#hamburger-2").on("click", function () {
      $(".mobile-nav").addClass("show");
      $(".offcanvas-overlay").addClass("overlay-open");
    });


        $(".close-nav").on("click", function () {
			$(".mobile-nav").removeClass("show");
			$(".offcanvas-overlay").removeClass("overlay-open");
		});

		$(window).scroll(function(){
			if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
				$(".mobile-nav").removeClass("show");
				$(".offcanvas-overlay").removeClass("overlay-open");
			}
		});
  /*======================
    Wow Animation
   ========================*/

	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();

 /*======================
    Enable Masonry
  ========================*/

	var $grid = $('.masonry').masonry({
	 	itemSelector: '.col',
	 	columnWidth: '.col',
	 	horizontalOrder: true,
	});

	 /*======================
      trigger scroll
    ========================*/

    $('a.scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var o = $(this.hash);
            if ((o = o.length ? o : $("[name=" + this.hash.slice(1) + "]")).length) return $("html, body").animate({
                scrollTop: o.offset().top - 70
            }, 1e3, "easeInOutExpo"), !1
        }
    });

    $(".pricing__switch .checkbox").change(function() {
        if(this.checked) {
            $('.pricing-table .pricing-table__amount').addClass('checked');
        }
        else {
            $('.pricing-table .pricing-table__amount').removeClass('checked');
        }
    });

	/*======================
    Popup Video lightbox
  ========================*/

     $('.youtube-video').magnificPopup({
         type: 'iframe',
         preloader: false,
         fixedBgPos: true,
         removalDelay: 500,
         fixedContentPos: true,
         callbacks: {
             beforeOpen: function() {
                 // console.log(this.st.iframe.markup);
                 this.st.iframe.markup = this.st.iframe.markup.replace('mfp-iframe-scaler', 'mfp-iframe-scaler mfp-with-anim');
                 this.st.mainClass = this.st.el.attr('data-effect');
             }
         },
     });
   /*======================
     Select Wrap 
   ========================*/

	$( "select" ).wrap( "<div class='select-wrapper'></div>" );

  /*======================
    Number Counter
  ========================*/

	$('.shift').counterUp({
	    delay: 10,
	    time: 2000
	});
	
	/*=================================
    Header height = gutter height
  ====================================*/

	function setGutterHeight(){
		var header = document.querySelector('.main-header-wraper'),
			  gutter = document.querySelector('.header-gutter'),
			  banner = document.querySelector('.banner');
		if (gutter) {
			gutter.style.height = header.offsetHeight + 'px';
			gutter.style.minHeight = header.offsetHeight + 'px';
		}

		if (banner) {
			banner.style.paddingTop = header.offsetHeight + 'px';
		}
	}
	window.onload = setGutterHeight;
	window.onresize = setGutterHeight;

  /*==========================
    Search bar
  ============================*/

  $('.header-search').on('click', '.search-toggle', function(e) {
      e.preventDefault();
      var selector = $(this).data('selector');
      $(selector).toggleClass('show').find('.search-input').focus();
  });

  /*===========================
    our-best-hero-slider
   ============================*/
    $(".our-best-hero-slider").slick({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      // adaptiveHeight: true,
      prevArrow: $('.slider-controls .slide-next'),
      nextArrow: $('.slider-controls .slide-prev'),
      autoplay: true,
      appendArrows: $('.slick-controls'),
      responsive: [
      	{
      	  breakpoint: 991,
      	  settings: {
      	    slidesToShow: 3,
      	  },
      	},
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            autoplay: true,
          },
        },
      ],
    }); 

    /*===========================
      hm-3-cio-founder-slider
     ============================*/  
      $(".hm-3-cio-founder-slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        prevArrow: $('.slider-controls .slide-next'),
        nextArrow: $('.slider-controls .slide-prev'),
        autoplay: false,
        appendArrows: $('.slick-controls'),
      });

      /*===========================
        hm-3-best-hero-slide
       ============================*/ 
      $(".hm-3-best-hero-slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        // adaptiveHeight: true,
        prevArrow: $('.slider-controls .slide-next'),
        nextArrow: $('.slider-controls .slide-prev'),
        autoplay: false,
        appendArrows: $('.slick-controls'),
        responsive: [

        	{
        	  breakpoint: 991,
        	  settings: {
        	    slidesToShow: 3,
        	  },
        	},
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 481,
            settings: {
              slidesToShow: 1,
              autoplay: true,
            },
          },
        ],
      });

      /*===========================
        hm-3-clint-slider
       ============================*/ 
      $(".hm-3-clint-slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        // adaptiveHeight: true,
        prevArrow: $('.slider-controls .slide-next'),
        nextArrow: $('.slider-controls .slide-prev'),
        autoplay: true,
        appendArrows: $('.slick-controls'),
        responsive: [

        	{
        	  breakpoint: 991,
        	  settings: {
        	    slidesToShow: 3,
        	  },
        	},
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 481,
            settings: {
              slidesToShow: 1,
              autoplay: true,
            },
          },
        ],
      });

      /*===========================
        testimonials-slider
       ============================*/ 
      $(".testimonials-slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
          centerMode: false,
        // adaptiveHeight: true,
        prevArrow: $('.slider-controls .arrow-next'),
        nextArrow: $('.slider-controls .arrow-prev'),
        autoplay: true,
        appendArrows: $('.slick-controls'),
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1050,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 481,
            settings: {
              slidesToShow: 1,
              autoplay: true,
            },
          },
        ],
      });

      /*===========================
        about-us-slider
       ============================*/ 
      $(".about-us-slider").slick({
        dots: false,
        infinite: true,
        prevArrow: $('.slider-controls .slide-prev'),
        nextArrow: $('.slider-controls .slide-next'),
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '590px',
        responsive: [

        	{
        	  breakpoint: 1850,
        	  settings: {
                  centerPadding: '500px',
        	  },
        	},
            {
                breakpoint: 1600,
                settings: {
                    centerPadding: '450px',
                },
            },
            {
                breakpoint: 1500,
                settings: {
                    centerPadding: '400px',
                },
            },
            {
                breakpoint: 1399,
                settings: {
                    centerPadding: '350px',
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    centerPadding: '250px',
                },
            },
            {
                breakpoint: 991,
                settings: {
                    centerPadding: '150px',
                },
            },
            {
                breakpoint: 767,
                settings: {
                    centerPadding: '100px',
                },
            },
            {
                breakpoint: 575,
                settings: {
                    centerPadding: '50px',
                },
            },
        ],
      });

    function page_ah_cursor() {
        const isHome2Page = document.body.classList.contains('home-2-page');

        if (isHome2Page) {
            document.body.append(...["cursor-outer", "cursor-inner"].map(className => Object.assign(document.createElement("div"), { className: `mouse-cursor ${className}` })));

            const myCursor = jQuery(".mouse-cursor");

            if (myCursor.length) {
                const cursorInner = document.querySelector(".cursor-inner");
                const cursorOuter = document.querySelector(".cursor-outer");
                let mouseY, mouseX = 0;
                let isHovering = false;

                window.onmousemove = function (event) {
                    if (!isHovering) {
                        cursorOuter.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
                        cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
                        mouseY = event.clientY;
                        mouseX = event.clientX;
                    }
                };

                $("body").on(
                    "mouseenter",
                    "a, button, .cursor-pointer",
                    function () {
                        cursorInner.classList.add("cursor-hover");
                        cursorOuter.classList.add("cursor-hover");
                    }
                );

                $("body").on(
                    "mouseleave",
                    "a, button, .cursor-pointer",
                    function () {
                        if ($(this).is("a") || ($(this).is("button") && $(this).closest(".cursor-pointer").length === 0)) {
                            cursorInner.classList.remove("cursor-hover");
                            cursorOuter.classList.remove("cursor-hover");
                        }
                    }
                );

                cursorInner.style.visibility = "visible";
                cursorOuter.style.visibility = "visible";
            }
        }
    }
    page_ah_cursor()

      /*===========================
        hm-best-hero-slider
       ============================*/ 
      $(".hm-best-hero-slider").slick({
        dots: true,
        infinite: true,
          arrows: false,
        slidesToShow: 4,
          autoplay: true,
          autoplaySpeed: 1000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 481,
            settings: {
              slidesToShow: 1,
              autoplay: true,
            },
          },
        ],
      });

      /*===========================
        varsha-dhikari-slider
       ============================*/
      $(".varsha-dhikari-slider").slick({
        dots: true,
        infinite: true,
        autoplay: true,
          autoplaySpeed: 1000,
          slidesToShow: 1,
        slidesToScroll: 1
      });

      /*===========================
        hm-2-services-slider
       ============================*/
      $(".hm-2-services-slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });   

      /*===========================
        hm-2-slick-silder
       ============================*/
      $(".hm-2-slick-silder").slick({
        speed: 8000,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToScroll: 1,
        cssEase: 'linear',
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });

      /*===========================
        dailo-brand-slider
       ============================*/
      $(".dailo-brand-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        loop: true,
        speed: 8000,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              speed: 8000,
              pauseOnHover: false,
              cssEase: 'linear',

            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });

      /*===========================
        banner-bottom-slider
       ============================*/
      $(".banner-bottom-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        cssEase: 'linear'
      });

     $(document).ready(function () {
         if(document.querySelector('.main-iso')) {
           $('.main-iso').isotope({
             itemSelector: '.item',
             layoutMode: 'fitRows'
           });
         }

       $('.iso-nav ul li').click(function () {
         //ACTIVE CLASS
         $('.iso-nav ul li').removeClass('active');
         $(this).addClass('active');

         var selector = $(this).attr('data-filter');
         $('.main-iso').isotope({
           filter: selector
         });
         return false;
       })
     })

     /*===========================
       blog-sidebar-activ-slider
      ============================*/
    $(".blog-sidebar-activ-slider").slick({
      dots: false,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    /*===========================
      AOS Animatio
     ============================*/
    AOS.init({
       offset: 150,
       duration: 1000,
     });


    /*** our-client  */
    $('.our-client').slick({
        dots: false,
        autoplay: true,
        speed: 5000,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        autoplaySpeed: 0,
        cssEase: 'linear',
        centerMode: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*** instagram-feed  */
    $('.instagram-feed').slick({
        dots: false,
        autoplay: true,
        speed: 5000,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        autoplaySpeed: 0,
        cssEase: 'linear',
        centerMode: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*** our-client  */
    $('.our-client-banner').slick({
        dots: false,
        autoplay: true,
        speed: 5000,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        autoplaySpeed: 0,
        cssEase: 'linear',
        centerMode: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*==========================
      Scroll To Up Init
    ============================*/
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        // topDistance: '1110', // Distance from top before showing element (px)
        topDistance: '1700', // Distance from top before showing element (px)
        topSpeed: 2000, // Speed back to top (ms)
        animation: 'slide', // Fade, slide, none
        animationInSpeed: 300, // Animation in speed (ms)
        animationOutSpeed: 300, // Animation out speed (ms)
        scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    /*==========================
      Dropdown Need class added Added 
    ============================*/
    $(".dalio-mobile-nav ul li ul").addClass("dropdown-menu");
    $(".dalio-mobile-nav ul li ul").parent().addClass("dropdown");
    
    $(".main-menu ul li ul").parent().addClass("dropdown");

    /** Sidr submenu */
    function dalioMobileMenu() {
        $('.dalio-mobile-nav ul')[0].classList.add("dalio-navbar-mobile");

        var $nav = $(".dalio-navbar-mobile"),
        $back_btn = $nav.find(" > li.dropdown > ul.dropdown-menu").prepend("<li class='dropdown-back d-flex flex-wrap align-items-center justify-content-between'><div class='control ml-auto d-flex align-items-center' style='white-space: nowrap'>Back<i style='font-size: 16px; font-weight: 500; margin-left: 5px;' class='fal fa-long-arrow-left'></i></div></li>");


        // For Title
        $('.dalio-navbar-mobile li.dropdown > a').each(function(){
            $(this).siblings("ul").find("li.dropdown-back").prepend("<div class='title'><a style='color: #fff'>" + $(this).text() +"</a></div>");
        });

        // open sub-level
        $('.dalio-navbar-mobile li.dropdown > a').append("<span class='dropdown-toggle' data-toggle='dropdown'></span>");
        $('.dalio-navbar-mobile li.dropdown > a .dropdown-toggle').on("click", function(e) {
            e.preventDefault();
            e.stopPropagation();

            $(this).parent().parent().addClass("is-open");
            $(this).parents().find( '.dalio-navbar-mobile' ).addClass("is-parent");


            var header = $(this).parent().parent().find('ul.dropdown-menu').height(),
                gutter = $('.dalio-mobile-nav');

            if ( gutter ) 
            {
                gutter.height(header+15);
            }
        });

        // go back
        $back_btn.on("click", ".dropdown-back", function(e) {
            e.stopPropagation();
            $(this)
            .parents(".is-open")
            .first()
            .removeClass("is-open");

            var header = $(this).parents(".is-parent").first().height();

            $(this)
            .parents(".is-parent")
            .first()
            .removeClass("is-parent");

            var gutter = $('.dalio-mobile-nav');

            setTimeout(function() {
                if (gutter) {
                    gutter.height(header);
                } 
            }, 200);
        });
    }
    dalioMobileMenu();

    /*==========================
      loader in window imgage
    ============================*/
  function loader() {
        $(window).on('load', function() {
      // Animate loader off screen
        const preloader = $(".preloader");
        preloader.addClass('loaded');                    
        preloader.delay(0).fadeOut();
      
      /*** Number Counter */
      $('.counter').counterUp({
        delay: 10,
        time: 1000
      });
    });
  }
  loader();

}(jQuery));






