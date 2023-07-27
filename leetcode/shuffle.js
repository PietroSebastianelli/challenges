var shuffle = function(nums, n) {
    let head = nums.slice(0,n);
    let tail = nums.slice(n,2*n);
    let result = [];
    for (let i = 0; i < n; i++)
    {
        result.push(head[i]);
        result.push(tail[i]);
    }
    return result;
};
