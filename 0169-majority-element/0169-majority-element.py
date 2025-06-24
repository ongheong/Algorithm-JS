from collections import defaultdict
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        nums_cnt = defaultdict(int) 
        leng = len(nums)
        result = []
        for i in range(leng): 
            nums_cnt[nums[i]] += 1 
            if nums_cnt[nums[i]] >= leng/2: 
                result.append(nums[i]) 
        return max(result)