

/*
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.coursesController',
    'myApp.profile'
])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view2'});
    }]);
	
*/


var app = angular.module('myapp1', []);
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





var app2 = angular.module('myapp2', []);
app.controller('teacherCourseCtrl', function($scope, $http) {
  $http.get("http://localhost:8000/teacher/T00010915/courses?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS")
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
var teacher = document.getElementById('teacher');
var teachercourses = document.getElementById('teachercourses');

    angular.element(document).ready(function() {
      angular.bootstrap(teacher, ['myapp1']);
      angular.bootstrap(teachercourses, ['myapp2']);