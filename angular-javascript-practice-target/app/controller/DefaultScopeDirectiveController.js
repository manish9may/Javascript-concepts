angular.module("Portal")
  .controller("defaultScopeDirectiveController", ['$http', '$stateParams', '$scope', '$rootScope','$location', '$state',
      function($http, $stateParams, $scope, $rootScope, $location, $state){
      	$scope.movie = "Ice Age";
}]);

angular.module("Portal")
.directive('movieDefaultDirective',function(){
	var directive = {};
	directive.scope = false;
	directive.restrict = 'E';
	directive.template = '<p>Movie title : {{movie}}</p>Type a new movie title : <input type="text" ng-model="movie" class = "form-control"/>';
	directive.controller = ['$scope',function($scope){

	}];
	directive.compile = function($element,$attrs){
		return {
			pre : function($scope,$element,$attrs,$controllers){

			},
			post : function($scope,$element,$attrs,$controllers){

			}
		}

	}	
	return directive;
});

