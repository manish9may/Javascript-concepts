function findPoint(input) {
  var n = input[0];
  for (var i = 1; i <= n; i++) {
    px = input[i][0];
    py = input[i][1];
    qx = input[i][2];
    qy = input[i][3];
    sx = 2 * qx - px;
    sy = 2 * qy - py;
    output = sx + " " + sy;
    console.log(output);
  }
}
findPoint([10,[1, 1, 2, 2],[4, 3, 5, 2],[2, 4, 5, 6],[1, 2, 2, 2],[1, 1, 1, 1],[1, 2, 2, 1],[1, 8, 7, 8],[9, 1, 1, 1],[8, 4, 3, 2],[7, 8, 9, 1]]);
