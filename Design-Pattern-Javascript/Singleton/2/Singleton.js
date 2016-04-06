var Person = function(){
var canPullWeight = 3;
if(!Person.instance){
	Person.instance = this;
}
this.pullCapacity = function(){
	return canPullWeight;
}
this.increaseEnergy = function(weight){
	canPullWeight = weight;
}
return Person.instance;
};

var personInstance1 = new Person();
var personInstance2 = new Person();

console.log('First Person Capacity        ',personInstance1.pullCapacity());
console.log('Second Person Capacity        ',personInstance2.pullCapacity());

personInstance1.increaseEnergy(20);

console.log('First Person Capacity        ',personInstance1.pullCapacity());
console.log('Second Person Capacity        ',personInstance2.pullCapacity());
