angular.module("Portal")
  .controller("customFactoryController", ['$http', '$stateParams', '$scope', '$rootScope','$location', '$state','customFactory',
      function($http, $stateParams, $scope, $rootScope, $location, $state,customFactory){
      	var vm = this;
      	vm.page = {};
      	vm.page.data = {};
      	vm.page.data.example1 = customFactory.sayHello('World');
      	vm.page.data.example2 = customFactory.sayGoodbye('World');
}]);

angular.module("Portal")
.factory('customFactory',function(){
	var factory = {};
	factory.sayHello = function(text){
		return "Factory says \"Hello " + text + "\"";
	};
	factory.sayGoodbye = function(text){
		return "Factory says \"Goodbye " + text + "\"";
	}
	return factory;
})