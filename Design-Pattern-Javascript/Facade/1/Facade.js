var Mortgage = function(name){
	this.name = name;
}
Mortgage.prototype ={
	applyFor : function(amount){
		var result = "Approved";
		if(!new Bank().verify(this.name,amount)){
			return "Denied";
		}else if(!new Credit().get(this.name)){
			return "Denied";
		}else if(!new Background().check(this.name)){
			return "Denied";
		}
		return this.name  + " has been "+result + " for a " + amount +" mortgage.";
	}
}
var Bank = function(){
	this.verify = function(name,amount){
		return true;
	}
}
var Credit = function(){
	this.get = function(name){
		return true;
	}
}

var Background = function(){
	this.check = function(name){
		return true;
	}
}

var mortgage = new Mortgage("Joan Templeton");
var result = mortgage.applyFor("$100,000");
console.log(result);