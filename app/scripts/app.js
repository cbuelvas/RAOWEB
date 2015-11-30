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


yapp.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.when('/home', '/dashboard/home');
	$urlRouterProvider.when('/logout', 'dashboard/login');

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
		.state('dashboard.courseview', {
			url: '/courseview?course',
			views: {
				'': {
					templateUrl: 'views/dashboard/courseview.html',
					controller: 'courseViewCtrl'
				},
				

			}
		})
		.state('dashboard.studentlist', {
			url: '/studentlist?course',
			views: {
				'': {
					templateUrl: 'views/dashboard/studentlist.html',
					controller: 'studentsByCourseCtrl'
				},
				

			}
		})
		/*.state('dashboard.courseview.coursestatistics', {
			url: '/coursestatistics?course',
			templateUrl: 'views/dashboard/courseStatistics.html',
			controller: 'courseStatisticsCtlr'
		})*/
		.state('home', {
			url: '/home',
			parent: 'dashboard',
			templateUrl: 'views/dashboard/home.html'
		})
		.state('profile', {
			url: '/profile',
			parent: 'dashboard',
			templateUrl: 'views/dashboard/profile.html',
			controller: 'teacherCtrl'
		})
		.state('dashboard.courselist', {
			url: '/courselist',
			templateUrl: 'views/dashboard/courselist.html',
			controller: 'teacherCourseCtrl'
		})
		
		.state('studentview', {
			url: '/studentview',
			parent: 'dashboard',
			templateUrl: 'views/dashboard/studentview.html',
			controller: 'studentViewCtrl'
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


yapp.service('nrc', function NRC() {
	var nrc = this;
	nrc.txt = "default";
});

yapp.controller('logoutctrl', ['$scope', 'loginService', function ($scope, loginService) {
	$scope.txt = 'Page Home';

	loginService.logout();

	$scope.username = sessionStorage.getItem('user');
	console.log('entro log', $scope.username);

}]);