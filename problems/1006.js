export function problem (lines) {
    
    let a = lines[0]
    let b = lines[1]
    let c = lines[2]

    a = Number(a * 2)
    b = Number(b * 3)
    c = Number(c * 5)

    let media = (a + b + c) /10

    console.log(`MEDIA = ${media.toFixed(1)}`)
 
 }