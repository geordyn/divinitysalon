angular.module('app')
.controller('loginCtrl', function($scope, $state, loginService){


      $scope.loginUser = function(username, password) {
        loginService.loginUser(username, password)
        .then(function(res){
          $state.go('overviewAdmin');
        });
      };

      $scope.logout = function() {
        loginService.logout()
        .then( function(res){
          $scope.logoutButton = false;
        });
      };



});
