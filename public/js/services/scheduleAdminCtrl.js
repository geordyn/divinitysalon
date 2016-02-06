angular.module('app')
  .controller('scheduleAdminCtrl', (function($scope, calendarService) {


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


      var events = [];

      $scope.getTeam = function() {
        calendarService.getTeam()
          .then(function(res) {
            $scope.team = res;
          });
      };
      $scope.getTeam();



      $scope.getAppointments = function() {
        calendarService.getAppointments()
          .then(function(res) {
            console.log(res);
            var events = res;
            console.log(events);
            $("#calendar").fullCalendar('removeEvents');
            $("#calendar").fullCalendar('addEventSource', events);
            $("#calendar").fullCalendar('rerenderEvents');
          });
      };

      $scope.getMemberApts = function(memberId) {
        calendarService.getMemberApts(memberId)
          .then(function(res) {
            console.log(res);
            var events = res;
            console.log(events);
            $("#calendar").fullCalendar('removeEvents');
            $("#calendar").fullCalendar('addEventSource', events);
            $("#calendar").fullCalendar('rerenderEvents');
          });
      };



      $(function() { // document ready

        $scope.getAppointments();

        $('#calendar').fullCalendar({
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
          },
          defaultDate: Date.now(),
          // displayEventEnd: true,
          selectable: true,
          nowIndicator: true,
          editable: true,
          theme: true,
          eventLimit: true, // allow "more" link when too many events
          eventMouseover: function(calEvent, jsEvent) {
            var tooltip = '<div class="tooltipevent" style=" padding: 1%; max-width: 100px; background:#fff7cd; font-size:0.6em; position:absolute; z-index:10001;">' + calEvent.description + '</div>';
            $("body").append(tooltip);
            $(this).mouseover(function(e) {
              $(this).css('z-index', 10000);
              $('.tooltipevent').fadeIn('500');
              $('.tooltipevent').fadeTo('10', 1.9);
            }).mousemove(function(e) {
              $('.tooltipevent').css('top', e.pageY + 10);
              $('.tooltipevent').css('left', e.pageX + 20);
            });
          },

          eventMouseout: function(calEvent, jsEvent) {
            $(this).css('z-index', 8);
            $('.tooltipevent').remove();
          },
          eventRender: function(events, element, view) {
            console.log(events.teamMember);
            if (events.teamMember === '56afd06c332d6aec1e06df67') {
              //Angie Rosinski//
              console.log('if so');
              element.css('background-color', 'rgb(228, 54, 126)');
              element.css('border', 'rgb(228, 54, 126)');

            }
            if (events.teamMember === '56afd0dc332d6aec1e06df68') {
              //Ariana Thiem//
              console.log('if so');
              element.css('background-color', 'rgb(67, 216, 231)');
              element.css('border', 'rgb(67, 216, 231)');

            }
          },
          events: [{
            title: 'HEY',
            start: '2016-02-01'
          }, {
            title: 'Long Event',
            start: '2016-02-07',
            end: '2016-02-10'
          }, {
            id: 999,
            title: 'Repeating Event',
            start: '2016-02-09T16:00:00',

          }]
        });



      });








    $scope.submitAppt = function(appointment, date, time) {
      // appointmentService.addAppointmentById(appointment);
      appointment.start = new Date(date + ', ' + time);
      appointment.end = moment(appointment.start).add(appointment.end, 'm');
      appointmentService.makeAppointment(appointment)
        .then(function(res) {
          getAppts();
        });
    };

  }));
