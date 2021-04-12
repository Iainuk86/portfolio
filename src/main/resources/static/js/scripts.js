(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Make scroll-to-top button appear on small screens
    $(document).scroll(function() {
      let scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });

    // Shrink Navbar - Needs some tidying up
    const navbarCollapse = function() {
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

    // Fade in items in Masthead section
    $(document).ready(function() {
        $('#junior').hide().delay(1500).fadeIn(3000);
        $('#iain-photo').hide().fadeIn(2000);
    });

    // Function to fade items when scrolling into view
    $(document).ready(function() {

        $(window).scroll( function(){
            $('.fade-on-scroll').each( function(){

                let top_of_object = $(this).position().top;
                let bottom_of_window = $(window).scrollTop() + $(window).height();

                if(bottom_of_window > top_of_object + 130){
                    $(this).animate({'opacity':'1'},1500);
                }
            });
        });
    });

    // Reveals the 'Working Knowledge' list
    $('#show-working-list').click(function() {

        $('#working-knowledge-list li').each(function(i, el) {
            setTimeout(function() {
                $(el).addClass('show');
            }, i * 100);
        });
    });

    // Reveals the 'Basics of' list
    $('#show-basics-list').click(function() {

        $('#basics-list li').each(function(i, el) {
            setTimeout(function() {
                $(el).addClass('show');
            }, i * 100);
        });
    })

    // Scroll function specifically for the About section to account for margin
    $(".about-button").click(function() {
        $('html,body').animate({
                scrollTop: $("#about").offset().top - 100},
            1000, "easeInOutExpo");
        return false;
    });

    // Following four functions are for the modal menu on small screens. Closes modal and scrolls to anchor
    $("#about-modal").click(function() {
        $('#menuModal').modal('hide');
        $('html, body').animate({
            scrollTop: $("#about").offset().top - 100
        }, 1000, "easeInOutExpo");
        return false;
    });

    $("#projects-modal").click(function() {
        $('#menuModal').modal('hide');
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1000, "easeInOutExpo");
        return false;
    });

    $("#skills-modal").click(function() {
        $('#menuModal').modal('hide');
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 1000, "easeInOutExpo");
        return false;
    });

    $("#contact-modal").click(function() {
        $('#menuModal').modal('hide');
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000, "easeInOutExpo");
        return false;
    });

})(jQuery); // End of use strict


