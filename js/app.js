$(document).foundation();

var app = angular.module('jainmukul', ['ui.router']);

app.controller('mainCtrl', ['$scope','$state','$window',
							function($scope,$state,$window) {

    console.log('mainCtrl');

}]);
