const numeros = [3, 10, 15, 6, 7, 8, 12, 25, 34, 0.5, 2, 9]

const final = numeros.filter((valor) => {
    return valor % 2 === 0;
}).map((valor) => {
    return valor * 2;
}).reduce((acumulador, valor) => {
    return acumulador + valor
})

console.log(final)