process.stdin.resume();
process.stdin.setEncoding('ascii');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});

function solveMeFirst(a, b) {
    return a+b;
}
process.stdin.on('end', function () {
    __input_stdin_array = __input_stdin.split("\n");
    var res;
    var _a = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;

    var _b = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;

    res = solveMeFirst(_a, _b);
    process.stdout.write(""+res+"\n");

});
