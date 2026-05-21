class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // optimised Approach
        let map = new Map();
        for(let i=0;i<strs.length;i++){
            let freqArr = new Array(26).fill(0)
            for(let j=0;j<strs[i].length;j++){
                let index = strs[i].charCodeAt(j) - 97;
                freqArr[index]++;
            }
            const freqStr = freqArr.join(',');
            if(!map.has(freqStr)){
                map.set(freqStr,[])
            }
            map.get(freqStr).push(strs[i])
        }
        return Array.from(map.values())
    }
}
