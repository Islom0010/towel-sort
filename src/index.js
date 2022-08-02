
// You should implement your task here.
module.exports = function towelSort (matrix) {
  let l = matrix.length;
  let arr = [];
  for(let i = 0; i < l; i++) {
    arr.push(...matrix[i])
  }
  return arr;
}