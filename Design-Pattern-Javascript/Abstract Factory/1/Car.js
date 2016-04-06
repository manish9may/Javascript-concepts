var Toy = require('./Toy.js');
var Car = function(){
	Toy.call(this);
	this.$name = 'Car';
	this.$price = 11.32;
}
Car.prototype = new Toy();
module.exports = Car;