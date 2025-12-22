import assert from 'node:assert'

/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s) {
  let depth = 0
  const st = []
  for(const br of s){
    if (br === '[') {
      st.unshift('[')
      depth = Math.max(depth, st.length)
    }
    if (br === ']') {
      const close = st.shift()
      if (!close || close !== '['){
        return -1
      }
    }
  }
  if (st.length > 0) return -1
  return depth
}

assert.equal(maxDepth('[]'),1) // -> 1
assert.equal(maxDepth('[[]]'),2) // -> 2
assert.equal(maxDepth('[][]'),1) // -> 1
assert.equal(maxDepth('[[][]]'),2) // -> 2
assert.equal(maxDepth('[[[]]]'),3) // -> 3
assert.equal(maxDepth('[][[]][]'),2) // -> 2
assert.equal(maxDepth(']['),-1) // -> -1 (closes before opening)
assert.equal(maxDepth('[[['),-1) // -> -1 (missing closing brackets)
assert.equal(maxDepth('[]]]'),-1) // -> -1 (extra closing brackets)
assert.equal(maxDepth('[][]['),-1) // -> -1 (one remains unclosed)

