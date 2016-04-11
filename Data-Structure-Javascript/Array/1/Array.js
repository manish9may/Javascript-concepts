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


var names1 = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
console.log('names1         ',names1);
console.log('names1.indexOf("Cynthia")       ',names1.indexOf('Cynthia'))
var names2 = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
console.log('names2.join()                ',names2.join());
console.log('names2.toString()                ',names2.toString());

var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan","Mike"];


var itDiv = cisDept.concat(dmpDept);

console.log('cisDept      ',cisDept)
console.log('dmpDept      ',dmpDept)
console.log('itDiv      ',itDiv);

var dmpDept2 = Array.prototype.splice.apply(itDiv,[3,3]);
console.log('dmpDept2          ',dmpDept2);


var compare = function(number1, number2){
	return number1 - number2;
}

var nums3 = [3,1,2,100,4,200];

console.log('nums3				',nums3)
nums3.sort(compare);
console.log('nums3				',nums3)

var square = function(number){
	console.log(number, number * number)
	return number * number;
}

nums3.forEach(square);

console.log('nums3				',nums3);

var isEven = function(number){
	return number % 2 === 0;
}
var isOdd = function(number){
	return number % 2 !== 0;
}
var nums4 = [2,4,6,8,10];

var evenNums4 = nums4.every(isEven)

if(isEven){
	console.log('all numbers are even');
}else{
	console.log('not all numbers are even');
}

var nums5 = [1,2,3,4,5,6,7,8,9,10];

var someEven = nums5.some(isEven);

if(someEven){
	console.log('some numbers are even')
}else{
	console.log('no number is even');
}


var add = function(runningTotal,currentTotal){
	return runningTotal + currentTotal;
}

var nums5 = [1,2,3,4,5,6,7,8,9,10]
var sums5 = nums5.reduce(add);
console.log('sums5            ',sums5);

var concat = function(accumulatedString, item){
	return accumulatedString + item;
}

var words = ["the ", "quick ","brown ", "fox "];

var sentence1 = words.reduce(concat);

console.log('sentence1				',sentence1);

var sentence2 = words.reduceRight(concat);

console.log('sentence2				',sentence2);

var grades = [77, 65, 81, 92, 83];

var curve = function(grade){
	return grade += 5;
}

var newGrades = grades.map(curve)

console.log('newGrades				',newGrades);

var first = function(grade){
	return grade.toString()[0];
}

var newGrades0 = newGrades.map(first);

console.log('newGrades0				',newGrades0.join(''));





