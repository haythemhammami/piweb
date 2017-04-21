(function(angular) {
    'use strict';
    //$routeProvider to configure routes in our application
    function configFN($routeProvider) {
      //.when to specifie the URL of the page and the template to display at that
      //Specific URL, i dont specifie the controller beceause i specifie the controller
      //inside the view (see /product/product.view.html Line 1)
        $routeProvider
            .when('/products', {
                templateUrl: "./product/test.view.html"
            })
            .otherwise({
                redirectTo: "/products"
            });
            //otherwise if the user types any url that isnt specified he will get redirected to the products URL
    }
    configFN.$inject = ['$routeProvider'];

    angular.module("demo", ["ngRoute", "ngResource"]).config(configFN);
})(angular);
