angular.module('app')
  .controller('teamAdminCtrl', function($scope, teamAdminService, clockService) {



    $scope.addMember = function(newMember) {
      teamAdminService.addMember(newMember)
        .then(function(res) {
          alert('New Team Member Added!');
          $scope.getTeam();
          $scope.newMember = null;
        });
    };

    $scope.deleteMember = function(id) {
      teamAdminService.deleteMember(id)
        .then(function(res) {
          alert('Team Member Deleted');
          $scope.getTeam();
        });
    };

    $scope.editMember = function(editMember) {
      teamAdminService.editMember(editMember)
        .then(function(res) {
          $scope.getTeam();
        });
    };

    ////clock in/clock out////




    $scope.getClock = function() { //gets all clocks / 'time cards'
      clockService.getClock()
        .then(function(res) {
          $scope.clocks = res;
          console.log("var clocks in getClock :", $scope.clocks);
        });
    };
    $scope.getClock();

    $scope.toHours = function(memId, memberClocks) {
      var clox = memberClocks;
      console.log("IN HOURS FUNCTION", clox);
      for (var i = 0; i < clox.length; i++) {
        if (clox[i].duration !== "none") {
          var dur = clox[i].duration;
          console.log("dur", dur);
          var tonums = dur.split(":").map(Number);
          hrs.push(tonums[0]);
          console.log("HRS ARRAY", hrs);
          mins.push(tonums[1]);
          console.log("MINS ARRAY", mins);
          var hours = hrs.reduce(function(a, b) {
            return a + b;
          });
          console.log("THIS IS HOURS", hours);
        }
      }

    };




    $scope.putTimeOut = function(clockOutId, timeOut) {
      console.log("CLOCKOUT ID", clockOutId);
      // var out = moment(timeOut).format('MM/DD/YYYY HH:mm:ss');
      console.log("clockOutId:" + clockOutId, "timeOut", timeOut);
      clockService.clockOut(clockOutId, timeOut)
        .then(function(res) {
          $scope.getClock();

          // $scope.toHours(memId);

          swal("You've Clocked Out!", "clock Out time: " + timeOut, "success");

          //call function that loops through employee durations, and totals them

        });
    };



    $scope.getTeam = function() {
      teamAdminService.getTeam()
        .then(function(res) {
          $scope.team = res;
          for (i = 0; i < $scope.team.length; i++) {
            console.log("team id", $scope.team[i]._id);
            // clockService.getEmployeeClocks($scope.team[i]._id);
          }

        });
    };
    $scope.getTeam();



    $scope.clockIn = function(member) {
      var date = moment().format('YYYY-MM-DDTHH:mm:ssZ');
      var display = moment().format('MMMM Do YYYY, h:mm:ss a');
      console.log(display);
      console.log(date);
      clockService.clockIn(date, member)
        .then(function(res) {
          console.log(res);
          swal("You've Clocked In!", "at" + display, "success");
          $scope.getClock();
        });
    };




    $scope.clockOut = function(member) {
      clockService.getEmployeeClocks(member._id)
        .then(function(res) {
          $scope.indClocks = res;
          var memberClocks = $scope.indClocks;
          // console.log("memberClocks objects", $scope.indClocks);

          for (var i = 0; i < memberClocks.length; i++) {

            if (memberClocks[i].timeOut === "none") {

              var clockOutId = memberClocks[i]._id;
              var then = memberClocks[i].timeIn;
              var timeOut = moment().format('YYYY-MM-DDTHH:mm:ssZ');

              $scope.putTimeOut(clockOutId, timeOut);
            } else if (memberClocks.timeOut !== "none") {
              swal("Unable to Clock Out", "No existing Clock-In time", "error");
            }
          }
        });





    };


    $scope.removeAll = function() {
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
      }, function() {
        swal("Deleted!", "Your imaginary file has been deleted.", "success");
        clockService.removeAll()
          .then(function(res) {
            // console.log('timecards reset');
          });
      });
    };






  });
