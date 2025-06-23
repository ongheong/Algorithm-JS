# 각 요소가 최대 2번만 나타나도록 중복된 요소 제거하기
# 입력 배열은 정렬X, 리턴 배열은 정렬 O
# 리턴: 배열 길이 k (입력 배열을 직접 바꿔야 한다)
from collections import defaultdict

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        twice_dict = defaultdict(int)
        max_num = 10**4
        k = len(nums)
        for i in range(len(nums)):
            n = nums[i]
            twice_dict[n] += 1
            if twice_dict[n] > 2:
                nums[i] = max_num
                k -= 1
        nums.sort()
        nums = nums[0:k]
        return len(nums)


        