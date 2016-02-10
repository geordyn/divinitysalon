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
      contactService.addFeedback(newFeedback)
        .then(function(res) {
          alert('New Feedback Added!');
          $scope.getFeedback();
          $scope.newFeedback = null;
        });
    };

    $scope.deleteProd = function(id) {
      contactService.deleteFeedback(id)
        .then(function(res) {
          alert('Feedback Deleted');
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
