$(".button-collapse").sideNav();

$('select').material_select();

$( "select" )
	.change(function() {
    	var str;
    	$( "select option:selected" ).each(function() {
    		str = $( this ).text();
    	});
    	if(str == "Robotics")
    	{
            $('nav').css("background-color","#41A4F4");
            $('.events_menu>ul>a>li').mouseenter(function(){
                $(this).css("background-color","#41A4F4");
                $(this).css("color","#FFF");
            });
            $('.events_menu>ul>a>li').mouseleave(function(){
                $(this).css("background-color","#fff");
                $(this).css("color","grey");
            });
            window.location.replace("./quiz.html#/transporter");
            $('#Robotics').show();
    		$('#Management').hide();
    		$('#Coding').hide();
    		$('#Quizzing').hide();
    		$('#Astronomy').hide();
    		$('#Literary').hide();

    	};
    	if(str == "Management")
    	{
            $('nav').css("background-color","#F44336");
    		$('.events_menu>ul>a>li').mouseenter(function(){
                $(this).css("background-color","#F44336");
                $(this).css("color","#FFF");
            });
            $('.events_menu>ul>a>li').mouseleave(function(){
                $(this).css("background-color","#fff");
                $(this).css("color","grey");
            });
            window.location.replace("./quiz.html#/sif");            
            $('#Robotics').hide();
    		$('#Management').show();
    		$('#Coding').hide();
    		$('#Quizzing').hide();
    		$('#Astronomy').hide();
    		$('#Literary').hide();

    	};
    	if(str == "Coding")
    	{
            $('nav').css("background-color","#009688");
            $('.events_menu>ul>a>li').mouseenter(function(){
                $(this).css("background-color","#009688");
                $(this).css("color","#FFF");
            });
            $('.events_menu>ul>a>li').mouseleave(function(){
                $(this).css("background-color","#fff");
                $(this).css("color","grey");
            });
            window.location.replace("./quiz.html#/iupc");            

            $('#Robotics').hide();
            $('#Management').hide();
            $('#Coding').show();
            $('#Quizzing').hide();
            $('#Astronomy').hide();
            $('#Literary').hide();

        };
        if(str == "Quizzing")
        {
            $('nav').css("background-color","#9474CB");
            $('.events_menu>ul>a>li').mouseenter(function(){
                $(this).css("background-color","#9474CB");
                $(this).css("color","#FFF");
            });
            $('.events_menu>ul>a>li').mouseleave(function(){
                $(this).css("background-color","#fff");
                $(this).css("color","grey");
            });
            window.location.replace("./quiz.html#/bigq");            
    		$('#Robotics').hide();
    		$('#Management').hide();
    		$('#Coding').hide();
    		$('#Quizzing').show();
    		$('#Astronomy').hide();
    		$('#Literary').hide();

    	};
    	if(str == "Astronomy")
    	{
            $('nav').css("background-color","#01579B");
            $('.events_menu>ul>a>li').mouseenter(function(){
                $(this).css("background-color","#01579B");
                $(this).css("color","#FFF");
            });
            $('.events_menu>ul>a>li').mouseleave(function(){
                $(this).css("background-color","#fff");
                $(this).css("color","grey");
            });
            window.location.replace("./quiz.html#/astrohunt");
    		$('#Robotics').hide();
    		$('#Management').hide();
    		$('#Coding').hide();
    		$('#Quizzing').hide();
    		$('#Astronomy').show();
    		$('#Literary').hide();

    	};
    	if(str == "Literary")
    	{
            $('nav').css("background-color","#FFC107");
            $('.events_menu>ul>a>li').mouseenter(function(){
                $(this).css("background-color","#FFC107");
                $(this).css("color","#FFF");
            });
            $('.events_menu>ul>a>li').mouseleave(function(){
                $(this).css("background-color","#fff");
                $(this).css("color","grey");
            });
            window.location.replace("./quiz.html#/finderskeepers");
    		$('#Robotics').hide();
    		$('#Management').hide();
    		$('#Coding').hide();
    		$('#Quizzing').hide();
    		$('#Astronomy').hide();
    		$('#Literary').show();

    	};

	})
.trigger( "change" );