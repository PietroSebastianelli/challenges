var search = function(nums, target) {
    return bin(nums, target, 0)
    
};

function bin(nums,target, offset)
{

    const n = nums.length;
    if (n <= 2)
    {
        for (let i = 0; i < n; i++)
        {
            if (target == nums[i])
                return i + offset;
        }
        return -1;
    }

    const mid = Math.floor(n / 2);
    if (nums[mid] == target)
        return mid + offset;
    if (nums[mid] > target)
    {
        nums.splice(mid);
        return bin(nums, target, offset);
    }
    if (nums[mid] < target)
    {
        nums.splice(0, mid);
        return bin(nums, target, offset + mid);
    }
    

}
