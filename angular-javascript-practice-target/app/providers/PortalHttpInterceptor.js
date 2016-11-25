angular.module('Portal')
.provider('portalHttpInterceptor',function() {
	var portalHttpInterceptor = {},$q,$rootScope;
	portalHttpInterceptor.request = function(config){
		return config || $q.when(config);
	}
	portalHttpInterceptor.requestError = function(rejection){
		return $q.reject(rejection);
	}
	portalHttpInterceptor.response = function(response){
		if(response.config.url.indexOf('portalHttpInterceptor.html') > -1){
			$rootScope.pageName = "portalHttpInterceptor.html";
		}
		return response || $q.when(response);
	}
	portalHttpInterceptor.responseError = function(rejection){
		return $q.reject(rejection);
	}
	
	this.$get = ['$q','$rootScope',function(_$q,_$rootScope){
		$q = _$q;
		$rootScope = _$rootScope;
		return portalHttpInterceptor;
	}]
});