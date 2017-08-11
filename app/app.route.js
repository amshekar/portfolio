(function (module) {
    "use strict";

    function config($translateProvider, $translatePartialLoaderProvider,$locationProvider, $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "home",
                templateUrl: "app/personal/partial-home.html",
                controller: "HomeController",
                controllerAs: "vm"
            })         
           .state("contact", {
             url: "/contact",
             templateUrl: "app/settings/partial-settings.html",
             controller: "ContactController"
         });
         
        /*angular translate start*/
        $translatePartialLoaderProvider.addPart('personal');
        $translateProvider.useLoader('$translatePartialLoader', {
            'urlTemplate': '/i18n/{part}/{lang}.json'
        });
        $translateProvider.useLoaderCache(true);

        //setting prefered language to be english
        $translateProvider.preferredLanguage('en');

        //this line is to load the page in the usersLanguage
        //$translateProvider.determinePreferredLanguage();

        $translateProvider.fallbackLanguage('en');

        /*angular translate end*/

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    }

    config.$inject = ['$translateProvider', '$translatePartialLoaderProvider','$locationProvider','$stateProvider', '$urlRouterProvider'];
    module.config(config);
})(angular.module('portfolio'));