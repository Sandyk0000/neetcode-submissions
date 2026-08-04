class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i=0;i<9;i++){
            const set = new Set();
            for(let j=0;j<9;j++){
                if(board[i][j] === '.') continue
                else if(set.has(board[i][j])) return false
                set.add(board[i][j])
            }
        }
        for(let i=0;i<9;i++){
            const set = new Set();
            for(let j=0;j<9;j++){
                if(board[j][i] === '.') continue
                else if(set.has(board[j][i])) return false
                set.add(board[j][i])
            }
        }
        for(let box=0;box<9;box++){
            let startRow = Math.floor(box/3)*3;
            let startCol = (box%3)*3
            let set = new Set()
            for(let i=startRow; i<startRow+3;i++){
                for(let j=startCol; j<startCol+3;j++){
                    if(board[i][j] === '.') continue 
                    else if(set.has(board[i][j])) return false 
                    set.add(board[i][j])
                }
            }
        }
        return true
    }
}
