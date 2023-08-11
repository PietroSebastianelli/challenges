class Solution(object):
    def numberOfEmployeesWhoMetTarget(self, hours, target):
        """
        :type hours: List[int]
        :type target: int
        :rtype: int
        """
        n = len(hours)
        counter = 0
        for i in range(n):
            if (hours[i] >= target):
                counter += 1
        return counter
            
