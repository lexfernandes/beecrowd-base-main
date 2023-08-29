export function problem (lines) {
    
    const [a, b, c] = lines[0].split(' ').map(Number)
    const pi = 3.14159


    // calculo do triângulo

    let triangulo = (a * c) /2;
    let radius = Math.pow(c, 2) * pi;
    let trapezio = ((a + b)* c) / 2;
    let quadrado = b * b;
    let retangulo = a * b;

    console.log(`TRIANGULO: ${triangulo.toFixed(3)}`)
    console.log(`CIRCULO: ${radius.toFixed(3)}`)
    console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)
    console.log(`QUADRADO: ${quadrado.toFixed(3)}`)
    console.log(`RETANGULO: ${retangulo.toFixed(3)}`)

 }