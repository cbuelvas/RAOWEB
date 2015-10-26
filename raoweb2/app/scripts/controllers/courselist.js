'use strict';
angular.module('yapp').controller('teacherCourseCtrl', ['$scope', 'passDataService',function($scope, passDataService,$location, $http) {
	
	
	$http({
    url: "http://104.236.31.197/teacher/T00010915/courses", 
    method: "GET",
    data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})
 }).success(function (response) {
	  console.log(response);
	  $scope.json = response;
	  $scope.courses = response.courses;
	  $scope.id = $scope.json.id;
	  $scope.names = $scope.json.names;
	  $scope.lastnames = $scope.json.lastnames;
	  $scope.resources_uri = $scope.json.resources_uri;
	  $scope.coursename = $scope.json.courses.subjct_name;
	
  	});
	
	$scope.showcourse = function showcourse(id) {
			console.log(id);
			passDataService.course(id);
   		};
	
	console.log($scope.username);
	if(sessionStorage.getItem('user')==$scope.username){					
		$location.path('/login');
	}
	
}]);
	
	