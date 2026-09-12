class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice
        }
        else if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }
    return maxProfit
    }
}
