class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // brute force
        const ans=Array.from({length:nums.length}, ()=>1);
        for(let i=0;i<nums.length;i++){
            for(let j=0;j<nums.length;j++){
                if(j!=i){
                    ans[i]=ans[i]*nums[j]
                }
            }
        }
        return ans
    }
}
