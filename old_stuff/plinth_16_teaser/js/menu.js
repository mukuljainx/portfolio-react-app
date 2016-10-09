var main = function(){
   

    $('.menu-btn').mouseenter(function(){
      $('#me0').animate({left: "0px"},500);
        $('#me1').animate({left: "0px"},700);
        $('#me2').animate({left: "0px"},900);
        $('#me3').animate({left: "0px"},1100);
   });
    $('.menu').mouseleave(function(){
        $('#me3').animate({left: "-90px"},700);
        $('#me2').animate({left: "-90px"},900);
        $('#me1').animate({left: "-90px"},1100);
      $('#me0').animate({left: "-90px"},1300);
   });
};

$(document).ready(main);