class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        stairs = [1,1]
        if (n <= 1):
            return stairs[n]
        for i in range(2, n+1):
            stairs.append(stairs[i-1] + stairs[i-2])
        return stairs[n]
