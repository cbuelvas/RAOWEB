        .module('app', [])
        .controller('appCtrl', ['$http', controladorPrincipal]);

    function controladorPrincipal($http){
        var vm=this;

        //inicializo un objeto en los datos de formulario
        vm.fdatos = {};
        
        // declaro la función enviar
        vm.enviar = function(){
          $http.post("recibe-formulario.php", vm.fdatos)
            .success(function(res){
              console.log(res);
              //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;
            });  
        }    
    }