/**
 * Rotates a square matrix 90° clockwise in-place.
 * 
 * @param matrix - The n x n matrix to rotate
 */
function rotateMatrix(matrix: number[][]): void {
    const n = matrix.length;

    // Step 1: Transpose the matrix (swap rows with columns)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Swap element at (i,j) with (j,i)
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Step 2: Reverse each row to complete the clockwise rotation
    for (let row of matrix) {
        row.reverse();
    }
}

// Example usage:
let matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

rotateMatrix(matrix1);
console.log(matrix1);
/*
[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
]
*/

let matrix2 = [
  [1, 2],
  [3, 4]
];

rotateMatrix(matrix2);
console.log(matrix2);
/*
[
  [3, 1],
  [4, 2]
]
*/
