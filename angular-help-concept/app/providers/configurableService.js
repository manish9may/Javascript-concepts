angular.module('configurableModule',['ngRoute'])
.provider('configurableService',['$routeProvider',function($routeProvider){
	var config = {};
	config.title = '';
	
	this.setPageTitle = function(title){
		config.title = title;
	}
	config.initRoutes = function(){
		$routeProvider
			.when('/home',{
				templateUrl : 'views/home.html',
				controller : 'homeController',
				controllerAs: 'homeCtrl'
			})
			.otherwise({
				redirectTo : '/home'
			});
	}
	this.$get = ['$rootScope','$http',function($rootScope,$http){
		return config;
	}]
}]);