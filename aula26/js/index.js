const numeros = [1,2,3,4,5,6,7,8]

for (let numero of numeros){

    if (numero === 2 || numero === 5){

        continue;

    }
    console.log(numero)
}

console.log("#####")

for (let numero of numeros){

    if (numero === 2){

        break;
        
    }
    console.log(numero)
}