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