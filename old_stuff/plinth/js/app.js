var app = angular.module('Plinth2016', ['ngRoute']);

app.config(function($routeProvider)
{
	$routeProvider
	.when('/live',{
		controller : 'MainController',
		templateUrl : 'views/live.html'
	})
});