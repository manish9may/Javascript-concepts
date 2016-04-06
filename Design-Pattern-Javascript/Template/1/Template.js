var dataStore = function(){
	this.process = function(){
		this.connect();
		this.select();
        this.disconnect();
        return true;
	}
}


function inheret(proto){
	var F = function (){

	};
	F.prototype = proto;
	return new F();
}

var mySql = inheret(new dataStore());
mySql.connect = function(){
	console.log("MySQL: connect step");
}

mySql.select = function() {
	console.log("MySQL: select step");	
}

mySql.disconnect = function() {
	console.log("MySQL: disconnect step")
}

mySql.process();
