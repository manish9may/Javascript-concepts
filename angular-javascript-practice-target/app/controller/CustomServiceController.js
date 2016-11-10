angular.module("Portal")
  .controller("customServiceController", ['$http', '$stateParams', '$scope', '$rootScope','$location', '$state','customService','customServiceFactory',
      function($http, $stateParams, $scope, $rootScope, $location, $state,customService,customServiceFactory){
      	var vm = this;
      	vm.page = {};
      	vm.page.data = {};
      	vm.page.data.example1 = customServiceFactory.sayHello('World');
      	vm.page.data.example2 = customService.sayWait('World');
      	vm.page.data.example3 = customServiceFactory.sayGoodbye('World');
}]);

angular.module("Portal")
.service('customServiceFactory',function(){
	var service = {};
	service.sayHello = function(text){
		return "Service says \"Hello " + text + "\"";
	};
	service.sayGoodbye = function(text){
		return "Service says \"Goodbye " + text + "\"";
	}
	return service;
});

angular.module("Portal")
.service('customService',function(){
	this.sayWait = function(text){
		return "Service says \"Wait " + text + "\"";
	}
})