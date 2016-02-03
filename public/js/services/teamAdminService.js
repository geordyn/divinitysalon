angular.module('app')
.service('teamAdminService', function($http){

  this.getTeam = function () {
    return $http({
      method: 'GET',
      url: '/api/team'
    }).then(function (res) {
      return res.data;
    });
  };

  this.addMember = function (newMember) {
    return $http({
      method: 'POST',
      url: '/api/teamAdmin',
      data: {
        img: newMember.img,
        name: newMember.name,
        bio: newMember.bio
      }
    });
  };

  this.deleteMember = function (id) {
    return $http({
      method: 'DELETE',
      url: '/api/teamAdmin/' + id
    });
  };

  this.editMember = function (editMember) {
    return $http({
      method: 'PUT',
      url: '/api/teamAdmin/' + id,
      data: {
        img: editMember.img,
        name: editMember.name,
        bio: editMember.bio
      }
    });
  };





});
