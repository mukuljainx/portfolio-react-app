$(document).ready(function() {

   footerHandler = function(){
       var $el = $('.footer-adjust');
       var footerTop = $el.offset().top + $el.outerHeight(true);

       if(footerTop + $('footer').height() <  $(window).innerHeight() && $(window).innerWidth() > 640){
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

