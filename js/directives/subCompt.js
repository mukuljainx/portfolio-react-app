app.directive('subCompt', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/subcompt.html' 
  }; 
});
