function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log('Ola sou o goku')
    }
}

const p1 = new Pessoa('Vinicius', 'Hora')
p1.metodo()