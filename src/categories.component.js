(function() {
    'use strict';
    angular.module('MenuApp')
        .component('categoryList', {
            templateUrl: 'src/menu/template/category-list.html',
            bindings: {
                categories: '<'
            }
        });
})();   