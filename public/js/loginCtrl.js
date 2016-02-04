angular.module('app')
.controller('loginCtrl', function($scope, $state, loginService){


    $scope.loginUser = function(username, password) {
      loginService.loginUser(username, password)
      .then(function(res){
      });
    };



});
