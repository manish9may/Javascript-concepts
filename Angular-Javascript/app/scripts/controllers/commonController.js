angular.module("angularUiApp")
  .controller("CommonWorkflowController", ['$http', '$stateParams', '$scope', '$rootScope','$location','workflowConfig', '$state',"WorkflowService",
      function($http, $stateParams, $scope, $rootScope, $location, config, $state,WorkflowService){
      	$scope.page = {
      		data : {}
      	};

 }]);