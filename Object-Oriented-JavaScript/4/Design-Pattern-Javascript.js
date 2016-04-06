var Singleton1 = (function(){
	var instance;
	var Person = function(name){
		this.name = name;
	}
	Person.prototype.getName = function(){
		return this.name;
	}
	var User = function(name, passowrd){
		this.name = name;
		this.passowrd = passowrd;
	}
	User.prototype = Object.create(Person.prototype);
	User.prototype.getPassword = function(){
		return this.passowrd;
	}

	return {
		getInstance : function(name,passowrd){
			if(!instance){
				instance = new User(name,passowrd);
			}
			return instance;
		}
	}
})();
var user1 = Singleton1.getInstance('Manish Jain','123456');
var user2 = Singleton1.getInstance('Purva','123456');
console.log('Name 1  '+user1.getName())
console.log('Name 2  '+user2.getName())

var Module1 = (function(){
	var counter = 0;
	return {
		incrementCounter : function(){
			counter++
			return this;
		},
		resetCounter : function(){
			counter = 0;
			return this;
		},
		setCounter : function(count){
			counter =  count;
			return this;
		},
		getCounter : function(){
			return counter;
		}
	}
})();

var module1 = Module1.incrementCounter().incrementCounter().resetCounter().setCounter(12);
console.log('Counter   '+module1.getCounter());

var basketModule = (function(){
	var basketInstance = function(){
		this.basket = [];
	}
	basketInstance.prototype = {
		addItem : function(item){
			this.basket.push(item);
			return this;
		},
		getItemCount : function(){
			//console.log('***** Inside getItemCount *****')
			return this.basket.length;
		},
		getTotal : function(){
			console.log('***** Inside getTotal *****')
			var q = this.getItemCount();
			var p = 0;
			while(q--){
				p += this.basket[q].price;
			}
			console.log('******* Price '+p+' **********')
			return p;
		},
		getBasket : function(){
			return this.basket;
		}
	}
	return {
		init : function(){
			return new basketInstance();
		},
	}
})();

//var price = basketModule.addItem({item : 'bread', price : 0.5}).addItem({item : 'butter', price : 0.3}).getTotal();
//console.log('Price '+price);


var Subject_Publisher1 = function(){
	this.handlers = [];
}
Subject_Publisher1.prototype.observe = function(observe){
	this.handlers.push(observe);
}
Subject_Publisher1.prototype.unobserve = function(observe){
	for(var handler in this.handlers){
		if(this.handlers[handler] === observe){
			  this.handlers.splice(handler, 1);
			  break;  
		}
	}
	return this;
}
Subject_Publisher1.prototype.notify = function(){
	var args = Array.prototype.splice.call(arguments,0);
	var event = args.shift();
	for(var handler in this.handlers){
		this.handlers[handler][event].apply(this.handlers[handler],args);
	}
}

var basket1 = basketModule.init().addItem({item : 'bread', price : 0.5}).addItem({item : 'butter', price : 0.3});
var basket2 = basketModule.init().addItem({item : 'bread', price : 0.5}).addItem({item : 'butter', price : 0.4});

var publisher1 = new Subject_Publisher1();
/*publisher1.observe(basket1);
publisher1.observe(basket2);
publisher1.notify('getItemCount');*/

var PubSub = function(){
	this.topics = {};
}
PubSub.prototype.subscribe = function(topic,func){
	if(!this.topics[topic]){
		this.topics[topic] = [];
	}

	this.topics[topic].push({func : func});
	return this;
}
PubSub.prototype.publish = function(){
	var args = Array.prototype.splice.call(arguments,0);
	var topic = args.shift();
	var event = args.shift();
	var func = args.shift();
	if(!this.topics[topic]){
		return false;
	}
	for(var funcIndex in this.topics[topic]){
		if(this.topics[topic][funcIndex]['func'] === func){
			this.topics[topic][funcIndex]['func'][event].apply(this.topics[topic][funcIndex]['func'],args);
		}
	}
}

PubSub.prototype.unsubscribe = function(topic,func){
	for(var funcIndex in this.topics[topic]){
		if(this.topics[topic][funcIndex]['func'] === func){
			console.log('****** Successfull unsubscribe ******')
			this.topics[topic].splice(funcIndex,1);
			return true;
		}
	}
	return false;
}
var pubSub = new PubSub();

pubSub.subscribe('basket',basket1)
pubSub.subscribe('basket',basket2)
pubSub.publish('basket','getTotal',basket1)
pubSub.unsubscribe('basket',basket1)
pubSub.publish('basket','getTotal',basket1)

var Employee = function(type,name,salary){
	this.name = name;
	this.salary = salary;
	this.type = type;
}
Employee.prototype = {

}
var Fulltime = function(type,name,salary){
	Employee.call(this,type,name,salary);
}
var PartTime = function(type,name,salary){
	Employee.call(this,type,name,salary);
}
var Temporary = function(type,name,salary){
	Employee.call(this,type,name,salary);
}
var Contractor = function(type,name,salary){
	Employee.call(this,type,name,salary);
}
Fulltime.prototype = Object.create(Employee.prototype);
PartTime.prototype = Object.create(Employee.prototype);
Temporary.prototype = Object.create(Employee.prototype);
Contractor.prototype = Object.create(Employee.prototype);
var Factory = function(){

}
Factory.prototype = {
	createEmployee : function(){
		var args = Array.prototype.splice.call(arguments,0);
		var type = args.shift();
		var employee;
		if(type === 'fulltime'){
			employee = new Fulltime(type,args.shift(),args.shift())
		}else if(type === 'prartTime'){
			employee = new PartTime(type,args.shift(),args.shift())
		}else if(type === 'temporary'){
			employee = new Temporary(type,args.shift(),args.shift())
		}else if(type === 'contractor'){
			employee = new Contractor(type,args.shift(),args.shift());
		}
		return employee
	}
}

var employees = [];
var factory = new Factory();
employees.push(factory.createEmployee('fulltime','Manish Jain','$2323123'))
employees.push(factory.createEmployee('prartTime','Ankit Khendelwal','$2323123'))
employees.push(factory.createEmployee('temporary','Nukul Rastogi','$2323123'))
employees.push(factory.createEmployee('contractor','Vaibhav Kayathwal','$2323123'))
console.log(employees)


var Validator = function(){
	this.error = [];
	this.decoratoersList = []
}
Validator.decorators = {
	
}

Validator.prototype.decorate = function(form,name,args){
	this.decoratoersList.push({name : name, args : args});
	Validator.decorators[name] = {
				validate : function(form,args){
					switch(args){
						case 'required' :
							break;
						case 'maxLength' :
							break;
						case 'minLength' :
							break; 
						default :
					}
				}
	} 
}

Validator.prototype.validate = function(form){
	var max = this.decoratoersList.length;
	for(var decIndex = 0; decIndex < max; ++decIndex){
		Validator.decorators[this.decoratoersList[decIndex]['name']].validate.call(this,this.decoratoersList[decIndex]['args']);
	}
}
var validator = new Validator();  
var form = {};
validator.decorate(form,'hasName', { length: 5 });  
validator.decorate(form,'hasAge', { minimum: 21 });  
validator.decorate(form,'hasZipCode');  
validator.validate({}); // some form data. in this case just an anonymous object  
console.log(validator);