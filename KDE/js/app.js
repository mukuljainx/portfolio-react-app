var app= angular.module('KDE', ['ngRoute']);

app.config(function($routeProvider)
{
	$routeProvider
	.when('/',{
		controller : 'MainController',
		templateUrl : 'views/home.html'
	})
	.when('/about',{
		controller : 'MainController',
		templateUrl : 'views/about.html'
	})
	.when('/schedule',{
		controller : 'MainController',
		templateUrl : 'views/schedule.html'
	})
	.when('/cfp',{
		controller : 'MainController',
		templateUrl : 'views/cfp.html'
	})
	.when('/speakers',{
		controller : 'SpeakersController',
		templateUrl : 'views/speakers.html'
	})
	.when('/faqs',{
		controller : 'MainController',
		templateUrl : 'views/faqs.html'
	})
	.when('/sponsors',{
		controller : 'MainController',
		templateUrl : 'views/sponsors.html'
	})
	.when('/location',{
		controller : 'MainController',
		templateUrl : 'views/location.html'
	})
	.when('/contactus',{
		controller : 'MainController',
		templateUrl : 'views/contactus.html'
	})
});