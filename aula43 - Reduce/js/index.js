// const numeros = [1,2,3,4]

// const total = numeros.reduce((acumulador, valor, indice, array) => {
//     return acumulador + valor
// }, 0)

// console.log(total)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Amanda', idade: 15},
    {nome: 'Isabella', idade: 38},
    {nome: 'Ana', idade: 25},
    {nome: 'Vinicius', idade: 75},
    {nome: 'Adelio', idade: 40}
]

const older = pessoas.reduce((acumulador, obj, indice, array) => {
    if (acumulador.idade > obj.idade){

        return acumulador
    }
    
    return obj
})

console.log(older)