function processData(input) {
  var outArr = input.split(/[\s!\[,?.\\_'@\+\]]+/);// a regular expression to study!
  if (outArr[0] == "") {
    outArr.shift();
  }
  var len = outArr.length;
  if (outArr[len - 1] == "") {
    outArr.pop();
  }
  len = outArr.length;
  console.log(len);
  for (var i = 0; i < len; i++) {
    console.log(outArr[i]);
  }
}
processData("He is a very very good boy, isn't he?");
