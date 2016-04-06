var Store = require('./Store.js');
var ToyStore = function(){
	Store.call(this);
};
ToyStore.prototype = new Store();
ToyStore.prototype.orderToy = function($toyName){
	var $toy = null;
	$toy = this.produceToy($toyName);
	$toy.prepare();
	$toy.package();
	$toy.label();

};
module.exports = ToyStore;