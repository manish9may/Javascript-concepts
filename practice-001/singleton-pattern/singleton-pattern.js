var Singletone = (function(){
	var instance = null;
	var _privateVar = 1;
	var _privateFunction = function(){
		console.log('In private function.');
	}
	var constructor = function(){
		instance = this;
	}
	constructor.prototype = {
		publicMethod : function(){
			console.log('In public method.');
			_privateFunction();
		},
		publicProperty : 1
	}
	var fakeConstructor = function(){
		throw SyntaxError('Singleton : Use getInstance instead.');
	}
	fakeConstructor.getInstance = function(){
			return instance || new constructor();
	}
	return fakeConstructor;
})();
var singleton = Singletone.getInstance();
console.log(singleton === Singletone.getInstance()
	&& singleton === Singletone.getInstance()
	&& singleton === Singletone.getInstance());
// true
console.log(singleton.publicProperty);
// 1
singleton.publicMethod();
// In public method.
// In private function.


// Misuse attempts
var singleton = new Singletone();

