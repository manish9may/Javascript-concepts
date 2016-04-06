angular.module("angularUiApp")
  .controller("AngularUIFormCtrl", ['$http', '$stateParams', '$scope', '$rootScope','$location','workflowConfig', '$state',"WorkflowService",
      function($http, $stateParams, $scope, $rootScope, $location, config, $state,WorkflowService){
      	var vm = this;
            $scope.page.data.selectBox = 'option2';
            $scope.page.data.options = [];
            $scope.page.data.options = [{
                  name : 'Options 1',
                  value : 'option1'
            },{
                  name : 'Options 2',
                  value : 'option2'
            },{
                  name : 'Options 3',
                  value : 'option3'
            },{
                  name : 'Options 4',
                  value : 'option4'
            },{
                  name : 'Options 5',
                  value : 'option5'
            },{
                  name : 'Options 6',
                  value : 'option6'
            }];
            $scope.submit = {
                  'success' : function(reponse){
                        console.log(reponse)
                  },
                  'error' : function(reponse){
                        console.log(reponse)
                  }
            }
      	$scope.angularUIFormSubmit = function(form){
      		if(form.$invalid) {
      			$rootScope.$broadcast('onSubmit');
      		}else{
      			$scope.submit = true;
      		}
      	}
 }]);