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