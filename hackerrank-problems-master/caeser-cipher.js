function processData(input) {
  var num = input.split("\n");
  var n = parseInt(num[0]);// length of k string
  var s = num[1];// string
  var k = parseInt(num[2]);// no. of letters to rotate
  var output = "", chCode = 0, newChCode = 0;
  for (var i = 0; i < s.length; i++) {
    chCode = s.charCodeAt(i);
    if (chCode > 96 && chCode < 123) {
      newChCode = chCode + k;
      if (newChCode > 122) {
        while (newChCode > 122) {
          newChCode -= 26;
        }
      }
    }
    else if (chCode > 64 && chCode < 91) {
      newChCode = chCode + k;
      if (newChCode > 90) {
        while (newChCode > 90) {
          newChCode -= 26;
        }
      }
    }
    else {
      newChCode = chCode;
    }
    output += String.fromCharCode(newChCode);
  }
  console.log(output);
}
processData("11\nmiddle-Outz\n2")
/*
str = "zaZA";
console.log(str.charCodeAt(0));//122
console.log(str.charCodeAt(1));//97
console.log(str.charCodeAt(2));//90
console.log(str.charCodeAt(3));//65
*/
