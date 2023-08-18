class Solution {
    public int largestAltitude(int[] gain) {
        int max = 0;
        int current = 0;
        int n = gain.length;
        for(int i = 0; i < n; i++)
        {
            current = gain[i] + current;
            if ( current > max)
                max = current;
        }
        return max;
    }
}
