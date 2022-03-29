const data = new Date()
let diaSemana = data.getDay()
let diaSemanaTexto

switch(diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 0:
        diaSemanaTexto = 'Segunda';
        break; 
    case 0:
        diaSemanaTexto = 'Terca';
        break;
    case 0:
        diaSemanaTexto = 'Quarta';
        break;
    case 0:
        diaSemanaTexto = 'Quinta';
        break;
    case 0:
        diaSemanaTexto = 'Sexta';
        break;
    case 0:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = ''
        break;
}

function getDiaSemanaTexto(diaSemana){

    let diaSemanaTexto;

    switch(diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto; 
        case 2:
            diaSemanaTexto = 'Terca';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = ''
            return diaSemanaTexto;
    }
}

console.log(getDiaSemanaTexto(diaSemana))