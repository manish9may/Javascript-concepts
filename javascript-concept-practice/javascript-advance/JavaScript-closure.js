/** Basic of closure **/

var addTo = function(){
	var passed = 3;
	return function(){
		var inner = 2;
		return passed + inner;
	}
}

console.dir(addTo());


var addTo = function(passed){
	var add = function(inner){
		return passed + inner;
	}
	return add;
}

console.dir(addTo(4));

var addFive = new addTo(5)
var addSix = new addTo(6);

console.dir(addFive);
console.dir(addSix);
