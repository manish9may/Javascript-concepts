// global namespace
var OBJECT_ORIENTED_JAVASCRIPT = OBJECT_ORIENTED_JAVASCRIPT || {};

// sub namespace
OBJECT_ORIENTED_JAVASCRIPT.event = {};

// Create container called OBJECT_ORIENTED_JAVASCRIPT.commonMethod for common method and properties

OBJECT_ORIENTED_JAVASCRIPT.commonMethod = {
	regExForName: "", // define regex for name validation
  regExForPhone: "", // define regex for phone no validation
  validateName: function(name){
    // Do something with name, you can access regExForName variable
    // using "this.regExForName"
  },
 
  validatePhoneNo: function(phoneNo){
    // do something with phone number
  }
}

// Object together with the method declarations

OBJECT_ORIENTED_JAVASCRIPT.event = {
    addListener: function(el, type, fn) {
    // code stuff
    },
    removeListener: function(el, type, fn) {
    // code stuff
    },
    getEvent: function(e) {
    // code stuff
    }
  
    // Can add another method and properties
}
var callback = function(response){
	console.log('## inside callback ##')
}
OBJECT_ORIENTED_JAVASCRIPT.event.addListener("yourel", "type", callback);


console.log(Math.random());

var Person = function () {};

var person1 = new Person();
var person2 = new Person();


var o;

// create an object with null as prototype
o = Object.create(null);


o = {};
// is equivalent to:
o = Object.create(Object.prototype);


o = Object.create(Object.prototype,{
  //value properties
  color:   { writable: true,  configurable:true, value: 'red' },
  //concrete desc value
  rawDesc: { writable: false, configurable:true, value: 'Porsche boxter' },
  // data properties (assigned using getters and setters)
  desc: { 
    configurable:true, 
    get: function ()      { return this.rawDesc.toUpperCase();  },
    set: function (value) { this.rawDesc = value.toLowerCase(); }  
  }
});

var Person = function (firstName) {
  this.firstName = firstName;
};

Person.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.firstName);
};

var person1 = new Person("Alice");
var person2 = new Person("Bob");
var helloFunction = person1.sayHello;

// logs "Hello, I'm Alice"
person1.sayHello();

// logs "Hello, I'm Bob"
person2.sayHello();

// logs "Hello, I'm undefined" (or fails
// with a TypeError in strict mode)
helloFunction();                                    

// logs true
console.log(helloFunction === person1.sayHello);

// logs true
console.log(helloFunction === Person.prototype.sayHello);

// logs "Hello, I'm Alice"
helloFunction.call(person1);


var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }).call(animals[i], i);
}


// Define the Person constructor
var Person = function(firstName) {
  this.firstName = firstName;
};

// Add a couple of methods to Person.prototype
Person.prototype.walk = function(){
  console.log("I am walking!");
};

Person.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName);
};

// Define the Student constructor
function Student(firstName, subject) {
  // Call the parent constructor, making sure (using Function#call)
  // that "this" is set correctly during the call
  Person.call(this, firstName);

  // Initialize our Student-specific properties
  this.subject = subject;
}

// Create a Student.prototype object that inherits from Person.prototype.
// Note: A common error here is to use "new Person()" to create the
// Student.prototype. That's incorrect for several reasons, not least 
// that we don't have anything to give Person for the "firstName" 
// argument. The correct place to call Person is above, where we call 
// it from Student.
Student.prototype = Object.create(Person.prototype); // See note below

// Set the "constructor" property to refer to Student
Student.prototype.constructor = Student;

// Replace the "sayHello" method
Student.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName + ". I'm studying "
              + this.subject + ".");
};

// Add a "sayGoodBye" method
Student.prototype.sayGoodBye = function(){
  console.log("Goodbye!");
};

// Example usage:
var student1 = new Student("Janet", "Applied Physics");
student1.sayHello();   // "Hello, I'm Janet. I'm studying Applied Physics."
student1.walk();       // "I am walking!"
student1.sayGoodBye(); // "Goodbye!"

// Check that instanceof works correctly
console.log(student1 instanceof Person);  // true 
console.log(student1 instanceof Student); // true