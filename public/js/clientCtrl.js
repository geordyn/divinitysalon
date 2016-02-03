angular.module('app')
.controller('clientCtrl', function($scope, clientService){


$scope.getClients = function() {
  clientService.getClients()
  .then( function(res){
    $scope.clients = res;
  });
};

$scope.getClients();


$scope.addClient = function(newClient) {
  clientService.addClient(newClient)
  .then( function(res){
    alert('New Client Added!');
    $scope.getClients();
    $scope.newClient = null;
  });
};


$scope.deleteClient = function(id) {
  clientService.deleteClient(id)
  .then( function(res){
    alert('Client Deleted');
    $scope.getClients();
  });
};

$scope.editClient = function(editClient) {
  clientService.editClient(editClient)
  .then( function(res){
    $scope.getClients();
  });
};











});
