var BaseCalculator = function(){
	this.decimalDigits = 2;
}

BaseCalculator.prototype = {
	add : function(x,y){
		return x + y;
	},
	subtract : function(x,y){
		return x - y;
	}
}

var Calculator = function(){
	this.tax = 5;
}
// decimalDigits property available
Calculator.prototype = new BaseCalculator();



var calc = new Calculator();
console.log(calc.add(1, 1));
console.log(calc.decimalDigits);
console.log(calc)

// decimalDigits property not available
Calculator.prototype = Object.create(BaseCalculator.prototype);

var calc = new Calculator();
console.log(calc.add(1, 1));
console.log(calc.decimalDigits);
console.log(calc)