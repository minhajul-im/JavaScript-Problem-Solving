// 1299. Replace Elements with Greatest Element on Right Side

var replaceElements = function (arr) {
  let temp,
    large = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    temp = arr[i];
    arr[i] = large;

    if (temp > large) {
      large = temp;
    }
  }

  return arr;
};
