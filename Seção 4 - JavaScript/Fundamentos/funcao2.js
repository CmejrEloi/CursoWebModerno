//Armazendo uma função em uma variavel
let ImprimirSoma = function(a,b){
    console.log(a + b)
}

ImprimirSoma(2,3)

//Armazendo uma função Arrow em uma variavel
let soma = (a, b) => {
    return a + b
}

console.log(soma(5, 5))

//Funcção com returno implicito
let subtracao = (a, b) => a- b 
console.log(subtracao(3,1))

let imprimir = a => console.log(a)
imprimir(8);