angular.module("commonApp")
  .controller("moduleCtrl", ['$http', '$stateParams', '$scope', '$rootScope','$location','workflowConfig', '$state',
      function($http, $stateParams, $scope, $rootScope, $location, config, $state){
      	var vm = this;
      	vm.info = {
      		id : 'equationCtrl'
      	};
            var Calculator = function(){
                  var equationCtrl,resultsValue,
                  init = function(eqCtrlId){
                        equationCtrl = document.getElementById(eqCtrlId);
                        resultsValue = 0;
                        return this;
                  },
                  setEquationCtrl = function(cmd){
                        if(cmd === 'ac'){
                              equationCtrl.value = '';
                              return;
                        }
                        switch(cmd){
                              case 'sin':
                              equationCtrl.value += cmd + '(';
                              break;
                              case 'tan':
                              equationCtrl.value += cmd + '(';
                              break;
                              case 'log':
                              equationCtrl.value += cmd + '(';
                              break;
                              default :
                              equationCtrl.value += cmd;
                        }
                  },
                  engine = {
                        exec : function(){
                              try{
                                    equationCtrl.value = eval(this.parse(equationCtrl.value));
                              }catch(e){
                                    return e;
                              }
                        },
                        parse : function(value){
                              if(value){
                                    value = this.replaceFun(value,'sin','Math.sin');
                                    value = this.replaceFun(value,'log','Math.log');
                                    value = this.replaceFun(value,'tan','Math.tan');
                                    return value;
                              }
                              return 0;
                        },
                        replaceFun : function(value,regex,fun){
                              return value.replace(new RegExp(regex,'g'),fun);
                        }
                  };
                  return {
                        init : init,
                        setEquationCtrl : setEquationCtrl,
                        engine : engine
                  }

            }();
           setTimeout(function(){
                  vm.calculator = Calculator.init(vm.info.id);     
            })
      	
 }]);