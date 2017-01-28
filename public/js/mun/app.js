"use strict"

var img= $('.mun-logo-content img');
var intialLogoTop = img.offset().top +90;

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var homeHeight = $('.home').height() -22;
    
    if(scroll > homeHeight){
        $('.navitem a').css('color','black');
        $('.fa-bars').css('color','black');
        $('nav').addClass('nav-white');
    }
    else {
        $('.fa-bars').css('color','white');
        $('.navitem a').css('color','white');
        $('nav').removeClass('nav-white');
    }

    // for logo

    if(scroll > intialLogoTop){
        img.addClass('mun-img-top-send');
    }
    else {
        img.removeClass('mun-img-top-send');
    }
    
    //for small footer in EB
    
    var ebHeight = $('#eb-head').offset().top - 400;
    var regHeight = $('#register-now').offset().top - 400;
//    console.log(ebHeight);
//    console.log(regHeight);
    if(scroll >= ebHeight){
        $('.small-foot').css("display", "inline-block");
    }else{
        $('.small-foot').css("display", "none");
    }
    if(scroll >= regHeight){
        $('.small-foot').css("display", "none");
    }
});

// scroll to eb heading when click on a link
$('.small-link').click(function() {
    var ebHeight = $('#eb-head').offset().top;
    $(window).scrollTop(ebHeight);
});


$(document).on('click', 'a', function(event){
    if(this.classList[0] === "mun-scroll"){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top -70
        }, 500);
    }
});
