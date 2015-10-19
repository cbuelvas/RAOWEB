var app = angular.module('raoweb', []);
app.controller('customersCtrl', function($scope, $http) {
  
  $http({
    url: "http://104.236.31.197/student/"+sessionStorage.getItem('user')+"", 
    method: "GET",
    params: {username: +sessionStorage.getItem('user'), token:+sessionStorage.getItem('token')}
 	}).success(function (response) {
	  console.log('epaaaaa');
	  console.log(response);
	  $scope.json = response;
	  $scope.courses = response.courses;
	  $scope.id = $scope.json.id;
	  $scope.names = $scope.json.names;
	  $scope.lastnames = $scope.json.lastnames;
	  $scope.program = $scope.json.program;
	  $scope.email = $scope.json.email;

  });
	if(sessionStorage.getItem('user')==$scope.id){					
		$location.path('/login');
	}
});