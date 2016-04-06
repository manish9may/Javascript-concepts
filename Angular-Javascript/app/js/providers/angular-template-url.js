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