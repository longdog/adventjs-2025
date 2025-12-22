import assert from 'node:assert'
/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {

  const attacks = {
    'AB': [0,0],
    'BA': [0,0],
    'AF': [2,1],
    'FA': [1,2],
    'FB': [0,2],
    'BF': [2,0],
    'AA': [1,1],
    'FF': [2,2],
    'BB': [0,0]
  }
  let health1 = 3,
      health2 = 3
  for (const attack of elf1.split("").map((e1,i) => ([e1, elf2[i]]))){
    const [p1, p2] = attacks[`${attack[0]}${attack[1]}`]
    health1 -= p1
    health2 -= p2
    if (health1 <= 0 && health2 <= 0) return 0
    if (health1 <= 0) return 2
    if (health2 <= 0) return 1
  }
  if (health1 === health2) return 0
  if (health1 > health2) {return 1} else {return 2}
}

assert.equal(elfBattle('A', 'B'),0)
assert.equal(elfBattle('AAB', 'BBA'),0)
assert.equal(elfBattle('AFAB', 'BBAF'),1)
assert.equal(elfBattle('AA', 'FF'),2)
