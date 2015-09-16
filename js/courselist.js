var app2 = angular.module('myapp2', []);
app2.controller('teacherCourseCtrl', function($scope, $http) {
  $http.get("http://104.236.31.197/teacher/T00010915/courses?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS")
  .success(function (response) {
	  console.log('epaaaaa');
	  console.log(response);
	  $scope.json = response;
	  $scope.courses = response.courses;
	  $scope.id = $scope.json.id;
	  $scope.names = $scope.json.names;
	  $scope.lastnames = $scope.json.lastnames;
	  $scope.resources_uri = $scope.json.resources_uri;
	  $scope.coursename = $scope.json.courses.subjct_name;

  });
});
	