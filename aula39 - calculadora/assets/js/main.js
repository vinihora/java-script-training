function criaCalculadora() {

    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes()
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.delLastInput();
            }

            if (el.classList.contains('btn-eq')) {
                this.makeOperation(this.display.value);
            }
        })
    };

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    };

    this.clearDisplay = () => {
        this.display.value = ''
    };

    this.delLastInput = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.makeOperation = (conta) => {
        let result;

        try {

            if (!conta) {
                alert('Conta inválida')
                return
            }

            result = eval(conta)

            this.display.value = result
        } catch (e) {
            alert('Conta inválida')
            this.display.value = ''
            return
        }
    };
}

const calculadora = new criaCalculadora();
calculadora.inicia()
