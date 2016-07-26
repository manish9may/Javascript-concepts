function processData(input) {
  var a = input.split("\n");
  var actual = a[0];
  var expected = a[1];
  var actArr = actual.split(" ");
  var expArr = expected.split(" ");
  var fine = 0;
  var aDay = parseInt(actArr[0]), eDay = parseInt(expArr[0]);
  var aMonth = parseInt(actArr[1]), eMonth = parseInt(expArr[1]);
  var aYear = parseInt(actArr[2]), eYear = parseInt(expArr[2]);
  //check year
  if (aYear > eYear) {
    fine = 10000;
  }
  // check month
  else if (aMonth > eMonth) {
    fine = 500 * (aMonth - eMonth);
  }
  //check day
  else if (aDay > eDay) {
    fine = 15 * (aDay - eDay);
  }
  else {
    fine = 0;
  }
  console.log(fine);
}
processData("9 6 2015\n6 6 2015");
