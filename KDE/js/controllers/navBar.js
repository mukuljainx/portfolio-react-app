app.directive('navBar', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'views/navbar.html' 
  }; 
});
