
$(document).ready(function(){
$(window).scroll(function() {

    if ($(this).scrollTop()>200)
     {
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
     
     if($(this).scrollTop()>1200)
     {
        $('#event2').fadeIn();
     }
     else{
        $('#event2').fadeOut();
     }
     
     if ($(this).scrollTop()>2200)
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
        $('#event2').css("-moz-transform" , "translate(0,0)");
     }

     if($(this).scrollTop()>3200)
     {
        $('#event3').fadeIn();
     }
     else{
        $('#event3').fadeOut();
     }

     if ($(this).scrollTop()>4200)
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

     if($(this).scrollTop()>5200)
     {
        $('#event4').fadeIn();
     }
     else{
        $('#event4').fadeOut();
     }

     if ($(this).scrollTop()>6200)
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

     if($(this).scrollTop()>7200)
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

     if($(this).scrollTop()<7200)
     {
        $('#eventy1').fadeOut();
        $('#eventy2').fadeOut();
        $('#eventy3').fadeOut();
        $('#eventy4').fadeOut();
        $('#eventy5').fadeOut();
     }

     
 });

$( "body" ).delegate( "#img1", "click", function() {
        $('#event1').css("-webkit-transform" , "translate(-120%,-100px)");
        $('#event2').css("-webkit-transform" , "translate(120%,-100px)");
        $('#event3').css("-webkit-transform" , "translate(-60%,-100px)");
        $('#event4').css("-webkit-transform" , "translate(60%,-100px)");
        $('#event5').css("-webkit-transform" , "translate(0%,-100px)");
        $('#event1').css("-moz-transform" , "translate(-120%,-100px)");
        $('#event2').css("-moz-transform" , "translate(120%,-100px)");
        $('#event3').css("-moz-transform" , "translate(-60%,-100px)");
        $('#event4').css("-moz-transform" , "translate(60%,-100px)");
        $('#event5').css("-moz-transform" , "translate(0%,-100px)");
        $('#eventy1').fadeIn();
        $('#eventy2').fadeIn();
        $('#eventy3').fadeIn();
        $('#eventy4').fadeIn();
        $('#eventy5').fadeIn();
        setTimeout(
  function() 
  {
        $('#eventy1').css("-webkit-transform" , "translate(0%,0px)");
        $('#eventy2').css("-webkit-transform" , "translate(220px,0px)");
        $('#eventy3').css("-webkit-transform" , "translate(440px,0px)");
        $('#eventy4').css("-webkit-transform" , "translate(660px,0px)");
        $('#eventy5').css("-webkit-transform" , "translate(880px,0px)");
        $('#eventy1').css("-webkit-transition" , "1.3s ease-in");
        $('#eventy2').css("-webkit-transition" , "1.3s ease-in");
        $('#eventy3').css("-webkit-transition" , "1.3s ease-in");
        $('#eventy4').css("-webkit-transition" , "1.3s ease-in");
        $('#eventy5').css("-webkit-transition" , "1.3s ease-in");
        $('#eventy1').css("-moz-transform" , "translate(0%,0px)");
        $('#eventy2').css("-moz-transform" , "translate(220px,0px)");
        $('#eventy3').css("-moz-transform" , "translate(440px,0px)");
        $('#eventy4').css("-moz-transform" , "translate(660px,0px)");
        $('#eventy5').css("-moz-transform" , "translate(880px,0px)");
        $('#eventy1').css("-moz-transition" , "1.3s ease-in");
        $('#eventy2').css("-moz-transition" , "1.3s ease-in");
        $('#eventy3').css("-moz-transition" , "1.3s ease-in");
        $('#eventy4').css("-moz-transition" , "1.3s ease-in");
        $('#eventy5').css("-moz-transition" , "1.3s ease-in");

  }, 1000);
        

});

});