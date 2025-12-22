import assert from 'node:assert'

/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
 
  const route = (y,x) => ({
    '>':[y,x+1],
    '<':[y,x-1],
    'v':[y+1,x],
    '^':[y-1,x]
  })
  const path = []
  let y = 0,
      x = 0

  while(true){
    if (path.includes(`${y}-${x}`)) return 'loop'
    path.push(`${y}-${x}`);
    const current = factory[y]?.[x];
    if (!current) return 'broken';
    if (current === '.') return 'completed';
    [y,x] = route(y,x)[current];
  }
}

assert.equal(runFactory([
  '>>.'
]),'completed')

