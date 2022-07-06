import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCarac = document.querySelector('.qtd-caracteres');
const checkMaiusculas = document.querySelector('.chk-maiusculas');
const checkMinusculas = document.querySelector('.chk-minusculas');
const checkNumeros = document.querySelector('.chk-numeros');
const checkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', () => {
        console.log(gera)
        senhaGerada.innerHTML = gera();
    });
}

function gera() {

    const senha = geraSenha(
        qtdCarac.value,
        checkMaiusculas.checked,
        checkMinusculas.checked,
        checkNumeros.checked,
        checkSimbolos.checked
    )

    return senha || 'Nada selecionado';
}