var a;
console.logger("The value of a is " + a); // The value of a is undefined

console.logger("The value of b is " + b); // The value of b is undefined
var b;
try{
	console.logger("The value of c is " + c); // Uncaught ReferenceError: c is not defined
}catch(error){
	console.logger('Error          ',error.message);
}


let x;
console.logger("The value of x is " + x); // The value of x is undefined

try{
console.logger("The value of y is " + y); // Uncaught ReferenceError: y is not defined
let y;
}catch(error){
console.logger('Error          ',error.message);
}


if (true) {
  var x1 = 5;
}
console.logger('x1 is ',x1);  // x is 5

if (true) {
  let y1 = 5;
}

try{
console.logger('y1 is ',y1);
}catch(error){
	console.logger('Error          ',error.message);	
}

console.logger('########## Variable hoisting #########');

/**
 * Example 1
 */
console.logger(x2 === undefined); // true
var x2 = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = "my value";
 
(function() {
  console.logger(myvar); // undefined
  var myvar = "local value";
})();


/**
 * Example 1
 */
var x3;
console.logger(x3 === undefined); // true
x3 = 3;
 
/**
 * Example 2
 */
var myvar = "my value";
 
(function() {
  var myvar;
  console.logger(myvar); // undefined
  myvar = "local value";
})();



console.logger('########## Function hoisting #########');


/* Function declaration */

foo(); // "bar"

function foo() {
  console.logger("bar");
}


/* Function expression */
try{
	baz(); // TypeError: baz is not a function	
}catch(error){
	console.logger('Error          ',error.message);
}


var baz = function() {
  console.logger("bar2");
};


var myObject = {  
  ['myString']: 'value 1',
  get myNumber() {
    return this._myNumber;
  },
  set myNumber(value) {
    this._myNumber = Number(value);
  }
};

console.logger(myObject.myString); // => 'value 1'  
myObject.myNumber = '15';  
console.logger(myObject.myNumber); // => 15  