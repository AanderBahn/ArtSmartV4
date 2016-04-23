/// <reference path="angular.js" />

(function () {

    var app = angular.module('ArtSmart-directives', []);
    ///////////////////////////////////////////////////////

    ////////////////////////////////////////////////

    app.directive('productTemplate', function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/products/productTemplate.html'
        };

    });
    ////////////////////////////////////////////////////////////////////////////////////
    app.directive('productDetailTemplate', function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/products/productDetailTemplate.html'
        };

    });
    ////////////////////////////////////////////////////////////////////////////////////
    app.directive('cartLineTemplate', function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/products/cartLineTemplate.html'
        };

    });
    ////////////////////////////////////////////////////////////////////////////////////
    
})();