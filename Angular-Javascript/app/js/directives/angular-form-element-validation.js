'use strict';

angular.module('angularBaseUiApp')
.directive('angularFormElementValidation',['$interpolate','$timeout',function($interpolate,$timeout){
    return {
        require : ['^form','^angularFormValidation'],
        template: '<div angular-element-popover type="redPopover" trigger="manual"><div class="_popoverControl redPopover"><ng-transclude></ng-transclude></div></div>',
        replace: true,
        transclude : true,
        controller : ['$scope',function($scope){
            
        }],
        compile : function($element,$attrs){
            return {
                post : function(scope,element,attrs,controllers){
                    var hcFormValidationCtrl = controllers[1],
                        hcFormCtrl = controllers[0],
                        $popoverElements = element.find('div._popoverControl'),
                        formObj = scope.$eval(hcFormCtrl.$name),
                        inputFieldName = $interpolate(element.find('[name]').first().attr('name') || '')(scope),
                        isFocussed = function(){
                          return $popoverElements.find(document.activeElement).length > 0;
                        },
                        toggleErrorBorder = function(element, state){
                          var ele = element.find('[name]').first();
                            ele.toggleClass('error-border', state );
                        };                  
                        $popoverElements.bind('focusout',function(){
                            formObj[inputFieldName].isVisited = true;
                            toggleErrorBorder($popoverElements,formObj[inputFieldName].$invalid);
                            $popoverElements.popover('hide');
                        }).bind('focusin',function(){
                          (formObj[inputFieldName].$invalid && (formObj[inputFieldName].isVisited || hcFormValidationCtrl.$formSubmitted)) ? $popoverElements.popover('show') : false;
                        });
                        scope.$watch(function(){
                          if(angular.isUndefined(formObj) || angular.isUndefined(formObj[inputFieldName])){
                            return undefined;
                          }else{
                            return angular.toJson(formObj[inputFieldName].$error);
                          }
                        },function(error){
                            if(!angular.isUndefined(error) && error !== '{}'){
                                if(isFocussed()){
                                    toggleErrorBorder($popoverElements,true);
                                    $timeout(function(){
                                        $popoverElements.popover('show');
                                    });
                                }
                            }else{
                              toggleErrorBorder($popoverElements,false);
                              $timeout(function(){
                                  $popoverElements.popover('hide');
                                });
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