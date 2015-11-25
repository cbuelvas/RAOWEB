'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('DashboardCtrl', function($scope, $state) {
	  $(".button-collapse").sideNav();

	$scope.id = sessionStorage.getItem('user');
    $scope.$state = $state;

  });
