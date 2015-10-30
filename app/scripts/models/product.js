'use strict';

/* Model classes */
angular.module('myApp')
    .factory('Product', function () {
        function Product(args) {
            this.name = args.name;
            this.description = args.description;
            this.image = args.image;
        }
        return Product;
    });

angular.module('myApp')
    .factory('ProductCategory', function () {
        function ProductCategory(args) {
            this.id = args.id;
            this.description = args.description;
            this.image = args.image;
        }
        return ProductCategory;
    });

angular.module('myApp')
    .factory('OrderItem', function () {
        function OrderItem(args) {
            this.id = args.id;
            this.description = args.description;
            this.image = args.image;
            this.qty = args.qty;
        }
        return OrderItem;
    });

angular.module('myApp')
    .factory('SaleOrder', function () {
        function SaleOrder(args) {
            this.items = args.items || [];
            this.date = args.date;
            this.custId = args.custId;
            this.description = args.description;
        }
        return SaleOrder;
    });

