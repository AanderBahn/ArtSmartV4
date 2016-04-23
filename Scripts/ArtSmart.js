/// <reference path="angular.js" />

(function () {

    var app = angular.module("ArtSmart", ['ArtSmart-directives']);
    //});
    app.controller("ProductsController", function (Product) {

        this.products = [];//this is the array of products
        this.overviewProduct = {};
        var that = this;

        var request = Product.all();

        request.success(function (data) {
            that.products = data;
        });
        request.error(function (a, b, c) {
            console.log(a)
        });

       
            

    });

    ///////////////////////////////////////////////////////////////////////////////
    app.controller("ProductDetailController", function (Product) {
        this.product = [];
        var that = this;

        function getVar() {
            var params = window.location.href.split('/');
            var Id = parseInt(params[params.length - 1]);
            return Id;
        }
        
        var request = Product.find(getVar());

        request.success(function (data) {
            that.product = data;
        });
        request.error(function (a, b, c) {
            console.log(a)

        });


        this.shoppingCart = {
            Cartitems: []
        };

        this.addItem = function (product) {
            this.shoppingCart.Cartitems.push({ });
        };

    });

    ////////////////////////////////////////////////////////////////////////


    

    app.controller('CartItemsController', ['$scope', 'CartItem', function ($scope, CartItem) {

            this.addToCart = function (prodId) {
                alert(prodId);
                cartItems = {};
                //cartItems["CartId"] = cartId;
                cartItems["ProductId"] = prodId;
                cartItems["Quantity"] = 1;
                CartItem.create(cartItems);
            };
           

    }]);

    //app.controller("CartItemsController", function () {
    //    this.product = [];
    //    var that = this;

    //    var request;
    //    //request = CartItem.all();

    //    //request.success(function (data) {
    //    //    that.products = data;
    //    //});
    //    //request.error(function (a, b, c) {
    //    //    console.log(a)
    //    //});

      

    //    this.addToCart = function (prodId) {
    //        alert(prodId);
    //        cartItem = {};
    //        cartItem["ProductId"] = prodId;
    //        cartItem.create(cartItem);
    //        console.dir(cartItem);
    //    };
    //    });;

})();////////////////////End//////////