/*var _json_stringify = JSON.stringify;
JSON.stringify = function(value) {
    var _array_tojson = Array.prototype.toJSON;
    delete Array.prototype.toJSON;
    var r=_json_stringify(value);
    Array.prototype.toJSON = _array_tojson;
    return r;
};*/

angular.module('yapp')
  .controller('studentsByCourseCtrl', function($scope, $location,$http) {
	$http({
    url: "http://104.236.31.197/course/2028-201510/students", 
    method: "GET",
	data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})

    //params: {username: "T00010915", token:"GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS"}
 	}).success(function (response) {
		console.log(response);
		$scope.json = response;
		$scope.nrc = $scope.json.nrc;
		$scope.subject = $scope.json.subject;
		$scope.students = $scope.json.students;
		$scope.names = $scope.json.students.names;
		$scope.lastnames = $scope.json.students.lastnames;
		$scope.id = $scope.json.students.id;
		var jsonData;
		//select students
		$scope.selection=[];
  		$scope.toggleSelection = function toggleSelection(id, name) {
			
     		$scope.selection.push({id:id,attendance:"0"});
			console.log(jsonData);
   		};
		if(sessionStorage.getItem('user')===$scope.username){					
		$location.path('/login');
	}
		var _json_stringify = JSON.stringify;

		$scope.studentPost = function studentPost(){
			var sendPost = JSON.stringify({nrc:$scope.nrc , estudiantes:$scope.selection});
			console.log(sendPost);
			/*$scope.postData = function () {
				$http.post('http://104.236.31.197/attendance?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS', {nrc:$scope.nrc,estudiantes:jsonData}).success(
				  function(data){
					$scope.response = data
				  })
			  }
			
			*/
			/*
			var res = $http.post('http://104.236.31.197/attendance?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS', sendPost);*/
			var request = $http({
                    method: "post",
                    url: 'http://localhost:8000/attendance?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS',
                    data: sendPost
                });
		};
				
		
		
/*	$scope.studentListData = {};
    
	$scope.postData = function(){
		$scope.studentListData = angular.copy($scope.fruits );
		var jsonData = JSON.stringify($scope.studentListData);
    }
    */
	
  });
});