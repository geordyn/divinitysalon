angular.module('app')
.controller('productAdminCtrl', function($scope, productAdminService){


  $scope.getProducts = function() {
    productAdminService.getProducts()
    .then(function (res) {
      $scope.products = res;
    });
  };
  $scope.getProducts();


$scope.addProduct = function(newProduct) {
  productAdminService.addProduct(newProduct)
  .then( function(res){
    alert('New Product Added!');
    $scope.getProducts();
    $scope.newProduct = null;
  });
};

$scope.deleteProd = function(id) {
  productAdminService.deleteProd(id)
  .then( function(res){
    alert('Product Deleted');
    $scope.getProducts();
  });
};

$scope.editProd = function(editProduct) {
  productAdminService.editProduct(editProduct)
  .then( function(res){
    $scope.getProducts();
  });
};


});
