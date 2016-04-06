var Person = function(name){
	this.name = name;
}
Person.prototype.getName = function(){
	return this.name;
}
var User = function(name, password){
	this.name = name;
	this.password = password;
}
User.prototype = new Person();
User.prototype.getPassword = function(){
	return this.password;
}

Function.prototype.method = function(name, func){
	this.prototype[name] =  func;
	return this;
}

Function.method('inherits', function(Parent){
	this.prototype = new Parent();
	return this;
});

var Person1 = function(name){
	this.name = name;
}
Person1.prototype.getName = function(){
	return this.name;
}
var User1 = function(name, password){
	this.name = name;
	this.password = password;
}
console.log(User1.inherits)

User1.inherits(Person1);

User1.method('getPassword',function(){
	return this.password;
})
console.log(new User1('Manish Jain','12345').getName())
console.log(new User1('Manish Jain','12345').getPassword())

var Class = {
		create : function(){
			return function(){
				this.initialize.apply(this,arguments);
			}
		}
}

Object.extend = function(destination,source){
	for(var property in source){
		destination[property] = source[property];
	}
	return destination;
}

var Person2 = Class.create();

Object.extend(Person2.prototype,{
	initialize : function(name){
		this.name = name;
	},
	getName : function(){
		return this.name;
	}
});

var User2 = Class.create();
User2.prototype = Object.extend(new Person2(),{
	initialize : function(name, password){
		this.name = name;
		this.password = password;
	},
	getPassword : function(){
		return this.password;
	}
});

console.log(new User2('Manish Jain2','12345').getName())
console.log(new User2('Manish Jain2','12345').getPassword())