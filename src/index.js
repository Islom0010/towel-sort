// You should implement your task here.
module.exports = function towelSort(matrix) {
    let l = matrix.length;
    let arr = [];
    let x = false;
    for (let i = 0; i < l; i++) {
        if (l == undefined) {
            arr == [];
        } else if (x == false && matrix) {
            arr.push(...matrix[i]);
            x = true;
        } else if (x && matrix) {
            arr.push(...matrix[i].reverse());
            x = false;
        }
    }
    return arr;
};
