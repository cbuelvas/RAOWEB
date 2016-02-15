'use strict';
angular.module('yapp')
  .controller('teacherCtrl', ['$scope','loginService','$http', function($scope,loginService, $http, $location){
  	console.log(sessionStorage.getItem('user'));
	$http({
    url: "http://localhost:8000/teacher/"+sessionStorage.getItem('user'), 
//    url: "https://utbweb.co/teacher/"+sessionStorage.getItem('user'), 
    method: "GET",
    data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})
 	}).success(function (response) {
	 // console.log('epaaaaa');

	  console.log(response);
	  $scope.json = response;
	  $scope.id = $scope.json.id;
	  $scope.names = $scope.json.names;
	  $scope.lastnames = $scope.json.lastnames;
	  $scope.type = $scope.json.type;
	  $scope.department = $scope.json.department;
	  $scope.school = $scope.json.school;
	  $scope.email = $scope.json.email;
		
  });

}]);
