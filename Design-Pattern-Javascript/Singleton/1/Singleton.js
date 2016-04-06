var Person = (function(){
var instance;
var personInstance = function(){
 var canPullWeight = 3;
 this.pullCapacity = function(){
 	return canPullWeight;
 }
 this.increaseEnergy = function(weight){
 	canPullWeight = weight;
 }
};

return {
	getInstance : function(){
		if(!instance){
			instance = new personInstance();
		}
		return instance;
	}
};
})();

var personInstance1 = Person.getInstance();
var personInstance2 = Person.getInstance();


console.log('First Person Capacity        ',personInstance1.pullCapacity());
console.log('Second Person Capacity        ',personInstance2.pullCapacity());

personInstance1.increaseEnergy(20);

console.log('First Person Capacity        ',personInstance1.pullCapacity());
console.log('Second Person Capacity        ',personInstance2.pullCapacity());
