var runningSum = function(nums) {

    const n = nums.length;
    let sums = [nums[0]];
    
    for (let i = 1; i < n; i++){

        sums[i] = sums[i-1] + nums[i];

    }
    return sums;

    

};