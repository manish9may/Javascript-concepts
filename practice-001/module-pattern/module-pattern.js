//Anonymous closure
var global = 'Hello, I am a global variable :)';
(function(){

	var myGrades = [93, 95, 88, 0, 55, 91];
	var average = function() {
		var total = myGrades.reduce(function(accumulator, item){
			return accumulator + item
		},0);
		return 'Your average grade is ' + total / myGrades.length + '.';
	}
	 var failing = function(){
	 	 var failingGrades = myGrades.filter(function(item) {
      		return item < 70;
      	});
	  return 'You failed ' + failingGrades.length + ' times.';
	 }
	 console.log(failing());
	 console.log(global);
})();

//Global import

(function(globalVariable){
	var myGrades = [93, 95, 88, 0, 55, 91];
	var average = function() {
		var total = myGrades.reduce(function(accumulator, item){
			return accumulator + item
		},0);
		return 'Your average grade is ' + total / myGrades.length + '.';
	}
	 var failing = function(){
	 	 var failingGrades = myGrades.filter(function(item) {
      		return item < 70;
      	});
	  return 'You failed ' + failingGrades.length + ' times.';
	 }
	 globalVariable.average = average;
	 globalVariable.failing = failing;
})(window.globalVariable = window.globalVariable || {})

//Object interface

var myGradesCalculate = (function () {
	var myGrades = [93, 95, 88, 0, 55, 91];
	var average = function() {
		var total = myGrades.reduce(function(accumulator, item){
			return accumulator + item
		},0);
		return 'Your average grade is ' + total / myGrades.length + '.';
	}
	 var failing = function(){
	 	 var failingGrades = myGrades.filter(function(item) {
      		return item < 70;
      	});
	  return 'You failed ' + failingGrades.length + ' times.';
	 }
	 return {
	 	failing : failing,
	 	average : average
	 }
})();

console.log(myGradesCalculate.failing()); // 'You failed 2 times.' 
console.log(myGradesCalculate.average()); // 'Your average grade is 70.33333333333333.'