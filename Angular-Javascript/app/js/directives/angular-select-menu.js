'use strict';

angular.module('angularBaseUiApp')
.directive('angularSelectMenu',['$interpolate','$timeout',function($interpolate,$timeout){
    return {
        require: ['ngModel','select', 'angularSelectMenu', '?ngOptions'],
        scope: {
          disabled: '=ngDisabled',
          readonly : '=ngReadonly'
        },
        controller : ['$scope','$element','$timeout',function($scope,$element,$timeout){
            this.initSelectMenu = function(options){
                $element.selectmenu(options);
            }
            this.removeUnknownOption = function(){
              $timeout(function(){
                $element.find($element.find('option[value^="?"][value$="?"][value!="?"]')).remove();
              });
              
            }
            this.refreshSelectMenu = function(){
              $timeout(function(){
                $element.selectmenu('refresh');  
              });
            }
            this.disableSelectMenu = function(){
              $timeout(function(){
                $element.selectmenu('disable');
              });
            };
            this.enableSelectMenu = function(){
              $timeout(function(){
                $element.selectmenu('enable');
              });
            };
        }],
        compile : function($element,$attrs){
            return {
                post : function(scope,element,attrs,controllers){
                   var ngModelCtrl = controllers[0],
                    hcSelectMenuCtrl = controllers[2];
                    hcSelectMenuCtrl.initSelectMenu({
                        create: function( event, ui ){
                            hcSelectMenuCtrl.removeUnknownOption();
                            hcSelectMenuCtrl.refreshSelectMenu();
                        },
                        change: function( event, ui ){
                            ngModelCtrl.$setViewValue(ui.item.value);
                        }
                    });
                    ngModelCtrl.$render = function(){
                      hcSelectMenuCtrl.refreshSelectMenu();
                    };
                    scope.$watch('disabled', function(newVal){
                      var disabled = !!newVal;
                      if(disabled){
                          hcSelectMenuCtrl.disableSelectMenu();
                      }
                      else{
                          hcSelectMenuCtrl.enableSelectMenu();
                      }
                    });
                    scope.$watch('readonly', function(newVal){
                      var readonly = !!newVal;
                      if(readonly){
                          hcSelectMenuCtrl.disableSelectMenu();
                      }
                      else{
                        hcSelectMenuCtrl.enableSelectMenu();
                      }
                    });
                    scope.$watch(function(){
                      var childrenText =  element.children().text();
                      return childrenText;
                    },function(){
                        hcSelectMenuCtrl.refreshSelectMenu();
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