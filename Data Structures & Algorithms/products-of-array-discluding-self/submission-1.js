class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // optimised approach
        let ans=[];
        ans[0]=1;
        for(let i=1;i<nums.length;i++){
            ans[i] = ans[i-1]*nums[i-1]
        }
        let rightMultiple = 1;
        for(let i=nums.length-2;i>=0;i--){
            rightMultiple = rightMultiple*nums[i+1]
            ans[i]=ans[i]*rightMultiple
        }
        return ans
    }
}
