// 118. Pascal's Triangle

var generate = function (numRows) {
  const result = [];
  if (numRows >= 1) {
    result.push([1]);
  }
  if (numRows >= 2) {
    for (let i = 1; i < numRows; i++) {
      const temp = [1];
      result[i - 1].forEach((e, i, arr) => {
        if (i == 0) return;
        temp.push(e + arr[i - 1]);
      });
      temp.push(1);
      result.push(temp);
    }
  }
  return result;
};
