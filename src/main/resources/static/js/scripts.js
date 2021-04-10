/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 200) {
          $("#mainNav").removeClass("bg-transparent");
          $("#mainNav").addClass("navbar-shrink");
      } else {
          $("#mainNav").removeClass("navbar-shrink");
          $("#mainNav").addClass("bg-transparent");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });

    $(document).ready(function() {
        $('#junior').hide().delay(1500).fadeIn(3000);
        $('#iain-photo').hide().fadeIn(2000);
    });

    $(document).ready(function() {

        /* Every time the window is scrolled ... */
        $(window).scroll( function(){

            /* Check the location of each desired element */
            $('.fade-on-scroll').each( function(){

                var top_of_object = $(this).position().top;
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                /* If the object is completely visible in the window, fade it it */
                if( bottom_of_window > top_of_object + 130){

                    $(this).animate({'opacity':'1'},1500);

                }

            });

        });

    });

    $('#show-working-list').click(function() {

        $('#working-knowledge-list li').each(function(i, el) {
            setTimeout(function() {
                $(el).addClass('show');
            }, i * 100);
        });
    });

    $('#show-basics-list').click(function() {

        $('#basics-list li').each(function(i, el) {
            setTimeout(function() {
                $(el).addClass('show');
            }, i * 100);
        });
    })

  })(jQuery); // End of use strict
  