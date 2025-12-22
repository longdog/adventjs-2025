import assert from 'node:assert'

/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
  const arr = warehouse.map(w => w.split(""))
  const hasCamera = (y,x) => 
    [[y + 1, x],[y - 1, x], [y, x + 1], [y, x - 1]].some(([y1,x1])=>arr[y1]?.[x1] === '#')
  return arr.reduce((unsafe,line, i) => unsafe + line.map((l,j) => l === '*' && !hasCamera(i,j) ? 1 : 0 ).filter(Boolean).length , 0)
}

assert.equal(findUnsafeGifts([
  '.*.',
  '*#*',
  '.*.'
]),0) // ➞ 0

// All presents are next to a camera

assert.equal(findUnsafeGifts([
  '...',
  '.*.',
  '...'
]),1) // ➞ 1

// This present has no cameras around

assert.equal(findUnsafeGifts([
  '*.*',
  '...',
  '*#*'
]),2) // ➞ 2
// The presents in the top corners have no cameras around

assert.equal(findUnsafeGifts([
  '.....',
  '.*.*.',
  '..#..',
  '.*.*.',
  '.....'
]),4) // ➞ 4
