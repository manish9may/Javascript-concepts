var Event = function (sender) {
	this._sender = sender;
	this._listeners = [];
}

Event.prototype = (function(){
	var attach = function(listener){
		this._listeners.push(listener);
	};
	var notify = function(args){
		for(var index in this._listeners){
			this._listeners[index](this._sender,args);
		}
	}
	return {
		attach : attach,
		notify : notify
	};
})();