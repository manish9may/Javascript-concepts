var Module = (function(){
	var config = {resolution : 10};
	this.define = function(key, value){
		if(typeof config[key] == 'undefined'){
			console.log("There is no config option '" + key +"'");
		}else{
			if(isNaN(value = parseInt(value,10))){
				console.log("The value define for '"+key+"' is not a Number");
			}else{
				config[key] = value;
			}
		}
	}
	return this;
})();
Module.define('fail', 20); //alerts the first failure
Module.define('resolution', 'fail'); //alerts the second failure
Module.define('resolution', 20);
