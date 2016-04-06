var Shipping = function(){
	this.company;
}
Shipping.prototype = {
	setStrategy : function(company){
		this.company = company;
	},
	calculate : function(package){
		return this.company.calculate.call(this,package);
	}
}

var UPS = function(){
	this.calculate = function(package){
		return "$45.97";
	}
};


var USPS = function(){
	this.calculate = function(package){
		return "$42.07";
	}
}


var Fedex = function(){
	this.calculate = function(package){
		return "$40.57";
	}
}


var package = { from: "76712", to: "10012", weigth: "lkg" };
 
    // the 3 strategies
 
    var ups = new UPS();
    var usps = new USPS();
    var fedex = new Fedex();
 
    var shipping = new Shipping();
 
    shipping.setStrategy(ups);
    console.log("UPS Strategy: " + shipping.calculate(package));
    shipping.setStrategy(usps);
    console.log("USPS Strategy: " + shipping.calculate(package));
    shipping.setStrategy(fedex);
    console.log("Fedex Strategy: " + shipping.calculate(package));