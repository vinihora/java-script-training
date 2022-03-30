const produto = {nome:'caneca',preco:20}
const outraCoisa = Object.assign({}, produto)
// const outraCoisa = { ...produto }

outraCoisa.nome = 'Outra coisa'

console.log(produto)
console.log(outraCoisa)

Object.defineProperty(produto, 'nome', {
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))