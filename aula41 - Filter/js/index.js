const numeros = [3, 10, 15, 6, 7, 8, 12, 25, 34, 0.5, 2, 9]

//Modo 1
// const filtro = []
// for (i of numeros){
//     if (i > 10){
//         	filtro.push(i)
//     }
// }
// const filter = numeros.filter(callbackFilter)

//Modo 2
// function callbackFilter(valor, indice, array){
//     if (valor > 10){
//         return true;
//     } else {
//         return false;
//     }
// }
// const filter = numeros.filter(callbackFilter)

//Modo 3
// function callbackFilter(valor, indice, array){
//     return valor > 10
// }
// const filter = numeros.filter(callbackFilter)


//Modo 4
// const filter = numeros.filter( (valor, indice, array) => {
//     console.log(valor, indice, array)
//     return valor > 10
// })



const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Amanda', idade: 15},
    {nome: 'Isabella', idade: 38},
    {nome: 'Ana', idade: 25},
    {nome: 'Vinicius', idade: 12},
    {nome: 'Adelio', idade: 40}
]

const fiveLetters = pessoas.filter((valor, indice, array) => {
    return valor.nome.length >= 5
})
console.log(fiveLetters)

const fiftyYears = pessoas.filter((valor, indice, array) => {
    return valor.idade > 50
})
console.log(fiftyYears)

const finishA = pessoas.filter((valor, indice, array) => {
    return valor.nome[valor.nome.length - 1] == 'a'
})
console.log(finishA)