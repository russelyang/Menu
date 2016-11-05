(function() {
    'use strict';
    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['MenuDataService'];

    function ItemsController(MenuDataService) {

    }
})();