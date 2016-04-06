var Publisher = function(){
	this.handlers = [];
}

Publisher.prototype.observe = function(observer){
 	console.log( 'added new observer' );
 	this.handlers.push(observer);
}
Publisher.prototype.unobserve = function(observer){
	for(var i = 0,len = this.handlers.length;i<len;++i){
		if(this.handlers[i] === observer){
			this.handlers.splice(i,1);
			return true;
		}
	}
	return false;
}

Publisher.prototype.notify = function(){
	var args = Array.prototype.splice.call(arguments,0);
	var event = args.shift();
	if(this.handlers.length === 0){
		console.log('no observers!');
	}
	for(var i = 0,len = this.handlers.length;i<len;++i){
		this.handlers[i][event].apply(null,args);
	}

}

var StockGrabber = function(){
	var publisher = new Publisher();
	this.addObserver = function(newObserver){
		publisher.observe(newObserver);
	}
	this.removeObserver = function(deleteObserver){
		publisher.unobserve(deleteObserver);
	}
	this.fetchStocks = function(event){
		// fake fetching the stocks
    var stocks = {
      aapl : 167.00,
      goog : 243.67,
      msft : 99.34
    };
    
    // notify our observers of the stock change
    publisher.notify(event,stocks);
	}

}


// define a couple of different observers
var StockUpdaterComponent = {
  update : function() {
    console.log( '"update" called on StockUpdater with: ', arguments );
  }
};
var StockChartsComponent = {
  update : function() {
    console.log( '"update" called on StockCharts with: ', arguments );
  }
};

var stockApp = new StockGrabber();

stockApp.addObserver( StockUpdaterComponent );
stockApp.addObserver( StockChartsComponent );
stockApp.fetchStocks('update');

stockApp.removeObserver( StockUpdaterComponent );

stockApp.removeObserver( StockChartsComponent );

stockApp.fetchStocks('update');