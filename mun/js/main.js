$(".button-collapse").sideNav();

$('.homex').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$('.aboutx').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$('.registereebx').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 300
    }, 500);
    return false;
});

$('.organizerx').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top -100
    }, 500);
    return false;
});

$('.comittieesx').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 500);
    return false;
});

$('.contactx').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

  $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .4, // Opacity of modal background
      in_duration: 700, // Transition in duration
      out_duration: 700, // Transition out duration
    }
  );


  var l_marginx = (window.innerWidth -235)/2;
document.getElementById("make_center").style.marginLeft = l_marginx + "px";

$(window).resize(function(){
    var l_margin = (window.innerWidth -235)/2;
    document.getElementById("make_center").style.marginLeft = l_margin + "px";
});



$(function(){

    var note = $('#note'),
        ts = new Date(2015, 10, 16),
        newYear = true;

    if((new Date()) > ts){
        // The new year is here! Count towards something else.
        // Notice the *1000 at the end - time must be in milliseconds
        ts = (new Date()).getTime() + 10*24*60*60*1000;
        newYear = false;
    }

    $('#countdown').countdown({
        timestamp   : ts,
        callback    : function(days, hours, minutes, seconds){

            var message = "";

            message += days + " day" + ( days==1 ? '':'s' ) + ", ";
            message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
            message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
            message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";

            if(newYear){
                message += "left until the new year!";
            }
            else {
                message += "left to 10 days from now!";
            }

            note.html(message);
        }
    });

});
