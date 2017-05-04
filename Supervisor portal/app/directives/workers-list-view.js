angular.module('supervisorApp')
.directive('workersListView',[function(){
	var config = {};
	config.restrict = 'E';
	config.templateUrl = function(){
		return '/views/partial/workersListView.html'
	}
	config.scope = {
		worker : '=',
	    selectedWorker : '&',
	    assignTask : '&'
	}
	config.compile = function($element,$attrs){
		return {
			pre : function(scope,element,attrs){
				element.on('click',function(e){
					if(scope.worker.taskAssigned === ''){
						angular.element(element[0].querySelector('div.panel-body')).css('background-color', '#FFB6C1');	
						scope.$apply(function(){
							scope.selectedWorker();
						});
					}else{
						alert('Please Select Available Worker');
					}
				});	
			},
			post : function(scope,element,attrs){
				scope.$watch(function(){
					return scope.worker.taskAssigned;
				},function(){
					angular.element(element[0].querySelector('div.panel-body')).css('background-color', 'transparent');	
				})
			}
		}

	}
	return config;
}])