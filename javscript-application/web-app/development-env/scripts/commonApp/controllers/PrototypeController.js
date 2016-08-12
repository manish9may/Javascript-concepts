angular.module("commonApp")
  .controller("prototypeCtrl", ['$http', '$stateParams', '$scope', '$rootScope','$location','workflowConfig', '$state',
      function($http, $stateParams, $scope, $rootScope, $location, config, $state){
      	var vm = this;
      	vm.info = {
      		id : 'equationCtrl'
      	};
      	var Calculator = function(eqCtrlId){
      		this.equationCtrl = document.getElementById(eqCtrlId);
      		this.resultsValue = 0;
      	};
      	Calculator.prototype = {
      		setEquationCtrl : function(cmd){
      			if(cmd === 'ac'){
      				this.equationCtrl.value = '';
      				return;
      			}
      			switch(cmd){
      				case 'sin':
      				this.equationCtrl.value += cmd + '(';
      				break;
      				case 'tan':
      				this.equationCtrl.value += cmd + '(';
      				break;
      				case 'log':
      				this.equationCtrl.value += cmd + '(';
      				break;
      				default :
      				this.equationCtrl.value += cmd;
      			}
      			
      		},
      		engine : {
      			exec : function(ctrl){
      				try{
      					ctrl.equationCtrl.value = eval(this.parse(ctrl.equationCtrl.value));
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
      		}
      	}
      	setTimeout(function(){
      		vm.calculator = new Calculator(vm.info.id);	
      	})
      	
 }]);