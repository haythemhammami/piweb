(function(angular) {
    'use strict';

    function filtreFn() {
        return function(input) {
            return input / 100 + " TND";
        }
    }
    angular
        .module('demo')
        .filter('customfilter', filtreFn);
})(angular);
