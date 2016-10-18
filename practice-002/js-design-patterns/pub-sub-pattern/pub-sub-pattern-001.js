(function(PubSubPattern){
	var Subscriber = function(){
	}
	Subscriber.prototype = (function(){
		var topics = {},subUid = -1;
		var Subscribe = function(topicName,func){
			if(!topics[topicName]){
				topics[topicName] = [];
			}
			var token = (++subUid).toString();
			topics[topicName].push({
				'token' : token,
				'func' : func
			});
		}
		var UnSubscribe = function(func){
				for(var topic in topics){
					if(topics.hasOwnProperty(topic)){
						for(var index in topics[topic]){
							if(topics[topic][index] === func){
								topics[topic].splice(index,1);
								return true;
							}
						}
					}
				}
			return false;
		}
		var Publish = function(){
			var args = Array.prototype.splice.call(arguments,0);
			var topic = args.shift();
			var event = args.shift();
			if(!topics[topic]){
				return false;
			}

			for(var index in topics[topic]){
				topics[topic][index]['func'][event].apply(topics[topic][index]['func'],args);
			}
		}
		return {
			Subscribe : Subscribe,
			UnSubscribe : UnSubscribe,
			Publish : Publish
		};
	})();
	PubSubPattern.Subscriber = new Subscriber();
})(window.PubSubPattern = window.PubSubPattern || {});

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

PubSubPattern.Subscriber.Subscribe('Component1',Component1)
PubSubPattern.Subscriber.Subscribe('Component2',Component2)
PubSubPattern.Subscriber.Publish('Component1','update');