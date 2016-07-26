function checkElement(A, j, k, m, n) {
  if (j < 0 || k < 0 || j >= m || k >= n) {
    return 0;
  }
  else if (A[j][k] == 1) {
    A[j][k] = 0;//important step, preventing infinite recursion
    return 1 + checkElement(A, j + 1, k, m, n)/* starting at East of element, going clockwise */ + checkElement(A, j + 1, k + 1, m, n) + checkElement(A, j, k + 1, m, n) + checkElement(A, j - 1, k+ 1, m, n) +
    checkElement(A, j - 1, k, m, n) + checkElement(A, j - 1, k - 1, m, n) + checkElement(A, j, k - 1, m, n) + checkElement(A, j + 1, k - 1, m, n)/*Ending at North East*/;
  }
  return 0;
}

function processData(input) {
  var num = input.split(/\r?\n/);//ensures split on \n with \r, or just \n
  //split("\n") is usually sufficient
  var m = parseInt(num[0]), n = parseInt(num[1]);
  var mat = [];
  for (var i = 0; i < m; i++) {//building matrix
    mat[i] = num[i + 2].split(" ").map(Number);
  }
  var mcount = 0, count = 0;
  for (var j = 0; j < m; j++) {
    for (var k = 0; k < n; k++) {
      count = checkElement(mat, j, k, m, n);
      if (count > mcount) {
        mcount = count;
      }
    }
  }
  console.log(mcount);
}
processData("4\n4\n1 1 0 0\n0 1 1 0\n0 0 1 0\n1 0 0 0");
