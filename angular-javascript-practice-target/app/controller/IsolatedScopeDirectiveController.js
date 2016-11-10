angular.module("Portal")
  .controller("isolatedScopeDirectiveController", ['$http', '$stateParams', '$scope', '$rootScope','$location', '$state',
      function($http, $stateParams, $scope, $rootScope, $location, $state){
    	 $scope.movie = "Ice Age";
    	 $scope.rating = 5;  	
    	 $scope.display = function(movie){
    	 	console.log("Movie : " + movie);
    	 }
}]);

angular.module("Portal")
.directive('movieIsolatedDirective',function(){
	var directive = {};
	directive.scope = {
		movie : '=',
		rating : '@',
		display : '&'
	};
	directive.restric = 'E';
	directive.template ="<div>Movie title : {{movie}}</div>"+
        "Type a new movie title : <input type='text' ng-model='movie' class = 'form-control vert-offset-top-1 vert-offset-bottom-1'/>"+
        "<div>Movie rating : {{rating}}</div>"+
        "Rate the movie : <input type='text' ng-model='rating' class = 'form-control vert-offset-top-1'/>"+
        "<div class = 'vert-offset-top-1'><button ng-click='display()' class = 'btn btn-primary'>View Movie</button></div>";
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
})
