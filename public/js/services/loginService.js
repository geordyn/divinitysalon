angular.module('app')
.service('loginService', function($http, $state){

  this.loginUser = function(username, password) {
    return $http({
        method: 'POST',
        url: '/api/login',
        data: {
          username: username,
          password: password
        }
    }).then(function (res) {
      console.log(res);
        if( res.status === 200 ) {
          $state.go('scheduleAdmin');
        } else {
          alert('Login Failed');
        }
    }, function(err){alert('Login Failed');});
  };





});
