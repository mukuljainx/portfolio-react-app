var app = angular.module('EGApp',['ngRoute','ngMaterial','ngMessages','ngCookies','base64']);

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

    .when('/verify',{
        controller : 'mainCtrl',
        templateUrl:'views/verify.html'
    })

    .when('/mybooking',{
        controller : 'mainCtrl',
        templateUrl:'views/mybooking.html'
    })
    
    .when('/tempbooking',{
        controller : 'mainCtrl',
        templateUrl:'views/tempbooking.html'
    })

    .when('/myqueries',{
        controller : 'mainCtrl',
        templateUrl:'views/myqueries.html'
    })

    .when('/paynow',{
        controller : 'mainCtrl',
        templateUrl:'views/paynow.html'
    })

    .when('/thankyou',{
        controller : 'mainCtrl',
        templateUrl:'views/thankyou.html'
    })
    
    .otherwise({ redirectTo: '/' })    
});




app.controller('mainCtrl',['$scope','$http','$location','$mdDialog', '$mdMedia','$timeout','$cookies','$base64',function($scope,$http,$location,$mdDialog, $mdMedia, $timeout, $cookies, $base64) {

    token = "";
    if($cookies.get('loginStatus') == 'true'){
        var x = $cookies.get('loginuser');
        setTimeout(function(){
            $('.nav-wrapper').html('<div id="nav-icon"> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> </div> <a href="#/" class="brand-logo center"><img src="./media/images/logo.png" style="width: 90px; margin: 5px;"></a> <ul class="right usermenuul"> <li><a class="usermenu">'+ x +' &nbsp; &nbsp; <i class="fa fa-chevron-circle-down"></i> </a> <ul> <div class="usermenudiv"> <div class="usermenupic"><span>'+x+'</span> <img src="https://image.freepik.com/free-icon/male-user-shadow_318-34042.png"> </div> <div class="usermenuopt"><a href="#/mybooking">My Booking</a></div><div class="usermenuopt"><a href="#/myqueries">My Queries</a></div> <div class="usermenuopt"><a href="#/profile">Profile</a></div> <div class="usermenuopt"><a onclick="logOut()" href="#/">LogOut</a></div> </div> </ul> </li> </ul> <script> $("#nav-icon").click(function(){ $(this).toggleClass("open"); $(".leftSubMenu").toggleClass("leftsubmenupos"); $(".leftoverlay").toggleClass("leftmenubackdrop"); $("nav").toggleClass("navbarline"); }); $(".usermenu, .usermenudiv").mouseenter(function() { $(".usermenudiv").show(); $(".usermenu").addClass("usermenuwhite"); }); $(".usermenu, .usermenudiv").mouseleave(function() { $(".usermenudiv").hide(); $(".usermenu").removeClass("usermenuwhite"); });    $(".leftmenubackdrop").click(function(){$("#nav-icon").removeClass("open"); $(".leftSubMenu").removeClass("leftsubmenupos"); $(".leftoverlay").removeClass("leftmenubackdrop"); $("nav").removeClass("navbarline");})</script>');
        }, 0);
        token = $base64.encode($cookies.get('email')+':'+$cookies.get('password')); 
    }

    if ($location.path() == '/tempbooking') {
        $scope.x = JSON.parse($cookies.get('tempuserbookingdata'));
    }

    //Event array for saving array in it


    $http({
        url: "http://dhiya.16mb.com/eg-api/cities", 
        method : 'get',
        headers : {},
    })
    .success(function(data, status, headers, config){
        $scope.cities = data.cities;
    })
    .error(function(data, status, headers, config){
    })

    /*******************************
    // 
    // addEvent modals and data
    //
    ********************************/

    //home
    $scope.homeSubmit = function(x) {
        console.log($scope.eventCity)
        $location.path('/categories');
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
    $scope.eventTIME = [1,2,3,4,5,6,7,8,9,10,11,12];
    $scope.eventTIMEMINUTE = [10,20,30,40,50,60];
    $scope.eventAMPM = ["AM","PM"];
    $scope.eventHOUR = [1,2,3,4,5,6,7,8];
    $scope.numberOFPHOTOGRAPHER = ["1","2","3","4","5"];
    $scope.LoginEle = [
        'SignUp',
        'LogIn'
    ];

    // Modals ($scope)
    //for form
    $scope.eventName;
    $scope.eventCity = 75;
    $scope.eventSelectedType = $scope.types[0].name; 
    $scope.eventNumberOfPhotographer;
    $scope.eventTime;
    $scope.eventTimeMinute;
    $scope.eventTimeAMPM;
    $scope.eventHours;
    $scope.eventAddress;
    $scope.eventRequirment;
    $scope.bookingID;
    $scope.totalAmount;
    $scope.appId = 2;
    eventCountx = 0;



/********************************************************************************
    For Signup, Login and verification

*********************************************************************************/


    //for signup
    $scope.userFname;
    $scope.usermobile;
    $scope.useremail;
    $scope.userpassword;

    //for login
    $scope.username;
    $scope.userloginpassword;

    //for promocode
    $scope.userPromoCode;

    
    //Signup popup

      $scope.signupBTN = function(ev) {
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'js/app/dia1.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true
        })
      };

    // Login popup

      $scope.loginBTN = function(ev) {
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'js/app/dia2.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true
        })
      };

      signupBTNx = function(){
        $scope.signupBTN();
      }

      loginBTNx = function(){
        $scope.loginBTN();
      }

    

    // Dialogcontroller for signup and login

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


    //usermessage
    $scope.userMessage="";

    //Promocode

    $scope.displayPromo = function(){
        $('.promoBTN').hide();
        $('.promoCodeOption').fadeIn();
    }

    //Promocode 

    $scope.tryPromoCode = function(){
        token = $base64.encode($scope.email+':'+$scope.password);

        var config = {
                headers : {
                    'Authorization' : 'Basic ' + token,
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }

        data = 'appId=2&offerCode=:xuserPromoCodex:ffer&amount=:xtotalAmountx:';
 
        data = data.replace(':xuserPromoCodex:', $scope.userPromoCode);
        data = data.replace(':xtotalAmountx:', $scope.totalAmount);
     
        var res =  $http.post('http://dhiya.16mb.com/eg-api/customer/applyOffer', data, config);
            res.success(function(data, status, headers, config) {
                console.log(data);
                $scope.userMessage = data.usermessage;
            });
            res.error(function(data, status, headers, config) {
            });
    }


    // Register function

      $scope.userRegister =  function(){
        var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;'
                }
            }

        data = 'name=:xuserfnamex:&contact=:xusercontactx:&email=:xuseremailx:&password=:xuserpasswordx:&appId=2';
 
        data = data.replace(':xuserfnamex:', $scope.userFname);
        data = data.replace(':xuseremailx:', $scope.useremail);
        data = data.replace(':xusercontactx:', $scope.usermobile);
        data = data.replace(':xuserpasswordx:', $scope.userpassword);
     
        var res =  $http.post('http://dhiya.16mb.com/eg-api/registerCustomer', data, config);
            res.success(function(data, status, headers, config) {
                console.log(data);
                if((data.message == "Already Registered!" && data.verification == "pending") || (data.message = "registered Mail Sent")){
                    $scope.userMessage = data.message;
                    $timeout(function(){
                        $scope.cancel();
                        $location.path('/verify');                      
                    },900);
                }
                if(data.message == "Already Registered!" && data.verification == "done"){
                    $scope.userMessage = "Already Registered, Please Login";   
                }
            });
            res.error(function(data, status, headers, config) {
                $scope.userMessage = "Something went wrong please try again later" ;
            });
        }
      

    //Login Function

    $scope.userLogin =  function(){
        var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;'
                }
            }

        data = 'email=:xusernamex:&password=:xuserpasswordx:&appId=2';
        data = data.replace(':xusernamex:', $scope.username);
        data = data.replace(':xuserpasswordx:', $scope.userloginpassword);


        console.log($scope.username);
        console.log($scope.userloginpassword);

        var res =  $http.post('http://dhiya.16mb.com/eg-api/loginCustomer', data, config);
            res.success(function(data, status, headers, config) {

                temps = data.data[0].name;

                x = temps.indexOf(' ');

                if(x == -1){
                    $scope.userNamex = temps;
                }
                else{
                    $scope.userNamex = temps.substr(0,x);
                }

                $cookies.put('loginuser', $scope.userNamex);
                $cookies.put('email', $scope.username,'0');
                $cookies.put('password',$scope.userloginpassword,{'expires': ''});

                if(data.usermessage == "Login Success" && data.data[0].verification == "pending"){
                    $scope.userMessage == "Please Verify your account";
                    $location.path('/verify'); 
                    $('.nav-wrapper').html('<div id="nav-icon"> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> </div> <a href="#/" class="brand-logo center"><img src="./media/images/logo.png" style="width: 90px; margin: 5px;"></a> <ul class="right usermenuul"> <li><a class="usermenu"> '+ $scope.userNamex +' &nbsp; &nbsp; <i class="fa fa-chevron-circle-down"></i> </a> <ul> <div class="usermenudiv"> <div class="usermenupic"><span>'+$scope.userNamex+'</span> <img src="https://image.freepik.com/free-icon/male-user-shadow_318-34042.png"> </div> <div class="usermenuopt"><a href="#/mybooking">My Booking</a></div><div class="usermenuopt"><a href="#/myqueries">My Queries</a></div> <div class="usermenuopt"><a href="#/profile">Profile</a></div> <div class="usermenuopt"><a onclick="logOut()" href="#/">LogOut</a></div> </div> </ul> </li> </ul> <script> $("#nav-icon").click(function(){ $(this).toggleClass("open"); $(".leftSubMenu").toggleClass("leftsubmenupos"); $(".leftoverlay").toggleClass("leftmenubackdrop"); $("nav").toggleClass("navbarline"); }); $(".usermenu, .usermenudiv").mouseenter(function() { $(".usermenudiv").show(); $(".usermenu").addClass("usermenuwhite"); }); $(".usermenu, .usermenudiv").mouseleave(function() { $(".usermenudiv").hide(); $(".usermenu").removeClass("usermenuwhite"); }); $(".leftmenubackdrop").click(function(){$("#nav-icon").removeClass("open"); $(".leftSubMenu").removeClass("leftsubmenupos"); $(".leftoverlay").removeClass("leftmenubackdrop"); $("nav").removeClass("navbarline");})  </script>');
                    $cookies.put('loginStatus', 'true','0');
                }

                else if(data.message == "Login Success"){
                    $cookies.put('loginStatus', 'true','0');
                    $scope.userMessage = data.message;
                    $('.nav-wrapper').html('<div id="nav-icon"> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> </div> <a href="#/" class="brand-logo center"><img src="./media/images/logo.png" style="width: 90px; margin: 5px;"></a> <ul class="right usermenuul"> <li><a class="usermenu"> '+ $scope.userNamex +' &nbsp; &nbsp; <i class="fa fa-chevron-circle-down"></i> </a> <ul> <div class="usermenudiv"> <div class="usermenupic"><span>'+$scope.userNamex+'</span> <img src="https://image.freepik.com/free-icon/male-user-shadow_318-34042.png"> </div> <div class="usermenuopt"><a href="#/mybooking">My Booking</a></div><div class="usermenuopt"><a href="#/myqueries">My Queries</a></div> <div class="usermenuopt"><a href="#/profile">Profile</a></div> <div class="usermenuopt"><a onclick="logOut()" href="#/">LogOut</a></div> </div> </ul> </li> </ul> <script> $("#nav-icon").click(function(){ $(this).toggleClass("open"); $(".leftSubMenu").toggleClass("leftsubmenupos"); $(".leftoverlay").toggleClass("leftmenubackdrop"); $("nav").toggleClass("navbarline"); }); $(".usermenu, .usermenudiv").mouseenter(function() { $(".usermenudiv").show(); $(".usermenu").addClass("usermenuwhite"); }); $(".usermenu, .usermenudiv").mouseleave(function() { $(".usermenudiv").hide(); $(".usermenu").removeClass("usermenuwhite"); }); $(".leftmenubackdrop").click(function(){$("#nav-icon").removeClass("open"); $(".leftSubMenu").removeClass("leftsubmenupos"); $(".leftoverlay").removeClass("leftmenubackdrop"); $("nav").removeClass("navbarline");})  </script>');
                    $timeout(function(){
                        $scope.cancel();
                    },900);
                }

                else{
                    $scope.userMessage = data.usermessage;                    
                }

            });

            res.error(function(data, status, headers, config) {
                $scope.userMessage = "Something went wrong please try again later" ;
            });
        }


    $scope.proceedToPay = function(){

        var config = {
                headers : {
                    'Authorization' : 'Basic ' + token,
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }

        data = 'appId=2&offerCode=:xuserPromoCodex:&buyer_name=:xusernamex:&amount=:xtotalAmountx:&requestId=:xbookingIDx:&purpose=Photography Services&phone=:xusermobilex:&send_email=false';
        
        data = data.replace(':xuserPromoCodex:', $scope.Promocode);
        data = data.replace(':xusernamex:', $scope.username);
        data = data.replace(':xtotalAmountx:', $scope.totalAmount);
        data = data.replace(':xbookingIDx:', $scope.bookingID);
        data = data.replace(':xusermobilex:', $scope.usermobile);

        data='appId=1&offerCode=NULL&buyer_name=Ankur&amount=5000&requestId=16031311304700047&purpose=purpose&phone=9910188803&send_email=false';

        var res =  $http.post('http://dhiya.16mb.com/eg-api/customer/payment', data, config);
            res.success(function(data, status, headers, config) {
                console.log(data.url);
                window.location.replace(data.url);
            });

            res.error(function(data, status, headers, config) {
                $scope.userMessage = "Something went wrong please try again later" ;
            });

    }


    // For query dialog

    $scope.queryType = ["Booking Related", "Payment Related", "Other"];

    $scope.querySubmit = function(){

        token = $base64.encode($scope.email+':'+$scope.password);

        var config = {
                headers : {
                    'Authorization' : 'Basic ' + token,
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }

        data = 'requestId=16031222150100040&message=:xquerymessagex:&appId=2&type=:xquerytypex:';
        
        data = data.replace(':xquerymessagex:', $scope.queryMessage);
        data = data.replace(':xquerytypex:', $scope.querytypex);

        var res =  $http.post('http://dhiya.16mb.com/eg-api/customer/query', data, config);
            res.success(function(data, status, headers, config) {
                $scope.userMessage = data.usermessage;                    
                console.log(data);
                $timeout(function(){
                    $scope.cancel();
                },2000);
            });

            res.error(function(data, status, headers, config) {
                $scope.userMessage = "Something went wrong please try again later" ;
            });


    }


    // this bracket is damm confusing naa? its completes dialog controller
    }


    //Account verify API call

    $scope.accountVerifyAPI = function(){

    }

    // To verify account

    $scope.accountVerify = function(){
        $http({
        url: "http://dhiya.16mb.com/eg-api/cities", 
        method : 'get',
        headers : {},
        })
        .success(function(data, status, headers, config){
            $scope.accountVerifyStatus = data;
        })
        .error(function(data, status, headers, config){
            // console.log(data);
        })
    }


    //Logout

    logOut = function(){
        $('.nav-wrapper').html('<div id="nav-icon"> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> </div> <a href="#/" class="brand-logo center"><img src="./media/images/logo.png" style="width: 90px; margin: 5px;"></a> <ul class="right"> <li><a href="#/">Home</a></li> <li><a onclick="signupBTNx()" flex="100" flex-gt-md="auto">' + $scope.LoginEle[0] + '</a></li> <li><a onclick="loginBTNx()" flex="100" flex-gt-md="auto">' + $scope.LoginEle[1] + '</a></li> </ul> <script> $("#nav-icon").click(function(){ $(this).toggleClass("open"); $(".leftSubMenu").toggleClass("leftsubmenupos"); $(".leftoverlay").toggleClass("leftmenubackdrop"); $("nav").toggleClass("navbarline"); }); $(".leftmenubackdrop").click(function(){$("#nav-icon").removeClass("open"); $(".leftSubMenu").removeClass("leftsubmenupos"); $(".leftoverlay").removeClass("leftmenubackdrop"); $("nav").removeClass("navbarline");}) </script>');
        $cookies.put('loginStatus', 'false','0');
    }

    //  var expireDate = new Date();
    // expireDate.setDate(expireDate.getDate() + 1);
    // console.log(expireDate);

/*****************************************************************************
******************************************************************************/
    // $scope.viewtempbook = function(){
    //     $location.path('/tempbooking');
    //     $scope.tempBookingList = JSON.parse(sessionStorage.getItem('tempuserbookingdata'));
    //     console.log($scope.tempBookingList);
    // }

    $scope.Eventlist = [];
    Eventlistdata = {"events": []};

    $scope.eventAdd = function () {

        dt1 = sessionStorage.getItem('day');
        dt2 = sessionStorage.getItem('month');
        dt3 = sessionStorage.getItem('year');
        
        eventData = {    
                     "date" : dt3 + "-" + dt2 +  "-" + dt1,
                     "city" : $scope.eventCity,
                     "venueDetails" : $scope.eventAddress,
                     "eventType" : $scope.eventName,
                     "noOfphotographers" : $scope.eventNumberOfPhotographer,
                     "eventTime" : $scope.eventTime+":"+$scope.eventTimeMinute + " " + $scope.eventTimeAMPM,
                     "duration" : $scope.eventHours,
                     "requirements" : $scope.eventRequirment,
                     "prof" : $scope.eventSelectedType, 
                    };

        calendarData = {
            "month": dt2,
            "day": dt1,
            "year": dt3,
            "title": $scope.eventType,
            "description": "calendar JSON"
        }

        // Eventlistdata.events.push(calendarData);        
        console.log("Before");        
        console.log($scope.Eventlist);        
        
        $scope.Eventlist.push(eventData);

        $cookies.put('tempuserbookingdata',JSON.stringify($scope.Eventlist));
        console.log("after");        
        console.log($scope.Eventlist);        

        //some function to update calendar... pending
/*
        var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }


        var res =  $http.post('./calendar/data/events.json', data, config);
            res.success(function(data, status, headers, config) {
                console.log("done");
            });

            res.error(function(data, status, headers, config) {
                console.log("failed");
            });

        //refreshing iframe to update calendar
        document.getElementById(FrameID).contentDocument.location.reload(true);
*/

        $scope.eventName = "";
        // $scope.eventCity = "";
        // $scope.eventSelectedType = ""; 
        $scope.eventNumberOfPhotographer = "";
        $scope.eventTime = "";
        $scope.eventTimeMinute = "";
        $scope.eventTimeAMPM = "";
        $scope.eventHours = "";
        $scope.eventAddress = "";
        $scope.eventRequirment = "";
    }

    
    $scope.editTempEventList = function(i){
        $scope.Eventlist = JSON.parse($cookies.get('tempuserbookingdata'));
        x = $scope.Eventlist[i];
        console.log($scope.Eventlist);
        console.log(x.eventTime);
        console.log(parseInt(x.eventTime));
        // T = event.

        // $scope.eventTime = x.eventTime;
        // $scope.eventTimeMinute = x.eventTimeMinute;
        // $scope.eventTimeAMPM = x.eventTimeAMPM;
        $scope.eventName = x.eventType;
        $scope.eventCity = x.city;
        $scope.eventSelectedType = x.prof; 
        $scope.eventNumberOfPhotographer = x.noOfphotographers;
        $scope.eventHours = x.duration;
        $scope.eventAddress = x.venueDetails;
        $scope.eventRequirment = x.requirements;   
        console.log($scope.eventName);
        $location.path('/event');
        random();
    }


    random = function(){
        console.log($scope.eventName);
    }

    $scope.removeTempEventList = function(i){
        console.log(i);
        temp1 = JSON.parse($cookies.get('tempuserbookingdata'));
        temp2 = [];

        for(var temp3 = 0; temp3 < i; temp3++){
            temp2.push(temp1[temp3]);
        }
        temp3++;
        for(; temp3 < temp1.length; temp3++){
            temp2.push(temp1[temp3]);
        }

        $scope.x = temp2;

        console.log(temp2);
        $cookies.put('tempuserbookingdata', JSON.stringify(temp2));   
    }

    $scope.eventsVerified = function(ev){
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'js/app/verifydia.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true
        })    
    }


    //Everything For quries 

    Querylist = [];
    if ($location.path() == '/myqueries'){
        $http({
            url: "http://dhiya.16mb.com/eg-api/customer/messages", 
            method : 'get',
            headers : {
                    'Authorization' : 'Basic ' + token,
                },
        })
        .success(function(data, status, headers, config){
            Querylist = data.query;

            // Build message and response dictonary for each queryID

            Queryid = [];
            Requestid = [];
            $scope.Bigdata = [];
            for(i in Querylist){
                Queryid.push(
                    {   
                        "requestId" : Querylist[i].requestId,
                        "queryID" : Querylist[i].queryId,
                        "message" : Querylist[i].message,
                        "response" : Querylist[i].response,
                        "type" : Querylist[i].type,
                    }
                )
            }

            for(i in Querylist){
                if(Requestid.indexOf(Querylist[i].requestId) == -1){
                    Requestid.push(Querylist[i].requestId);
                }
            }

            temp = [];

            //creating array for RequestID

            for(i in Requestid){
                for (j in Queryid){
                    if(Requestid[i] == Queryid[j].requestId){
                        temp.push(Queryid[j]);
                    }
                }
                $scope.Bigdata.push(temp);
                temp = [];
            }
            
            // Intiallizing query to 0

                $scope.BigdataTemp = $scope.Bigdata[0];      
                $scope.requestNumber = 0;
                $scope.queryNumber = 0;
    
            //Intiallizing message and response
                $scope.BigdataMessageC = $scope.Bigdata[0][0].message;
                $scope.BigdataMessageP = $scope.Bigdata[0][0].response;


            //function to change query

            $scope.setBigdataTemp = function(i){
                $scope.BigdataTemp = $scope.Bigdata[i];
                $scope.requestNumber = i;
                $scope.queryNumber = 0;
                $scope.BigdataMessageC = $scope.Bigdata[i][0].message;
                $scope.BigdataMessageP = $scope.Bigdata[i][0].response;
            }

            //function to chnage message and response

            $scope.setBigdataMessage = function(i){
                $scope.BigdataMessageC = $scope.Bigdata[$scope.requestNumber][i].message;
                $scope.BigdataMessageP = $scope.Bigdata[$scope.requestNumber][i].response;    
                $scope.queryNumber = i;
            }



        })
        .error(function(data, status, headers, config){
        })              
  
    }

    //writing a new query... dialog

        $scope.writeQuery = function(ev){
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'js/app/writeQuery.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true
        })    
    }


    //For my booking page

    //lets collect data from server

    $scope.BigEventList = [];    

    mybookingfunction = function(){
        $http({
            url: "http://dhiya.16mb.com/eg-api/customer/requests", 
            method : 'get',
            headers : {
                    'Authorization' : 'Basic ' + token,
                },
        })
        .success(function(data, status, headers, config){
            $scope.BigEventList = data.requests;
            $scope.myBookingPending = [];
            $scope.myBookingUpcoming = [];
            $scope.myBookingPendingdata = [];

            // Build message and response dictonary for each queryID

            for(i in $scope.BigEventList){
                if($scope.BigEventList[i].status == "Quotation Pending"){
                    $scope.myBookingPending.push($scope.BigEventList[i]);
                }

                if($scope.BigEventList[i].status == "status for upcoming"){
                    $scope.myBookingUpcoming.push($scope.BigEventList[i]);
                }
            }


            $scope.myBookingPendingdata = $scope.myBookingPending[0].data;
            console.log($scope.myBookingPendingdata);

        })
        .error(function(data, status, headers, config){
        })             
  
    }    

    // To hide Cancel button if event is already canelled...FAncy stuff

    $scope.eventcanelbuttoncheck = function(i){
        if(i == "Cancelled"){
            return true;
        }
    }

    //To cancel an event
    $scope.cancelEvent = function(i){
        console.log(i);
        mybookingfunction();
    }

    if ($location.path() == '/mybooking'){
        mybookingfunction();
    }


    if($location.path() == '/event'){
        $scope.Eventlist = JSON.parse($cookies.get('tempuserbookingdata'));
    }


}]);


