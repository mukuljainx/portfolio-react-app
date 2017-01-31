var app = angular.module('faqApp',['ngRoute','ngMaterial','ngMessages']);

app.config(function($routeProvider,$mdThemingProvider)
{
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
    $routeProvider
    .when('/',{
        controller : 'mainCtrl',
        templateUrl : 'views/home.html',
    })

    .when('/categories',{
        controller : 'mainCtrl',
        templateUrl:'views/categories.html'
    })

    .when('/event',{
        controller : 'mainCtrl',
        templateUrl:'views/book.html'
    })

    .when('/addevent',{
        controller : 'mainCtrl',
        templateUrl:'views/addevent.html'
    })
    .when('/final',{
        controller : 'mainCtrl',
        templateUrl:'views/final.html'
    })
    .otherwise({ redirectTo: '/' })    
});


app.controller('faqCtrl',['$scope','$http','$location',function($scope,$http,$location) {



}]);