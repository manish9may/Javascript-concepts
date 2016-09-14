(function(q){
	var topics = {},subUid = -1;
	q.subscribe = function(topic,func){
		if(!topics[topic]){
			topics[topic] = [];
		}
		var token = (++subUid).toString();
		topics[topic].push({
			token : token,
			func : func
		});
	}
	q.unsubscribe = function(func){
		for(var topic in topics){
			for(var i = 0;i < topics[topic].length;i++){
				if(topics[topic][i] === func){
					topics[topic].splice(i,1);
					return true;  
				}
			}
		}
		return false;
	}
	q.publish = function(){
		var args = Array.prototype.splice.call(arguments,0);
		var topic = args.shift();
		var event = args.shift();
		if(!topics[topic]){
			return false;
		}
		for(var i = 0;i < topics[topic].length;i++){
			topics[topic][i]['func'][event].apply(topics[topic][i]['func'],args);
		}
	}
})(window.pubsub = window.pubsub || {});
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
pubsub.subscribe('Component1',Component1)
pubsub.subscribe('Component2',Component2)
pubsub.publish('Component1','update')

