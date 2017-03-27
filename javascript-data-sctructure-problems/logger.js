(function () {
    if (!console) {
        console = {};
    }
    var old = console.log;
    var logger = document.getElementById('log');
    console.logger = function () {
        var args = Array.prototype.splice.call(arguments,0);
        var messages = args;
        for(var i = 0;i < messages.length;i++){
            message = messages[i];
            if (typeof message == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message));
            } else {
                logger.innerHTML += message;
            }
        }
        logger.innerHTML += '</br></br>' 
        console.log.apply(null,['\n']);
        console.log.apply(null,args);
    }
})();