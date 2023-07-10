/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// The brute force solution is trivial, the important point is to find a way to do it better than O(n**2)
// We do this by first applying mergesort algo to the array, then we find the solution by divide and conquer apllied to the sorted array
// in order to return the precise index we need to rewrite mergesort in order to remember the array
// for now i will quickly write the brute force solution:

var twoSum = function(nums, target) {
    let l = nums.length;
    for (let i = 0; i < l; i++){
        for(let j=i+1;j<l;j++){
            if (nums[i]+nums[j] == target) return [i,j];
        }
    }    
};