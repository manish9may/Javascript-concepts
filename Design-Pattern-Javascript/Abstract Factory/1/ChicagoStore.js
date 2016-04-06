var Store = require('./Store.js');
var ChicagoStore = function(){
Store.call(this);
};
ChicagoStore.prototype= new Store();
ChicagoStore.prototype.orderToy = function($toyName){
	var $toy = this.produceToy($toyName);
	$toy.prepare();
	$toy.package();
	$toy.label();

}
module.exports = ChicagoStore;