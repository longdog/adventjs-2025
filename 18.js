import assert from 'node:assert'

/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourInARow(board) {
  if (board.length === 0) return false
  const MAX = 5
  const rows = board.length
  const cols = board.at(0).length

  function * scan (coord){
    let cnt = 1,
        last = ''
    while(cnt<MAX){
      const input = yield coord
      const [y, x] = input
      const cur = board[y][x]
      if (cur === '.' || (cnt > 0 && last !== cur)) {
        cnt = 1
        last = ''
      }
      last = cur
      cnt++
    }
  }

  const findDiagonal = (isRightToLeft) => {
    for (let ii = 0; ii < rows; ii++){
      const scaner = scan([0,0])
      scaner.next()
      for(let i = ii; i < rows; i++){
        const j = isRightToLeft ? cols - (i-ii) - 1: i - ii
        if (j > cols - 1 || j < 0){
          break
        }
        const res = scaner.next([i,j])
        if (res.done){
          return true
        }
      }
    }
    return false
  }

  const find = (loop1, loop2, isVertical) => {
    for (let i = 0; i < loop1; i++){
      const scaner = scan([0,0])
      scaner.next()
      for (let j = 0; j < loop2; j++){
        const res = scaner.next(isVertical ? [j,i] : [i,j])
        if (res.done){
          return true
        }
      }
    }
    return false
  }

  return (cols >= 4 && find(rows, cols)) 
    || (rows >= 4 && find(cols, rows, true))
         || findDiagonal()
         || findDiagonal(true)
        
}
assert.equal(hasFourInARow([
  ['R', 'R', '.', '.'],
  ['.', '.', 'R', '.'],
  ['R', '.', '.', 'R'],
  ['.', 'R', 'R', '.'],
  ['R', '.', 'R', '.'],
  ['.', '.', '.', 'R']
]),true)
assert.equal(hasFourInARow([
  ['R', 'R', 'R', '.'],
  ['.', '.', '.', '.'],
  ['R', '.', 'R', '.'],
  ['.', 'R', '.', '.'],
  ['R', '.', 'R', '.'],
  ['.', '.', '.', 'R']
]),true)

