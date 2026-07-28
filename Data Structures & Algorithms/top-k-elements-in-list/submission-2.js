class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // better approach
    topKFrequent(nums, k) {
        const map = new Map();
        for(let i=0;i<nums.length;i++){
            (map.has(nums[i]) ? map.set(nums[i], map.get(nums[i])+1) : map.set(nums[i], 1))
        }
        const arr=[...map];
        arr.sort((a,b) => b[1]-a[1]);
        const ans=[];
        for(let i=0;i<k;i++){
           ans.push(arr[i][0]) 
        }
        return ans
    }
}
