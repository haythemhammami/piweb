(function(angular) {
    'use strict';

    function ControllerFn($scope, Product) {
        $scope.products = [];
        $scope.product = {};
        actualiser();

        function actualiser() {
            Product.query().$promise.then(function(data) {
                $scope.products =  data;
            });
        }
    }
    ControllerFn.$inject = ['$scope', 'Product'];
    angular
        .module("demo")
        .controller("ProductController", ControllerFn);

})(angular);
