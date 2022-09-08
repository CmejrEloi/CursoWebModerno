const escola = "Escola"

//charAt devolve o caractere contido no indice informado
console.log(escola.charAt(5))

//charCodeAt devolve o valor do caractere dentro da tabela ASC
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('99'))

//Substring captura a partir do indice informado quando passado apenas um parametro
//Quando passado dois é utilizado como ponto inicial e final
console.log(escola.substring(2))
console.log(escola.substring(2,4))

//Concat -> concatenação
console.log(escola.concat('!!!'))

//Replace, substitui o caractere do indice informado pela String passada no segundo paramentro 
console.log(escola.replace(1, '&'))

//Split - Separa uma String a partir do caractere informado
console.log('Claudio, Manuel, ELoi, Junior'.split(','))

//length devolve a quantidade de caracteres
//console.log(escola.length)