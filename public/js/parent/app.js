"use strict"
$(document).foundation();

$( document ).ready(function() {
    $('.ham-btn').click(function() {
        $('.ham-wrapper').animate({width: "200px"}, 200);
        $('.ham-close').css("display", "block");
    });

    $('.ham-close').click(function() {
        $('.ham-close').css("display","none");
        $('.ham-wrapper').animate({width: "0px"}, 200);
    });

    // $('body').click(function() {
    //     var toggle = $('.ham-wrapper').width();
    //     if(toggle > 0){
    //         $('.ham-wrapper').animate({width: "0px"}, 200);
    //         $('.ham-close').css("display","none");
    //     }
    // });

    $('.moving-plane').addClass('plane-animation-start');

    window.setInterval(function(){
        if($('.moving-plane').offset().left < -40)
            $('.moving-plane').removeClass('plane-animation-start');
        if($('.moving-plane').offset().left === $(window).width())
        $('.moving-plane').addClass('plane-animation-start');
    }, 10000);

    // footer handler
    // If section if big enough to cover the screen then footer is not fixed else it is to the bottom

    var footerHandler = function(){
        var $el = $('.footer-adjust');
        var footerTop = $el.offset().top + $el.outerHeight(true);

        if((footerTop + $('footer').height() + 60) <  $(window).innerHeight()){
          $('footer').addClass('footer-fixed');
        }
        else{
          $('footer').removeClass('footer-fixed');
        }
    }

    footerHandler();

    $(window).resize( function(){
        footerHandler();
    });
});
