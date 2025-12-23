/**
  * @param {Array<Object>} data - The data to draw the table
  * @param {string} sortBy - The field to sort the table
  * @returns {string}
  */
function drawTable(data, sortBy) {
  const sortFn = (typeof data.at(0)[sortBy] === 'number') 
    ? (a, b) => a[sortBy] - b[sortBy] 
    : (a, b) => a[sortBy].localeCompare(b[sortBy])
  const table = data.sort(sortFn).map(obj => Object.values(obj))
  const colsCnt = table.at(0).length
  const colsLen =  table.reduce((cls, row) => row.map((v,i) => Math.max(String(v).length, cls[i]) ), Array(colsCnt).fill(0))
  const div = "+" + colsLen.map((l)=> "-".repeat(l + 2)).join("+") + "+"
  const header = "| " + colsLen.map((l,i) => `${String.fromCharCode(65 + i).padEnd(l, " ")}`).join(' | ') + " |"
  const body = table.map((l) => "| " + l.map((c,i) => `${String(c).padEnd(colsLen[i], " ")}`).join(' | ') + " |").join('\n')
  const render = [div, header, div, body, div].join('\n')
  return render
}

console.log(drawTable(
  [
    { name: 'Charlie', city: 'New York' },
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' }
  ],
  'name'
))
console.log(drawTable(
  [
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 },
    { gift: 'Doll', quantity: 10 }
  ],
  'quantity'
))

console.log(drawTable([
        { a: 2, b: 'Y', c: 'X' },
        { a: 1, b: 'Z', c: 'W' },
        { a: 3, b: 'A', c: 'B' }
      ], 'a'))
