class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //brute force
        nums.sort((a,b)=> a - b)
        let count = 1;
        let longest = 1;
        if(nums.length == 0) return 0
        for(let i=1;i<nums.length;i++){
            if(nums[i] == nums[i-1]+1) count++    
            //[2,3,4,4,5,10,20]
            else if(nums[i] == nums[i-1]) continue
            else{
                count = 1;
            }
            if(count>longest) longest =count
        }
        return longest
    }
}
