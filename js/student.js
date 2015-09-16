var app = angular.module('raoweb', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("http://localhost:8000/student/t00031178?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS")
  .success(function (response) {
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
});