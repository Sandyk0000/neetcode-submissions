class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sArr = s.split("").sort();
        let tArr = t.split("").sort();
        if(sArr.length !== tArr.length) {
            return false
        }
        for(let i=0;i<sArr.length;i++){
            if(sArr[i]!==tArr[i]){
                return false
            }
        }
        return true
    }
}
