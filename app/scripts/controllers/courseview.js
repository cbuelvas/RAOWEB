angular.module('yapp').
controller('courseViewCtrl', function ($scope, $location, $http, passDataService, $stateParams) {
	$scope.course = $stateParams.course;
/*	$scope.nrc = "";
	$scope.$watch('data_shared', function () {
		var nrc = passDataService.getData();
		$scope.nrc = nrc;
		console.log("nrc nana ", $scope.course);*/
		$http({
    url: "https://utbweb.co/course/"+$scope.course+"/students", 
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
		$scope.estudentID = $scope.json.students.id;
			
			
	$http({
			url: "https://utbweb.co/course/" + $scope.course,
			method: "GET",
			data: $.param({
				username: sessionStorage.getItem('user'),
				token: sessionStorage.getItem('token')
			})
		})
		.success(function (response) {
			console.log('epaaaaa');
			console.log(response);
			$scope.id = response.nrc;
			$scope.subject_name = response.subject_name;
			$scope.period = response.period;
			$scope.week_hours = response.week_hours;
			$scope.credits = response.credits;
			$scope.section = response.section;
		});

//	$scope.$watch('data_shared',function(){
	
	var students_names = new Array();  
	var came = new Array(); 
	var didnotcome = new Array(); 
	var arrivedlate = new Array(); 
	var leftsoon = new Array(); 
	var undef = new Array();
	
//		var nrc =  passDataService.getData(); 
//		$scope.nrc = nrc;		console.log("nrc courseview ",$scope.nrc);
		$http({
		url: "https://utbweb.co/course/"+$scope.course+"/attendance?", 
		method: "GET",
		data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})
		}).success(function (response) {
				console.log("respueesta",response);
				response = response["students"];   

				for (i = 0; i < response.length; i++){
					students_names.push(response[i]["student_name"]+ " "+response[i]["student_lastname"]); //NOMBRE DEL ESTUDIANTE
				}

				for (i = 0 ; i < 5; i++){                
					for( j = 0; j < response.length; j++){
						switch(i){
							case 0:
								came.push(response[j]["attendance"][0]["value"]);
								break;
							case 1:
								didnotcome.push(response[j]["attendance"][1]["value"]);
								break;
							case 2:
								arrivedlate.push(response[j]["attendance"][2]["value"]);
								break;
							case 3:
								leftsoon.push(response[j]["attendance"][3]["value"]);
								break;
							case 4:
								undef.push(response[j]["attendance"][4]["value"]);
								break;
						}                    
					}
				}/*
				console.log(response);
				console.log(came);
				console.log(didnotcome);
				console.log(arrivedlate);
				console.log(leftsoon);
				console.log(undef);
				// draw charts*/


				$(function () { 
					$('#container').highcharts({ 
						chart: { 
							type: 'bar' 
						}, 
						title: { 
							text:'', 
							style: { 
								color: 'black', 
								fontSize:'20px', 
								fontWeight: 'bold' 
							} 
						}, 
						xAxis: {                         
							categories: students_names, 
							labels: { 
								style: { 
									color: 'black', 
									fontSize:'12px', 
									fontWeight: 'bold' 
								} 
							} 
						}, 
						yAxis: { 
							max: 100, 
							title: { 
								text: 'Attendances (%)', 
								style: { 
									color: 'black', 
									fontWeight: 'bold' 
								} 
							}, 
							labels: { 
								style: { 
									color: 'black', 
									fontSize:'12px', 
									fontWeight: 'bold' 
								} 
							} 
						}, 
						legend: { 
							itemMarginBottom: 15, 
							itemDistance: 10 
						},  
						plotOptions: {                           
							bar: { 
								dataLabels: { 
									style: { 
										color: 'black', 
										fontSize:'10px' 
									},      
									enabled: true, 
									formatter: function() { 
										if (this.y !== 0) { 
										  return this.y; 
										} else { 
										  return null; 
										} 
									} 

								} 
							}, 
							series: { 
								events: { 
									legendItemClick: function() { 
										return false; 
									} 
								}, 
								stacking: 'normal' 
							} 
						}, 
						credits: { 
							enabled: false 
						}, 
						tooltip: { 
							backgroundColor: { 
									linearGradient: [0, 0, 0, 60], 
									stops: [ 
										[0, '#FFFFFF'], 
										[1, '#E0E0E0'] 
									] 
								}, 
								borderWidth: 1, 
								borderColor: '#AAA', 
							formatter: function() { 
								return '<strong>'+this.series.name + '</strong>' + '  ' + this.y + ' %'; 
							} 
						}, 
						series: [{ 
							name: 'Came', 
							data: came 
						}, { 
							name: 'Did not come', 
							data: didnotcome 
						}, { 
							name: 'Arrived late', 
							data: arrivedlate 
						}, { 
							name: 'Left soon', 
							data: leftsoon 
						}, { 
							name: 'Undefined', 
							data: undef 
						}] 
					}); 
				});            
			}); 
			
			
//	});

/*	$scope.send = function (nrc) {
		console.log('dentrodesend', nrc);
		passDataService.sendData(nrc);
	};
*/
	if (sessionStorage.getItem('user') != $scope.id) {
		$location.path('/login');
	};
});
});