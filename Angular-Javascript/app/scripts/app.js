angular.module('angularUiApp',['angularBaseUiApp'])
.constant('workflowConfig', {

})
.config(["$httpProvider", "$stateProvider", "workflowConfig","$provide","$urlRouterProvider", function($httpProvider, $stateProvider, config, $provide,$urlRouterProvider) {
			$stateProvider.state('a', {
				url : '/workflow/section/page001',
				templateUrl: function($stateParams) {
					return '/views/page001.html'
				},
				controller: 'CommonWorkflowController'
			});
			
			$urlRouterProvider
			.when('/','/workflow/section/page001')
			.otherwise('/');
}])
.run(['$rootScope', '$location', '$http', 'workflowConfig','$modalStack','$modal','$stateParams', '$anchorScroll',function($rootScope, $location, $http, config,$modalStack,$modal,$stateParams,$anchorScroll) {	  
	$rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
		
		var top = $modalStack.getTop();
        if (top) {
          $modalStack.dismiss(top.key);
        }
        $anchorScroll();
	});
}]);

