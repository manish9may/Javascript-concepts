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