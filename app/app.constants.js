
(function (angular) {
    'use strict';
    angular.module('portfolio').factory('livethereConfig', ['$window', function ($window) {
        return {
            'webApiUrl': "http://localhost:59962"
            //'webApiUrl': angular.element($window.document.getElementsByTagName('base')[0]).attr('href'),

        };
    }]);
})(angular);
