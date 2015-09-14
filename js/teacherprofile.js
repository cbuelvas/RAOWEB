var app = angular.module('myApp', []);
app.controller('teacherCtrl', function($scope, $http) {
  $http.get("http://104.236.31.197/teacher/T00010915?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS")
  .success(function (response) {
	  console.log('epaaaaa');
	  console.log(response);
	  $scope.json = response;
	  $scope.id = $scope.json.id;
	  $scope.names = $scope.json.names;
	  $scope.lastnames = $scope.json.lastnames;
	  $scope.type = $scope.json.type;
	  console.log($scope.type);
	  $scope.department = $scope.json.department;
	  $scope.school = $scope.json.school;
	  $scope.email = $scope.json.email;

  });
});