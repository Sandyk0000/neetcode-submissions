class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // normal solution
    // isAnagram(s, t) {
    //     let sArr = s.split("").sort();
    //     let tArr = t.split("").sort();
    //     if(sArr.length !== tArr.length) {
    //         return false
    //     }
    //     for(let i=0;i<sArr.length;i++){
    //         if(sArr[i]!==tArr[i]){
    //             return false
    //         }
    //     }
    //     return true
    // }

    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        let charCount = {};
        for(let i=0;i<s.length;i++){
            let char = s[i];
            charCount[char] = (charCount[char] || 0) + 1;
        }
        for(let i=0;i<t.length;i++){
            let char = t[i];
            if(!charCount[char]){
                return false
            }
            charCount[char] = charCount[char] - 1;
        }
        return true
    }
}
