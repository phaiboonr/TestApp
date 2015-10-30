'use strict';

/* Controllers */

angular.module('myApp').controller('homeController', [ '$scope', 'ProductService', function($scope, ProductService) {
    $scope.prdCats = ProductService.getProductCatogories();
}]);
