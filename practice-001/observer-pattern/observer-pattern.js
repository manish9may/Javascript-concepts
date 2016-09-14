var Subject = function(){
	this.handlers = [];
}

Subject.prototype = {
	observe : function(handler){
		console.log( 'added new observer' );
		this.handlers.push(handler);
	},
	unobserve : function(handler){
		for(var index in this.handlers){
			if(this.handlers[index] === handler){
				this.handlers.splice(index,1);
				return true;
			}
		}
		return false;
	},
	notify : function(){
		var args = Array.prototype.splice.call(arguments,0);
		var event = args.shift();
		for(var index in this.handlers){
			this.handlers[index][event].apply(this.handlers[index],args);
		}
	}
}

var Observer = function(){
	var publisher = new Subject();
	this.addObserver = function(newObserver){
		publisher.observe(newObserver);
	};
	this.removeObserver = function(deleteObserver){
		publisher.unobserve(deleteObserver);
	}
	this.notifyObserver = function(event){
		publisher.notify(event)
	}
}

var Component1 = {
  _componentVar1 : 1,
  _componentVar2 : 2,
  update : function() {
    console.log( '"update" called on Component 1 with: ', this._componentVar1 ,' and ' ,this._componentVar2 );
  }
};
var Component2 = {
  _componentVar1 : 3,
  _componentVar2 : 4,
  update : function() {
    console.log( '"update" called on Component 2 with: ', this._componentVar1 ,' and ' ,this._componentVar2 );
  }
};
var observer = new Observer();
observer.addObserver(Component1);
observer.addObserver(Component2);
observer.notifyObserver('update')
