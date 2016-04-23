/// <reference path="angular.js" />

(function () {

    angular.module("ArtSmart")
        .factory("Product", function ProductFactory($http) {
        return {
            all: function () {
                return $http({ method: "GET", url: "http://localhost:59205/Products/GetAll" });
            },

            find: function(id) {
                return $http({ method: "GET", url: "http://localhost:59205/Products/FindById/?id=" + id });
            },

            findByName : function(name) {
                return $http({ method: "GET", url: "http://localhost:59205/Products/FindByName?name=" + name });
            },

            FindByCategoryId: function (CategoryId) {
                return $http({ method: "GET", url: "http://localhost:59205/Products/category/" + CategoryId });
            },

            create: function (product) {
                return $http({ method: "POST", url: "http://localhost:59205/Products/CreateProduct", data: JSON.stringify(product) });
            },

            delete: function (id) {
                return $http({ method: "DELETE", url: "http://localhost:59205/Products/DeleteById/" + id });
            },

            update: function (id, product) {
                return $http({ method: "PUT", url: "http://localhost:59205/Products/UpdateById/" + id, data: product });
            },
        };
    });


    angular.module("ArtSmart")
        .factory("CartItem", function CartItemFactory($http) {
            return {
                all: function () {
                    return $http({ method: "GET", url: "http://localhost:59205/CartItems/GetAll" });
                },

                find: function (id) {
                    return $http({ method: "GET", url: "http://localhost:59205/CartItems/FindById/?id=" + id });
                },

                FindByCategoryId: function (CategoryId) {
                    return $http({ method: "GET", url: "http://localhost:59205/CartItems/category/" + CategoryId });
                },

                create: function (product) {
                    return $http({ method: "POST", url: "http://localhost:59205/CartItems/CreateCartItem", data: JSON.stringify(product) });
                },

                delete: function (id) {
                    return $http({ method: "DELETE", url: "http://localhost:59205/CartItems/DeleteById/" + id });
                },

                update: function (id, product) {
                    return $http({ method: "PUT", url: "http://localhost:59205/CartItems/UpdateById/" + id, data: product });
                },
            };





        });
})();