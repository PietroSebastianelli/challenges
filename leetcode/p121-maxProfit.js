var maxProfit = function(prices) {
    const n = prices.length;
    let lmin = new Array(n);
    let rmax = new Array(n);
    lmin[0] = prices[0];
    rmax[n-1] = prices[n-1];

    for (let i = 1; i < n; i++)
    {
        if (prices[i] < lmin[i-1])
            lmin[i] = prices[i];
        else
            lmin[i] = lmin[i-1];

        if (prices[n-1-i] > rmax[n-1]) 
            rmax[n-1-i] = prices[n-1-i];
        else
            rmax[n-1-i] = rmax[n-1-i]    
    }
    let maxprofit = 0;

    for(let i = 0; i < n; i++)
    {
        if (rmax[i] - lmin[i] > maxprofit)
            maxprofit = rmax[i] - lmin[i]; 
    }
    
    return maxprofit;
};
