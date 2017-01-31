$('.workshops').click(function(){
    $('.workshops').css("-webkit-transform", "rotateY(360deg)");
    $('.workshops').css("-moz-transform", "rotateY(360deg)");
	$('.tq1').fadeOut(0);
	$('.tq1').text("Coming soon");
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
	$('.tq2').text("Coming soon");
	$('.tq2').fadeIn(1300);

});
$('.exhibation').mouseleave(function(){
    $('.exhibation').css("-webkit-transform", "rotateY(0deg)");
    $('.exhibation').css("-moz-transform", "rotateY(0deg)");
	$('.tq2').fadeOut(0);
	$('.tq2').text("EXHIBITIONS");
	$('.tq2').fadeIn(1300);
});
$('.speaker').click(function(){
    $('.speaker').css("-webkit-transform", "rotateY(360deg)");
    $('.speaker').css("-moz-transform", "rotateY(360deg)");
	$('.tq3').fadeOut(0);
	$('.tq3').text("Coming soon");
	$('.tq3').fadeIn(1300);

});
$('.speaker').mouseleave(function(){
    $('.speaker').css("-webkit-transform", "rotateY(0deg)");
    $('.speaker').css("-moz-transform", "rotateY(0deg)");
	$('.tq3').fadeOut(0);
	$('.tq3').text("TALKS");
	$('.tq3').fadeIn(1300);
});


$('.video-btn').mouseenter(function(){
    $('.video-box').css("display", "inline-block");
    $('.video-box-wrap').css("display", "inline-block");
});

$('.video-btn').mouseleave(function(){
    $('.video-box').css("display", "none");
    $('.video-box-wrap').css("display", "none");
});

$('.video-btn').click(function(){
	$('.video-box2').css("display", "inline-block");
    $('.video-box-wrap2').css("display", "inline-block");
	var vi = $("#video-frame");
    vi.attr("src", vi.data("play-src") );
});

$('.video-box-wrap2').click(function(){
	var vi = $("#video-frame");
    vi.attr("src", vi.data("stop-src"));
    $('.video-box2').css("display", "none");
    $('.video-box-wrap2').css("display", "none");
});

