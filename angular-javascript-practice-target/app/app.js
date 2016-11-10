'use strict';
angular.module('Portal',['ngAnimate', 'ngSanitize', 'ui.bootstrap','ui.router','pascalprecht.translate','ui.jq'])
.config(['$httpProvider', '$translateProvider','$windowProvider','routesProvider', function($httpProvider, $translateProvider,$windowProvider,routesProvider) {
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	var $window = $windowProvider.$get();
	$translateProvider.translations($window.locale,$window.messages);
	$translateProvider.preferredLanguage($window.locale);
	$httpProvider.interceptors.push('portalHttpInterceptor')
}]);