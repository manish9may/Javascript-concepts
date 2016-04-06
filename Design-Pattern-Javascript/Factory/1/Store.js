var Helicopter = require('./Helicopter.js');
var Car = require('./Car.js');
var Store = function(){

};
Store.prototype.produceToy = function($toyName){
	var $toy = null;
	if($toyName === 'Car'){
		$toy = new Car();
	}else if($toyName === 'Helicopter'){
		$toy = new Helicopter();
	}
	return $toy;
};
module.exports = Store;