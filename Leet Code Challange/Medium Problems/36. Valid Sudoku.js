var isValidSudoku = function (board) {
  let len = board.length;

  for (let i = 0; i < len; i++) {
    const rowMap = {};
    const colMap = {};

    for (let j = 0; j < len; j++) {
      if (!validate(board[i][j], rowMap)) {
        return false;
      }
      if (!validate(board[j][i], colMap)) {
        return false;
      }
      if (i % 3 === 0 && j % 3 === 0) {
        const boxMap = {};

        for (let k = i; k < i + 3; k++) {
          for (let l = j; l < j + 3; l++) {
            if (!validate(board[k][l], boxMap)) return false;
          }
        }
      }
    }
  }

  return true;
};

function validate(num, map) {
  if (!Number.isInteger(+num)) return true;

  if (map[num]) return false;

  map[num] = 1;
  return true;
}
let board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

let boards = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(boards));
