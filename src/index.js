
// You should implement your task here.

const x = [
  [1, 2, 3, 4],
  [7, 6, 5, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
module.exports = function towelSort (matrix) {
  let l = matrix.length;
  let arr = [];
  for(let i = 0; i < l; i++) {
    arr.push(...matrix[i])
  }
  return console.log(arr);
}

towelSort(x);