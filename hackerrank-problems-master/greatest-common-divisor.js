function gcd(x, y) {
if (x == 0 || y == 0) {
  return x + y;
}
if (x == 1 || y == 1) {
  return 1;
}
  if (x == y) {
    return x;
  }
  else {
    if (y > x) {
      var temp = x;
      x = y;
      y = temp;
    }
    return gcd(x - y, y);
  }
}
//console.log(gcd(x, y));
// I think above is okay, but possibly a problem somewhere? Below is much more efficient and no problems!!
function gcd(x, y) {
  if (x == 0 || y == 0) {
    return x + y;
  }
  return gcd(y, x % y);
}
console.log(gcd(54, 198));
