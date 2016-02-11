angular.module('app')
.controller('teamAdminCtrl', function($scope, teamAdminService, clockService){

  $scope.getTeam = function() {
    teamAdminService.getTeam()
    .then(function (res) {
      $scope.team = res;
    });
  };
  $scope.getTeam();


$scope.addMember = function(newMember) {
  teamAdminService.addMember(newMember)
  .then( function(res){
    alert('New Team Member Added!');
    $scope.getTeam();
    $scope.newMember = null;
  });
};

$scope.deleteMember = function(id) {
  teamAdminService.deleteMember(id)
  .then( function(res){
    alert('Team Member Deleted');
    $scope.getTeam();
  });
};

$scope.editMember = function(editMember) {
  teamAdminService.editMember(editMember)
  .then( function(res){
    $scope.getTeam();
  });
};


$scope.clockIn = function(member) {
  var d = new Date();
  var date = d.toISOString();
  clockService.clockIn(date, member)
  .then( function(res){
    console.log(res);
    //save objectid for last clock in to update clock out time
    $scope.lastClockIn = res;
    swal("You've Clocked In!", "clock in time: " + date, "success");
  });
};

$scope.clockOut = function() {
  var d = new Date();
  var date = d.toISOString();
  swal("You've Clocked Out!", "clock out time: " + date, "success");
};





});
