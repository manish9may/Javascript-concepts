angular.module("Portal")
  .controller("alertController", ['$http', '$stateParams', '$scope', '$rootScope','$location', '$state',
      function($http, $stateParams, $scope, $rootScope, $location, $state){
      	var vm = this;
      	vm.page = {};
      	vm.page.data = {};
      	vm.page.data.alerts = [ 
      	{ type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    	{ type: 'success', msg: 'Well done! You successfully read this important alert message.' }];

    	vm.closeAlert  = function($index){
    		vm.page.data.alerts.splice($index,1);
    	}
    	vm.addAlert = function() {
    		vm.page.data.alerts.push({msg: 'Another alert!'});
  		};
 }]);