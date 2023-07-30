var removeDuplicates = function(nums) {
    if (nums.length <= 1)
        return nums.length;
    let i = 1;
    let k = 1;

    while ( i < nums.length)
    {
        if(nums[i] == nums[i-1])
            nums.splice(i,1);
        else
        {
            i++;
            k++;
        }

    }
    return k;
    
};
