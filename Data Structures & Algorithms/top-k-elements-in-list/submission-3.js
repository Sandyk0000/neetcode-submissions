class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // optimised approach
    topKFrequent(nums, k) {
        const map = new Map();
        for(let i=0;i<nums.length;i++){
            (map.has(nums[i]) ? map.set(nums[i], map.get(nums[i])+1) : map.set(nums[i], 1))
        }
        const arr = Array.from({length:nums.length+1}, ()=>[])
        for(let [key,value] of map){
            arr[value].push(key)
        }
        const ans=[]
        for(let i=arr.length-1;i>=0;i--){
           for(let num of arr[i]){
                ans.push(num)
                if (ans.length === k) return ans
           }
        }
    }
}
