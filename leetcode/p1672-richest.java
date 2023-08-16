class Solution {
    public int maximumWealth(int[][] accounts) {
    int max = 0;
    int total;
        for (int[] client : accounts)
        {
            total = 0;
            for (int bank: client)
            {
                total += bank;
            }
            if(total > max)
                max = total;
        }
    return max;
    }
}
