var arrayPairSum = function(nums) {
    nums.sort((a,b)=>b-a);
    const n = nums.length;
    let acc = 0;
    for (let i = 0; i < n; i+=2)
    {
        acc += Math.min(nums[i],nums[i+1]);
    }
    return acc;
}
