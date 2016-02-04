angular.module('app')
  .controller('appointmentCtrl', (function($scope, appointmentService) {


    $scope.times = [{
      display: '7:00 AM',
      value: '07:00:00'
    }, {
      display: '7:30 AM',
      value: '07:30:00'
    }, {
      display: '8:00 AM',
      value: '08:00:00'
    }, {
      display: '8:30 AM',
      value: '08:30:00'
    }, {
      display: '9:00 AM',
      value: '09:00:00'
    }, {
      display: '9:30 AM',
      value: '09:30:00'
    }, {
      display: '10:00 AM',
      value: '10:00:00'
    }, {
      display: '10:30 AM',
      value: '10:30:00'
    }, {
      display: '11:00 AM',
      value: '11:00:00'
    }, {
      display: '11:30 AM',
      value: '11:30:00'
    }, {
      display: '12:00 PM',
      value: '12:00:00'
    }, {
      display: '12:30 PM',
      value: '12:30:00'
    }, {
      display: '1:00 PM',
      value: '13:00:00'
    }, {
      display: '1:30 PM',
      value: '13:30:00'
    }, {
      display: '2:00 PM',
      value: '14:00:00'
    }, {
      display: '2:30 PM',
      value: '14:30:00'
    }, {
      display: '3:00 PM',
      value: '15:00:00'
    }, {
      display: '3:30 PM',
      value: '15:30:00'
    }, {
      display: '4:00 PM',
      value: '16:00:00'
    }, {
      display: '4:30 PM',
      value: '16:30:00'
    }, {
      display: '5:00 PM',
      value: '17:00:00'
    }, {
      display: '5:30 PM',
      value: '17:30:00'
    }, {
      display: '6:00 PM',
      value: '18:00:00'
    }, {
      display: '6:30 PM',
      value: '18:30:00'
    }, {
      display: '7:00 PM',
      value: '19:00:00'
    }];


    $scope.submitAppt = function(appointment, date, time) {
      // appointmentService.addAppointmentById(appointment);
      appointment.start = new Date(date + ', ' + time);
      appointment.end = moment(appointment.start).add(appointment.end, 'm');
      appointmentService.makeAppointment(appointment)
      .then( function (res) {
        getAppts();
      });
    };

}));
