/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {
  return Object.values(Object.groupBy(toy, t => t.toLowerCase()))
    .filter(({length}) => length === 1).flat().at(0) || ""
}

