var worker = new Worker('doWork.js');

// set some constants/vars
var SIZE = 1024 * 1024 * 32; // 32MB for our data
var arrayBuffer = null;
var uInt8View = null;
var originalLength = null;
var startTime = 0;
function seconds(since) {
  return (new Date() - since) / 1000.0;
}

worker.onmessage = function(e){
	if (!e.data.type) {
      var elapsed = seconds(startTime);
   	}
   	var data = e.data;
   	console.log('postMessage roundtrip took: ' + (elapsed * 1000) + ' ms')
}

function setupArray() {
  arrayBuffer = new ArrayBuffer(SIZE);
  uInt8View = new Uint8Array(arrayBuffer);
  originalLength = uInt8View.length;
  for (var i = 0; i < originalLength; ++i) {
    uInt8View[i] = i;
  }
}

var test = function(useIt){
	 var useTransferrable = useIt;
  	 setupArray();
  	 if (useTransferrable) {
    	console.log ("## Using Transferrable object method on size: " + uInt8View.length);
    	worker.postMessage(uInt8View.buffer, [uInt8View.buffer]);
	  } else {
	    console.log ("## Using old COPY method on size: "+ uInt8View.length);
	    worker.postMessage({'copy': 'true', 'ourArray': uInt8View.buffer}); //uInt8View.buffer
	  }
}

//test(false);
setTimeout(function(){
	test(true);	
})


