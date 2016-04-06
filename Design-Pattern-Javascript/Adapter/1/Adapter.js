var Shipping = function () {
	this.request  = function(originZip,destinationZip,weight){
		return "$42.89";
	}
}
var AdvanceShipping = function(){
	this.login = function(credentials){

	}
	this.setOrigin = function(originZip){

	}
	this.setDestination = function(destinationZip){

	}
	this.calculate = function(weight){
		return "$39.57";
	}
}

var ShippingAdapter = function(credentials){
	var shipping = new AdvanceShipping();
	shipping.login(credentials);
	return {
		request : function(originZip,destinationZip,weight){
			shipping.setOrigin(originZip);
			shipping.setDestination(destinationZip);
			return shipping.calculate(weight);
		}
	}
}

var shipping = new Shipping();
var credentials = {token: "30a8-6ee1"};
var adapter = new ShippingAdapter(credentials);

var cost = shipping.request("78701", "10010", "2 lbs");
console.log("Old cost: " + cost);

cost = adapter.request("78701", "10010", "2 lbs");
console.log("New cost: " + cost);