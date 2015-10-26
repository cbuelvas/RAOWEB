'use strict';
yapp.factory('passDataService', function($http, $location){
	return{
		course:function(data){
			scope.data = {};
			var $promise=$http.post('http://asistencia.utbweb.co/token',data).then(function(msg){
				var uid=msg.data;
				if(uid){
					sessionService.set('user',data.username);
					sessionService.set('token',uid);
				sesionName = data.username;
					sesionToken  = uid;
				console.log(sesionName);
				$location.path('/dashboard');

				}	       			   
			}).catch(function(){scope.msgtxt='Datos del profesor incorrectos';
					Materialize.toast(scope.msgtxt, 5000,'rounded');});
			
		},