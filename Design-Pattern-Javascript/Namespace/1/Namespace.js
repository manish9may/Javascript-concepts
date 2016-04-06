var App = App || {};
var Ajax = function(){
	console.log('Ajax: Instanced!');
}
Ajax.prototype.setUp = function(){
		console.log('Ajax: Setup!');
		return this;
}
Ajax.prototype.call = function(){
	console.log('Ajax: Call!');
}

var DOM = function(){
	console.log('DOM: Instanced!');
}

DOM.prototype.byId = function(sId){
	console.log('DOM: ById ' + sId + '!')
}
App.DOM = new DOM();
App.Ajax = Ajax;

App.DOM.byId('test');
var oAjax = new App.Ajax();
oAjax.setUp().call();