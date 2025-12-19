/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  const pair = ({hand,color}) => `${color}-${hand === 'L' ? 'R' : 'L'}`
  return gloves.reduce(([tmp,ret],gl)=>{
    const p = pair(gl)
    const i = tmp.indexOf(p)
    return i > -1 
      ? [tmp.toSpliced(i,1),[...ret, gl.color]]
      : [[...tmp, `${gl.color}-${gl.hand}`],ret]
  },[[],[]]).at(1)
}

