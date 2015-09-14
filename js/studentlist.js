
    var app = angular.module('myApp', []);
    app.controller('customersCtrl', function($scope, $http) {
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
