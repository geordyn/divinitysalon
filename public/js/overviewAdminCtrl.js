angular.module('app')
  .controller('overviewAdminCtrl', (function($scope, calendarService, clientService, teamAdminService) {



/////D3 GRAPH DATA AND SETTINGS
var data = [];






/////GETTING DATA

$scope.getMemberApts = function(memberId) {
  calendarService.getMemberApts(memberId)
    .then(function(res) {
      console.log("this is res",res);

      $scope.memberNum = res.length;
      console.log("memberNum",$scope.memberNum);
      data.push($scope.memberNum);
      console.log("this is data",data);
      $scope.getData();
    });
};


$scope.getTeam = function() {
  teamAdminService.getTeam()
    .then(function(res) {
      $scope.team = res;

      for(var i = 0; i < $scope.team.length; i++){
        // console.log("team id",$scope.team[i]._id);
        $scope.getMemberApts($scope.team[i]._id);

      }

    });
};
$scope.getTeam();


$scope.getAppointments = function() {
  calendarService.getAppointments()
    .then(function(res) {
      console.log(res);
      $scope.events = res;
      // console.log(events);
    });
};
$scope.getAppointments();



// $scope.getMemberApts('56b27aca2c5a9aac22f3c6c0');
// $scope.getMemberApts('56b27b172c5a9aac22f3c6c1');





$scope.getData = function() {
d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return d * 10 + "px"; })
    .text(function(d) { return d; });
};





  }));
