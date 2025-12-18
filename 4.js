function decodeSantaPin(code) {
  const mod = (n) => n % 10
  const calc = ([num, ...ops]) => {
    const dig = Number(num)
    return ops.reduce((summ, op) =>  mod (op === "+" 
      ? (summ + 1)
      : (summ - 1 + 10))
      , dig)

  }
  const cs = code.split("[").map(c=>c.replace("]","")).filter(Boolean)
  if (cs.length < 4) return null
  return cs.reduce((pass,p) => (
    [...pass, p === "<" ? pass.at(-1) : calc(p.split(""))]) ,[]).join("")
}
