angular.module('app').controller('calendarCtrl', function($scope, appointmentService) {

  var events = [];

  $scope.getAppointments = function() {
    appointmentService.getAppointments()
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
      eventRender: function( events, element, view ) {
        console.log(events.teamMember);
        if(events.teamMember === '56afd06c332d6aec1e06df67') {
          //Angie Rosinski//
          console.log('if so');
          element.css('background-color', 'rgb(228, 54, 126)');
          element.css('border', 'rgb(228, 54, 126)');

        }
        if(events.teamMember === '56afd0dc332d6aec1e06df68') {
          //Ariana Thiem//
          console.log('if so');
          element.css('background-color', 'rgb(67, 216, 231)');
          element.css('border', 'rgb(67, 216, 231)');

        }
      },
      events:
          [
            {
              title: 'HEY',
              start: '2016-02-01'
            },
          {
            title: 'Long Event',
            start: '2016-02-07',
            end: '2016-02-10'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2016-02-09T16:00:00',

          }
        ]
    });



  });





});
