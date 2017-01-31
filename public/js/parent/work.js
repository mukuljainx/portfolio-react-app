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

    var works = [
        {
            img : "plinth2017.jpg",
            altImg : "Plinth 2017 | Home Page",
            name : "Plinth, The LNMIIT 2017",
            stack : "jQuery • Foundation • Nodejs • Expressjs",
            github : "#",
            link : "#"
        },
        {
            img : "mun2017.jpg",
            altImg : "MUN 2017",
            name : "MUN, The LNMIIT 2017",
            stack : "jQuery • Foundation • Nodejs • Expressjs",
            github : "#",
            link : "#"
        },
        {
            img : "event-graphia.jpg",
            altImg : "Event Graphia",
            name : "Event Graphia",
            stack : "BootStrap • JS • jQuery",
            github : "#",
            link : "#"
        },
        {
            img : "zento.jpg",
            altImg : "Zento Gallery",
            name : "Zento, Pure JS Gallery",
            stack : "JS",
            github : "#",
            link : "#"
        },
        {
            img : "flash.jpg",
            altImg : "Chatbot Flash",
            name : "Flash - Chatbot",
            stack : "Python • AIML • PyAMIL • Bash",
            github : "#",
            link : "#"
        }
    ]

    var totalWork = works.length;
    var currentWork = 0;

    var renderHTML = `<div class="work-nav work-nav-left">
                        <img src="media/parent/images/left.svg" alt="left arrow for navigation" />
                      </div>`;

    for(var i=0; i<totalWork; i++){

        renderHTML = renderHTML
        + '<div class="column small-10 small-centered medium-10 card work-hidden portfolio-work work-' + i + '">'
        + '<img class="work-showcase-img" src="media/parent/images/work/' + works[i].img + '" alt="' + works[i].altImg  + '" />'
        + '<div class="work-title-div row">'
        + '<div class="column small-12 medium-6">'
        + '<p class="roboto">' + works[i].name + '</p>'
        + '<p class="roboto weight-light">' + works[i].stack + '</p>'
        + '</div>'
        + '<div class="column small-12 medium-6 text-right">'
        + '<p class="roboto">&nbsp;</p>'
        + '<p class="roboto weight-light"><a href="' + works[i].github + '">Github</a> | <a href="' + works[i].link
        + '">Website</a></p>'
        + '</div>'
        + '</div>'
        + '</div>';
    }

    renderHTML += `<div class="work-nav work-nav-right">
                            <img src="media/parent/images/left.svg" alt="right arrow for navigation" />
                        </div>`;

    $(".work-row").html(renderHTML);
    $('.work-0').removeClass('work-hidden');
    $('footer').removeClass('footer-fixed');

    $('.work-nav-right').click(function(){
        $('.portfolio-work').addClass('work-hidden');
        currentWork = (currentWork + 1) % totalWork;
        $('.work-' + currentWork).removeClass('work-hidden');
        footerHandler();
    })

    $('.work-nav-left').click(function(){
        if(currentWork === 0){
            currentWork = totalWork;
        }
        currentWork--;
        $('.portfolio-work').addClass('work-hidden');
        $('.work-' + currentWork).removeClass('work-hidden');
        footerHandler();
    })
});
