var app = angular.module('categoryApp',['ngRoute','ngMaterial','ngMessages']);

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

    .when('/final',{
        controller : 'mainCtrl',
        templateUrl:'views/final.html'
    })

    .when('/privacy',{
        controller : 'mainCtrl',
        templateUrl:'views/privacy.html'
    })

    .when('/thankyou',{
        controller : 'mainCtrl',
        templateUrl:'views/thankyou.html'
    })
    
    .otherwise({ redirectTo: '/' })    
});


app.controller('mainCtrl',['$scope','$http','$location','$mdDialog', '$mdMedia',function($scope,$http,$location,$mdDialog, $mdMedia) {

    //Event array for saving array in it

    Eventlist = {"events" : []}

    $http({
        url: "http://dhiya.16mb.com/eg-api/cities", 
        method : 'get',
        headers : {},
    })
    .success(function(data, status, headers, config){
        $scope.cities = data.cities;
    })
    .error(function(data, status, headers, config){
        // console.log(data);
    })

    /*******************************
    // 
    // addEvent modals and data
    //
    ********************************/

    //home

        $scope.homeSubmit = function(x) {
        console.log($scope.eventCity)
        $location.path('/categories')
    };


    //Category

    $scope.category;

    $scope.categorySelected = function(x) {
        $scope.category = x;
        console.log($scope.category)
        $location.path('/event')
    };


    // Data

    // $scope.myDate = new Date();
    $scope.types = [
    { name: 'Cinematographer' },
    { name: 'Photographer' },
    { name: 'Both' }
    ];
    $scope.noOf = [1,2,3,4,5];
    $scope.eventTIME = [1,2,3,4,5,6,7,8,9,10,11,12];
    $scope.eventAMPM = ["AM","PM"];
    $scope.eventHOUR = [1,2,3,4,5,6,7,8];
    $scope.LoginEle = [
        'SignUp',
        'LogIn'
    ];

    // Modals ($scope)
    $scope.eventName;
    $scope.eventCity;
    $scope.loginStatus = sessionStorage.getItem('loginStatus');
    eventCountx = 0;
    // sessionStorage.setItem('loginStatus', "false");
    

    //Login popup

      $scope.signupBTN = function(ev) {
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'js/app/dia1.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true
        })
      };

      $scope.loginBTN = function(ev) {
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'js/app/dia2.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true
        })
      };
    

    function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }


    function userRegister(){

    }


    function userLogin(){
        
    }







    $scope.eventAdd = function () {
        eventData = {"Name" : $scope.eventName, "cine/photo" : $scope.eventSelectedType, "noOf_cine/photo" : $scope.eventnoOf, "address" : $scope.eventAddress ,"city" : $scope.eventCity};
        Eventlist.events.push(eventData);
        console.log(Eventlist.events);
        console.log(sessionStorage.getItem('day'));
        console.log(sessionStorage.getItem('month'));
        console.log(sessionStorage.getItem('year'));
    }


    $scope.eventTest = function(){
        console.log(sessionStorage.getItem('day'));
        console.log(sessionStorage.getItem('month'));
        console.log(sessionStorage.getItem('year'));
    }
    
    $scope.$watch(function () {
        return sessionStorage.session;
    }, function (newVal, oldVal) {
        console.log("The web storage has changed");
    }, true);

}]);

