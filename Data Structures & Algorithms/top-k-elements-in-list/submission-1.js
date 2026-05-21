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

        // new bucket array creation
        let newArr = Array.from({length:nums.length+1},()=>[])

        // fill the array data
        for(const [num, freq] of map){
            newArr[freq].push(num)
        }

        //getting the result
        let result = [];
        for(let i=newArr.length-1;i>=0;i--){
            if(newArr[i].length > 0){
                for(let num of newArr[i]){
                    result.push(num);
                    if(result.length == k){
                        return result
                    }
                }
            }
        }
    }
}
