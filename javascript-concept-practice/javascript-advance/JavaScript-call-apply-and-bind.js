var obj = {
	num : 2
};

var addToThis = function(a){
	return this.num + a;
}

console.log(addToThis.call(obj,2))

console.log(addToThis.apply(obj,[3]))

var bound = addToThis.bind(obj);

console.dir(bound);

console.log(addToThis.bind(obj)(4))