function tratarErroELancar(erro){
    throw new Error('Aqui o Erro');
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUppeCase() + '!!!');
    } catch (e){
        tratarErroELancar(e);
    } finally {
        console.log('FINAL');
    }
}

const obj = {
    nome: 'Cláudio'
}

imprimirNomeGritado(obj);