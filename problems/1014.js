export function problem (lines) {
    
    const [x] = lines[0].split(' ').map(Number)
    const [y] = lines[1].split(' ').map(Number)

    const consumo = x / y

    console.log(`${consumo.toFixed(3)} km/l`)

 }