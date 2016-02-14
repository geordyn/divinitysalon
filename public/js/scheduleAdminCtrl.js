angular.module('app')
  .controller('scheduleAdminCtrl', (function($scope, calendarService, clientService, teamAdminService) {


    $scope.times = [{
      display: '7:00 AM',
      value: {
        hours: 7,
        minutes: 0
      }
    }, {
      display: '7:30 AM',
      value: {
        hours: 7,
        minutes: 30
      }
    }, {
      display: '8:00 AM',
      value: '08:00:00.00Z'
    }, {
      display: '8:30 AM',
      value: '08:30:00.00Z'
    }, {
      display: '9:00 AM',
      value: '09:00:00.00Z'
    }, {
      display: '9:30 AM',
      value: '09:30:00.00Z'
    }, {
      display: '10:00 AM',
      value: '10:00:00.00Z'
    }, {
      display: '10:30 AM',
      value: '10:30:00.00Z'
    }, {
      display: '11:00 AM',
      value: '11:00:00.00Z'
    }, {
      display: '11:30 AM',
      value: '11:30:00.00Z'
    }, {
      display: '12:00 PM',
      value: '12:00:00.00Z'
    }, {
      display: '12:30 PM',
      value: '12:30:00.00Z'
    }, {
      display: '1:00 PM',
      value: '13:00:00.00Z'
    }, {
      display: '1:30 PM',
      value: '13:30:00.00Z'
    }, {
      display: '2:00 PM',
      value: '14:00:00.00Z'
    }, {
      display: '2:30 PM',
      value: '14:30:00.00Z'
    }, {
      display: '3:00 PM',
      value: '15:00:00.00Z'
    }, {
      display: '3:30 PM',
      value: '15:30:00.00Z'
    }, {
      display: '4:00 PM',
      value: '16:00:00.00Z'
    }, {
      display: '4:30 PM',
      value: '16:30:00.00Z'
    }, {
      display: '5:00 PM',
      value: '17:00:00.00Z'
    }, {
      display: '5:30 PM',
      value: '17:30:00.00Z'
    }, {
      display: '6:00 PM',
      value: '18:00:00.00Z'
    }, {
      display: '6:30 PM',
      value: '18:30:00.00Z'
    }, {
      display: '7:00 PM',
      value: '19:00:00.00Z'
    }];






    $scope.getTeam = function() {
      teamAdminService.getTeam()
        .then(function(res) {
          $scope.team = res;
        });
    };
    $scope.getTeam();

    $scope.getClients = function() {
      clientService.getClients()
        .then(function(res) {
          $scope.clients = res;
        });
    };
    $scope.getClients();

    $scope.getAppointments = function() {
      calendarService.getAppointments()
        .then(function(res) {
          console.log(res);
          var events = res;
          $scope.events = res;
          // console.log(events);
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
          $scope.events = res;
          // console.log(events);
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
        droppable: true,
        theme: true,
        eventLimit: false, // allow "more" link when too many events
        eventDrop: function(event, delta, revertFunc) {
          console.log(event);
          var eventUpdate = {
            _id:event._id,
            start:event.start,
            end:event.end
          };
          calendarService.updateAppt(eventUpdate);
        },
        eventResize: function(event, delta, revertFunc){
          console.log(event);
          var eventUpdate = {
            _id:event._id,
            start:event.start.format(),
            end:event.end.format()
          };
          calendarService.updateAppt(eventUpdate);
        },
        eventMouseover: function(calEvent, jsEvent) {
          var tooltip = '<div class="tooltipevent" style=" padding: 1%; max-width: 100px; background:#3b3a36; color:#e9ece5; font-size:0.6em; position:absolute; z-index:10001;">' + calEvent.description + '</div>';
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
          if (events.teamMember === '56be643210cf27a828d26e99') {
            //Geraldine Cobb
            element.css('background-color', '#edd9c0');
            element.css('border', '#edd9c0');

          }
          if (events.teamMember === '56be645810cf27a828d26e9a') {
            //Jacques Cohen
            element.css('background-color', '#c9d8c5');
            element.css('border', '#c9d8c5');

          }
          if (events.teamMember === '56be649810cf27a828d26e9d') {
            //Elizabeth Woodworth
            element.css('background-color', '#a8b6bf');
            element.css('border', '#a8b6bf');

          }
        },

        // DELETE EVENT
        eventClick: function(event, element) {

          if (confirm("Are you sure you want to DELETE this appointment?")) {
            console.log('event :::::', event);
                     calendarService.deleteAppt(event._id)
                     .then( function(res){
                       $scope.getAppointments();
                     });
                 }
          $('#calendar').fullCalendar('updateEvent', event);
        },
        events: []
      });
    });




    $scope.makeAppt = function(newAppt) {

      var appointment = newAppt;
      $scope.newAppt = null;

      appointment.date = moment(appointment.date).format('YYYY-MM-DD');
      appointment.start = moment(appointment.date + 'T' + appointment.startTime);
      appointment.end = moment(appointment.date + 'T' + appointment.endTime);

      console.log(appointment.start);

      calendarService.makeAppt(appointment)
        .then(function(res) {
          $scope.getAppointments();

        });
    };









  }));
