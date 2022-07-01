/*O método lastIndexOf() retorna o índice da última ocorrência do valor especificado 
encontrado na String. Quando fromIndex é especificado, a pesquisa é realizada de 
trás para frente. Retorna -1 se o valor não for encontrado.*/

const frase = "Estamos dirigindo a horas"

console.log(frase.lastIndexOf('E')); 
console.log(frase.lastIndexOf('e'));

// Console : 0
// Console : -1