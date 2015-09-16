/**
 * Created by carlos on 14/09/15.
 */

'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.coursesController',
    'myApp.profile'
])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view2'});
    }]);