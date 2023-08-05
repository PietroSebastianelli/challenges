var strStr = function(haystack, needle) {
    const n = haystack.length;
    const m = needle.length;
    for (let i = 0; i < n; i++)
    {
        let match = true
        for (let j = 0; j < m; j++)
        {
            if (needle[j] != haystack[i+j])
            {
                match = false;
                break;
            }
        }
        if (match)
            return i;

    }
    return -1;
        
    
};
