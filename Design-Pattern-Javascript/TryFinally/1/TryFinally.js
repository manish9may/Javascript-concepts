var TryFinally = function(){

}

TryFinally.prototype.getContent = function(){
	var oTest1 = {
		innerHTML : "Test 1"
	};
	var oTest2 = {
		innerHTML : "Test 2"
	};
	var oTest3 = {
		innerHTML : "Test 3"
	};
	oTest1.onclick = function () {};
	oTest2.onclick = function () {};
	oTest3.onclick = function () {};
	try
	{
		return {
			test1: oTest1.innerHTML,
			test2: oTest2.innerHTML,
			test3: oTest3.innerHTML
		}
	}finally
	{
		oTest1 = oTest2 = oTest3 = null;
	}
}

var oTryFinally = new TryFinally();
var oTexts = oTryFinally.getContent();
console.log(oTexts.test1);
console.log(oTexts.test2);
console.log(oTexts.test3);