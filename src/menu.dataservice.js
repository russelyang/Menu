(function() {
    'use strict';
    angular.module('Data')
        .service('MenuDataService', MenuDataService)
        .constant('BASE_URL', 'https://davids-restaurant.herokuapp.com');

    MenuDataService.$inject = ['$http', 'BASE_URL'];

    function MenuDataService($http, BASE_URL) {
        var service = this;

        service.getCategories = function() {
            return $http.get(BASE_URL + "/categories.json").then(function(res) {
                return res.data;
            });
        };

        service.getItemsForCategory = function(category) {
            return $http( {
                url: BASE_URL + '/menu_items.json',
                method: 'GET',
                params: {"category" : category}
            }).then(function(res){
                return res.data.menu_items;
            });
        };
    }
})();