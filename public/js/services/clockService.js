angular.module('app')
.service('clockService', function($http){

  this.getClock = function () {
    return $http({
      method: 'GET',
      url: '/api/clock'
    }).then(function (res) {
      return res.data;
    });
  };

this.getEmployeeClocks = function(id) {
  return $http({
    method: 'GET',
    url: '/api/clock/' + id
  }).then(function (res) {
    return res.data;
  });
};

  this.clockIn = function (date, member) {
    return $http({
      method: 'POST',
      url: '/api/clockIn',
      data: {
        employee: member._id,
        name: member.name,
        timeIn: date,
        timeOut: "none",
        duration: "none",
      }
    }).then( function(res){
      console.log("clock service res, front end ",res);

      return res.data;

    });
  };


  this.clockOut = function ( clockOutId, timeOut, duration ) {
    return $http({
      method: 'PUT',
      url: '/api/clockOut/' + clockOutId,
      data: {
        timeOut: timeOut,
        duration: duration
      }
    }).then(function(res){
      return res.data;
    });
  };

  this.deleteMember = function (id) {
    return $http({
      method: 'DELETE',
      url: '/api/teamAdmin/' + id
    });
  };

  this.removeAll = function (id) {
    return $http({
      method: 'DELETE',
      url: '/api/DELETEALL'
    });
  };



});
