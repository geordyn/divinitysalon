angular.module('app')
.service('calendarService', function($http){



/////team and clients////
  this.getTeam = function () {
    return $http({
      method: 'GET',
      url: '/api/team'
    }).then(function (res) {
      return res.data;
    });
  };


//////Calendar//////
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

this.makeAppt = function(appointment) {
  return $http({
      method: 'POST',
      url: '/api/aptAdmin',
      data: {
        title: appointment.client.fullName,
        start: appointment.start,
        end: appointment.end,
        client: appointment.client._id,
        teamMember: appointment.member._id,
        description: appointment.services + ' ' + appointment.description
      }
  }).then(function (res) {
      console.log('new appointment posted!');
  });
};

this.updateAppt = function(appointment) {
  return $http({
      method: 'PUT',
      url: '/api/aptAdmin/' + appointment._id,
      data: appointment
  }).then(function (res) {
      console.log('new appointment posted!');
  });
};


this.deleteAppt = function(eventId) {
  return $http({
      method: 'DELETE',
      url: '/api/aptAdmin/' + eventId
  }).then(function (res) {
      console.log('Deleted!');
  });

};

////Clients/////
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






















});
