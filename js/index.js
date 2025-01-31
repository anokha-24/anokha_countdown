

(function($) {

    "use strict";
    
    var cfg = {
        scrollDuration : 800, 
    },

    $WIN = $(window);

 
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);


    if (!Modernizr.svg) {
        $(".home-logo img").attr("src", "images/Anokha2024_.png");
    }



    var ssPreloader = function() {
        
        $("html").addClass('ss-preload');

        $WIN.on('load', function() {

        
            $("#loader").fadeOut("slow", function() {
               
                $("#preloader").delay(300).fadeOut("slow");
            }); 
            
         
            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');
        
        });
    };



    var ssInfoToggle = function() {

        $('.info-toggle').on('click', function(event) {

            event.preventDefault();
            $('body').toggleClass('info-is-visible');

        });

    };


    var ssSlickSlider = function() {
        
        $('.home-slider').slick({
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            speed: 3000
        });

    };



    var ssPlaceholder = function() {
        $('input, textarea, select').placeholder();
    };



var ssFinalCountdown = function() {
    var launchDate = new Date("2024-03-07T00:01:00Z").getTime();

    $('.home-content__clock').countdown(launchDate)
        .on('update.countdown finish.countdown', function(event) {
            var str = '<div class=\"top\"><div class=\"time days\">' +
                      '%D <span>day%!D</span>' + 
                      '</div></div>' +
                      '<div class=\"time hours\">' +
                      '%H <span>H</span></div>' +
                      '<div class=\"time minutes\">' +
                      '%M <span>M</span></div>' +
                      '<div class=\"time seconds\">' +
                      '%S <span>S</span></div>';

            $(this)
                .html(event.strftime(str));
        });
};



    (function ssInit() {
        
        ssPreloader();
        ssInfoToggle();
        ssSlickSlider();
        ssPlaceholder();
        ssFinalCountdown();
        ssAjaxChimp();

    })();


})(jQuery);