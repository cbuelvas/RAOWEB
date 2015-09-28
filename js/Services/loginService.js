'use strict';
app.factory('loginService',function($http, $location, sessionService){
	return{
		login:function(data,scope){
			scope.data = {};
			var $promise=$http.post('http://asistencia.utbweb.co/token',data); //send data
			console.log("asasdabsdasd:",data);
			$promise.then(function(msg){
				var uid=msg.data;
				if(uid){
					sessionService.set(data.username,uid);
					$location.path('/home');
				}	       
				else  {
					scope.msgtxt='incorrect information';
					$location.path('/login');
				}				   
			});
		},
		logout:function(){
			sessionService.destroy(scope.data.username);
			$location.path('/login');
		},
		islogged:function(){
			var $checkSessionServer=$http.post('http://asistencia.utbweb.co/token');
			return $checkSessionServer;
			/*
			if(sessionService.get('user')) return true;
			else return false;
			*/
		}
	}

});