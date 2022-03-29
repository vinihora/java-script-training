function funcao(){
    let total = 0
    for (let argumento of arguments){
        total += argumento
    }

    console.log(total)
}

function funcao2(operador, acumulador, ...numeros){
    console.log(operador, acumulador, numeros)
}

funcao2('+', 0, 1,2,3,4,5)