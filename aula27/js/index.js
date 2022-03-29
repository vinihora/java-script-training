function soma(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('X e Y precisam ser numeros');
    }

    return x + y
}

try {
    console.log(soma(1,2));
    console.log(soma('1',2));
} catch(error) {
    console.log(error)
}

// try {
//     console.log(naoExisto)
// } catch(err) {
//     console.log('naoExisto não Existe.')
// }