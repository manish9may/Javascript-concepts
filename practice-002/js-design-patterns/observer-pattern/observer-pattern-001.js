(function(ObserverPattern){
	var Subject = function(){
		this.handlers = [];
	}
	Subject.prototype = (function(){
		var Observe = function(addHandler){
			console.log2( 'Added new observer' );
			this.handlers.push(addHandler);
		}
		var UnObserve = function(rmHandler){
			console.log2( 'Remove observer' );
			for(var index in this.handlers){
				if(this.handlers[index] === rmHandler){
					this.handlers.splice(index,1);
					return true;
				}
			}
		}
		var Notify = function(){
			console.log2( 'Notify observer' );
			var args = Array.prototype.splice.call(arguments,0);
			var event = args.shift();
			for(var index in this.handlers){
				this.handlers[index][event].apply(this.handlers[index],args);
			}
		}
		return {
			Observe : Observe,
			UnObserve : UnObserve,
			Notify : Notify
		};
	})();
	var Observer = function(){
		var publisher = new Subject();
		this.addObserver = function(newObserver){
			publisher.Observe(newObserver);
		};
		this.removeObserver = function(deleteObserver){
			publisher.UnObserve(deleteObserver);
		}
		this.notifyObserver = function(event){
			publisher.Notify(event)
		}
	}
	ObserverPattern.Observer = Observer;
})(window.ObserverPattern = window.ObserverPattern || {});

var Component1 = {
  _componentVar1 : 1,
  _componentVar2 : 2,
  update : function() {
    console.log2( '"update" called on Component 1 with: ', this._componentVar1 ,' and ' ,this._componentVar2 );
  }
};
var Component2 = {
  _componentVar1 : 3,
  _componentVar2 : 4,
  update : function() {
    console.log2( '"update" called on Component 2 with: ', this._componentVar1 ,' and ' ,this._componentVar2 );
  }
};

var observer = new ObserverPattern.Observer();
observer.addObserver(Component1);
observer.addObserver(Component2);
observer.notifyObserver('update')