'use strict';



// Declare app level module which depends on filters, and services
//var rootApp = angular.module('webrao', ['myapp1','myapp2','myapp3']);

var rootApp= angular.module('webrao', ['myapp1','myapp2','myapp3','ngRoute']);
rootApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'loginCtrl'});
  
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
  
  $routeProvider.otherwise({redirectTo: '/login'});
}]);


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