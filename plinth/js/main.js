$(".button-collapse").sideNav();
$(".parallax").parallax();

var lastPos = null,
    timer = 0;

function clear() {
    lastPos = null;
};

window.onscroll = checkScrollSpeed;

function checkScrollSpeed(){
    var newPos = window.scrollY;
    if ( lastPos != null ){ // && newPos < maxScroll 
        var delta = newPos -  lastPos;
        console.log(delta); // this is the result
    }
    lastPos = newPos;
    timer && clearTimeout(timer);
    timer = setTimeout(clear, 30);
};

$(window).scroll(function() {


    if ($(this).scrollTop()>  200)
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
     
     if($(this).scrollTop()>  1200)
     {
        $('#event2').fadeIn();
     }
     else{
        $('#event2').fadeOut();
     }
     
     if ($(this).scrollTop()>  2200)
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

     if($(this).scrollTop()>  3200)
     {  
        $('#event3').fadeIn();
     }
     else{
        $('#event3').fadeOut();
     }

     if ($(this).scrollTop()>  4200)
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







