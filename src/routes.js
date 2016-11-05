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
                templateUrl: 'src/menu/template/categories.template.html' ,
                controller: 'CategoriesController as mainCategryCtrl',
                resolve: {
                    categories: ['MenuDataService', function(menuDataService) {
                        return menuDataService.getCategories();
                    }]
                } 
            })
            .state('items' , {
                url: "/item-detail/{categoryName}",
                templateUrl: 'src/menu/template/categoryDetails.template.html',
                controller: 'ItemsController as itemCtrl',
                resolve: {
                    items : ['$stateParams', 'MenuDataService', function($stateParams, menuDataService) {
                        return menuDataService.getItemsForCategory($stateParams.categoryName);
                    }]
                }
            }); 
    }
})();