//Função de frma literal
function fun1(){}

//armazenar em variavel
const fun2 = function(){}

//Armazenar em um Array
const array = [function (a,b) {return a- b}, fun1, fun2]

//Armazenar em atributos de Objetos
let obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//Passar funcao como paramento em outra função
function run(fun){
    fun()
}

run(function () { console.log('TESTE') })

//Uma função pode retornar/conter outra função
function soma (a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)