let num1 = 9.54578
let num2 = Math.floor(num1) // arredonda pra baixo
console.log(num2)

num2 = Math.ceil(num1) // arredonda pra cima
console.log(num2)

num2 = Math.round(num1) // arredonda pro mais perto
console.log(num2)

console.log(Math.max(1,2,3,4,5)) // mostra o maior numero
console.log(Math.min(1,2,3,4,5)) // mostra o menos numero

const aleatorio = Math.round(Math.random() * (10 - 5) + 5)
console.log(aleatorio) // numero random entre 0 e 1