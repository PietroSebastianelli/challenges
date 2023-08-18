class Solution {
    public int[] twoSum(int[] nums, int target) {
        int n = nums.length;
        int res[] = new int[2];
        HashMap<Integer, Integer> map = new HashMap <Integer, Integer>();
        for (int i = 0; i < n; i++)
        {
            int j = map.getOrDefault(target-nums[i], -1);
            if(j >= 0){
                res[0] = i; 
                res[1] = j;
                break;
            }

            map.put(nums[i], i);
        }
        int [] wrong = {-1,-1};
        return res;
    }
}
