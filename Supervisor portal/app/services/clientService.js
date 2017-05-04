angular.module('supervisorApp')
.service('clientService', ['$http','$q', function($http,$q){
	this.getWorkersJson	 = function(){
		return $http.get('/data/workersJson.json');
	}
}]);