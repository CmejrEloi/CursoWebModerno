let contador = 1

while(contador <= 10){
    console.log('WHILE -- Contador ===>> ' + contador);
    contador++
}
console.log('===========')

for(let i = 0; i <= 10; i++){
    console.log('FOR -- Contador ===>> ' + i);
}
console.log('===========')

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
let soma = 0;

for(let i = 0; i < notas.length; i++){
    console.log('Nota: ' + notas[i])
    soma = soma +notas[i];
}

console.log(soma)