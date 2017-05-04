var worker = new Worker('javascript-advance/workers/doWork.js'); 

worker.addEventListener('message',function(e){
	console.log('Worker said : ',e.data);
},false);

worker.postMessage('Hello World');