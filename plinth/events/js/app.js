var app= angular.module('CompetitionEvent', ['ngRoute']);

app.config(function($routeProvider)
{
	$routeProvider
	.when('/',{
		controller : 'MainController',
		templateUrl : 'views/event.html'
	})

});