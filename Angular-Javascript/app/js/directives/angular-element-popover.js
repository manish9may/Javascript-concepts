'use strict';


angular.module('angularBaseUiApp')
.directive('angularElementPopover',['angularElementPopoverService',function(angularElementPopoverService){
    return {
        controller : function(){
        },
        compile : function($element,$attrs){
            return {
                post : function(scope,element,attrs,controllers){
                    attrs.$observe('trigger', function() {
                    	angularElementPopoverService.destroyPopover(element);
                    	angularElementPopoverService.initPopover(scope, element, attrs);
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