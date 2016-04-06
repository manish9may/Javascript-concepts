'use strict';

angular.module('angularBaseUiApp')
.directive('angularFormSubmit',['$rootScope',function($rootScope){
    return {
        scope : {
        	submit : '=angularFormSubmit'
        },
        controller : function(){
 
        },
        compile : function($element,$attrs){
            return {
                post : function(scope,element,attrs,controllers){
                  scope.$watch('submit', function (newValue) {
	                  	if(newValue === true){
	                  		element.submit();
	                  	}
                	});
            	}
        	}
        },
        link : {
                    pre : function(scope,element,attrs,controllers){},
                    post : function(scope,element,attrs,controllers){}
             }
            };
}]);