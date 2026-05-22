class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";
        for (const str of strs) {
            // Append the length, the delimiter, and the string itself
            encodedString += `${str.length}#${str}`;
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0; // Pointer to track our position in the stream

        while (i < str.length) {
            let j = i;
            
            // 1. Move pointer 'j' until we hit the '#' delimiter to find where the length number ends
            while (str[j] !== '#') {
                j++;
            }
            
            // 2. Extract the length number and parse it to an integer
            let length = parseInt(str.substring(i, j));
            
            // 3. Move the pointer past the '#' symbol
            i = j + 1;
            
            // 4. Extract the exact string data using our parsed length boundaries
            let s = str.substring(i, i + length);
            result.push(s);
            
            // 5. Slide our main tracking pointer 'i' to the start of the next chunk
            i += length;
        }

        return result;
    }
}
