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
