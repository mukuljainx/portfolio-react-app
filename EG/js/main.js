$(document).ready(function(){
  $('.slider').slider({full_width: true});
});

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
});

$(document).ready(function() {
    $('select').material_select();
});

$(".button-collapse").sideNav();

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll > $(window).height())
    {
    	console.log("true1");
    	console.log(scroll);
    	console.log($(window).height());
    	$('.nav-container').css("position","fixed");
    	$('.nav-container').css("top","0px");
    	$('.nav-container').css("width","100%");
    	// $('#spacework').css("height","64px");
    }
    else if(scroll < $(window).height())
    {
    	console.log("true2");
    	$('.nav-container').css("position","static");
    	$('#spacework').css("height","0px");

    }

    if(scroll > 80)
    {
    	$('.become').css("display","inline");
    }

});

$('.become-close').click(function(){
	$('.become').css("opacity","0");
});

$(document).ready(function(){
  $('.carousel').carousel();
});
    