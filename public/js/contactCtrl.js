angular.module('app')
  .controller('contactCtrl', function($scope, contactService, teamAdminService) {




    $scope.myNum = [];

    $scope.getFeedback = function() {
      contactService.getFeedback()
        .then(function(res) {
          $scope.feedback = res;
          $scope.myNum = res.stars;
        });
    };
    $scope.getFeedback();


    $scope.getNumber = function(num) {
      return new Array(num);
    };



    $scope.getTeam = function() {
      teamAdminService.getTeam()
        .then(function(res) {
          $scope.team = res;
        });
    };
    $scope.getTeam();




    $scope.addFeedback = function(newFeedback) {
      console.log(newFeedback.member.name);
      console.log(newFeedback.member._id);
      contactService.addFeedback(newFeedback)
        .then(function(res) {
          swal({   title: "Thank You For Your Feedback!",   text: "Divinity Salon takes pride in customer service; every review makes a difference.",   type: "success",   confirmButtonText: "You're Welcome" });
          $scope.getFeedback();
          $scope.newFeedback = null;
        });
    };

    $scope.deleteProd = function(id) {
      contactService.deleteFeedback(id)
        .then(function(res) {
          alert('Feedback Deleted!');
          $scope.getFeedback();
        });
    };

    $scope.editProd = function(editFeedback) {
      contactService.editFeedback(editFeedback)
        .then(function(res) {
          $scope.getFeedback();
        });
    };










  });
