var app= angular.module('CompetitionEvent', ['ngRoute']);

app.config(function($routeProvider)
{
	$routeProvider
	.when('/transporter',{
		controller : 'MainController',
		templateUrl : 'views/transporter.html'
	})
	.when('/gridsolver',{
		controller : 'MainController',
		templateUrl : 'views/gridsolver.html'
	})
	.when('/linefollower',{
		controller : 'MainController',
		templateUrl : 'views/event.html'
	})
	.when('/lumos',{
		controller : 'MainController',
		templateUrl : 'views/event.html'
	})
	.when('/roborace',{
		controller : 'MainController',
		templateUrl : 'views/event.html'
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
	.when('/',{
		controller : 'MainController',
		templateUrl : 'views/event.html'
	})
	.when('/',{
		controller : 'MainController',
		templateUrl : 'views/event.html'
	})
});