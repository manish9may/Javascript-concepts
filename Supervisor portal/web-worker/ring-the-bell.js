self.onmessage = function(e) {
	var workers = e.data;
	for(var i = 0; i < workers.length; i++){
		if(!workers[i]['taskAssigned'] && !workers[i]['taskDuration']){
			self.postMessage(workers[i]);
			break;
		}
	}
}