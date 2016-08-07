angular.module("baseApp")
.factory('httpInterceptor',['$q','$timeout',function($q,$timeout){
	 // The delay will be incremented with each request.
	var delay = 0;
	return {
		// On request success
		 request: function (config) {
		 	// Return the config or wrap it in a promise if blank.
        	return config || $q.when(config);
		 },
		 // On request failure
		 requestError: function (rejection) {
		 	// Return the promise rejection.
        	return $q.reject(rejection);
		 },
		 // On response success
		 response: function (response) {
		 	var latency = $q.defer();
		 	// Return the response or promise.
		 	$timeout(function(){
		 		latency.resolve(response);
		 		response = latency = null;
		 	},(delay += 1500),false)
		 	//return response || $q.when(response);
		 	return latency.promise;
		 },
		 // On response failture
		 responseError: function (rejection) {
		 	// Return the promise rejection.
		 	return $q.reject(rejection);
		 }

	}
}
]);