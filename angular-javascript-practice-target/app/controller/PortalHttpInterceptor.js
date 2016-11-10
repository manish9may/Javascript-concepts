angular.module("Portal")
  .controller("portalHttpInterceptorController", ['$http', '$stateParams', '$scope', '$rootScope','$location', '$state',
      function($http, $stateParams, $scope, $rootScope, $location, $state){
      	var vm = this;
      	vm.page = {};
      	vm.page.data = {};
      	vm.page.data.oneAtATime = true;
    
 }]);