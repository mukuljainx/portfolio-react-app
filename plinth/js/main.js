
$(window).scroll(function() {

     if ($(this).scrollTop()<$( '#welcome').height() + 9000)
     {
     if($(this).scrollTop()>$( '#welcome').height())
     {
        $('#event1').fadeIn();
     }
     else{
        $('#event1').fadeOut();
     }

    if ($(this).scrollTop()>$( '#welcome').height() + 200)
     {
        $('#event1').fadeIn();
        $('#event1').css("-webkit-transform" , "translate(-120%)");
        $('#event1').css("-webkit-transition" , "1.3s ease-in");
        $('#event1').css("-moz-transform" , "translate(-120%)");
        $('#event1').css("-moz-transition" , "1.3s ease-in");
     }
     else
     {
        $('#event1').css("-webkit-transition" , "1.3s ease-in");
        $('#event1').css("-webkit-transform" , "translate(0,0)");
        $('#event1').css("-moz-transition" , "1.3s ease-in");
        $('#event1').css("-moz-transform" , "translate(0,0)");
     }
     
     if($(this).scrollTop()>$( '#welcome').height() + 1200)
     {
        $('#event2').fadeIn();
     }
     else{
        $('#event2').fadeOut();
     }
     
     if ($(this).scrollTop()>$( '#welcome').height() + 2200)
     {
        $('#event2').css("-webkit-transform" , "translate(120%)");
        $('#event2').css("-webkit-transition" , "1.3s ease-in");
        $('#event2').css("-moz-transform" , "translate(120%)");
        $('#event2').css("-moz-transition" , "1.3s ease-in");
     }
     else
     {
        $('#event2').css("-webkit-transition" , "1.3s ease-in");
        $('#event2').css("-webkit-transform" , "translate(0,0)");
        $('#event2').css("-moz-transition" , "1.3s ease-in");
        $('#event2+').css("-moz-transform" , "translate(0,0)");
     }

     if($(this).scrollTop()>$( '#welcome').height() + 3200)
     {
        $('#event3').fadeIn();
     }
     else{
        $('#event3').fadeOut();
     }

     if ($(this).scrollTop()>$( '#welcome').height() + 4200)
     {
        $('#event3').css("-webkit-transform" , "translate(-60%)");
        $('#event3').css("-webkit-transition" , "1.3s ease-in");
        $('#event3').css("-moz-transform" , "translate(-60%)");
        $('#event3').css("-moz-transition" , "1.3s ease-in");
     }
     else
     {
        $('#event3').css("-webkit-transition" , "1.3s ease-in");
        $('#event3').css("-webkit-transform" , "translate(0,0)");
        $('#event3').css("-moz-transition" , "1.3s ease-in");
        $('#event3').css("-moz-transform" , "translate(0,0)");
     }

     if($(this).scrollTop()>$( '#welcome').height() + 5200)
     {
        $('#event4').fadeIn();
     }
     else{
        $('#event4').fadeOut();
     }

     if ($(this).scrollTop()>$( '#welcome').height() + 6200)
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

     if($(this).scrollTop()>$( '#welcome').height() + 7200)
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

     if($(this).scrollTop() < $( '#welcome').height() + 7200)
     {
        $('#eventy1').fadeOut();
        $('#eventy2').fadeOut();
        $('#eventy3').fadeOut();
        $('#eventy4').fadeOut();
        $('#eventy5').fadeOut();
     }

     }

     var hx = 9700 + screen.height * 0.35 + "px";
     // window.alert(hx);

     if($(this).scrollTop() > 9700)
     {

        $('.funevent').removeClass("fadeOutDown");
        $('.eventx').addClass("animated fadeOut");
        $('.eventy').addClass("animated fadeOut");
        $('.funevent').css("display","inline");
        $('.funevent').css("top", hx);
        $('.funevent').addClass("animated fadeInUp");
     }
     else{
        $('.eventx').removeClass("fadeOut");
        $('.eventx').addClass("fadeIn");
        $('.eventy').removeClass("fadeOut");
        $('.eventy').addClass("fadeIn");    
        $('.funevent').removeClass("fadeInUp");
        $('.funevent').addClass("fadeOutDown"); 
     }
     
    });








