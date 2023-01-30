const matrix1 = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

const matrix2 = [
  [9, 10, 11],
  [12, 13, 14],
  [15, 16, 17]
];

const matrixMultiply = (matrix1) => (matrix2) => {
  if (matrix1[0].length != matrix2.length) 
    document.write(`The number of columns in the first matrix must be equal to the number of rows in the second matrix to achieve their product`);
  else {
    let product = new Array(3);
    for (let i = 0; i < matrix1.length; i++) {
      product[i] = [];
      for (let j = 0; j < matrix2[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < matrix1[0].length; k++) {
          let a = matrix1[i][k];
          let b = matrix2[k][j];
          sum += a * b;
        }
        product[i][j] = sum;
      }
    }
    return product;
  }
}

function displayMatrix(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] <= 99 && array[i][j] >= 10)
        document.write("&ensp;" + array[i][j] + "&emsp;");
      else if (array[i][j] <= 9)
        document.write("&ensp;&nbsp;" + array[i][j] + "&emsp;");
      else document.write(array[i][j] + "&emsp;");
    }
    document.write("<br>");
  }
}

console.log("This is the first matrix<br>");
displayMatrix(matrix1);
document.writeln("This is the second matrix<br>");
displayMatrix(matrix2);
document.writeln("This is the product<br>");
displayMatrix(matrixMultiply(matrix1)(matrix2));
