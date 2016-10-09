"use strict"
// $(document).foundation();

// var app = angular.module('jainmukul', ['ui.router']);
//
// app.controller('mainCtrl', ['$scope','$state','$window',
// 							function($scope,$state,$window) {
//
//     console.log('mainCtrl');
//
// }]);
var width = $('.retina-container').width();
$('.retina-container').css('height',width/1.6);

$( window ).resize(function() {
  var width = $('.retina-container').width();
	$('.retina-container').css('height',width/1.6);
});
