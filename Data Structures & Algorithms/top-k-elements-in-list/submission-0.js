class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for(let i=0;i<nums.length;i++){
            map.set(nums[i], (map.get(nums[i]) || 0)+1)
        }
        const newArr = [...map.entries()].sort((a, b)=>b[1] - a[1]);
        return newArr.slice(0,k).map((pair)=>pair[0])

    }
}
