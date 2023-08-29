export function problem (lines) {
    
    const [d] = lines[0].split(' ').map(Number)
   
    let tempo = (60 * d) /30
   
    console.log(`${tempo} minutos`)

 }