// It must be possible to shorten this code (e.g. repeated use of timeArr.pop())
function convertTime(time) {
  var output = "";
  var timeArr = time.split("");
  var len = timeArr.length;
  if (timeArr[len - 2] === "P") {
    timeArr.pop();
    timeArr.pop();
    timeArr = timeArr.join("");
    var timeArr = timeArr.split(":");
    var newHours = 0;
    newHours = parseInt(timeArr[0]) + 12;
    if (newHours == 24) {
      newHours = "12";
    }
    timeArr.shift();
    timeArr.unshift(newHours);
    output = timeArr.join(":");
  }
else {
  if (parseInt(timeArr[0] + timeArr[1]) + 12 === 24) {
    timeArr.shift(), timeArr.shift();
    timeArr.unshift("0"), timeArr.unshift("0");
  }
  timeArr.pop();
  timeArr.pop();
  output = timeArr.join("");
}
  console.log(output);
}
convertTime("07:45:23PM");
