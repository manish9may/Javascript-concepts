var my_string = "forward";
try {
  //throw new Error();
  my_string = my_string.split('').reverse().join('');
  console.log("Reversed string is : " + my_string);
} catch(err) {
  console.log("Error : " + err.message);
} finally {
  console.log("Type of my_string is : " + typeof my_string);
}

var my_height = "seven";
try {
  if (isNaN(my_height)) {
    throw new Error("notANumberError");
  }
  else if (my_height > 10) {
    throw new Error("hugeHeightError");
  }
  else if (my_height < 4) {
    throw new Error("tinyHeightError");
  }
  console.log(my_height);
}
catch (err) {
  console.log(err.message);
}
