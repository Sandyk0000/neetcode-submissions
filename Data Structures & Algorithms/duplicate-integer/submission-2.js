class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // normal solution
    // hasDuplicate(nums) {
    //     nums.sort()
    //     for(let i=0; i<nums.length-1; i++){
    //         if(nums[i] == nums[i+1]){
    //             return true
    //         }   
    //     }
    //     return false
    // }

    hasDuplicate(nums) {
        const map = new Map();
        for(let i=0;i<nums.length;i++){
            if(map.has(nums[i])){
                return true
            }
            map.set(nums[i], i)
        }
        return false
    }
}
