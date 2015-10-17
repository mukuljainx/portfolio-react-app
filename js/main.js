$(document).ready(function(){
$(window).scroll(function() {

    if ($(this).scrollTop()>200)
     {
        $('.oxxx').css("-webkit-transform" , "translate(-100%)");
        $('.oxxx').css("-webkit-transition" , "1s ease-in");
     }
     else
     {
        $('.oxxx').css("-webkit-transition" , "1s ease-in");
        $('.oxxx').css("-webkit-transform" , "translate(0,0)");
        // window.alert("");
     }

     if($(this).scrollTop()>1000)
     {
        $('.oxxx2').fadeIn();
     }
     else{
        $('.oxxx2').fadeOut();
     }

 });

});