// Loading //
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('body-container').style.opacity="0";
  } else if (state == 'complete') {
      setTimeout(function(){
          document.getElementById('interactive');
          document.getElementById('load').style.cssText="opacity:0;z-index:-2;";
          document.getElementById('body-container').style.opacity="1";
      },500);
  }
}

$(document).ready(function (){
    if ($(window).width() < $(window).height()) {
   $('.slick-wrapper').addClass('mobile-fix');
    }

    // Smooth Scrolling //
    $("html").easeScroll({
        frameRate: 120,
        animationTime: 1500,
        stepSize: 60,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 1,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 200,
        touchpadSupport: true,
        fixedBackground: true
    });

    // Other //
    var vh100 = ($(window).outerHeight() / $(window).outerWidth()*100 + "vw");
    $('.mobile-fix').children('div').css({ height: vh100 });
    $('.slick-container').css({ height: vh100 });

    // Mobile Control //
    if ($(window).width() < $(window).height()) {
        $('.ds-split').css({ minHeight: 'auto' });
        $('.page').css({ minHeight: 'auto' });
    }
    else {
        $('.ds-split').css({ minHeight: vh100 });
        $('.page').css({ minHeight: vh100 });
    }

    // Slick //
    $('.slick-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3250,
        speed: 1250,
        accessibility: false,
        arrows: false,
        draggable: false,
        infinite: true,
        pauseOnHover: false,
        swipe: false,
        swipeToSlide: false,
        touchMove: false,
        waitForAnimate: false,
    });

    // Nav Control //
    $(".down").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $("#section1").offset().top
        }, 1200, 'easeInOutExpo');
    });
    $("#logo-img").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $("body").offset().top
        }, 1200, 'easeInOutExpo');
    });
    $("#logo-img-dark").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $("body").offset().top
        }, 1200, 'easeInOutExpo');
    });
    $("#tab1").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $("#section1").offset().top + 50
        }, 1200, 'easeInOutExpo');
    });
    $("#tab2").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $("#section2").offset().top + 50
        }, 1200, 'easeInOutExpo');
    });
    $("#tab3").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $("#section3").offset().top + 50
        }, 1200, 'easeInOutExpo');
    });
    $("#tab4").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $("#section4").offset().top + 50
        }, 1200, 'easeInOutExpo');
    });
    $("#tab5").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $("#section5").offset().top + 50
        }, 1200, 'easeInOutExpo');
    });

    // Tab Scroll CSS Control //
    $(window).scroll(function(){
        if($(window).scrollTop() < $("#section1").offset().top - 50 ){
            $(".nav-wrapper").removeClass('nav-wrapper-add');
            $('span').removeClass('span-change');
            document.title = 'Christian Nguyen';
        }else{
            $(".nav-wrapper").addClass('nav-wrapper-add');
        }
        if($(window).scrollTop() >= $("#section1").offset().top - 50  && $(window).scrollTop() < $("#section2").offset().top - 50 ){
            $("#tab1").css("border-bottom","2px solid #00b8e6");
            document.title = 'Christian Nguyen | Developer';
        }else{
            $("#tab1").css("border-bottom","2px solid rgba(0,0,0,0)");
        }
        if($(window).scrollTop() >= $("#section2").offset().top - 50  && $(window).scrollTop() < $("#section3").offset().top - 50 ){
            $("#tab2").css("border-bottom","2px solid #00b8e6");
            document.title = 'Christian Nguyen | Projects';
        }else{
            $("#tab2").css("border-bottom","2px solid rgba(0,0,0,0)");
        }
        if($(window).scrollTop() >= $("#section3").offset().top - 50  && $(window).scrollTop() < $("#section4").offset().top - 50 ){
            $("#tab3").css("border-bottom","2px solid #00b8e6");
            document.title = 'Christian Nguyen | Business';
        }else{
            $("#tab3").css("border-bottom","2px solid rgba(0,0,0,0)");
        }
        if($(window).scrollTop() >= $("#section4").offset().top - 50  && $(window).scrollTop() < $("#section5").offset().top - 50 ){
            $("#tab4").css("border-bottom","2px solid #00b8e6");
            document.title = 'Christian Nguyen | Artwork';
        }else{
            $("#tab4").css("border-bottom","2px solid rgba(0,0,0,0)");
        }
        if($(window).scrollTop() >= $("#section5").offset().top - 50 ){
            $("#tab5").css("border-bottom","2px solid #00b8e6");
            document.title = 'Christian Nguyen | Connect';
        }else{
            $("#tab5").css("border-bottom","2px solid rgba(0,0,0,0)");
        }
    });
    
    // Animated Arrow //
    (function($) {
    $.fn.seqfx = function() {
        var elements = this,
            l = elements.length,
            i = 0;

        function execute() {
            var current = $(elements[i]);
            i = (i) % l;

            current
                .fadeIn(350)
                .delay(1200)
                .fadeOut(350, execute);
        }
        execute();
        return this;
    };
}(jQuery));

$(".down, h4").seqfx();
});