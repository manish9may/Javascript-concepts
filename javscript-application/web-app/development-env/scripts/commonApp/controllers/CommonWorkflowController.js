angular.module("commonApp")
  .controller("commonWorkflowController", ['$http', '$stateParams', '$scope', '$rootScope','$location','workflowConfig', '$state',
      function($http, $stateParams, $scope, $rootScope, $location, config, $state){
      	$rootScope.pageName = $state.current.name;
 }]);