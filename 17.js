import assert from 'node:assert'

/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {
  if (board.length === 0) return false
  const rows = board.length
  const cols = board.at(0).length

  const scan = (loop1, loop2, isVertical) => {
    for (let i = 0; i < loop1; i++){
      let cnt = 0,
          last = ''
      for (let j = 0; j < loop2; j++){
        const cur = isVertical ? board[j][i] : board[i][j]
        if (cur === '.' || (cnt > 0 && last !== cur)) {
          cnt = 0
          last = ''
        }
        if (++cnt === 4) {
          return true
        }
        last = cur
      }
    }
    return false
  }

  return (cols >= 4 && scan(rows, cols)) 
         || (rows >= 4 && scan(cols, rows, true))
}
assert.equal(
hasFourLights([
  ['.', '.', '.', '.', '.'],
  ['R', 'R', 'R', 'R', '.'],
  ['G', 'G', '.', '.', '.']
]), true
)
assert.equal(hasFourLights([
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.']
]), true)
