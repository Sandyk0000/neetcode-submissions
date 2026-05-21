class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // better approach
        let map = new Map();
        for(let i=0;i<strs.length;i++){
            let sortedItem = strs[i].split("").sort().join();
            if(!map.has(sortedItem)){
                map.set(sortedItem,[])
            }
            map.get(sortedItem).push(strs[i])
        }
        return Array.from(map.values())
    }
}
