class Polygon {
	constructor (height,width){
		this.height = height;
		this.width = width;
	}
	get area(){
		return this.calcArea();
	}
	calcArea(){
		return this.height * this.width
	}
}

const square = new Polygon(10, 10);

console.logger('square.area 		',square.area);

class Point {
	constructor (x,y){
		this.x = x;
		this.y = y;
	}
	static distance(a,b){
		const dx = a.x - b.x;
		const dy = a.y - b.y;

		return Math.sqrt(dx*dx + dy*dy)
	}
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.logger('Point.distance(p1, p2)			',Point.distance(p1, p2));

class Animal{
	constructor(name){
		this.name = name
	}
	speak(){
		console.logger(this.name + ' makes a noise.');
	}
}

class Dog extends Animal{
	speak(){
		console.logger(this.name + ' barks.');
	}
}

var d = new Dog('Mitzie');
d.speak();

function AnimalP (name) {
  this.name = name;  
}

AnimalP.prototype.speak = function () {
  console.logger(this.name + ' makes a noise.');
}

class DogP extends AnimalP {
  speak() {
    console.logger(this.name + ' barks.');
  }
}

var d = new DogP('Mitzie');
d.speak();


var AnimalQ = {
  speak() {
    console.logger(this.name + ' makes a noise.');
  }
};

class DogQ {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.logger(this.name + ' barks.');
  }
}

Object.setPrototypeOf(DogQ.prototype, AnimalQ);

var d = new DogQ('Mitzie');
d.speak();

class Cat {
	constructor(name){
		this.name = name;
	}
	speak(){
		console.logger(this.name + ' makes a noise.');
	}
}

class Lion extends Cat{
	speak(){
		super.speak();
		console.logger(this.name + ' roars.');
	}
}
var l = new Lion('Lion');
l.speak();

class PointC {
	constructor(x,y){
		this.x = x;
		this.y =y;
	}
	toString(){
		return '(' + this.x + ', ' + this.y + ')';
	}
}

class ColorPoint extends PointC {
	constructor(x,y,color){
		super(x,y);
		this.color = color;
	}
	toString(){
		return super.toString() + ' in ' + this.color;
	}
}

let cp = new ColorPoint(25, 8, 'green');
console.logger('cp.toString()		',cp.toString()); // '(25, 8) in green'

console.logger(cp instanceof ColorPoint); // true
console.logger(cp instanceof PointC); // true