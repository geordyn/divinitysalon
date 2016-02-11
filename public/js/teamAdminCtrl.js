angular.module('app')
  .controller('teamAdminCtrl', function($scope, teamAdminService, clockService) {

    $scope.getTeam = function() {
      teamAdminService.getTeam()
        .then(function(res) {
          $scope.team = res;
        });
    };
    $scope.getTeam();


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



    $scope.clockIn = function(member) {
      var d = new Date();
      var date = d.toISOString();
      clockService.clockIn(date, member)
        .then(function(res) {
          console.log(res);
          swal("You've Clocked In!", "clock in time: " + date, "success");
          $scope.getClock();
        });
    };

    $scope.putTimeOut = function(clockId, timeOut, duration) {
      console.log("clockId:"+clockId, "timeout:"+timeOut, "duration"+ duration);
      clockService.clockOut(clockId, timeOut, duration)
      .then(function(res) {
        console.log(res);
        $scope.getClock();
        swal("You've Clocked Out!", "clock Out time: " + timeOut, "success");
      });
    };

    $scope.clockOut = function(member) {
      console.log($scope.clocks);
      var clocks = $scope.clocks;
      console.log(member._id);
      var memberObj = member;
      var date = new Date();
      for (var i = 0; i < clocks.length; i++) {
        if (clocks[i].employee === member._id) {
          console.log("employee id :",clocks[i].employee);
          var memberClocks = clocks[i];
          var then = clocks[i].timeIn;
          console.log("member clocks :",memberClocks);
          if (memberClocks.timeOut === "none") {
            console.log(memberClocks.timeOut);
            var clockId = memberClocks._id;
            console.log("memberClocks timeout :", memberClocks.timeOut);
            console.log("memberClocks id :", memberClocks._id);

            var duration = moment.utc(moment(date, "DD/MM/YYYY HH:mm:ss").diff(moment(then, "DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss");
            var timeOut = date.toISOString();
            console.log("in clockout:" , clockId, timeOut, duration);
            $scope.putTimeOut(clockId, timeOut, duration);
            // console.log("sending to backend to update timeOut");
          } else if (memberClocks.timeOut !== "none"){
             swal("Unable to Clock Out", "No existing Clock-In time", "error");
          }
        }
      }
    };







  });
