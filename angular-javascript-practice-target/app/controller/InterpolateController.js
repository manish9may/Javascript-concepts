angular.module("Portal")
  .controller("interpolateController", ['$http', '$stateParams', '$scope', '$rootScope','$location', '$state','$interpolate','$parse',
      function($http, $stateParams, $scope, $rootScope, $location, $state,$interpolate,$parse){
      	var vm = this;
      	vm.page = {};
      	vm.page.data = {};

      	$scope.exampleName = 'Interpolate Service';
      	var string = 'My Name is {{exampleName}}';
      	vm.page.data.result = $interpolate(string)($scope);

      	$scope.exampleName2 = 'Parse Service';
      	$parse('exampleName2').assign($scope,'Parse Service Success');
}]);