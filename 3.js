/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
  // Code here
  if (size < 2) return ""
  return Array
          .from({length: size})
          .map((_,i)=> i === 0 || i=== size-1 
              ? `${symbol}`.repeat(size) 
              : `${symbol}${" ".repeat(size-2)}${symbol}`)
          .join("\n")
}
