function Lecture(name, teacher){
	this.name = name;
	this.teacher = teacher;
}

Lecture.prototype.display = function(){
	return this.teacher + " is teaching " + this.name;
}

function Schedule(lectures){
	this.lectures = lectures;
}

Schedule.prototype.display = function(){
	var str = '';
	for(var index = 0; index < this.lectures.length; ++index){
		str += this.lectures[index].display() + '\n';
	}

	return str;
}

var mySchedule = new Schedule([
		new Lecture('Sub-A','A'),
		new Lecture('Sub-B','B'),
		new Lecture('Sub-C','C'),
		new Lecture('Sub-D','D')
]);
//console.log(mySchedule.display());

function sendMessage(msg, obj){
	if(arguments.length == 2){
		obj.handleMsg(msg)
	}else{
		console.log(msg)
	}
}
sendMessage('Hello, World!')
sendMessage('How are you?',{
	handleMsg : function(msg){
		console.log('This is a custom message: '+msg)
	}
});

function delayedLogs(msg, time){
	setTimeout(function(){
		console.log(msg);
	},time);
}

delayedLogs('Welcome!',2000);

function addGenerator(num){
	var result = num;
	return function(toAdd){
		result += toAdd; 
		return result;
	}
}

var addFive = addGenerator(5);
console.log(addFive(4))
console.log(addFive(4))

var obj = {
	yes : function(){
		this.val = true;
	},
	no : function(){
		this.val = false;
	}
}
var window = {};
obj.yes();
console.log('obj.val : '+obj.val)
window.no = obj.no;
window.no();
console.log('obj.val : '+obj.val)
console.log('window.val : '+window.val)

function User(properties){
	var that = this;
	for(var property in properties){
		that['set' +  property] = (function(i){
			return function(value){
				properties[i] = value;
		   };
		})(property);
		that['get' + property] = (function(i){
		return function(){
			return properties[i];
		};
		})(property);
	}
}
var user = new User({
	name : 'Manish Jain',
	age : 27
});
user.setname('Purva')
console.log(user.getname())
console.log(user.getage())


var Person2 = function(name){
	this.name = name;
}

Person2.prototype.getName = function(){
	return this.name;
}

var User2 = function(name, password){
	this.name = name;
	this.password = password;
}

User2.prototype = Object.create(Person2.prototype);
User2.prototype.getPassword = function(){
	return this.password;
}
console.log(new User2('Manish Jain2','12345').getName())
console.log(new User2('Manish Jain2','12345').getPassword());


var Product = {
    _price: 0,
    _name: '',

    price:    function()  {return this._price;},
    name:     function()  {return this._name;},
    setPrice: function(p) {this._price = p;},
    setName:  function(n) {this._name  = n;}
};

var product1 = Object.create(Product);

console.log(product1.__proto__)