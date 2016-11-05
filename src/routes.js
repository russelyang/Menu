(function() {
    'use strict';

    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        // Redict to home if no URL matches
        $urlRouterProvider.otherwise('/');

        // set up UI state
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/menu/template/home.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/menu/template/categories.template.html',
                controller: 'CategoriesController as mainCategryCtrl',
                resolve: {
                    categories: ['MenuDataService', function(menuDataService) {
                        return menuDataService.getCategories();
                    }]
                }
            });
    }
})();