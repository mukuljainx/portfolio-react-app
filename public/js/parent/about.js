"use strict"

$( document ).ready(function() {

    var footerHandler = function(){
        var $el = $('.footer-adjust');
        var footerTop = $el.offset().top + $el.outerHeight(true);

        if((footerTop + $('footer').height() + 60) <  $(window).innerHeight()){
          $('footer').addClass('footer-fixed');
        }
        else{
          $('footer').removeClass('footer-fixed');
        }
    }

    var skills = [
        {
            categoryName : "languages",
            set : [
                {
                    name : "JS",
                    value : 8
                },
                {
                    name : "HTML",
                    value : 8
                },
                {
                    name : "Java",
                    value : 3
                },
                {
                    name : "SASS",
                    value : 8
                },
                {
                    name : "CSS",
                    value : 8
                },
                {
                    name : "C++",
                    value : 3
                },
            ]
        },
        {
            categoryName : "framework",
            set : [
                {
                    name : "AngularJS",
                    value : 8
                },
                {
                    name : "NodeJS",
                    value : 8
                },
                {
                    name : "jQuery",
                    value : 8
                },
                {
                    name : "Foundation",
                    value : 8
                },
                {
                    name : "Bootstrap",
                    value : 6
                },
                {
                    name : "D3JS",
                    value : 3
                },
            ]
        },
        {
            categoryName : "tools",
            set : [
                {
                    name : "Sketch",
                    value : 8
                },
                {
                    name : "Gulp",
                    value : 3
                },
            ]
        },
    ]

    var renderHTML = "";

    for(var i=0; i<skills.length; i++){

        var renderHTML = renderHTML
        + '<div class="row">'
        + '<div class="column small-10 small-centered">'
        + '<h6>' + skills[i].categoryName + '</h6>'
        + '<div class="row">';

        for(var j=0; j<skills[i].set.length; j++){
            renderHTML = renderHTML
            + '<div class="column small-12 medium-6 large-4 end">'
            + '<span class="skill-name roboto">' + skills[i].set[j].name + '</span>'
            + '<div class="skill-point-set">';
            for(var k=0; k < skills[i].set[j].value; k++ ){
                renderHTML += '<span class="dark-circle"></span>';
            }
            for(var k=0; k < 10 - skills[i].set[j].value; k++ ){
                renderHTML += '<span class="hollow-circle"></span>';
            }
            renderHTML += '</div></div>';
        }
        renderHTML += '</div>';
        renderHTML += '</div>';
        renderHTML += '</div>';
    }

    $(".skill-set").html(renderHTML);

    footerHandler();

});
