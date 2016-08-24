angular.module('cellGameApp')
	.provider('routes', ['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('home', {
			url : '/',
			templateUrl: function($stateParams) {
					return 'home.html'
			},
			controller: 'commonController as ctrl'
		});
		$urlRouterProvider.otherwise('/');
		this.$get = function(){
			return {};
		}
	}
	])