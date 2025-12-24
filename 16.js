import assert from 'node:assert'
/**
 * @param {number[]} gifts - The gifts to pack
 * @param {number} maxWeight - The maximum weight of the sleigh
 * @returns {number | null} The number of sleighs needed
 * Return null if no sleigh can carry all the gifts
 */
function packGifts(gifts, maxWeight) {
  if (gifts.length === 0) return 0
  let sleights = 0
  let sum = 0
  for(const g of gifts){
    if (g > maxWeight) return null
    if (sum + g > maxWeight){
      sleights++
      sum = g
    } else {
      sum += g
    }
  }
  return sum > 0 ? sleights + 1 : sleights
}

assert.equal(packGifts([2, 3, 4, 1], 5),2)

assert.equal(packGifts([3, 3, 2, 1], 3),3)
// 3 sleighs
// Sleigh 1: 3
// Sleigh 2: 3
// Sleigh 3: 2 + 1 = 3

assert.equal(packGifts([1, 1, 1, 1], 2),2)
// 2 sleighs
// Sleigh 1: 1 + 1 = 2
// Sleigh 2: 1 + 1 = 2

assert.equal(packGifts([5, 6, 1], 5),null)
// null
// There is a gift weighing 6 that doesn’t fit

assert.equal(packGifts([], 10),0)
// 0 sleighs
// There are no gifts to deliver
