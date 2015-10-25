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
    		$('#Robotics').show();
    		$('#Management').hide();
    		$('#Coding').hide();
    		$('#Quizzing').hide();
    		$('#Astronomy').hide();
    		$('#Literary').hide();

    	};
    	if(str == "Management")
    	{
    		$('#Robotics').hide();
    		$('#Management').show();
    		$('#Coding').hide();
    		$('#Quizzing').hide();
    		$('#Astronomy').hide();
    		$('#Literary').hide();

    	};
    	if(str == "Coding")
    	{
    		$('#Robotics').hide();
    		$('#Management').hide();
    		$('#Coding').show();
    		$('#Quizzing').hide();
    		$('#Astronomy').hide();
    		$('#Literary').hide();

    	};
    	if(str == "Quizzing")
    	{
    		$('#Robotics').hide();
    		$('#Management').hide();
    		$('#Coding').hide();
    		$('#Quizzing').show();
    		$('#Astronomy').hide();
    		$('#Literary').hide();

    	};
    	if(str == "Astronomy")
    	{
    		$('#Robotics').hide();
    		$('#Management').hide();
    		$('#Coding').hide();
    		$('#Quizzing').hide();
    		$('#Astronomy').show();
    		$('#Literary').hide();

    	};
    	if(str == "Literary")
    	{
    		$('#Robotics').hide();
    		$('#Management').hide();
    		$('#Coding').hide();
    		$('#Quizzing').hide();
    		$('#Astronomy').hide();
    		$('#Literary').show();

    	};

	})
.trigger( "change" );