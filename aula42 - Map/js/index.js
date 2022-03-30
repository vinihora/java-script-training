// const numeros = [3, 10, 15, 6, 7, 8, 12, 25, 34, 0.5, 2, 9]

// const numerosEmDobro = numeros.map((valor, indice, array) => {
//     return valor*2
// })

// console.log(numerosEmDobro)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Amanda', idade: 15},
    {nome: 'Isabella', idade: 38},
    {nome: 'Ana', idade: 25},
    {nome: 'Vinicius', idade: 12},
    {nome: 'Adelio', idade: 40}
]

const nomes = pessoas.map((valor) => {
    return valor.nome
})
console.log(nomes)

const comId = pessoas.map((obj, indice) => {
    const newObj = {...obj};
    newObj.id = indice
    return newObj
})

console.log(pessoas)
console.log(comId)