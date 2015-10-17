$(document).ready(function(){
$(window).scroll(function() {

    if ($(this).scrollTop()>200)
     {
        $('#img1').css("-webkit-transform" , "translate(-200%)");
        $('#img1').css("-webkit-transition" , "1s ease-in");
        // window.alert("");
     }
     else
     {
        $('#img1').css("-webkit-transition" , "1s ease-in");
        $('#img1').css("-webkit-transform" , "translate(0,0)");
        // window.alert("");
     }

     if($(this).scrollTop()>1000)
     {
        $('#img2').fadeIn();
     }
     else{
        $('#img2').fadeOut();
     }

 });

});