angular.module('Portal')
.provider('routes',['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('components',{
		url : '/components',
		templateUrl : function($stateParams){
			return '/view/content/partial/components.html'
		}
	});
	$stateProvider.state('components.accordion',{
			url : '/accordion',
			templateUrl : function($stateParams){
				return '/view/content/partial/accordion.html'
			},
			controller : 'accordionController',
			controllerAs : 'accordionCtrl'
	});
	$stateProvider.state('components.alert',{
			url : '/alert',
			templateUrl : function($stateParams){
				return '/view/content/partial/alert.html'
			},
			controller : 'alertController',
			controllerAs : 'alertCtrl'
	});
	$stateProvider.state('modules',{
		url : '/modules',
		templateUrl : function($stateParams){
			return '/view/content/partial/modules.html'
		}
	});
	$stateProvider.state('modules.customfilters',{
		url : '/customfilters',
		templateUrl : function($stateParams){
			return '/view/content/partial/customfilters.html'
		},
		controller : 'customfiltersController',
		controllerAs : 'customfiltersCtrl'
	});
	$stateProvider.state('modules.customFactory',{
		url : '/customFactory',
		templateUrl : function($stateParams){
			return '/view/content/partial/customFactory.html'
		},
		controller : 'customFactoryController',
		controllerAs : 'customFactoryCtrl'
	});
	$stateProvider.state('modules.customService',{
		url : '/customService',
		templateUrl : function($stateParams){
			return '/view/content/partial/customService.html'
		},
		controller : 'customServiceController',
		controllerAs : 'customServiceCtrl'
	});
	$stateProvider.state('modules.defaultScopeDirective',{
		url : '/defaultScopeDirective',
		templateUrl : function($stateParams){
			return '/view/content/partial/defaultScopeDirective.html'
		},
		controller : 'defaultScopeDirectiveController'/*,
		controllerAs : 'defaultScopeDirectiveCtrl'*/
	});
	$stateProvider.state('modules.inheritScopeDirective',{
		url : '/inheritScopeDirective',
		templateUrl : function($stateParams){
			return '/view/content/partial/inheritScopeDirective.html'
		},
		controller : 'inheritScopeDirectiveController'/*,
		controllerAs : 'defaultScopeDirectiveCtrl'*/
	});
	$stateProvider.state('modules.isolatedScopeDirective',{
		url : '/isolatedScopeDirective',
		templateUrl : function($stateParams){
			return '/view/content/partial/isolatedScopeDirective.html'
		},
		controller : 'isolatedScopeDirectiveController'/*,
		controllerAs : 'defaultScopeDirectiveCtrl'*/
	});
	$stateProvider.state('modules.interpolate',{
		url : '/interpolate',
		templateUrl : function($stateParams){
			return '/view/content/partial/interpolate.html'
		},
		controller : 'interpolateController',
		controllerAs : 'interpolateCtrl'
	});
	
	$stateProvider.state('modules.sceService',{
		url : '/sceService',
		templateUrl : function($stateParams){
			return '/view/content/partial/sceService.html'
		},
		controller : 'sceServiceController',
		controllerAs : 'sceServiceCtrl'
	});
	$stateProvider.state('modules.portalHttpInterceptor',{
		url : '/portalHttpInterceptor',
		templateUrl : function($stateParams){
			return '/view/content/partial/portalHttpInterceptor.html'
		},
		controller : 'portalHttpInterceptorController',
		controllerAs : 'portalHttpInterceptorCtrl'
	});
	//$urlRouterProvider.otherwise('/components/accordion');
	this.$get = function(){
		return {

		};
	}
}]);