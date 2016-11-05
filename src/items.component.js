(function() {
    'use strict';
    angular.module('MenuApp')
        .component('itemList', {
            templateUrl: 'src/menu/template/item-list.html',
            bindings: {
                items: '<'
            }
        });
})();