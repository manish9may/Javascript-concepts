'use strict';
angular
    .module('baseApp', ['checklist-model', 'ui.slider', 'ui.bootstrap', 'blueimp.fileupload', 'ui.utils', 'ngAnimate', 'datatables', 'datatables.bootstrap', 'ngInputModified', 'ct.ui.router.extras', 'ui.router', 'ngMessages', 'ngIdle', 'ajoslin.promise-tracker', 'unsavedChanges', 'pascalprecht.translate', 'duScroll', 'readMore', 'ui.jq', 'ngSanitize'])
    .constant('characterWhiteList', {
        charArray: ['A-Z', 'a-z', '0-9', ',', '\\-', '"', '!', '#', '&', '(', ')', '.', '/', ':', ';', '=', '?', '@', '^', '_', '`', '{', '|', '}', '~', ' ', '\'', '\\[', '\\]', '\\\\']
    })
    .constant('workflowConfig', {

    })
    .config(['$httpProvider', '$translateProvider','routesProvider', function($httpProvider, $translateProvider,routesProvider) {
    	 $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    	 $translateProvider.translations(locale,messages);
		 $translateProvider.preferredLanguage(locale);
    }])
    .value('dateFormat', 'MM/DD/YYYY').run(function() {

    });