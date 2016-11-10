angular.module("Portal")
  .controller("accordionController", ['$http', '$stateParams', '$scope', '$rootScope','$location', '$state',
      function($http, $stateParams, $scope, $rootScope, $location, $state){
      	var vm = this;
      	vm.page = {};
      	vm.page.data = {};
      	vm.page.data.oneAtATime = true;
      	vm.page.data.status = {
      		isFirstOpen : true,
      		isCustomHeaderOpen : false,
      		isFirstDisabled : false
      	};
      	vm.page.data.groups = [{
	      title: 'Dynamic Group Header - 1',
	      content: 'Dynamic Group Body - 1'
	    },
	    {
	      title: 'Dynamic Group Header - 2',
	      content: 'Dynamic Group Body - 2'
	    }];
	    vm.page.data.items = ['Item 1', 'Item 2', 'Item 3'];
	    vm.addItem = function(){
	    	var newItemNo = vm.page.data.items.length + 1;	
	    	vm.page.data.items.push('Items '+newItemNo);
	    }
 }]);