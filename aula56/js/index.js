class controleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }

    static aumentaGeral(){
        this.teste += 5;
    }
}

const controle1 = new controleRemoto('LG')
controle1.aumentarVolume();
console.log(controle1)