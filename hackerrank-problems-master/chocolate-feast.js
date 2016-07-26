// chocolate-feast2.js gives a slighlty neater solution, but still a lot of scope for improvement
function processData(input) {
  var num = input.split("\n");
  var t = parseInt(num[0]);
  for (var i = 1; i <= t; i++) {
    var n_temp = num[i].split(" ");
    var n = parseInt(n_temp[0]);// amount to use
    var c = parseInt(n_temp[1]);// cost per choc.
    var m = parseInt(n_temp[2]);// no. of wrappers for each extra choc.
    var n_chocs = Math.floor(n/c);// Number of chocs. initially and no. of wrappers
    if (m > n_chocs) {
      var n_ext = 0;// no extra chocs.
    }
    else {
      var n_ext = Math.floor(n_chocs/m); //No. of extra chocs.
      if (n_chocs % m >= 0) {
        var n_ext2 = Math.floor((n_ext + n_chocs % m)/m);// Using extra wrappersS
        n_ext += n_ext2;
        if (n_ext2 % m >= 0) {
          var n_ext3 = Math.floor((n_ext2 + n_ext % m)/m);
          n_ext += n_ext3;
          if (n_ext3 % m >= 0) {
            var n_ext4 = Math.floor((n_ext3 + n_ext2 % m)/m);
            n_ext += n_ext4;
          }
        }
      }
    }
    var output = n_chocs + n_ext;
    console.log(output);
  }
}
processData("15\n39863 135 24765\n43729 222 20409\n4477 10 4365\n11703 82 4187\n32318 8 25803\n48647 164 10910\n31371 40 4507\n43203 60 5\n61306 442 35849\n70453 56655 51411\n8371 1 4582\n14946 101 9732\n68127 52225 10318\n99097 8712 72920\n32031 42 7031");
