function getIntervaloAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return(Math.floor(valor))
}

//getIntervaloAleatorioEntre(1,10)
let opcao = 0;

while(opcao != -1){
    opcao = getIntervaloAleatorioEntre(-1,10)
    console.log(`A opção escolhida foi ${opcao}`)
}

console.log('Até a proxima')

while(opcao < 10){
    console.log(opcao)
    opcao++
}