function processData(input) {
  var a = input.split("\n");
  var n = parseInt(a[0]);
  myArray = a[1].split(' ').map(Number);
  processArray(myArray);
}
function processArray(myArray) {
  myArray.sort(function(a, b){return a - b});
  var len = myArray.length;
  for (var i = len - 1; i >= 0; i--) {
    if (myArray[i] > myArray[i - 1]) {
      console.log(myArray[i - 1]);
      break;
    }
    if (i == 0) {
      console.log(myArray[i]);
    }
  }
}
processData("5\n2 3 6 6 5");
