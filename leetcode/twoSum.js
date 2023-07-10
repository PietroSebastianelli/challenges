/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// The brute force solution is trivial, the important point is to find a way to do it better than O(n**2)
// We do this by first applying mergesort algo to the array, then we find the solution by divide and conquer apllied to the sorted array
// it seems pointless to rewrite the mergesort for the exercise, but we can suppose that the sorting function has time complexity of O(n*log n)

var twoSum = function(nums, target) {
    nums.sort();
    return sortedTwoSum(nums);
    
    
};

function sortedTwoSum(nums, target)