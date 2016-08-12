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