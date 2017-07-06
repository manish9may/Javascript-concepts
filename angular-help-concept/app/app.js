angular.module('baseApp',['configurableModule'])
.config(['configurableServiceProvider',function(configurableServiceProvider){
	configurableServiceProvider.setPageTitle('Custom Directive');
}])
.run(['$rootScope','configurableService',function($rootScope,configurableService){
	$rootScope.title = configurableService.title;
	configurableService.initRoutes();
}])