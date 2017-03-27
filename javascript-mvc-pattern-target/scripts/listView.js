var ListView = function(model){
	this.model = model;
	this.addItemEvent = new Event(this);
	this.deleteItemEvent = new Event(this);
	this.setSelectedEvent = new Event(this);
}

ListView.prototype = (function(){
	return {

	};
})()