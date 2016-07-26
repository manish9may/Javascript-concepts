function processData(input) {
  var a = input.split("\n");//takes account of way data is input on hackerrank
  var m = parseFloat(a[0]), t = parseInt(a[1]), x = parseInt(a[2]);
  var price = m + m*t/100 + m*x/100;
  var total = Math.round(price);
  console.log("The final price of the meal is $" + total + ".");
}
processData("12.00\n20\n8\n");
