var kidsWithCandies = function(candies, extraCandies) {
    let n = candies.length;
    let result = [];
    for (let i = 0; i < n; i++)
    {   
        candies[i] += extraCandies;
        if (Math.max(...candies) == candies[i])
            result[i] = true;
        else 
            result[i] = false;
        candies[i] -= extraCandies;
    }
    return result;
};
