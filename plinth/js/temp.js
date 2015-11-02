$(".button-collapse").sideNav();
$(".parallax").parallax();




$(window).scroll(function() {



    if ($(this).scrollTop()> 800 && $(this).scrollTop() < 1500)
     {
        $('.descx1').fadeIn();
     }
     else
     {  
        $('.descx1').fadeOut();   
     }

     if ($(this).scrollTop()>  1500)
     {
        $('.descx1').css("display","none");
        $('#event1').css("-webkit-transform" , "translate(-320%)");
        $('#event1').css("-webkit-transition" , "1.3s ease-in");
        $('#event1').css("-moz-transform" , "translate(-320%)");
        $('#event1').css("-moz-transition" , "1.3s ease-in");
     }
     else
     {
        $('#event1').css("-webkit-transition" , "1.3s ease-in");
        $('#event1').css("-webkit-transform" , "translate(0,0)");
        $('#event1').css("-moz-transition" , "1.3s ease-in");
        $('#event1').css("-moz-transform" , "translate(0,0)");
     }

     
     // if($(this).scrollTop()>  1200)
     // {
     //    $('#event3').fadeIn();
     // }
     // else{
     //    $('#event3').fadeOut();
     // }
     
     // if ($(this).scrollTop()>  2200)
     // {
     //    $('#event3').css("-webkit-transform" , "translate(-45%)");
     //    $('#event3').css("-webkit-transition" , "1.3s ease-in");
     //    $('#event3').css("-moz-transform" , "translate(-45%)");
     //    $('#event3').css("-moz-transition" , "1.3s ease-in");
     // }
     // else
     // {
     //    $('#event3').css("-webkit-transition" , "1.3s ease-in");
     //    $('#event3').css("-webkit-transform" , "translate(0,0)");
     //    $('#event3').css("-moz-transition" , "1.3s ease-in");
     //    $('#event3').css("-moz-transform" , "translate(0,0)");
     // }

     // if($(this).scrollTop()>  3200)
     // {  
     //    $('#event2').fadeIn();
     // }
     // else{
     //    $('#event2').fadeOut();
     // }

     // if($(this).scrollTop()>  5200)
     // {
     //    $('#event4').fadeIn();
     // }
     // else{
     //    $('#event4').fadeOut();
     // }


     // if($(this).scrollTop()>  7200)
     // {
     //    $('#event5').fadeIn();
     //    $('#event5').css("-webkit-transform" , "translate(0%)");
     //    $('#event5').css("-webkit-transition" , "1.3s ease-in");
     //    $('#event5').css("-moz-transform" , "translate(0%)");
     //    $('#event5').css("-moz-transition" , "1.3s ease-in");
     // }
     // else
     // {
     //    $('#event5').fadeOut();
     // }

     // if($(this).scrollTop() <   7200)
     // {
     //    $('.eventy').fadeOut();
     //    $('.workshopevent').fadeOut();
     //    $('.exhibationevent').fadeOut();
     //    $('.talkevent').fadeOut();
     // }


     // var hx = 9700 + screen.height * 0.55 + "px";
     // // window.alert(hx);

     // if($(this).scrollTop() > 9500)
     // {

     //    $('.funevent').removeClass("fadeOutDown");
     //    $('.eventx').addClass("animated fadeOut");
     //    $('.eventy').addClass("animated fadeOut");
     //    $('.workshopevent').addClass("animated fadeOut");
     //    $('.talkevent').addClass("animated fadeOut");
     //    $('.exhibationevent').addClass("animated fadeOut");
     //    $('.funevent').css("display","inline");
     //    $('.funevent').css("top", hx);
     //    $('.funevent').addClass("animated fadeInUp");
     // }
     // else{
     //    $('.eventx').removeClass("fadeOut");
     //    $('.eventx').addClass("fadeIn");
     //    $('.eventy').removeClass("fadeOut");
     //    $('.eventy').addClass("fadeIn");
     //    $('.workshopevent').removeClass("fadeOut");
     //    $('.workshopevent').addClass("fadeIn");
     //    $('.exhibationevent').removeClass("fadeOut");
     //    $('.exhibationevent').addClass("fadeIn");
     //    $('.talkevent').removeClass("fadeOut");
     //    $('.talkevent').addClass("fadeIn");
     //    $('.funevent').removeClass("fadeInUp");
     //    $('.funevent').addClass("fadeOutDown"); 
     // }
     
    });







