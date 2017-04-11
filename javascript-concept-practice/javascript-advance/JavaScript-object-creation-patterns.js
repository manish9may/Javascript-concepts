/**Factory Pattern**/

var peopleFactory = function(name,age,city){
	var config = {};
	config.name = name;
	config.age = age;
	config.city = city;
	config.printPerson = function(){
		console.log(this.name,' , '+this.age+' , '+this.city);
	}
	return config;
}

var fcPerson1 = peopleFactory('Manish Jain',28,'Noida');
console.log(fcPerson1);
fcPerson1.printPerson();


/** Constructor Pattern **/

var personConstructor = function(name,age,city){
	this.name = name;
	this.age = age;
	this.city = city;
	this.printPerson = function(){
		console.log(this.name,' , '+this.age+' , '+this.city);
	}
}

var consPerson1 = new personConstructor('Manish Jain',28,'Noida');
console.log(consPerson1);
consPerson1.printPerson();


/** Prototype Pattern **/	

var personPrototype = function(){

}

personPrototype.prototype =(function(){
	return {
		name : 'no name',
		age : 0,
		city : 'no city',
		printPerson : function(){
			console.log(this.name,' , '+this.age+' , '+this.city);		
		}
	}
})();
var protoPerson1 = new personPrototype();
protoPerson1.name = 'Manish Jain';
protoPerson1.age = 28;
protoPerson1.city = 'Noida';
console.log(protoPerson1);
protoPerson1.printPerson();


/** Dynamic Prototype pattern **/

var personDynamicProto = function(name,age,city){
	this.name = name;
	this.age = age;
	this.city = city;
}

personDynamicProto.prototype = (function(){
	return {
		printPerson : function(){
			console.log(this.name,' , '+this.age+' , '+this.city);		
		}
	}
})();

var dynamicProtoPerson1 = new personDynamicProto('Manish Jain',28,'Noida');

console.log(dynamicProtoPerson1);
dynamicProtoPerson1.printPerson();



