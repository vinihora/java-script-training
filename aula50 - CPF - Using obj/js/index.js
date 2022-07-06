function validaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

validaCPF.prototype.valida = function(){

    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;

    const cpfParcial = this.cpfLimpo.substring(0, this.cpfLimpo.length - 2)
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const cpfCompleto = cpfParcial + digito1 + digito2
    if (cpfCompleto !== this.cpfLimpo) return false
    console.log(cpfParcial + digito1 + digito2)
    return true;
}

validaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const digito = cpfArray.reduce((ac, valor) => {
        ac += (valor * regressivo)
        regressivo--;
        return ac
    }, 0)

    if (11 - (digito % 11) > 9){
        return 0
    } else {
        return 11 - (digito % 11)
    }
}

const cpf = new validaCPF('912.865.138-66')
console.log(cpf.valida())