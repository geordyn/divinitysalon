angular.module('app')
  .controller('overviewAdminCtrl', (function($scope, calendarService, clientService, teamAdminService, contactService) {



/////D3 GRAPH DATA AND SETTINGS
var data = [];






/////GETTING DATA
$scope.getMemberFeedback = function(memberId) {
  contactService.getMemberFeedback(memberId)
  .then(function(res){
    $scope.reviewNum = res;
    console.log("reviewNum Array", $scope.reviewNum);
    // var total = 0;
    // $.each(arr,function() {
    // total += this;
  });
};


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
        console.log("team id",$scope.team[i]._id);
        $scope.getMemberApts($scope.team[i]._id);
      }
      for ( i = 0; i < $scope.team.length; i++) {
        // console.log("team id",$scope.team[i]._id);
        $scope.getMemberFeedback($scope.team[i]._id);
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





$scope.getData = function() {
d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("height", function(d) { return 0 + "px"; })
    .text(function(d) { return d; });

d3.select(".chart")
      .selectAll("div")
        .data(data)
        .transition()
        .duration(1000)
        .style("height", function(d) { return d*50 + "px"; });

};





  }));
