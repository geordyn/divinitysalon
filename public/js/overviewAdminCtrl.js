angular.module('app')
  .controller('overviewAdminCtrl', (function($scope, calendarService, clientService, teamAdminService, contactService, clockService) {




//ng-repeat for picture//
    $scope.getNumber = function(num) {
      return new Array(num);
    };



    /////D3 GRAPH DATA AND SETTINGS
    var data = [];


    $scope.average = function(nums) {
    var sum = 0;
    for(var t = 0; t < nums.length; t++) {
      sum += nums[t];
      }
      var average = Math.round( sum / nums.length);
      return average;
    };


    $scope.sendAverage = function(id, overall) {
      teamAdminService.editRating(id, overall)
      .then( function(res){
        console.log("average updated on stylist");
      });
    };


    /////GETTING DATA

    $scope.getMemberFeedback = function(memberId) {
      var id = memberId;
      var nums = [];
      contactService.getMemberFeedback(id)
        .then(function(res) {
          $scope.reviews = res;
          for (var i = 0; i < $scope.reviews.length; i++) {
            if ($scope.reviews[i].stars) {
              nums.push($scope.reviews[i].stars);
              console.log("stars value array per", id , nums);
              var overall = $scope.average(nums);
              // data.push(overall);
              // $scope.getData();
              console.log('overallRating after average', overall);
              $scope.sendAverage(id, overall);
              console.log("starting next loop");
              // $scope.getTeamOverall();
            }
          }
        });
    };


    $scope.getTeam = function() {
      teamAdminService.getTeam()
        .then(function(res) {
          $scope.team = res;
          for (i = 0; i < $scope.team.length; i++) {
            console.log("team id",$scope.team[i]._id);
            $scope.getMemberFeedback($scope.team[i]._id);
          }

        });
    };
    $scope.getTeam();


    $scope.getTeamOverall = function() {
      teamAdminService.getTeam()
      .then(function(res){
        data = res;
        $scope.d3();
      });
    };
$scope.getTeamOverall();




$scope.getClock = function() { //gets all clocks / 'time cards'
  clockService.getClock()
    .then(function(res) {
      $scope.clocks = res;
      var groupedClocks = _.groupBy($scope.clocks, 'employee');
      for(var employeeKey in groupedClocks){
        var employeesTimecards = groupedClocks[employeeKey];
        var employeeTime = employeesTimecards.reduce(function(prev, cur, index, wholeArray){
          return prev +cur.duration;
        },0);
        console.log(employeeTime);
        _.find($scope.team,function(teamMemeber){
          // if(employeeTime <= 3600){
          //   employeeTime = 0;
          // }
          // if(employeeTime > 3600){
          //   employeeTime = employeeTime/60/60;
          // }
          return teamMemeber._id == employeeKey;
        }
      ).totalHrs = Math.floor(employeeTime/60/60);
      }
      console.log(groupedClocks);
      console.log("var clocks in getClock :", $scope.clocks);
    });
};
$scope.getClock();





////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// D3
/////////////////////////////////////////////////BEGINS
///////////////////////////////////////////BELOW
////////////////////////////////////


$scope.d3 = function() {
    d3.select(".chart") // this should be an svg
      .selectAll("rect")
        .data(data)
      .enter().append("rect")
        .attr("height", function(d, i) { return 30 + "px"; })
        .attr("width", function(d, i) { return 300 + "px"; })
        .attr("x", function(d, i) { return 0 + "px"; })
        .attr("y", function(d, i) { return i*40 + "px"; })
        .style("fill", function(d,i) {return i%2?'#c0dfd9':'#b3c2bf';});

        d3.select(".chart") // this should be an svg
          .selectAll(".name")
            .data(data)
          .enter().append("text")
          .classed('name',true)
          .text(function(d) { return d.name; })
          .style("fill", function(d, i) { return 'white' ;})
          .attr("x", function(d, i) { return 150 + "px"; })
          .attr("y", function(d, i) { return i*40+20 + "px"; });

          d3.select(".chart") // this should be an svg
            .selectAll(".rating")
              .data(data)
            .enter().append("text")
            .classed('rating', true)
            .text(function(d) { return d.overallRating; })
            .style("fill", function(d, i) {return i%2?'#c0dfd9':'#b3c2bf' ;})
            .attr("x", function(d, i) { return 0 + "px"; })
            .attr("y", function(d, i) { return i*40+20 + "px"; });

          d3.select(".chart")
              .selectAll("rect")
              .data(data)
              .transition()
              .delay([1000])
              .duration(1000)
              .attr("width", function(d) {
                return d.overallRating*20 + "px";
              });

            d3.select(".chart")
                  .selectAll(".name")
                  .data(data)
                  .transition()
                  .delay([1003])
                  .duration(1000)

                  .attr("x", function(d) {
                    return d.overallRating*20+5 + "px" ;})
                  .style("fill", function(d, i) { return '#3b3a36' ;});

                  d3.select(".chart")
                        .selectAll(".rating")
                        .data(data)
                        .transition()
                        .delay([1003])
                        .duration(1000)
                        .style("fill", function(d, i) { return 'white' ;})
                        .attr("x", function(d, i) { return d.overallRating*20-10 + "px"; });


};




  }));
