angular.module('yapp').
controller('courseViewCtrl',function($scope, $location, $http, passDataService) {
	$scope.nrc = "";
	$scope.$watch('data_shared',function(){
		var nrc =  passDataService.getData(); 
		$scope.nrc = nrc;		console.log("nrc courseview ",$scope.nrc);
	$http({
				url: "http://104.236.31.197/course/"+$scope.nrc, 
				method: "GET",
				data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})
	})
	.success(function (response) {
			  console.log('epaaaaa');
			  console.log(response);
			  $scope.id = response.nrc;
			  $scope.subject_name = response.subject_name;
			  $scope.period = response.period;
			  $scope.subject_name = response.subject_name;
			});

});
  	
	
	
	if(sessionStorage.getItem('user')!=$scope.id){					
		$location.path('/login');
	};
});