function processData(input) {
  var dates = input.split("\n");
  for (var i = 0; i < dates.length - 1; i++) {
    findDay(dates[i]);
  }
}
function findDay(myDate) {// Thought I had to change date format to YYYY-MM-DD
  // see below for much shorter answer keeping MM/DD/YYY format (horrible American format!)
  myDate = myDate.split("/");
  var temp = myDate[0];
  myDate[0] = myDate[2];
  myDate[2] = myDate[1];
  myDate[1] = temp;
  myDate = myDate.join();
  var formatDate = myDate.replace(/,/g, "-");
  var d = new Date(formatDate);
  var dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  if (parseInt(d) != -1) {
    var dayNum = d.getDay();
    console.log(dayArr[dayNum]);
  }
}
processData("10/11/2009\n11/10/2010\n-1");
/* Shorter version
function findDay(myDate) {
  var d = new Date(myDate);
  var dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  if (parseInt(d) != -1) {
    var dayNum = d.getDay();
    console.log(dayArr[dayNum]);
  }  
}
