self.onmessage = function(e) {
	var data = e.data;
	switch (data.cmd) {
		case "ringTheBell" :
			var workers = data.workers;
			for(var i = 0; i < workers.length; i++){
				if(!workers[i]['taskAssigned'] && !workers[i]['taskDuration']){
					self.postMessage({worker : workers[i] , cmd : "ringTheBell"});
					break;
				}
			}
		break;
		case "task" :
			var workers = data.workers;
			for(let i = 0; i < workers.length; i++){
				if(workers[i]['taskAssigned'] && workers[i]['taskDuration']){
					setTimeout(()=>{
						workers[i]['taskAssigned'] = "";
						delete workers[i]['taskDuration'];
						delete workers[i]['startTime'];
						self.postMessage({workers : workers,cmd : "task"});
					},workers[i]["taskDuration"] * 1000)
				}
			}
		break;

	}
}