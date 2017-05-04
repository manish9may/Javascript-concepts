self.onmessage = function(e) {
	var USE_TRANSFERRABLE = true;
  	var dataLength;	

  	var uInt8View = null;

  	if (e.data.copy !== undefined) {
   	 	USE_TRANSFERRABLE = false;
    	uInt8View = new Uint8Array(e.data.ourArray);
    	dataLength = e.data.ourArray.byteLength;
  	} 
  	else{
    		uInt8View = new Uint8Array(e.data);
    		e.data.byteLength = e.data.byteLength;
  		}

  		 for (var i=0; i < dataLength; i++ ) {
		    uInt8View[i] = uInt8View[i] % 2;
		  }
  
		  if (USE_TRANSFERRABLE) {
		    self.postMessage(uInt8View.buffer, [uInt8View.buffer]);
		  } else {
		    self.postMessage(e.data.ourArray);
		  }
}