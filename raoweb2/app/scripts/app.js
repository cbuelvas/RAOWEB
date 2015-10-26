'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
var yapp = angular
  .module('yapp', [
    'ui.router',
    'ngAnimate'
  ]);


  yapp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
	$urlRouterProvider.when('/logout','dashboard/login');

    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardCtrl'
        })
          .state('overview', {
            url: '/overview',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/overview.html'
          })
          .state('profile', {
            url: '/profile',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/profile.html',
			controller:'teacherCtrl'
          })
          .state('courselist', {
            url: '/courselist',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/courselist.html',
			controller: 'teacherCourseCtrl'
          })
          .state('studentlist', {
            url: '/studentlist',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/studentlist.html',
			controller: 'studentsByCourseCtrl'
          })
          .state('courseStatistics', {
            url: '/courseStatistics',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/courseStatistics.html',
			controller: 'courseStatisticsController'
          })
          .state('logout', {
            url: '/logout',
            parent: 'dashboard',
            templateUrl: 'views/login.html',
			controller: 'logoutctrl'
          })
          .state('reports', {
            url: '/reports',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/reports.html'
          });

  });


	
yapp.controller('logoutctrl', ['$scope','loginService', function($scope,loginService){
	$scope.txt='Page Home';
	
			loginService.logout();

	$scope.username = sessionStorage.getItem('user');
	console.log('entro log',$scope.username);

}]);