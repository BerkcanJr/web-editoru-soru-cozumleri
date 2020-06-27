var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    for (let value of prices) {
        if (value < minPrice) {
            minPrice = value;
        }
        if (value - minPrice > maxProfit) {
            maxProfit = value - minPrice;
        }
    }
    return maxProfit;
};