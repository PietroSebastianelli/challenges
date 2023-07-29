var longestCommonPrefix = function(strs) {
    strs = strs.map( x => x.split(''));
    // n is the max amount of characters in the result string 
    let maxChars = strs.map(x => x.length).reduce((a,b)=>Math.min(a,b));
    let m = strs.length;

    let result = '';

    for(let i = 0; i < maxChars; i++)
    {
        for(let j = 0; j < m - 1; j++)
        {
            if(strs[j][i] != strs[j+1][i])
                return result;
        }
        result += strs[0][i];
            
    }
    return result;
};

