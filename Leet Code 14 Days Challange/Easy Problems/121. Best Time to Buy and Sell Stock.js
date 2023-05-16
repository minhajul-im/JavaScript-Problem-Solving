// 121 Best Time to Buy and Sell Stock

var maxProfit = function (prices) {
  let left = 0; // buy price index
  let right = 1; // sell price index
  let maximumProfit = 0; // max profit

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];

      maximumProfit = Math.max(maximumProfit, profit);
    } else left = right;

    right++;
  }

  return maximumProfit;
};
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
