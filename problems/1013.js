export function problem (lines) {
    
    const [a , b, c] = lines[0].split(' ').map(Number)

    const maiorAB = (a + b + Math.abs(a - b)) / 2
    const maiorC = (c + maiorAB + Math.abs (c - maiorAB)) / 2
      

    console.log(`${maiorC} eh o maior`)

   

 }