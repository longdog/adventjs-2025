/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
  function * router([y, x]){
    const route = {
      "L" : ([y1, x1]) => [y1, x1 - 1],
      "R" : ([y1, x1]) => [y1, x1 + 1],
      "U" : ([y1, x1]) => [y1 - 1, x1],
      "D" : ([y1, x1]) => [y1 + 1, x1]
    }
    for (const t of moves){
      [y, x] = route[t]([y, x])
      yield([y, x])
    }
  }

  const arr = board.split('\n').filter(Boolean)
  let reinder = [0,0]
  for (let i = 0; i < arr.length; i++){
    if (arr[i].includes("@")){
      reinder = [i, arr[i].indexOf("@")]
    }
  }
  const steps = router(reinder)
  for (const [y,x] of steps){
    if (!arr[y]?.[x]){
      return 'crash'
    }
    if (arr[y][x] === '#'){
      return 'crash'
    }
    if (arr[y][x] === '*'){
      return 'success'
    }
  }
  return 'fail';
}
