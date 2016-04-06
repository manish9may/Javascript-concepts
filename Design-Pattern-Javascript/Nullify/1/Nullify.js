var Nullify = function(){

}

Nullify.prototype.fillContent = function(){
	var oTest1 = {};
	var oTest2 = {};
	var oTest3 = {};
	oTest1.onclick = function () {};
	oTest2.onclick = function () {};
	oTest3.onclick = function () {};

	oTest1.innerHTML = 'TEST 1';
	oTest2.innerHTML = 'TEST 2';
	oTest3.innerHTML = 'TEST 3';
	oTest1 = oTest2 = oTest3 = null;
	return {
			test1: oTest1 ? oTest1.innerHTML : null,
			test2: oTest2 ? oTest2.innerHTML : null,
			test3: oTest3 ? oTest3.innerHTML : null
     }
}

var oNullify = new Nullify();
var oTexts =  oNullify.fillContent();

console.log(oTexts.test1);
console.log(oTexts.test2);
console.log(oTexts.test3);