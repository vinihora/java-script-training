function criaCalculadora(){
    return {
        display: document.querySelector('.display'),

        inicia(){

            this.cliqueBotoes()

        },

        cliqueBotoes(){
            document.addEventListener('click', e => {
                const el = e.target;
                
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.delLastInput();
                }

                if(el.classList.contains('btn-eq')){
                    this.makeOperation(this.display.value);
                }
            })
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

        clearDisplay(){
            this.display.value = ''
        },

        delLastInput(){
            this.display.value = this.display.value.slice(0, -1);
        },

        makeOperation(conta){
            let result;

            try {

                if (!conta){
                    alert('Conta inválida')
                    return
                }

                result = eval(conta)

                this.display.value = result
            } catch(e) {
                alert('Conta inválida')
                this.display.value = ''
                return
            }
        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia()
