//1. this is called number
const number = 1971;

// 2 Generate Random Number in Max & Min
const randomNumber = (max, min) => {
  const rand = Math.trunc(Math.random() * (max - min) + min);
  return rand;
};

// 3 multidimensional arr sum
const matrix = [
  [10, 20, 30, 50],
  [40, 70, 80, 10],
  [90, 60, 50, 90],
  [100, 130, 120, 80],
];

const multiDimensionalArrayOfSum = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
};
