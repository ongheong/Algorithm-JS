from collections import deque

class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        nums_queue = deque(nums)
        nums_queue.rotate(k)
        # 배열을 in-place로 수정하려면 nums[:]와 같이 사용할 것
        nums[:] = list(nums_queue)
        
        