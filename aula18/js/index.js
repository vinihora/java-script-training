// const pessoal = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// const pessoal2 = {
//     nome: 'Maria',
//     sobrenome: 'Oliveira',
//     idade: 25
// };

// console.log(pessoal.nome)
// console.log(pessoal2.sobrenome)

// function criaPessoa (nome, sobrenome, idade) {
//     const pessoa = {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade,
//     };

//     return pessoa;
// }

// const result = criaPessoa('Vinicius', 'Hora', 20);
// console.log(result)


const pessoa = {
    nome: 'Vinicius',
    sobrenome: 'Hora',
    idade: 20,

    fala() {
        console.log(`${this.nome} ${this.sobrenome}`);
    },

    idadeMostrar() {
        console.log(`minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa.idadeMostrar()
pessoa.incrementaIdade()
pessoa.idadeMostrar()