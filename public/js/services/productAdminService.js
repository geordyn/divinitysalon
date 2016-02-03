angular.module('app')
.service('productAdminService', function($http){

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function (res) {
      return res.data;
    });
  };

  this.addProduct = function (newProduct) {
    return $http({
      method: 'POST',
      url: '/api/productAdmin',
      data: {
        brand: newProduct.brand,
        img: newProduct.img,
        description: newProduct.description
      }
    });
  };

  this.deleteProd = function (id) {
    return $http({
      method: 'DELETE',
      url: '/api/productAdmin/' + id
    });
  };

  this.editProduct = function (editProduct) {
    return $http({
      method: 'PUT',
      url: '/api/productAdmin/' + id,
      data: {
        brand: editProduct.brand,
        img: editProduct.img,
        description: editProduct.description
      }
    });
  };





});
