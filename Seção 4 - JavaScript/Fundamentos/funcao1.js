//Função sem retorno
function ImprimirSoma(a, b){
    console.log(a + b)
}

//Passando os dois paramentros esperados
ImprimirSoma(2, 3)

//Passando apenas um parametro, o segundo vai como Undefined e o resultado NaN
ImprimirSoma(2)

//Passado mais parametros que os definidos na função, os excedentes são ignorados
ImprimirSoma(2, 3, 5, 4)

//Quando a função espera parametros e na chamada não recebe nenhum, o resultado é NaN
ImprimirSoma()

//Função com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(10,5))
console.log(soma(10));