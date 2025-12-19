function drawTree(height, ornament, frequency) {
  const trunc = `${" ".repeat(height-1)}#`
  function * getOrnament() {
    let cnt = 1
    while(true){
      yield (cnt % frequency ? "*" : ornament)
      cnt++
    }
  }
  const o = getOrnament()
  return Array.from({length: height})
          .map((_,i) => [
            ...Array(height - i - 1).fill(" "),
            ...Array.from({length:i * 2 + 1}).map(() => o.next().value)
          ].join(""))
          .join("\n") + `\n${trunc}`
}

