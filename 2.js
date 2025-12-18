/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
  // Code here
  return giftsToProduce.flatMap(g=>Array.from({length: g.quantity}).fill(g.toy))
}
