//Aula 01

    const fabricantes = ['Mercedes', 'Audi', 'BMW'];

    function imprimir(nome, indice){
        console.log(`${indice + 1}.${nome}`)
    }
    fabricantes.forEach(imprimir)
    fabricantes.forEach((fabricante) => console.log(fabricante))

//Aula 02
    //Sem Callback
    const notas = [7,9,6,3,10];
    let notasBaixas = [];

    for(let i in notas){
        if(notas[i] < 7){
            notasBaixas.push(notas[i])
        }
    }
    console.log(notasBaixas);

    //Com Callback
    let notasBaixas2 = notas.filter(function(nota){
        return nota < 7
    })
    console.log(notasBaixas2)

    let notasBaixas3 = notas.filter(nota => nota <7)
    console.log(notasBaixas3)