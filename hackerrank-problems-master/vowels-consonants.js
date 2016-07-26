function vowelsAndConsonants(s) {
  var sArr = s.split('');
  var len = sArr.length;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelsArr = [], conArr = [];
  for (var i = 0; i < len; i++) {
    var c = sArr[i];
    if (vowels.indexOf(c) != -1) {
      vowelsArr.push(c);
    }
    else {
      conArr.push(c);
    }
  }
  var vLen = vowelsArr.length, cLen = conArr.length;
  for (var j = 0; j < vLen; j++) {
    console.log(vowelsArr[j]);
  }
  for (var k = 0; k < cLen; k++) {
    console.log(conArr[k]);
  }
}
vowelsAndConsonants("javascriptloops");
