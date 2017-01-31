"use strict"

$( document ).ready(function() {
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
    var openKnowMoreModal = function(){
        $('.custom-modal').addClass('custom-modal-final');
        $('.custom-modal .column-card').css('display','block');
        $('.custom-modal-wrapper').css('display','block');
        $('.modal-know-more-wrapper').addClass('modal-know-more-wrapper-height');
        footerHandler();
    }
    var closeKnowMoreModal = function(){
        $('.custom-modal').removeClass('custom-modal-final');
        $('.custom-modal .column-card').css('display','none');
        $('.custom-modal-wrapper').css('display','none');
        $('.modal-know-more-wrapper').removeClass('modal-know-more-wrapper-height');
        footerHandler();
    }


    $('.know-more').click(function(){
        openKnowMoreModal();
    })

    $('.custom-modal-wrapper').click(function(){
        closeKnowMoreModal();
    })
    $('.custom-modal-close-button').click(function(){
        closeKnowMoreModal();
    })

});
