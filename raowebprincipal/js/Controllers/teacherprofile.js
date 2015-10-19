var app = angular.module('teacherprofile', []);
app.controller('teacherCtrl', ['$scope','loginService','$http', function($scope,loginService, $http, $location){


	$http({
    url: "http://104.236.31.197/teacher/"+sessionStorage.getItem('user'), 
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
	//  console.log($scope.type);
	  $scope.department = $scope.json.department;
	  $scope.school = $scope.json.school;
	  $scope.email = $scope.json.email;
		
  });
		if(sessionStorage.getItem('user')==$scope.id){					
		$location.path('/login');
	}
}]);