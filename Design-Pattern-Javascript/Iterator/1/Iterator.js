var Iterator =function(items){
	this.index = 0;
	this.items = items;
}
Iterator.prototype = {
	reset : function(){
		this.index = 0;
	},
	next : function(){
		return this.items[this.index ++];
	},
	first :function(){
		this.reset();
		return  this.next();
	},
	hasNext : function(){
		return this.index <= this.items.length;
	},
	each : function(callback){
		for(var item = this.first();this.hasNext();item = this.next()){
			callback(item);
		}
	}
}

var items = ["one", 2, "circle", true, "Applepie"];
    var iter = new Iterator(items);
 
    // using for loop
 
    for (var item = iter.first(); iter.hasNext(); item = iter.next()) {
        console.log(item);
    }

    iter.each(function(item) {
        console.log(item);
    });