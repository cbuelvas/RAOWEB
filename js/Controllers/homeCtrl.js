'use strict';

app.controller('homeCtrl', ['$scope','loginService', function($scope,loginService){
	$scope.txt='Page Home';
	
	$scope.logout=function(){
			loginService.logout();
		}
	$scope.username = sessionStorage.getItem('user');
	console.log('user',$scope.username);

}])