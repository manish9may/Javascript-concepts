function listDecimals(n, arr) {
    var count1 = 0, count2 = 0, count3 = 0, output = [];
    for (var i = 0; i < n; i++) {
      if (arr[i] > 0) {
        count1++;
      }
      else if (arr[i] < 0) {
        count2++;
      }
      else {
        count3++;
      }
    }
    var dec1 = count1/n, dec2 = count2/n, dec3 = count3/n;
    output[0] = dec1;
    output[1] = dec2;
    output[2] = dec3;
    console.log(output[0]);
    console.log(output[1]);
    console.log(output[2]);
}
listDecimals(6, [-4, 3, -9, 0, 4, 1]);
