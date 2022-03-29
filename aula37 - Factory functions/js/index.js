// Factory function

function criaPessoa(nome, sobrenome){
    return {
        nome, 

        sobrenome,

        // Getter
        get nomeCompleto (){
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        peso: 80,

        fala(){
            return `${this.nome} está pesando ${this.peso} KG`;
        },

        get fala2(){
            return `${this.nome} está pesando ${this.peso} KG`;
        }
    };
}

const p1 = criaPessoa('Vinicius','Hora')
// Nao tem o get no objeto, então é acessado como uma função
// console.log(p1.fala())

// Tem o get no objeto, portanto é acessado como um atributo
// console.log(p1.fala2)

p1.nomeCompleto = 'Luiz Otávio Neto'
console.log(p1.nomeCompleto)
console.log(p1.nome)
console.log(p1.sobrenome)



