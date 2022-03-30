const cpf = "00510614060"

const cpfChecker = checkCPF(cpf)
console.log(cpfChecker)

function checkCPF(cpf){

    let checkThis = cpf.substring(0, cpf.length - 2);
    let sum = 0

    sum = makeSum(checkThis.length + 1, checkThis)

    const primeiroDigito = firstDigit(checkThis, sum);

    checkThis = checkThis+primeiroDigito

    sum = makeSum(checkThis.length + 1, checkThis)

    const segundoDigito = secondDigit(checkThis, sum)
    checkThis = checkThis + segundoDigito

    if (checkThis === cpf) return true;
    return false;
}

function firstDigit(cpf, soma){
    let check = 11 - (soma % 11);
    if (check > 9) return 0;
    return check.toString()
}

function secondDigit(cpf, soma){
    let check = 11 - (soma % 11);
    if (check > 9) return 0;
    return check.toString()
}

function makeSum(cont, cpf){

    let sum = 0;

    for (c of cpf){
        sum += c*cont;
        cont -= 1;
    }

    return sum
}