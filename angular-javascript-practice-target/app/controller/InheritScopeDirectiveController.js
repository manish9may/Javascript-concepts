angular.module("Portal")
  .controller("inheritScopeDirectiveController", ['$http', '$stateParams', '$scope', '$rootScope','$location', '$state',
      function($http, $stateParams, $scope, $rootScope, $location, $state){
      	$scope.movie = "Ice Age";
}]);

angular.module("Portal")
.directive('movieInheritDirective',function(){
	var directive = {};
	directive.scope = true;
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

