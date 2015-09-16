/**
 * Created by carlos on 14/09/15.
 */


var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $scope.teacherID = "T00010915";
    $scope.apikey = "GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS";
    $http.get("http://104.236.31.197/teacher/"+ $scope.teacherID +"/courses?username="+ $scope.teacherID +"&token="+$scope.apikey)
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
