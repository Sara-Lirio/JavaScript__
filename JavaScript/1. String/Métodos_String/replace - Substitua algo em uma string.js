/*O método replace() retorna uma nova string com algumas ou todas as correspondências 
de um padrão substituídas por um determinado caractere (ou caracteres). */

const frase = "Estamos dirigindo a horas"

console.log(frase.replace('a horas','por minutos')); 

// Console : Estamos dirigindo por minutos

// REPLACE ALL 

const frase1 = "Estamos dirigindo a horas"

console.log(frase1.replaceAll('i','o')); 

// Console : Estamos dorogondo a horas