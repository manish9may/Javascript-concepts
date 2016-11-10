angular.module('Portal')
.provider('portalHttpInterceptor',['$qProvider', function($q) {
	var portalHttpInterceptor = {};
	portalHttpInterceptor.request = function(config){
		return config || $q.when(config);
	}
	portalHttpInterceptor.requestError = function(rejection){
		return $q.reject(rejection);
	}
	portalHttpInterceptor.response = function(response){

		return response || $q.when(response);
	}
	portalHttpInterceptor.responseError = function(rejection){
		return $q.reject(rejection);
	}
	
	this.$get = function(){
		return portalHttpInterceptor;
	}
}]);