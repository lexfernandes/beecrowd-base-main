export function problem (lines) {
    
    let name = lines[0] //nome
    let salary = lines[1] // salario
    let sales = lines[2]

    sales = Number(sales)
    salary = Number(salary)

    let media = (sales * 0.15) + salary

    console.log(`TOTAL = R$ ${media.toFixed(2)}`)
   
 }