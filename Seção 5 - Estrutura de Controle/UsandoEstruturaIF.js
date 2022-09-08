function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado, Parabéns!!' + nota);
    }
}

soBoaNoticia(8);
soBoaNoticia(6.9);

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade....' + valor);
    }
}

seForVerdadeEuFalo(5);

function teste1(num){
    if(num > 7){
        console.log(num);
    }else{        
        console.log('Final');
    }
}

teste1(6)
teste1(8)