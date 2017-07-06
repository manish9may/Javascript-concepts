angular.module('cellGameApp',['pascalprecht.translate','ngSanitize'])
.config(['$httpProvider', '$translateProvider', function($httpProvider, $translateProvider) {
	 $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);