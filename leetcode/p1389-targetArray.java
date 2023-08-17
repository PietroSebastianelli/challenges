class Solution {
    public int[] createTargetArray(int[] nums, int[] index) {
        int n = nums.length;
        int[] target = new int[n];
        for (int i = 0; i < n; i++){
            for (int j = 0; j < i; j++)
                if (index[j] >= index[i])
                    index[j]++;
        }
        for(int i = 0; i < n; i++){
            target[index[i]] = nums[i];
        }
        return target;
    }


}
