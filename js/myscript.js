$( document ).ready(function(){

    $(".button-collapse").sideNav();
    $("#typed-content").typed({
        strings: ["Conf.kde.in '16^1000, Jaipur^1000<br> <code> <i>Feb 17-18, 2016 </i> </code>"],
            typeSpeed: 30,
            showCursor: true,
            cursorChar: "|",
    });
    $(".d1").animatedModal({
        modalTarget: "about",
        animatedIn:"bounceInUp",
        animatedOut:"bounceOutDown",
        color:"#fb6107"
    });
    $(".d3").animatedModal({
        modalTarget: "cfp",
        animatedIn:"bounceInUp",
        animatedOut:"bounceOutDown",
        color:"#f3de2c"
    });
    $(".d5").animatedModal({
        modalTarget: "faqs",
        animatedIn:"bounceInUp",
        animatedOut:"bounceOutDown",
        color:"#73b518"
    });
            
});