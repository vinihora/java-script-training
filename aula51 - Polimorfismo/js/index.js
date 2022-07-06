function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;


}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        console.log('Saldo insuficiente')
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/ ${this.conta} | ` + 
    `Saldo: R$${this.saldo.toFixed(2)}`
    );
};

contaCorrente.prototype = Object.create(Conta.prototype);
contaCorrente.prototype.constructor = contaCorrente;

contaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)) {
        console.log('Saldo insuficiente')
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

function contaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;

}

const conta3 = new contaCorrente(1001, 52234, 100, 50);


function contaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

contaPoupanca.prototype = Object.create(Conta.prototype);
contaPoupanca.prototype.constructor = contaPoupanca;

const cp = new contaPoupanca(12, 33, 0)

console.log(cp)