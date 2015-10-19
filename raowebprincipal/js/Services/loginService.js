'use strict';
app.factory('loginService', function($http, $location,  sessionService){
	var sesionName; //save key value for sessions
	var sesionToken; //save key value for sessions
	return{
		login:function(data,scope){
			scope.data = {};
			var $promise=$http.post('http://asistencia.utbweb.co/token',data); //send data
			console.log("asasdabsdasd:",data);
			$promise.then(function(msg){
				var uid=msg.data;
				if(uid){
					console.log('entro');
					sessionService.set('user',data.username);
					sessionService.set('token',uid);
				sesionName = data.username;
					sesionToken  = uid;
				console.log(sesionName);	$location.path('/home');
				}	       
				else  {
					scope.msgtxt='incorrect information';
					$location.path('/login');
				}				   
			});
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