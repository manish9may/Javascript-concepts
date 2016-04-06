angular.module("angularUiApp")
.service("WorkflowService", ["$http", "$q",'workflowConfig','$location','$rootScope','$state','$stateParams',
	function($http, $q, config, $location,$rootScope,$state,$stateParams){
		var vm = this;
		vm.genericPromise = function(promise){
				var deferred = $q.defer();
				promise.success(function(data){
					deferred.resolve(data);
				});
				promise.error(function(error){
					deferred.reject(error);
				});
				return deferred.promise;			
		};
	}]);