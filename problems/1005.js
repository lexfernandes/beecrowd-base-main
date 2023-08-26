export function problem (lines) {
    
    let a = lines[0]
    let b = lines[1]
 
    a = Number(a) * 3.5
    b = Number(b) * 7.5

    let media = (a + b) /11
    

    console.log(`MEDIA = ${media.toFixed(5)}`)
 
 }