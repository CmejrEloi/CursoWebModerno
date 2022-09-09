let frutas = ['Banana', 'Maçã', 'Pessego', 'Uva', 'Morango']

console.log('====== PERCORRENDO ARRAY ======')
for(i in frutas){
    console.log(frutas[i])
}

console.log('====== PERCORRENDO OBJ ======')
const pessoa = {
    nome: 'Junior',
    sobrenome: 'Claudio',
    idade: 41
}

for(attr in pessoa){
    console.log(`${attr} = ${pessoa[attr]}`)
}