var mA = [
  [1, 3, 1],
  [1, 0, 0],
  [2, 3, 4],
];

var mB = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var result = new Array(mA.length);

function multiply(mA, mB) {
  for (var i = 0; i < result.length; i++) {
    result[i] = new Array(mB[i], length);

    for (var j = 0; j < mA.length; j++) {
      result[i][j] = 0; //result[i][j] is NaN, force to be zero
      for (var k = 0; k < mB.length; k++) {
        result[i][j] += mA[i][k] * mB[k][j];
      }
    }
  }
  return result;
}
