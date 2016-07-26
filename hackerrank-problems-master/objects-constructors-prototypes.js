var Car = function(name, mileage, max_speed) {
  this.name = name;
  this. mileage = mileage;
  this.max_speed = max_speed;
}
var Square = function(A, B, C, D) {
  this.A = A;
  this.B = B;
  this.C = C;
  this.D = D;
}
Square.prototype.isSquare = function() {
  if (this.A == this.B && this.B == this.C && this.C == this.D) {
    console.log("true");
  }
  else {
    console.log("false");
  }
}
var sq1 = new Square(2, 3, 3, 3);
sq1.isSquare();
