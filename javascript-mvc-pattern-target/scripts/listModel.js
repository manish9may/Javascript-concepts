var ListModel = function(items){
	this.items = items;
	this.selectedIndex = - 1;
	this.addItemEvent = new Event(this);
	this.deleteItemEvent = new Event(this);
	this.setSelectedEvent = new Event(this);
}
ListModel.prototype = (function(){
	var addItem = function(item){
		this.items.push(item);
		this.addItem.notify();
	}
	var deleteItem = function(index){
		this.items.splice(index,1);
		this.deleteItemEvent.notify();
	}
	var getItems = function(){
		return this.items;
	}
	var getSelectedIndex = function(){
		return this.selectedIndex;
	}
	var setSelectedItem = function(index){
		this.selectedIndex = index;
		this.setSelectedEvent.notify();
	}
	return {
		addItem : addItem,
		deleteItem : deleteItem,
		getItems : getItems,
		getSelectedIndex : getSelectedIndex,
		setSelectedItem : setSelectedItem
	};
})()