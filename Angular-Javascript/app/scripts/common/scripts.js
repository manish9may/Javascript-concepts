'use strict';

/**
 * @ngdoc overview
 * @name angularBaseUiApp
 * @description
 * # angularBaseUiApp
 *
 * Main module of the application.
 */
angular
  .module('angularBaseUiApp', ['checklist-model','ui.slider','ui.bootstrap','blueimp.fileupload','ui.utils','ngAnimate','datatables','datatables.bootstrap','ngInputModified','ct.ui.router.extras','ui.router','ngMessages','ngIdle', 'ajoslin.promise-tracker','unsavedChanges','pascalprecht.translate','duScroll','readMore','ui.jq','ngSanitize'])
  .constant('characterWhiteList', {
    charArray : ['A-Z','a-z','0-9',',','\\-','"','!','#','&','(',')','.','/',':',';','=','?','@','^','_','`','{','|','}','~',' ','\'','\\[','\\]','\\\\']
   })
    .constant('maxIdleTime',30*60)
    .constant('responseTime',30)
    .constant('masking', {
        dob : {maskAttr : '99/99/9999', initialViewVal : '__/__/____'},
        zip : {maskAttr : '99999', initialViewVal : '_____'},
        ssn : {maskAttr : '999-99-9999', initialViewVal : '___-__-____'},
        phone : {maskAttr : '999-999-9999', initialViewVal : '___-___-____'},
        ein : {maskAttr : '99-9999999', initialViewVal : '__-_______'},
        providerNpi : {maskAttr : '9999999999', initialViewVal : '__________'},
        tollFreeNumber : {maskAttr : '9-999-999-9999', initialViewVal : '_-___-___-____'}
      })
    .constant('chartGrayColor', '#e2e2e2')
  .config(['$httpProvider','$provide',function ($httpProvider, $provide) {
             
             $provide.decorator('$state', ['$delegate', '$stateParams', function($delegate, $stateParams) {
                 $delegate.forceReload = function() {
                     return $delegate.go($delegate.current, $stateParams, {
                         reload: true,
                         inherit: false,
                         notify: true
                     });
                 };
                 return $delegate;
             }]);
             
         }
     ])
.value('imageUrl','')
.value('dateFormat','MM/DD/YYYY').run(function(){
        
});

'use strict';

angular.module('angularBaseUiApp')
  .provider('templateURL', function () {
  	 var url = '/views/angular-templates/{directive}.html';
  	 var TemplateUrl = function(){
  	 	this.getURL = function(directive){
  	 		return url.replace('{directive}',directive);
  	 	}
  	 };
  	 this.setURL = function(u){
  	 	url = u;
  	 }
  	 this.$get = function(){
  	 	return new TemplateUrl();
  	 }
  });
angular.module('angularBaseUiApp')
  .service('angularElementPopoverService', function () {
  		this.initPopover = function(scope, element, attrs, options) {
  			var $popoverControl = element.find('._popoverControl'),
              	$popoverBody = element.find('._popoverContent'),
              	type = attrs.type || '',
              	defaultOptions = {
             		html: true,
             		content: function(){return $popoverBody.html();},
             		placement: attrs.placement || 'top',
             		trigger: attrs.trigger || 'focus',
             		animation: false,
             		container: attrs.container?(attrs.container === 'false' ? false : attrs.container) :'body',
             		template: '<div class="popover '+ type +'" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
              	},
              	_options = angular.extend({}, defaultOptions, options);
          		$popoverControl.popover(_options);
  		};
  		this.destroyPopover = function(element){
            var $popoverElement = element.find('div._popoverControl');
            $popoverElement.popover('destroy');
     	};
  });
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
'use strict';

angular.module('angularBaseUiApp')
.directive('angularAjaxFormSubmit',['$rootScope','$http','$q',function($rootScope,$http,$q){
    return {
        require: ['form','angularAjaxFormSubmit'],
        scope : {
            submit : '=angularAjaxFormSubmit'
        },
        controller : ['$scope',function($scope){
                var errors=[];
                var success=false;
                this.getMessage = function() {
                    return $scope.message;
                };
                this.getError=function(){
                  return errors;
                };
                this.setError=function(data){
                  errors=data;
                };
                this.getSuccess=function(){
                  return success;
                };
                this.setSuccess=function(data){
                  success=data;
                };
        }],
        compile : function($element,$attrs){
            return {
                post : function(scope,element,attrs,controllers){
                    var formCtrl=controllers[0],_resp,_options,
                        ajaxSubmitCtrl=controllers[1];
                        var _processError=function(data){
                                ajaxSubmitCtrl.setError(data);
                        };
                        var _processSuccess=function(data){
                          ajaxSubmitCtrl.setSuccess(data);
                        };
                        var _cleanUp=function(){
                            ajaxSubmitCtrl.setError([]);
                            ajaxSubmitCtrl.setSuccess(false);
                        };
                        var _defaultPreFn=function(){
                          var deferred = $q.defer();
                          deferred.resolve();
                          return deferred.promise;
                        };
                    var _submit = function(e){
                      if (e.preventDefault){
                            e.preventDefault();
                        }
                       var formData = new FormData($(element)[0]);
                       formData.append('file',null);
                        var _request = {
                            method : attrs.method,
                            url : attrs.action,
                            data : $(element).serialize(),
                            processData : false,
                            cache       : false,
                            contentType : true,
                            headers : {
                              'Content-Type'   : attrs.enctype || 'application/x-www-form-urlencoded'
                            }
                        };
                        if(!formCtrl.$valid){
                          $rootScope.$broadcast('onSubmit')
                          return false;
                        };
                        $http(_request).success(function(data, status, headers, config) {
                          _resp={
                              status:status,
                              data:data,
                              headers:headers,
                              config:config
                            };
                            _options.success(_resp);
                            _processSuccess(true);
                        }).error(function(data, status, headers, config) {
                           _resp={
                              status:status,
                              data:data,
                              headers:headers,
                              config:config
                            };
                            _options.error(_resp);
                            if(_resp.status === 400 || _resp.status === 500 ){
                                _processError(_resp.data);
                            }
                        });
                        return false;
                    };
                     _options={
                          pre:_defaultPreFn,
                          success:angular.noop,
                          error:angular.noop,
                    };
                    angular.extend(_options,scope.submit);
                    _cleanUp();
                    $(element).on('submit', _submit);
            }
        }
    },
        link : {
                    pre : function(scope,element,attrs,controllers){},
                    post : function(scope,element,attrs,controllers){}
             }
    };
}]);
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
  'use strict';

angular.module('angularBaseUiApp')
.directive('angularDatePicker', ['templateURL', function(templateURL) {
  return {
    controller : ['$scope','$timeout','$element',function($scope,$timeout,$element){
      var options = {
        maxYear : new Date().getFullYear(), 
        yearRange : 120,
        dateFormat: "dd/mm/yy"
      };
      var _imageOptions = {
          buttonImageOnly : true,
          showOn : 'button',
          buttonText : 'Select Date'
      }
      $timeout(function(){
        options = angular.extend(options, $scope.dateOptions);
        options = angular.extend(options, _imageOptions);

      },0);
      this.initDatePicker = function(mandatoryOptions){
          $timeout(function(){
              options = angular.extend(options,mandatoryOptions);
              $element.datepicker(options);
            },0);
        }
    }],
    replace: false,
    require : ['ngModel','angularDatePicker'],
    scope : {
      name : '@',
      id: '@',
      disabled : '=ngDisabled',
      dateOptions : '=angularDateOptions'
    },
  	compile : function($element,$attrs){
            return {
                post : function(scope,element,attrs,controllers){
                    var ngModelCtrl = controllers[0],
                    angularDatePickerCtrl = controllers[1];
                    var updateModal = function(dateText){
                             ngModelCtrl.$setViewValue(dateText);
                      };
                        var mandatoryOptions = {
                          changeYear : true,
                          changeMonth : true,
                          onSelect : function(dateText){
                                updateModal(dateText);
                          }
                        };
                    angularDatePickerCtrl.initDatePicker(mandatoryOptions);
                }
            }
    },

  }
}]);
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