function add(a,b){
	if(!isNaN(a) && !isNaN(b)){
	   return Number.call(this,a) + Number.call(this,b);	
	}else {
		throw new Error("Please enter valid Numbers!");
	}
	
}
function sub(a,b){
	if(!isNaN(a) && !isNaN(b)){
	   return Number.call(this,a) - Number.call(this,b);	
	}else {
		throw new Error("Please enter valid Numbers!");
	}
}

function mul(a,b){
	if(!isNaN(a) && !isNaN(b)){
	   return Number.call(this,a) * Number.call(this,b);	
	}else {
		throw new Error("Please enter valid Numbers!");
	}
}

function div(a,b){
	if(!isNaN(a) && !isNaN(b)){
		var x = Number.call(this,a);
		var y = Number.call(this,b);
		if(y === 0){
			throw new Error("Denominator Should not be 0!");	
		}
	   return x / y;	
	}else {
		throw new Error("Please enter valid Numbers!");
	}
}

var Command = function (execute,undo,value){
	this.execute = execute;
	this.undo = undo;
	this.value = value;
}

var AddCommand = function(value){
	return new Command(add,sub,value);
}

var SubCommand = function(value){
	return new Command(sub,add,value);
}
var MulCommand = function(value){
	return new Command(mul,div,value);
}
var DivCommand = function(value){
	return new Command(div,sub,value);
}

var Calculator = function(){
	var current = 0;
	var commands = [];
	 function action(command) {
        var name = command.execute.toString().substr(9, 3);
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
	return {
		execute : function(command){
			current = command.execute(current,command.value);
			commands.push(command);
			console.log(action(command) + ": " + command.value);
		},
		undo : function(){
			var command = commands.pop();
			current = command.undo(current,command.value);
			console.log("Undo " + action(command) + ": " + command.value);
		},
		 getCurrentValue: function () {
            return current;
        }
	}
}

var calculator = new Calculator();
 
    // issue commands
 
    calculator.execute(new AddCommand(100));
    calculator.execute(new SubCommand(24));
    calculator.execute(new MulCommand(6));
    calculator.execute(new DivCommand(2));
 
    // reverse last two commands
 
    calculator.undo();
    calculator.undo();