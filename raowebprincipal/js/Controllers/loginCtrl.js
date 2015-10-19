'use strict';

app.controller('loginCtrl', ['$scope', 'loginService', function ($scope,loginService) {
	$scope.msgtxt='';
	$scope.login=function(data){
					console.log("data:",data);

		loginService.login(data,$scope); //call login service
	};

}]);