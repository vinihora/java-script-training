// Nesse caso, a função usaFalaNome puxara a função falaNome, e essa irá ver que a const nome que foi 
// usada nela está declarada com o valor de Luiz, por isso printa Luiz e Não Vinicius

const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Vinicius';
    falaNome();
}

usaFalaNome();