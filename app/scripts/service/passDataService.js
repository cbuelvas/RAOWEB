'use strict';
yapp.factory('passDataService',function($rootScope){
  var service = {};
  service.data = false;
  service.sendData = function(data){
      this.data = data;
      $rootScope.$broadcast('data_shared');
	  console.log('envia', data);
  };
  service.getData = function(){
	  	  console.log('recibe', this.data);

    return this.data;
  };
  return service;
});