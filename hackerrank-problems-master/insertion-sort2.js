//Full insertion sort
function processData(input) {
  var num = input.split("\n");
  var numArr = num[1].split(" ");
  var len = parseInt(num[0]);
  function insertSort(arr) {
    for (var i = 0; i < len - 1; i++) {
      var end = parseInt(arr[i + 1]);
      for (var j = i + 1; j >= 0; j--) {
        arr[j] = parseInt(arr[j - 1]);
        if (end >= arr[j]) {
          arr[j] = end;
          break;
        }
      }
      if (j == -1) {
        arr[0] = end;
      }
      console.log(arr.join(" "));
    }
  }
  insertSort(numArr);
}
processData("6\n1 4 3 5 6 2");
