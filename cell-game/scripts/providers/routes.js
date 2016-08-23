angular.module('cellGameApp')
	.provider('routes', ['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('home', {
			url : '/workflow/section/home',
			templateUrl: function($stateParams) {
					return '/views/home.html'
			},
			controller: 'commonController as ctrl'
		});
		$urlRouterProvider.otherwise('/workflow/section/home');
		this.$get = function(){
			return {};
		}
	}
	])