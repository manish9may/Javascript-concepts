var my_array = ["end", "rev", "ere", "rot", "tetet"];
for (var el of my_array) {
  var revEl = el.split('').reverse().join('');
  if (el == revEl) {
    console.log(el);
  } 
}
