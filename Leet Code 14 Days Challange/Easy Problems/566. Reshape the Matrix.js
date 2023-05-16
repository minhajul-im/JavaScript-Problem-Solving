// 566. Reshape the Matrix

let mat = [
    [1, 2],
    [3, 4],
  ],
  r = 2,
  c = 4;

console.log(mat.flat());

var matrixReshape = function (mat, r, c) {
  const flat = mat.flat();

  if (flat.length !== r * c) return mat;

  const reshaped = [];
  for (let i = 0; i < r; i++) {
    reshaped.push([]);
    for (let j = 0; j < c; j++) {
      reshaped[i][j] = flat.shift();
    }
  }
  return reshaped;
};
console.log(matrixReshape(mat));
