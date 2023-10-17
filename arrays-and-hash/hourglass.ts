/* Problem: https://www.hackerrank.com/challenges/2d-array/problem */

const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]


function hourGlassSum(arr: number[][]) {
  let maxSum = -63;
  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
      let currentSum = 
        arr[i][j] + arr[i][j+1] + arr[i][j+2] 
        + arr[i+1][j+1] 
        + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];

      console.log(arr[i][j], arr[i][j+1], arr[i][j+2])
      console.log(" ", arr[i+1][j+1])
      console.log(arr[i+2][j], arr[i+2][j+1], arr[i+2][j+2])
      console.log(" ")

      maxSum = Math.max(maxSum, currentSum);
    }
  }
  return maxSum;
}

console.log(hourGlassSum(arr))