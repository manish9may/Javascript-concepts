'use strict';


angular.module('angularBaseUiApp')
.directive('angularFormValidation',['$rootScope',function($rootScope){
    return {
        require : ['angularFormValidation'],
        controller : function(){
            this.$formSubmitted = false;
        },
        compile : function($element,$attrs){
            return {
                post : function(scope,element,attrs,controllers){
                    var angularFormValidationCtrl = controllers[0];
                    var isFormInvalid = false;
                        var onSubmit = function(submitEvent){
                        		angularFormValidationCtrl.$formSubmitted = true;
                        		var isFirstInvalidDiv = true;
                                var $popoverElements = element.find('div._popoverControl');
                                $($popoverElements).each(function(){
                                    var $invalidInputElements = $(this).find('.ng-invalid');
                                    if($invalidInputElements.length>0){
                                            isFormInvalid = true;
                                            $(this).find(':input').addClass('error-border');
                                            if(isFirstInvalidDiv){
                                                $(this).find(':focusable').first().focus();
                                                 isFirstInvalidDiv = false;
                                            }
                                    }
                                });
                        		if(typeof submitEvent !== 'undefined'){
                        				if(isFormInvalid){
                        					var hcFormSubmitVal = attrs.hcFormSubmit;
                        					if(hcFormSubmitVal){
                        						scope[hcFormSubmitVal] = false;
                        					}
                        				}
                        			}else {
                        				return true;
                        		    }
                                return false;
                        }
                        scope.$on('refreshForm',function(){
          					angularFormValidationCtrl.$formSubmitted = false;
      					});
                        scope.$on('onSubmit', function() {
                            onSubmit();
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