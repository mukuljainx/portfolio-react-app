var app= angular.module('CompetitionEvent', ['ngRoute']);

app.config(function($routeProvider)
{
	$routeProvider
	.when('/transporter',{
		controller : 'MainController',
		templateUrl : 'views/transporterxx.html'
	})
	.when('/robowar',{
		controller : 'MainController',
		templateUrl : 'views/robowarxx.html'
	})
	.when('/linefollower',{
		controller : 'MainController',
		templateUrl : 'views/linefollowerxx.html'
	})
	.when('/lumos',{
		controller : 'MainController',
		templateUrl : 'views/lumosxx.html'
	})
	.when('/roborace',{
		controller : 'MainController',
		templateUrl : 'views/roboracexx.html'
	})
	.when('/robosoccer',{
		controller : 'MainController',
		templateUrl : 'views/robosoccerxxx.html'
	})
	.when('/technovation',{
		controller : 'MainController',
		templateUrl : 'views/eventxx.html'
	})
	.when('/aceinventure',{
		controller : 'MainController',
		templateUrl : 'views/eventxx.html'
	})
	.when('/iupc',{
		controller : 'MainController',
		templateUrl : 'views/eventxx.html'
	})
	.when('/sif',{
		controller : 'MainController',
		templateUrl : 'views/sifxx.html'
	})
	.when('/bplan',{
		controller : 'MainController',
		templateUrl : 'views/bplanxx.html'
	})
	.when('/',{
		controller : 'MainController',
		templateUrl : 'views/eventxx.html'
	})
	.when('/',{
		controller : 'MainController',
		templateUrl : 'views/eventxx.html'
	})
	.when('/',{
		controller : 'MainController',
		templateUrl : 'views/eventxx.html'
	})
	.when('/asgard',{
		controller : 'MainController',
		templateUrl : 'views/asgardxx.html'
	})
	.when('/into',{
		controller : 'MainController',
		templateUrl : 'views/intoxx.html'
	})
	.when('/astrohunt',{
		controller : 'MainController',
		templateUrl : 'views/astrohuntxx.html'
	})
	.when('/turncoat',{
		controller : 'MainController',
		templateUrl : 'views/turncoatxx.html'
	})
	.when('/floorcrossing',{
		controller : 'MainController',
		templateUrl : 'views/floorcrossingxx.html'
	})
	.when('/finderskeepers',{
		controller : 'MainController',
		templateUrl : 'views/finderskeepersxx.html'
	})
	.when('/lyrewrite',{
		controller : 'MainController',
		templateUrl : 'views/lyrewritexx.html'
	})
});