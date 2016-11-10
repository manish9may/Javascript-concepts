angular.module("Portal")
  .controller("navigationController", ['$http', '$stateParams', '$scope', '$rootScope','$location', '$state',
      function($http, $stateParams, $scope, $rootScope, $location, $state){
      	var vm = this;
      	vm.navigate = function(state){
      		$state.go(state);
      	}
 }]);