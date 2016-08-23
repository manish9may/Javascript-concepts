'use strict';
angular
    .module('baseApp', ['checklist-model', 'ui.slider', 'ui.bootstrap', 'blueimp.fileupload', 'ui.utils', 'ngAnimate', 'datatables', 'datatables.bootstrap', 'ngInputModified', 'ct.ui.router.extras', 'ui.router', 'ngMessages', 'ngIdle', 'ajoslin.promise-tracker', 'unsavedChanges', 'pascalprecht.translate', 'duScroll', 'readMore', 'ui.jq', 'ngSanitize'])
    .constant('characterWhiteList', {
        charArray: ['A-Z', 'a-z', '0-9', ',', '\\-', '"', '!', '#', '&', '(', ')', '.', '/', ':', ';', '=', '?', '@', '^', '_', '`', '{', '|', '}', '~', ' ', '\'', '\\[', '\\]', '\\\\']
    })
    .constant('workflowConfig', {

    })
    .config(['$httpProvider', '$translateProvider','routesProvider', function($httpProvider, $translateProvider,routesProvider) {
    	 $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
       $httpProvider.interceptors.push('httpInterceptor');
    	 $translateProvider.translations(locale,messages);
		 $translateProvider.preferredLanguage(locale);
    }])
    .value('dateFormat', 'MM/DD/YYYY').run(function() {

    })
    .run(['$rootScope', '$location', '$http', 'workflowConfig','$uibModalStack','$uibModal','$stateParams', '$anchorScroll','$state','$timeout',function($rootScope, $location,
        $http, config,$uibModalStack,$uibModal,$stateParams,$anchorScroll,$state,$timeout) {    
    }
    ]);
angular.module("baseApp")
.factory('httpInterceptor',['$q','$timeout',function($q,$timeout){
	 // The delay will be incremented with each request.
	var delay = 0;
	return {
		// On request success
		 request: function (config) {
		 	// Return the config or wrap it in a promise if blank.
        	return config || $q.when(config);
		 },
		 // On request failure
		 requestError: function (rejection) {
		 	// Return the promise rejection.
        	return $q.reject(rejection);
		 },
		 // On response success
		 response: function (response) {
		 	var latency = $q.defer();
		 	// Return the response or promise.
		 	$timeout(function(){
		 		latency.resolve(response);
		 		response = latency = null;
		 	},(delay += 1500),false)
		 	//return response || $q.when(response);
		 	return latency.promise;
		 },
		 // On response failture
		 responseError: function (rejection) {
		 	// Return the promise rejection.
		 	return $q.reject(rejection);
		 }

	}
}
]);
angular.module('baseApp')
	.provider('routes', ['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
			$stateProvider.state('home', {
			url : '/workflow/section/home',
			templateUrl: function($stateParams) {
					return '/production-env/views/home.html'
			},
			controller: 'commonWorkflowController'
		});
		$stateProvider.state('designPatterns', {
			url : '/workflow/section/designPatterns',
			templateUrl: function($stateParams) {
					return '/production-env/views/design-patterns/design-patterns.html'
			},
			controller: 'commonWorkflowController'
		});
		$stateProvider.state('designPatterns.prototypePattern', {
			url : '/prototypePattern',
			templateUrl: function($stateParams) {
					return '/production-env/views/design-patterns/pototype-pattern.html'
			}
		});
		$stateProvider.state('designPatterns.modulePattern', {
			url : '/modulePattern',
			templateUrl: function($stateParams) {
					return '/production-env/views/design-patterns/module-pattern.html'
			}
		});
		$urlRouterProvider.otherwise('/workflow/section/home');
		this.$get = function(){
			return {};
		}
	}
	])
angular.module("baseApp")
  .controller("navigationController", ['$http', '$stateParams', '$scope', '$rootScope','$location','workflowConfig', '$state',
      function($http, $stateParams, $scope, $rootScope, $location, config, $state){

 }]);
angular.module('commonApp',['baseApp']);
angular.module("commonApp")
  .controller("commonWorkflowController", ['$http', '$stateParams', '$scope', '$rootScope','$location','workflowConfig', '$state',
      function($http, $stateParams, $scope, $rootScope, $location, config, $state){
      	$rootScope.pageName = $state.current.name;
 }]);
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