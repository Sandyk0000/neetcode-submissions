class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i = 0;
        let j = 0;
        let set = new Set();
        let maxLength = 0;
        let n = s.length;
        while (j < n) {
            let length = 0;
            while (set.has(s[j])) {
                set.delete(s[i]);
                i++;
            }
            set.add(s[j]);
            length = j - i + 1;
            j++;
            maxLength = Math.max(length, maxLength);
        }
        return maxLength
    }
}
