var Chainable = function(){
	this.nNumber = 0;
}
Chainable.prototype.add = function(nNumber){
	this.nNumber += nNumber;
	return this;
}
Chainable.prototype.multiply = function(nNumber){
	this.nNumber *= nNumber;
	return this;
}
Chainable.prototype.toString = function(){
	return this.nNumber.toString();
}
var oChainable = new Chainable();
// This must return "21"
console.log(oChainable.add(3).add(4).multiply(3).toString());