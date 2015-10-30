'use strict';

/* Services */

angular.module('myApp')
    .factory("ProductService", ['Product', 'ProductCategory', function (Product, ProductCategory) {
        var service = {};
        var prodCats = [];
        var prods = [];

        service.getProductCatogories = function () {

            // This code will be replaced by call to back-end to retrieve the list of product catogories

            prodCats = [];
            prodCats.push(
                new ProductCategory({
                    id: 1,
                    description: "Room Air",
                    image: "images/roomair.png"
                }));

            prodCats.push(
                new ProductCategory({
                    id: 2,
                    description: "Sky Air",
                    image: "images/skyair.png"
                }));

            prodCats.push(
                new ProductCategory({
                    id: 3,
                    description: "Package Air",
                    image: "images/packageair.png"
                }));

            return prodCats;

        };

        service.getProductsList = function (catId) {

            // This code will be replaced by call to back-end to retrieve the list of products for the specified Category Id
            prods = [];

            if (catId == 1) {
                prods.push(
                    new Product({
                        id: 11,
                        description: "Room Air #1",
                        image: "images/roomair.png"
                    }));

                prods.push(
                    new Product({
                        id: 12,
                        description: "Room Air #2",
                        image: "images/roomair.png"
                    }));

                prods.push(
                    new Product({
                        id: 13,
                        description: "Room Air #3",
                        image: "images/roomair.png"
                    }));
            } else if (catId == 2) {
                prods.push(
                    new Product({
                        id: 21,
                        description: "Sky Air #1",
                        image: "images/skyair.png"
                    }));

                prods.push(
                    new Product({
                        id: 22,
                        description: "Sky Air #2",
                        image: "images/skyair.png"
                    }));

                prods.push(
                    new Product({
                        id: 23,
                        description: "Sky Air #3",
                        image: "images/skyair.png"
                    }));
            } else if (catId == 3) {
                prods.push(
                    new Product({
                        id: 31,
                        description: "Package Air #1",
                        image: "images/packageair.png"
                    }));

                prods.push(
                    new Product({
                        id: 32,
                        description: "Package Air #2",
                        image: "images/packageair.png"
                    }));

                prods.push(
                    new Product({
                        id: 33,
                        description: "Package Air #3",
                        image: "images/packageair.png"
                    }));
            }

            return prods;

        };

        return service;
    }]);

