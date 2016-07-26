function processData(input) {
  var num = input.split("\n");
  var n = num[0];
  var arr = [], c = 0;;
  for (var i = 1; i <= n; i++) {
    arr = num[i].split("");
    var l = arr.length;
    for (var j = 1; j < l; j++) {
      if ((Math.abs(arr[j].charCodeAt(0) - arr[j - 1].charCodeAt(0))) != (Math.abs(arr[l - j - 1].charCodeAt(0) - arr[l - j].charCodeAt(0)))) {
        console.log("Not Funny");
        break;
      }
      else {
        c++;
        if (c == l - 1) {
          console.log("Funny");
          c = 0;
          break;
        }
      }
    }
  }
}
processData("2\nacxz\nbcxz")
