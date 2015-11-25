'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('LoginCtrl', ['$scope', 'loginService',function($scope,loginService, $location) {

		$scope.msgtxt='';
		$scope.login=function(data){
						console.log("data:",data);

			console.log("asasdabsdasd:");
		loginService.login(data,$scope); //call login service
	};
	
/*    $scope.submit = function() {
      $location.path('/dashboard');
      return false;
    }
*/
  }]);