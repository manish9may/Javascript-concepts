const ringWorker = new Worker('../web-worker/ring-the-bell.js');

ringWorker.addEventListener('message',function(e){
alert('Name : ' +e.data.name + ' , '+'Mobile Number : '+e.data.mobileNumber)
},false);