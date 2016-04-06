var NYStore = require('./NYStore.js');
var ChicagoStore = require('./ChicagoStore.js');
var ToyStore = function(){
};
ToyStore.prototype.orderNYToy = function($toyName){
	var $toyStore = new NYStore();
	$toyStore.orderToy($toyName);

};
ToyStore.prototype.orderChicagoToy = function($toyName){
	var $toyStore = new ChicagoStore();
	$toyStore.orderToy($toyName);

};
module.exports = ToyStore;