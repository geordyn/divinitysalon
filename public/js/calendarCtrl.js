angular.module('app').controller('calendarCtrl', function($scope){


  $(function() { // document ready

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
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
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

        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-02-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2016-02-02',
          end: '2016-02-13'
        },
        {
          title: 'Meeting',
          start: '2016-02-02T10:30:00',
          end: '2016-02-02T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2016-02-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2016-02-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2016-02-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2016-02-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2016-02-13T07:00:00',
          end: '2016-02-13T11:00:00',
          description: 'hello'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2016-02-28'
        }
      ]
    });

  });



});
