class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //optimised approach
        let set = new Set();
        for(const num of nums){
            set.add(num)
        }
        let longest = 1;
        if(nums.length==0) return 0
        for(const num of set){
            if(!set.has(num-1)){
                let count=1;
                let current = num
                while(set.has(current+1)){
                    count++;
                    current++
                }
                longest = Math.max(longest, count)
            }
            
        }
        return longest
    }
}
