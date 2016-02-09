angular.module('app')
.controller('teamAdminCtrl', function($scope, teamAdminService){

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


});
