var Lazy = function(dTime){

}
Lazy.prototype.addZero = function(nTime)
{
	return nTime < 10? '0' + nTime: nTime;
};
Lazy.prototype.getFormattedTime = function(dTime){

	return this.addZero(dTime.getHours()) + ":" + this.addZero(dTime.getMinutes()) + ":" + this.addZero(dTime.getSeconds());
}
Lazy.prototype.update = function(counter,dTime){

	var oTime = this.getFormattedTime(dTime);

	console.log('oTime#'+counter+'       '+oTime)
}

var nCounter = 0;

var oLazy = new Lazy(new Date());

var nIdTimeout = setInterval(function()
    {
        if(nCounter === 4)
        {
            clearInterval(nIdTimeout);
        }
        oLazy.update(nCounter++, new Date());
   }, 500);