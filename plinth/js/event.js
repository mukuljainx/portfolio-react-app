$(window).scroll(function() {

    
    if($(this).scrollTop() < 250 && $(this).scrollTop() <  300 )
    {   
        $('#event1').css("-webkit-transform" , "translate(0%)");
        $('#event1').css("-webkit-transition" , "0.1s ease");
        $('#event1').css("-moz-transform" , "translate(0%)");
        $('#event1').css("-moz-transition" , "0.1s ease");
    }
    else if ($(this).scrollTop()>  300 && $(this).scrollTop() <  350)
     {
        $('#event1').css("-webkit-transform" , "translate(-30%)");
        $('#event1').css("-webkit-transition" , "0.1s ease");
        $('#event1').css("-moz-transform" , "translate(-30%)");
        $('#event1').css("-moz-transition" , "0.1s ease");
     }
     else if($(this).scrollTop()>  350 && $(this).scrollTop() <  400)
     {
        $('#event1').css("-webkit-transform" , "translate(-60%)");
        $('#event1').css("-webkit-transition" , "0.1s ease");
        $('#event1').css("-moz-transform" , "translate(-60%)");
        $('#event1').css("-moz-transition" , "0.1s ease");
     }
     else if($(this).scrollTop()>  400 && $(this).scrollTop() <  450)
     {
        $('#event1').css("-webkit-transform" , "translate(-90%)");
        $('#event1').css("-webkit-transition" , "0.1s ease");
        $('#event1').css("-moz-transform" , "translate(-90%)");
        $('#event1').css("-moz-transition" , "0.1s ease");
         }
     else if($(this).scrollTop()>  550)
     {  
        $('#event1').css("-webkit-transform" , "translate(-120%)");
        $('#event1').css("-webkit-transition" , "0.1s ease");
        $('#event1').css("-moz-transform" , "translate(-120%)");
        $('#event1').css("-moz-transition" , "0.1s ease");
     }
 
    if($(this).scrollTop() > 550 && $(this).scrollTop() <  600)
     {
        $('#event3').fadeOut(); 
     }
    else if($(this).scrollTop() > 600 && $(this).scrollTop() <  650)
    {
        $('#event3').fadeIn();
    }    

    else if($(this).scrollTop() > 650 && $(this).scrollTop() < 700 )
    {
        $('#event3').css("-webkit-transform" , "translate(-0%)");
        $('#event3').css("-webkit-transition" , "0.1s ease");
        $('#event3').css("-moz-transform" , "translate(-0%)");
        $('#event3').css("-moz-transition" , "0.1s ease");
    }
    else if ($(this).scrollTop()>  700 && $(this).scrollTop() <  750)
     {
        $('#event3').css("-webkit-transform" , "translate(-20%)");
        $('#event3').css("-webkit-transition" , "0.1s ease");
        $('#event3').css("-moz-transform" , "translate(-20%)");
        $('#event3').css("-moz-transition" , "0.1s ease");
     }
     else if($(this).scrollTop()>  750 && $(this).scrollTop() <  800)
     {
        $('#event3').css("-webkit-transform" , "translate(-40%)");
        $('#event3').css("-webkit-transition" , "0.1s ease");
        $('#event3').css("-moz-transform" , "translate(-40%)");
        $('#event3').css("-moz-transition" , "0.1s ease");
     }
     else if($(this).scrollTop()>  800 && $(this).scrollTop() <  850)
     {
        $('#event3').css("-webkit-transform" , "translate(-60%)");
        $('#event3').css("-webkit-transition" , "0.1s ease");
        $('#event3').css("-moz-transform" , "translate(-60%)");
        $('#event3').css("-moz-transition" , "0.1s ease");
     }


     if($(this).scrollTop()>  5200)
     {
        $('#event4').fadeIn();
     }
     else{
        $('#event4').fadeOut();
     }

     if ($(this).scrollTop()>  6200)
     {
        $('#event4').css("-webkit-transform" , "translate(60%)");
        $('#event4').css("-webkit-transition" , "1.3s ease-in");
        $('#event4').css("-moz-transform" , "translate(60%)");
        $('#event4').css("-moz-transition" , "1.3s ease-in");
     }
     else
     {
        $('#event4').css("-webkit-transition" , "1.3s ease-in");
        $('#event4').css("-webkit-transform" , "translate(0,0)");
        $('#event4').css("-moz-transition" , "1.3s ease-in");
        $('#event4').css("-moz-transform" , "translate(0,0)");
     }

     if($(this).scrollTop()>  7200)
     {
        $('#event5').fadeIn();
        $('#event5').css("-webkit-transform" , "translate(0%)");
        $('#event5').css("-webkit-transition" , "1.3s ease-in");
        $('#event5').css("-moz-transform" , "translate(0%)");
        $('#event5').css("-moz-transition" , "1.3s ease-in");
     }
     else
     {
        $('#event5').fadeOut();
     }

     if($(this).scrollTop() <   7200)
     {
        $('.eventy').fadeOut();
        $('.workshopevent').fadeOut();
        $('.exhibationevent').fadeOut();
        $('.talkevent').fadeOut();
     }


     var hx = 9700 + screen.height * 0.55 + "px";
     // window.alert(hx);

     if($(this).scrollTop() > 9500)
     {

        $('.funevent').removeClass("fadeOutDown");
        $('.eventx').addClass("animated fadeOut");
        $('.eventy').addClass("animated fadeOut");
        $('.workshopevent').addClass("animated fadeOut");
        $('.talkevent').addClass("animated fadeOut");
        $('.exhibationevent').addClass("animated fadeOut");
        $('.funevent').css("display","inline");
        $('.funevent').css("top", hx);
        $('.funevent').addClass("animated fadeInUp");
     }
     else{
        $('.eventx').removeClass("fadeOut");
        $('.eventx').addClass("fadeIn");
        $('.eventy').removeClass("fadeOut");
        $('.eventy').addClass("fadeIn");
        $('.workshopevent').removeClass("fadeOut");
        $('.workshopevent').addClass("fadeIn");
        $('.exhibationevent').removeClass("fadeOut");
        $('.exhibationevent').addClass("fadeIn");
        $('.talkevent').removeClass("fadeOut");
        $('.talkevent').addClass("fadeIn");
        $('.funevent').removeClass("fadeInUp");
        $('.funevent').addClass("fadeOutDown"); 
     }
     
    });
