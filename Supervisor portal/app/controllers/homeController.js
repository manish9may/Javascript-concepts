angular.module('supervisorApp')
.controller('homeController',['$scope','$rootScope','workersJson',function($scope,$rootScope,workersJson){
	var vm = {}
	this.vm = vm;
	vm.page = {}
	vm.page.data = {};
	vm.page.data.supervisorName = 'John';
	function modifyList(list){

		return list.map((data,index)=>{
			if(data.taskAssigned){
				data.startTime = new Date().getTime(); 
			}
			return data;
		});
	}
	vm.page.data.workers = modifyList(workersJson.workers);
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
	ringWorker.postMessage({workers : vm.page.data.workers,cmd : "task"});
	ringWorker.addEventListener('message',function(e){
	var data = e.data;
	switch (data.cmd) {
		case "ringTheBell" :
			
		break;
		case "task" :
			var workers = data.workers;
			$scope.$apply(function(){
				vm.page.data.workers = workers;
			});
		break;

	}
	
},false);
	vm.ringTheBell = function(){ 
		ringWorker.postMessage({workers : vm.page.data.workers,cmd : "ringTheBell"});
	}
}])