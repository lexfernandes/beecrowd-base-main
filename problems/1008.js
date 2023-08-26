export function problem (lines) {
    
    let number = lines[0]
    let clock = lines[1]
    let workHours = lines[2]

    let media = Number(clock) * Number(workHours)

    console.log(`NUMBER = ${number}`)
    console.log(`SALARY = ${media.toFixed(2)}`)


   
 }