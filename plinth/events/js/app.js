var app= angular.module('CompetitionEvent', ['ngRoute']);

app.config(function($routeProvider)
{
	$routeProvider
	.when('/transporter',{
		controller : 'MainController',
		templateUrl : 'views/transporter.html'
	})
	.when('/robowar',{
		controller : 'MainController',
		templateUrl : 'views/robowar.html'
	})
	.when('/linefollower',{
		controller : 'MainController',
		templateUrl : 'views/linefollower.html'
	})
	.when('/lumos',{
		controller : 'MainController',
		templateUrl : 'views/lumos.html'
	})
	.when('/roborace',{
		controller : 'MainController',
		templateUrl : 'views/roborace.html'
	})
	.when('/robosoccer',{
		controller : 'MainController',
		templateUrl : 'views/robosoccer.html'
	})
	.when('/technovation',{
		controller : 'MainController',
		templateUrl : 'views/event.html'
	})
	.when('/aceinventure',{
		controller : 'MainController',
		templateUrl : 'views/event.html'
	})
	.when('/iupc',{
		controller : 'MainController',
		templateUrl : 'views/event.html'
	})
	.when('/',{
		controller : 'MainController',
		templateUrl : 'views/event.html'
	})
	.when('/',{
		controller : 'MainController',
		templateUrl : 'views/event.html'
	})
	.when('/',{
		controller : 'MainController',
		templateUrl : 'views/event.html'
	})
	.when('/',{
		controller : 'MainController',
		templateUrl : 'views/event.html'
	})
	.when('/',{
		controller : 'MainController',
		templateUrl : 'views/event.html'
	})
	.when('/asgard',{
		controller : 'MainController',
		templateUrl : 'views/asgard.html'
	})
	.when('/into',{
		controller : 'MainController',
		templateUrl : 'views/into.html'
	})
	.when('/astrohunt',{
		controller : 'MainController',
		templateUrl : 'views/astrohunt.html'
	})
	.when('/turncoat',{
		controller : 'MainController',
		templateUrl : 'views/turncoat.html'
	})
	.when('/floorcrossing',{
		controller : 'MainController',
		templateUrl : 'views/floorcrossing.html'
	})
	.when('/finderskeepers',{
		controller : 'MainController',
		templateUrl : 'views/finderskeepers.html'
	})
	.when('/lyrewrite',{
		controller : 'MainController',
		templateUrl : 'views/lyrewrite.html'
	})
});