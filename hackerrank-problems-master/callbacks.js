function myMap(my_array, callback){
	var arr = [];
	for(var index in my_array){
		arr.push(callback(my_array[index]));
	}
	return arr;
}

var some_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(myMap(some_array, function(x) {return x + 1;})); //increments array element by 1.
console.log(myMap(some_array, function(x) {return x * 2;})); //doubles each array element.
console.log(myMap(some_array, function(x) {return x * x;})); //squares each array element.
//using modern methods:
console.log(myMap(some_array, (x) => x + 1));  //increments array element by 1.
console.log(myMap(some_array, (x) => x * 2 ));  //doubles each array element.
console.log(myMap(some_array, (x) => x * x ));  //squares each array element.

var some_array = [4, 5, 6, 7, 8, 9];
function myFilter(my_array, callback) {
  var arr = [];
  for (var index in my_array) {
    var num = callback(my_array[index]);
    if (num == true) {
      arr.push(my_array[index]);
    }
  }
  return arr;
}
console.log(myFilter(some_array, (x) => (x % 2 == 0) ? true : false ));
