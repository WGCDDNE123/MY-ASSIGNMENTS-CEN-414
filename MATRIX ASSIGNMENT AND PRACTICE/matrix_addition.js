var mA = [
  [5, 8],
  [0, 9],
]; //this is the matrix of the last 4 digits of my matric no
var mB = [
  [1, 2],
  [3, 4],
];

var result = [];
for (i = 0; i < mA.length; i++) {
  result[i] = [];
  for (j = 0; j < mB.length; j++) {
    result[i][j] = mA[i][j] + mB[i][j];
  }
}
console.log(result);
