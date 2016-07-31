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
    	 $translateProvider.translations(locale,messages);
		 $translateProvider.preferredLanguage(locale);
    }])
    .value('dateFormat', 'MM/DD/YYYY').run(function() {

    });
angular.module('baseApp')
	.provider('routes', ['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
			$stateProvider.state('home', {
			url : '/workflow/section/home',
			templateUrl: function($stateParams) {
					return '/production-env/views/home.html'
			},
			controller: 'commonWorkflowController'
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

 }]);