angular.module('app')
  .controller('mainCtrl', function($scope, mainService) {


    $scope.getTeam = function() {
      mainService.getTeam()
      .then(function (res) {
        $scope.team = res;
      });
    };
    $scope.getTeam();


    $scope.getProducts = function() {
      mainService.getProducts()
      .then(function (res) {
        $scope.products = res;
      });
    };
    $scope.getProducts();


  });
