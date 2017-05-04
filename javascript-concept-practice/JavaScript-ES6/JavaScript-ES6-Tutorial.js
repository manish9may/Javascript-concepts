/*
	JavaScript ES6 Tutorial #3 - The Let Keyword
*/
window.onload = function(){

	var x = 10;

	if(x > 5){
		let  x = 5;
		console.log('Inside ',x)
	}
	console.log('Outside ',x)
}

for(var i = 0;i < 4;i++){
	setTimeout(function(){
		console.log(i)
	})
}

for(let i = 0;i < 4;i++){
	setTimeout(function(){
		console.log(i)
	})
}


/*
	JavaScript ES6 Tutorial #4 - Default Parameters
*/
function log(num = 10){
	console.log(num)
}

log();
log(20);



/*
	JavaScript ES6 Tutorial #5 - The Spread Operator
*/

var nums1 = [1,2,3],nums2 = [...nums1,4,5,6];

console.log(nums2)

var addNums = function(a,b,c){
	console.log(a+b+c);
}

addNums(...nums1);


/*
	JavaScript ES6 Tutorial #8 - Object Literal Enhancements
*/

var name = 'Crystal';
var belt = 'Black';

var ninja = {
	name,belt,
	chop(x){
		console.log('you chopped the enemy ',x,' times');
	},
	['myString'] : 'myString',
	get myNumber(){
		return this._myNumber
	},
	set myNumber(x){
		this._myNumber = Number(x)
	}
}

console.log(ninja)
ninja.chop(10);

console.log(ninja.myString); // => 'value 1'  
ninja.myNumber = '15';  
console.log(ninja.myNumber); // => 15  


/*
	JavaScript ES6 Tutorial #7 - New String Methods

	repeat
	startsWith
	endsWith
	includes
*/

var str = 'goodbye';

console.log(str.repeat(2));
console.log(str.startsWith('goo',0));
console.log(str.endsWith('goodb',str.length - 2));
console.log(str.includes('goo'));


/*
	JavaScript ES6 Tutorial #9 - Arrow Functions
*/
var ninjaGreeting = (name) => {
	console.log('Hello, ',name);
}

ninjaGreeting('JavaScript');


var ninja = {
	['name'] : 'JavaScript',
	chop(x){
		let that = this;
		setTimeout(function(){
			console.log(that.name,' chopped the enemy.')
		})
	}
}

ninja.chop();

/*
	JavaScript ES6 Tutorial #10 - Sets
*/

var names = new Set();

names.add('JavaScript').add('Java').add('Servers');
console.log(names)
names.delete('Servers');
console.log(names.size)
console.log(names.has('JavaScript'));
console.log(names)
names.clear();
console.log(names)

var listOfNames = [...names];

console.log(listOfNames)

/*
	JavaScript ES6 Tutorial #11 - Generators
*/

console.log('##   JavaScript ES6 Tutorial #11 - Generators  ##')

function* gen(){
	yield console.log('A');
	yield console.log('B');
	yield console.log('C');
	console.log('All Done');
}

var myGen = gen();
myGen.next();
myGen.next();
myGen.next();
myGen.next();


function* gen1(){
	yield 'A';
	yield 'B';
	yield 'C';
	return 'All Done';
}

var myGen1 = gen1();
console.log(myGen1.next());
console.log(myGen1.next());
console.log(myGen1.next());
console.log(myGen1.next());


function *foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var it = foo( 5 );

// note: not sending anything into `next()` here
console.log( it.next());       // { value:6, done:false }
console.log( it.next( 12 ) );   // { value:8, done:false }
console.log( it.next( 13 ) );   // { value:42, done:true }

var anotherGenerator = function*(i){
		yield i + 1;
		yield i + 2;
		yield i + 3;
}

var generator = function*(i){
	yield i;
	yield* anotherGenerator(i);
	yield i + 10;
}

var gen = generator(10);


console.log(gen.next())

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

console.log(gen.next())

