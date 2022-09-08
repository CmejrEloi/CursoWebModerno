//console.log('Incindo com fundamentos da programação!!');

let numero =5;
let somaPares = 0;
let somaImpares = 0;

console.log('--- NUMEROS PARES ---')
for(let i = 1; i <= numero; i++){
    if(i % 2 == 0){
        console.log(i + ' ');
        somaPares += i;
    }
}
console.log('Soma do numeros pares: ' + somaPares);

console.log('--- NUMEROS IMPARES ---')
for(let j = 1; j <= numero; j++){
    if(j % 2 != 0){
        console.log(j + ' ');
        somaImpares += j;
    }
}
console.log('Soma do numeros impares: ' + somaImpares);