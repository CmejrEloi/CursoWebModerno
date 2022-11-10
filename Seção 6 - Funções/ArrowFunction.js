//Aula 01 -- Formas de Escrever uma Arrow Function
let dobro = function(a){
    return 2 * a;
}
console.log(dobro(6))

/************************* */
dobro =(a) => {
    return 2 * a;
}
console.log(dobro(8))

/************************ */
 dobro = a =>  2 * a; // Return implicito
 console.log(dobro(10))

 /************************ */
 let saudacao = _ => 'Ola'
 console.log(saudacao())

//Aula 02 -- 
function Pessoa(){
    this.idade = 0;
    let repetir = setInterval(() => {
        this.idade++;
        console.log(this.idade)
    }, 1000)
}

new Pessoa();