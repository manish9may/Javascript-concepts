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