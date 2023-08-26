export function problem (lines) {
    

    let  radius = lines[0]
    const n = 3.14159

    radius = Number(radius)

    const area = Math.pow(radius,2) * n

    console.log(`A=${area.toFixed(4)}`)


}
