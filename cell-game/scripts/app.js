angular.module('cellGameApp',['ui.router','pascalprecht.translate'])
.config(['$httpProvider', '$translateProvider','routesProvider', function($httpProvider, $translateProvider,routesProvider) {
	 $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
     $translateProvider.translations(locale,messages);
	 $translateProvider.preferredLanguage(locale);
}]);