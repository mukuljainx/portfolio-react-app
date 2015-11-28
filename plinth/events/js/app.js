var app= angular.module('CompetitionEvent', ['ngRoute']);

app.config(function($routeProvider)
{
	$routeProvider
	.when('/transporter',{
		controller : 'MainController',
		templateUrl : 'views/transporterx.html'
	})
	.when('/robowar',{
		controller : 'MainController',
		templateUrl : 'views/robowarx.html'
	})
	.when('/linefollower',{
		controller : 'MainController',
		templateUrl : 'views/linefollowerx.html'
	})
	.when('/lumos',{
		controller : 'MainController',
		templateUrl : 'views/lumosx.html'
	})
	.when('/roborace',{
		controller : 'MainController',
		templateUrl : 'views/roboracex.html'
	})
	.when('/robosoccer',{
		controller : 'MainController',
		templateUrl : 'views/robosoccerxx.html'
	})
	.when('/technovation',{
		controller : 'MainController',
		templateUrl : 'views/eventx.html'
	})
	.when('/aceinventure',{
		controller : 'MainController',
		templateUrl : 'views/eventx.html'
	})
	.when('/iupc',{
		controller : 'MainController',
		templateUrl : 'views/eventx.html'
	})
	.when('/sif',{
		controller : 'MainController',
		templateUrl : 'views/sifx.html'
	})
	.when('/bplan',{
		controller : 'MainController',
		templateUrl : 'views/bplanx.html'
	})
	.when('/bigq',{
		controller : 'MainController',
		templateUrl : 'views/techqx.html'
	})
	.when('/techq',{
		controller : 'MainController',
		templateUrl : 'views/bigqx.html'
	})
	.when('/',{
		controller : 'MainController',
		templateUrl : 'views/eventx.html'
	})
	.when('/asgard',{
		controller : 'MainController',
		templateUrl : 'views/asgardx.html'
	})
	.when('/into',{
		controller : 'MainController',
		templateUrl : 'views/intox.html'
	})
	.when('/astrohunt',{
		controller : 'MainController',
		templateUrl : 'views/astrohuntx.html'
	})
	.when('/turncoat',{
		controller : 'MainController',
		templateUrl : 'views/turncoatx.html'
	})
	.when('/floorcrossing',{
		controller : 'MainController',
		templateUrl : 'views/floorcrossingx.html'
	})
	.when('/finderskeepers',{
		controller : 'MainController',
		templateUrl : 'views/finderskeepersx.html'
	})
	.when('/lyrewrite',{
		controller : 'MainController',
		templateUrl : 'views/lyrewritex.html'
	})
});