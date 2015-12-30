// window.location.href = window.location.href;

$(".button-collapse").sideNav();
$(".parallax").parallax();

$('.x-fb').mouseenter(function(){
    $('.mini-fb-page-container').fadeIn('700');
});

$('.mini-fb-page-container').mouseleave(function(){
    $('.mini-fb-page-container').fadeOut('500');
});
 
$('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .4, // Opacity of modal background
      in_duration: 700, // Transition in duration
      out_duration: 700, // Transition out duration
    }
  );
