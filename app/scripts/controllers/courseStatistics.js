angular.module('yapp')
  .controller('courseStatisticsController', function($scope, $location,$http) {
	
	var students_names = new Array();  
	var came = new Array(); 
	var didnotcome = new Array(); 
	var arrivedlate = new Array(); 
	var leftsoon = new Array(); 
	var undef = new Array();       

	$http({
    url: "http://104.236.31.197/course/2028-201510/attendance?", 
    method: "GET",
    data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})
 	}).success(function (response) {
		
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
			}
			console.log(response);
			console.log(came);
			console.log(didnotcome);
			console.log(arrivedlate);
			console.log(leftsoon);
			console.log(undef);
			// draw charts


			$(function () { 
				$('#container').highcharts({ 
					chart: { 
						type: 'bar' 
					}, 
					title: { 
						text: '+subject_name+ attendance statistics', 
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
}); 