angular.module('app')
.service('calendarService', function($http){

  this.getTeam = function () {
    return $http({
      method: 'GET',
      url: '/api/team'
    }).then(function (res) {
      return res.data;
    });
  };

this.getAppointments = function () {
  return $http({
      method: 'GET',
      url: '/api/aptAdmin'
  }).then(function (res) {
      return res.data;
  });
};

  this.getMemberApts = function (memberId) {
    return $http({
      method: 'GET',
      url: '/api/getMemberApts/' + memberId
    }).then(function (res){
      return res.data;
    });

};

  this.getClients = function () {
      return $http({
          method: 'GET',
          url: '/api/clientAdmin'
      }).then(function (res) {
          return res.data;
      });
  };



  this.addClient = function (newClient) {
      return $http({
          method: 'POST',
          url: '/api/clientAdmin',
          data: {
            firstName: newClient.name1,
            lastName: newClient.name2,
            phone: newClient.phone,
            email: newClient.email
          }
      }).then(function (res) {
          console.log('new client posted!');
      });
  };

  // this.deleteClient = function (id) {
  //   return $http({
  //     method: 'DELETE',
  //     url: '/api/clientAdmin/' + id
  //   });
  //
  //
  // };






















});
