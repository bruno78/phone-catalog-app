'use strict';

angular.
    module('phonecatApp').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/phones', {
                    template: '<phone-list></phone-list>'
                }).
                when('/phones/:phoneId', {
                    template: '<phone-detail></phone-detail>'
                }).
                otherwise('/phones');
        }])

// Note the use of the :phoneId parameter in the second route declaration. The $route service uses the route declaration — '/phones/:phoneId' — as a template that is matched against the current URL. All variables defined with the : prefix are extracted into the (injectable) $routeParams object.