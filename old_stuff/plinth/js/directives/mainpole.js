app.directive('mainPole', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/mainpole.html' 
  }; 
});
