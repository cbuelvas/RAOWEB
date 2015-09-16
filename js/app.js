
var app = angular.module('app', []);
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





var app2 = angular.module('app2', []);
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
	var app3 = angular.module('myapp3', []);
app3.controller('studentsByCourseCtrl', function($scope, $http) {
  $http.get("http://104.236.31.197/course/2028-201510/students?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS")
  .success(function (response) {
	           console.log(response);
          $scope.json = response;
          $scope.nrc = $scope.json.nrc;
          $scope.subject = $scope.json.subject;
          $scope.students = $scope.json.students;
          $scope.names = $scope.json.students.names;
          $scope.lastnames = $scope.json.students.lastnames;
          $scope.id = $scope.json.students.id;
          

  });
});