import assert from 'node:assert'
/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
  const rec = (obj, path) => {
    const arr = Object.entries(obj)
    const fields = arr.filter(([_,v]) => typeof v !== 'object')
    for(const [k,v] of fields){
      if (v === gift){
        return [...path, k]
      }
    }
    if (arr.length === fields.length){
      return []
    }
    const shelfs = arr.filter(([_,v]) => typeof v === 'object')
    for(const [k,v] of shelfs){
      const nextPath = rec(v, [...path, k])
      if (nextPath.length > 0){
        return nextPath
      }
    }
    return []
  }
  return rec(workshop, [])
}
const workshop = {
  storage: {
    shelf: {
      box1: 'train',
      box2: 'switch'
    },
    box: 'car'
  },
  gift: 'doll'
}
console.log(findGiftPath(workshop, 'switch'))
