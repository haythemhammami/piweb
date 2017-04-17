(function(angular) {
    'use strict';
    function ProductFN($resource) {
      //URL of the APIs
        var url = "http://localhost:3000/products/:id";
        //when you send a PUT / DELETE HTTP requests, the $resource service will use the ID as a URL params
        //if your ID = 3 then your PUT request will go to /products/3
        var params = {
            id: "@id"
        };
        var customMethods = {
            'update': {
                method: "PUT"
            }
            
        };
        var Product = $resource(url, params, customMethods);
        return Product;
    }
    ProductFN.$inject = ["$resource"];
    angular.module("demo").factory("Product", ProductFN);
})(angular);
