var workshopsxy1 = $('.workshops').offset();
var exhibationxy1 = $('.workshops').offset();
var speakerxy1 = $('.workshops').offset();

$('.workshops_back').css("top",workshopsxy1.top)
$('.workshops_back').css("left",workshopsxy1.left)

console.log($('.workshops').offset().top);
console.log($('.workshops_back').offset().top);



$(window).resize(function(){
    var workshopsxy2 = $('.workshops').offset();
	var exhibationxy2= $('.workshops').offset();
	var speakerxy2 = $('.workshops').offset();
});

// $('.workshops').click(function(){
//     $('.workshops').css("-webkit-transform", "rotateY(-180deg)");
//     $('.workshops').css("-moz-transform", "rotateY(-180deg)");
//  	$('.workshops_back').css("-webkit-transform", "rotateY(0deg)");
//     $('.workshops_back').css("-moz-transform", "rotateY(0deg)");

// });
// $('.workshops').mouseleave(function(){
//     $('.workshops').css("-webkit-transform", "rotateY(0deg)");
//     $('.workshops').css("-moz-transform", "rotateY(0deg)");
//  	$('.workshops_back').css("-webkit-transform", "rotateY(-180deg)");
//     $('.workshops_back').css("-moz-transform", "rotateY(-180deg)");
// });

// $('.exhibition').click(function(){
//     $('.exhibition').css("-webkit-transform", "rotateY(-180deg)");
//     $('.exhibition').css("-moz-transform", "rotateY(-180deg)");
//  	$('.exhibition_back').css("-webkit-transform", "rotateY(0deg)");
//     $('.exhibition_back').css("-moz-transform", "rotateY(0deg)");

// });
// $('.exhibition').mouseleave(function(){
//     $('.exhibition').css("-webkit-transform", "rotateY(0deg)");
//     $('.exhibition').css("-moz-transform", "rotateY(0deg)");
//  	$('.exhibition_back').css("-webkit-transform", "rotateY(-180deg)");
//     $('.exhibition_back').css("-moz-transform", "rotateY(-180deg)");
// });

