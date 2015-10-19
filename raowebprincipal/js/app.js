'use strict';



// Declare app level module which depends on filters, and services
//var rootApp = angular.module('webrao', ['myapp1','myapp2','myapp3']);

var rootApp= angular.module('webrao', ['teacherprofile','couselistmodule','stundetlistmodule','ngRoute']);
rootApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'loginCtrl'});
  
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
  $routeProvider.when('/courseinfo', {templateUrl: 'partials/listarcurso.html', controller: 'teacherCourseCtrl'});
  $routeProvider.when('/studentcourselist', {templateUrl: 'partials/listaestudiante.html', controller: 'studentsByCourseCtrl'});
  $routeProvider.when('/teacherprofile', {templateUrl: 'partials/perfil.html', controller: 'teacherCtrl'});
  $routeProvider.when('/logout', {templateUrl: 'partials/login.html', controller: 'logoutctrl'});
  
  $routeProvider.otherwise({redirectTo: '/login'});
}]);



rootApp.controller('logoutctrl', ['$scope','loginService', function($scope,loginService){
	$scope.txt='Page Home';
	
			loginService.logout();

	$scope.username = sessionStorage.getItem('user');
	console.log('entro',$scope.username);

}])

rootApp.run(function($rootScope, $location, loginService){
	var routespermission=['/home'];  //route that require login
	$rootScope.$on('$routeChangeStart', function(){
		/*if( routespermission.indexOf($location.path()) !=-1)
		{
			var connected=loginService.islogged();
			connected.then(function(msg){
				if(!msg.data) $location.path('/login');
			});
		}*/
	});
});
