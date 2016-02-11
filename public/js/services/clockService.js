angular.module('app')
.service('clockService', function($http){


  this.clockIn = function (date, member) {
    return $http({
      method: 'POST',
      url: '/api/clockIn',
      data: {
        employee: member._id,
        name: member.name,
        type: {
          in: true,
          out: false
          },
        timeIn: date,
      }
    }).then( function(res){
      console.log("clock service res, front end ",res);

      return res.data;

    });
  };


  this.clockOut = function (clockOut) {
    return $http({
      method: 'PUT',
      url: '/api/clockOut/' + id,
      data: {
        img: editMember.img,
        name: editMember.name,
        bio: editMember.bio
      }
    });
  };

  this.deleteMember = function (id) {
    return $http({
      method: 'DELETE',
      url: '/api/teamAdmin/' + id
    });
  };



  this.getTeam = function () {
    return $http({
      method: 'GET',
      url: '/api/team'
    }).then(function (res) {
      return res.data;
    });
  };

});
