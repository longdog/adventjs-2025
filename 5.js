/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
  const getTime = (dt) => 
    new Date(...dt.replace(" NP","")
      .replace("@", "|")
      .split("*")
      .flatMap(d=>d.split("|"))
      .map((d,i)=> i===1 ? Number(d) - 1 : Number(d)))
    .getTime()
  return Math.floor((getTime(takeOffTime) - getTime(fromTime)) / 1000)
}
