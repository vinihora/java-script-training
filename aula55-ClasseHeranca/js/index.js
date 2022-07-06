class dispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado){
            console.log(this.nome + ' já ligado')
            return;
        }

        this.ligado = true;
        console.log('Dispositivo foi ligado com sucesso')
    }

    desligar(){
        if (!this.ligado) {
            console.log(this.nome + ' já desligado')
            return;
        }

        this.ligado = false
        console.log('Dispositivo foi desligado com sucesso')
    }
}

const d1 = new dispositivoEletronico('Smartphone')

class Smartphone extends dispositivoEletronico {
    constructor(nome, cor){
        super(nome);
        this.cor = cor
    }
}

const s1 = new dispositivoEletronico('Iphone')

s1.ligar()