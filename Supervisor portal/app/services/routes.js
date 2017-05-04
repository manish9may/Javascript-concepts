angular.module('supervisorApp')
.provider('routes', ['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home',{
		url : '/home',
		templateUrl : function($stateParams){
			return 'views/home.html'
		},
		controller : 'homeController as homectrl',
		resolve : {
			workersJson : ['clientService',function(clientService){
				return clientService.getWorkersJson().then(response => response.data);
			}]
		}
	});
	$urlRouterProvider.otherwise('/home');
	this.$get = function(){
		return {};
	};
}]);