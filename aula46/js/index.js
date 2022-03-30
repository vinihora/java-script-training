function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, //qual o valor da chave
        writable: false, // Se é modificavel
        configurable: false // configuravel se da pra alterar as propriedados dela ou nao
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra a chave
            value: nome, //qual o valor da chave
            writable: false, // Se é modificavel
            configurable: false
        },
        preco: {
            enumerable: true, //mostra a chave
            value: preco, //qual o valor da chave
            writable: false, // Se é modificavel
            configurable: false
        }
    });
}

const p1 = new Produto('Camiseta', 10, 20);
console.log(p1)

console.log(Object.keys(p1))