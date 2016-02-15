/*var _json_stringify = JSON.stringify;
JSON.stringify = function(value) {
    var _array_tojson = Array.prototype.toJSON;
    delete Array.prototype.toJSON;
    var r=_json_stringify(value);
    Array.prototype.toJSON = _array_tojson;
    return r;
};*/

angular.module('yapp')
  .controller('studentsByCourseCtrl', function($scope,$element, $location,$http,passDataService, $stateParams) {
	$scope.course = $stateParams.course;
	$http({
//    url: "https://utbweb.co/course/"+$scope.course+"/students", 
    url: "http://localhost:8000/course/"+$scope.course+"/students", 
    //url: "http://asistencia.utbweb.co/course/2028-201510/students", 
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
		var size = $scope.json.students.length;
		//console.log("size of students",size);
		//array que permitira seleccionar los estudiantes y asignarlo en el boton de la lista de estudiantes.
		$scope.attendance = [];
		$scope.algo=[];
		console.log($scope.nrc)

    	$scope.status = [{Title: 'Undefined', ID:4},{Title: 'Came', ID:0},{Title: 'Not Came', ID:1},{Title: 'Late', ID:2},{Title: 'Left Soon', ID:3}];		
		for (var i =0; i<size; i++){
			$scope.attendance.push({id:$scope.students[i].id, stat: $scope.status[0].cat});
			//$scope.attendance.push({id:$scope.students[i].id, stat: $scope.status[0].cat,attendance:$scope.status[0].id});
		}

		$scope.selected = [];
		for (var i =0; i<size; i++){
			$scope.selected.push({id:$scope.students[i].id, attendance:4});
		}
		
		console.log($scope.attendance);
		var jsonData;
		//select students
		


/*		angular.forEach($scope.students, function (a) {
			
			$scope.selected.push({
				id: undefined
			});
		});*/
		
		
		var toggleSelection = function toggleSelection(id,stat,what) {
			if (what == false){
				console.log("entro: ", $scope.selected);
				switch(stat){
					case 4:
						
						$scope.algo.push({id:id,attendance:"4"});

						break;
					case 0:
						$scope.algo.push({id:id,attendance:"0"});
						break;
					case 1:

						$scope.algo.push({id:id,attendance:"1"});

						break;
					case 2:
						$scope.algo.push({id:id,attendance:"2"});
						break;
					case 3:
						$scope.algo.push({id:id,attendance:"3"});
						break;

				}
			}
			
		};


		$scope.studentPost = function studentPost(){
						console.log($scope.selected);
//			if (stat == true){
			for (var i =0; i<size; i++){
				if ($scope.selected[i].attendance)
				{	
					$scope.selected[i].id =$scope.students[i].id;
					$scope.selected[i].attendance=$scope.selected[i].attendance;
				}
				else
				{	
					$scope.selected[i].id =$scope.students[i].id;
					$scope.selected[i].attendance=4;
				}
				
			}
			var sendPost = JSON.stringify({nrc:$scope.nrc , estudiantes:$scope.selected});
			$scope.msgtxt='Registro realizado';
			Materialize.toast($scope.msgtxt, 5000,'rounded');
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
//                    url: 'https://utbweb.co/attendance?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS',
                    url: ' http://localhost:8000/attendance?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS',
                    data: sendPost
                });
//			}
//			else{console.log("nada");}
		};

		
		
		
		
		if(sessionStorage.getItem('user')===$scope.username){					
		$location.path('/login');
	}
		var _json_stringify = JSON.stringify;

				
			var request = $http({
                    method: "GET",
                    url: 'http://localhost:8000/course/2028-201510/attendance?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS'
//                    url: 'https://utbweb.co/course/2028-201510/attendance?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS'
                }).success(function (response) {
		console.log(response);
		});
				
		
		
/*	$scope.studentListData = {};
    
	$scope.postData = function(){
		$scope.studentListData = angular.copy($scope.fruits );
		var jsonData = JSON.stringify($scope.studentListData);
    }
    */
	
  });
})