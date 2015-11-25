'use strict';
yapp.factory('loginService', function($http, $location,  sessionService){
	var sesionName; //save key value for sessions
	var sesionToken; //save key value for sessions
	return{
		login:function(data,scope){
			scope.data = {};
			var $promise=$http.post('http://104.236.31.197/token',data).then(function(msg){
				var uid=msg.data;
				if(uid){
					sessionService.set('user',data.username);
					sessionService.set('token',uid);
				sesionName = data.username;
					sesionToken  = uid;
				console.log(sesionName);
				$location.path('/home');

				}	       			   
			}).catch(function(){scope.msgtxt='Datos del profesor incorrectos';
					Materialize.toast(scope.msgtxt, 5000,'rounded');});
			
		},
		logout:function(){
			sessionService.destroy('user');
			sessionService.destroy('token');
			$location.path('/login');
		},
		
		islogged:function(){
			var $checkSessionServer=$http.post('http://asistencia.utbweb.co/token');
			return $checkSessionServer;
		
		/*	if(sessionService.get('user')) return true;
			else return false;
		*/	
		}
	}

});