const ringWorker = new Worker('../web-worker/ring-the-bell.js');

ringWorker.addEventListener('message',function(e){
	var data = e.data;
	switch (data.cmd) {
		case "ringTheBell" :
			var worker = data.worker;
			alert('Name : ' +worker.name + ' , '+'Mobile Number : '+worker.mobileNumber)
		break;
		case "task" :
			var workers = data.workers;
			
		break;

	}
	
},false);