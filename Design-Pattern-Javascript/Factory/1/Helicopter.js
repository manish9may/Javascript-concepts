var Toy = require('./Toy.js')

var Helicopter = function(){
	Toy.call(this);
	this.$name = 'Helicopter';
	this.$price = 12.0;
};
Helicopter.prototype = new Toy();
module.exports = Helicopter;