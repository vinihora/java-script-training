function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('BAD VALUE');
            return;
        }

        setTimeout(() => {

            if (typeof msg !== 'string') {
                reject('BAD VALUE');
                return;
            }

            resolve(msg.toUpperCase());
            return;
        }, tempo);
    });
}

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Pagina em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));

const promises = [
    esperaAi('Promise 1', rand(1,5)),
    esperaAi('Promise 2', rand(1,5)),
    esperaAi('Promise 3', rand(1,5)),
]

// Se falha 1 promisse, falha todas
// Promise.all(promises)
//     .then(function(valor){
//         console.log(valor)
//     })
//     .catch(function(erro){
//         console.log(erro)
//     });

// Retorna a primeira promise resolvida dentro do objeto passado como parametro
// Promise.race(promises)
//     .then(function(valor){
//         console.log(valor)
//     })
//     .catch(function(erro){
//         console.log(erro)
//     })