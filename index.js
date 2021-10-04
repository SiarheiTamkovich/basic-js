
// function getSum(n) {
//     let sum = 0;
//     while (n > 0 || sum > 9) {
//          if(n == 0) {
//             n = sum;
//             sum = 0;
//          }
//          sum = sum + n % 10;
//          n = Math.floor(n / 10);
//     }
//     return sum;
// }
// console.log(getSum(1921));
const matrix = [
    [true, false, false],
    [false, true, false],
    [false, false, false]
   ];
   
   console.log(minesweeper(matrix));

   function minesweeper(matrix) {
    var adjacents = ([i, j]) => [
      [i - 1, j - 1],
      [i - 1, j],
      [i - 1, j + 1],
      [i, j - 1],
      [i, j + 1],
      [i + 1, j - 1],
      [i + 1, j],
      [i + 1, j + 1],
    ];
    var hintsMatrix = matrix.map((r) => r.map((_) => 0));
  
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j]) {
          var myAd = adjacents([i, j]);
          for (var k = 0; k < 8; k++) {
            if (
              myAd[k][0] >= 0 &&
              myAd[k][1] >= 0 &&
              myAd[k][0] < matrix.length &&
              myAd[k][1] < matrix[i].length
            ) {
              hintsMatrix[myAd[k][0]][myAd[k][1]]++;
            }
          }
        }
      }
    }
  
    return hintsMatrix;
  }
  