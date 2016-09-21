$(document).ready(function(){

      // $('.slider').slider({full_width: true});

      // navbar
	$(".usermenu, .usermenudiv").mouseenter(function() {
        $(".usermenudiv").show();
        $(".usermenu").addClass("usermenuwhite");
      });
    $(".usermenu, .usermenudiv").mouseleave(function() {
        $(".usermenudiv").hide();
        $(".usermenu").removeClass("usermenuwhite");
      });


    $('#nav-icon').click(function(){
      $(this).toggleClass('open');
      $('.leftSubMenu').toggleClass('leftsubmenupos');
      $('.leftoverlay').toggleClass('leftmenubackdrop');
      $('nav').toggleClass('navbarline');
    });

    $(".leftmenubackdrop").click(function(){
      window.alert("das");
      $('#nav-icon').removeClass('open');
      $('.leftSubMenu').removeClass('leftsubmenupos');
      $('.leftoverlay').removeClass('leftmenubackdrop');
      $('nav').removeClass('navbarline');
    })

  $('.promoCodeBTN').click(function(){
    $('.promoCodeBTN').hide();
    $('.applyOffer').fadeIn();
  });    

});
        