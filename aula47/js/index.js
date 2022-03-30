function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function(){
            return estoque;
        },

        set: function(valor){
            if (typeof valor !== 'number'){
                console.log('Bad Value');
                return;
            }

            estoque = valor
        }
    })
}

const p1 = new Produto('Camiseta', 10, 20);
console.log(p1.estoque)

p1.estoque = 15

console.log(p1.estoque)