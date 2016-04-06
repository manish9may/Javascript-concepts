var Store = require('./Store.js');
var NYStore = function(){
Store.call(this);
};
NYStore.prototype = new Store();
NYStore.prototype.orderToy = function($toyName){
	var $toy = this.produceToy($toyName);
	$toy.prepare();
	$toy.package();
	$toy.label();

}
module.exports = NYStore;