angular.module('supervisorApp')
.controller('homeController',['$scope','$rootScope','workersJson',function($scope,$rootScope,workersJson){
	var vm = {}
	this.vm = vm;
	vm.page = {}
	vm.page.data = {};
	vm.page.data.supervisorName = 'John';
	vm.page.data.workers = workersJson.workers;
	vm.page.data.selectedIndex = -1;
	var resetInfo = function(){
		vm.page.data.taskName = undefined;
		vm.page.data.taskDuration = undefined;
		vm.page.data.selectedIndex = - 1;
		vm.page.data.selectedAvailableWorker = undefined;
	}
	vm.selectWorker = function(worker,selectedIndex){
		resetInfo();
		if(worker.taskAssigned === ''){
			vm.page.data.selectedAvailableWorker = worker.name;	
			vm.page.data.selectedIndex = selectedIndex;
		}
	}
	vm.assignTask = function(){
		vm.page.data.workers[8]['taskAssigned'] = vm.page.data.taskName;
		vm.page.data.workers[8]['taskDuration'] = vm.page.data.taskDuration;
		resetInfo();

	}	
	vm.ringTheBell = function(){ 
		ringWorker.postMessage(vm.page.data.workers);
	}
}])