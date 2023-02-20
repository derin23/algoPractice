# Link to orginal problem: https://leetcode.com/problems/powx-n/description/

# 50. Pow(x, n)
# Medium
# 6.7K
# 7K
# company
# Facebook
# company
# Bloomberg
# company
# Amazon


# Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

# Example 1:

# Input: x = 2.00000, n = 10
# Output: 1024.00000
# Example 2:

# Input: x = 2.10000, n = 3
# Output: 9.26100
# Example 3:

# Input: x = 2.00000, n = -2
# Output: 0.25000
# Explanation: 2-2 = 1/22 = 1/4 = 0.25
 

# Constraints:

# -100.0 < x < 100.0
# -231 <= n <= 231-1
# n is an integer.
# -104 <= xn <= 104

class Solution:
    def myPow(self, x: float, n: int) -> float:
        # Base case n = 0
        if n == 0:
            return 1
        
        # Case 1: n is negative
        if n < 0:
            return 1 / self.myPow(x, abs(n))
        
        # Case 2: n is odd
        if n % 2 != 0:
            return x * self.myPow(x, n-1)
    
        # Case 3: n is even
        # Use the fact that x^n = x^(n//2) * x^(n//2) to halve the number of recursive calls
        squared_res = self.myPow(x, n // 2) 
        return squared_res * squared_res