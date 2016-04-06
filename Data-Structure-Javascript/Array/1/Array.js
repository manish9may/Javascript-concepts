var nums1 = [1,2,3,4,5];
console.log('nums1				',nums1);
var samenums1 = nums1;
console.log('samenums1				',samenums1);
samenums1[0] = 400;
console.log('nums1[0]				',nums1[0]);
var copyArray = function(destArray,srcArray){
	for(var i = 0; i < srcArray.length; i++){
		destArray[i] = srcArray[i];
	}
}
var nums2 = [1,2,3,4,5];
var samenums2 = [];
copyArray(samenums2,nums2);
samenums2[0] = 500;
console.log('nums2				',nums2);
console.log('samenums2				',samenums2);


var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
console.log('names         ',names);
console.log('names.indexOf("Cynthia")       ',names.indexOf('Cynthia'))
