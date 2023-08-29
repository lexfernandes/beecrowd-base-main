export function problem (lines) {
    const [codigo1, qtd1, valor1] = lines[0].split(' ')
    const [codigo2, qtd2, valor2] = lines[1].split(' ')

    let resultPrice = (qtd1 * valor1) + (qtd2 * valor2)

    console.log(`VALOR A PAGAR: R$ ${resultPrice.toFixed(2)}`)

 }
 