function processData(input) {
  var num = input.split("\n");
  var numArr = num[1].split(" ");
  function insertSort(arr) {
    var end = arr[arr.length - 1];
    for (var i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
      if (end < arr[i]) {
        console.log(arr.join(" "));
      }
      else {
        arr[i] = end;
        console.log(arr.join(" "));
        break;
      }
    }
    if (i == 0) {
      arr[i] = end;
      console.log(arr.join(" "));
    }
  }
  insertSort(numArr);
}
processData("5\n2 4 6 8 1");
