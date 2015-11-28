$('.workshops').click(function(){
    $('.workshops').css("-webkit-transform", "rotateY(360deg)");
    $('.workshops').css("-moz-transform", "rotateY(360deg)");
	$('.tq1').fadeOut(0);
	$('.tq1').text("Coming Soon..!");
	$('.tq1').fadeIn(1300);

});
$('.workshops').mouseleave(function(){
    $('.workshops').css("-webkit-transform", "rotateY(0deg)");
    $('.workshops').css("-moz-transform", "rotateY(0deg)");
	$('.tq1').fadeOut(0);
	$('.tq1').text("WORKSHOPS");
	$('.tq1').fadeIn(1300);
});

$('.exhibation').click(function(){
    $('.exhibation').css("-webkit-transform", "rotateY(360deg)");
    $('.exhibation').css("-moz-transform", "rotateY(360deg)");
	$('.tq2').fadeOut(0);
	$('.tq2').text("Coming Soon..!");
	$('.tq2').fadeIn(1300);

});
$('.exhibation').mouseleave(function(){
    $('.exhibation').css("-webkit-transform", "rotateY(0deg)");
    $('.exhibation').css("-moz-transform", "rotateY(0deg)");
	$('.tq2').fadeOut(0);
	$('.tq2').text("EXHIBATIONS");
	$('.tq2').fadeIn(1300);
});
$('.speaker').click(function(){
    $('.speaker').css("-webkit-transform", "rotateY(360deg)");
    $('.speaker').css("-moz-transform", "rotateY(360deg)");
	$('.tq3').fadeOut(0);
	$('.tq3').text("Coming Soon..!");
	$('.tq3').fadeIn(1300);

});
$('.speaker').mouseleave(function(){
    $('.speaker').css("-webkit-transform", "rotateY(0deg)");
    $('.speaker').css("-moz-transform", "rotateY(0deg)");
	$('.tq3').fadeOut(0);
	$('.tq3').text("TALKS");
	$('.tq3').fadeIn(1300);
});