/*O método split() divide uma String em uma lista ordenada de substrings,
 coloca essas substrings em um array e retorna o array. */

 const nome = "hello word"

console.log(nome.split('')); /*Sem espaço */

// Console : ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'd']

console.log(nome.split(' ')); /*Com espaço */

// Console : ['hello', 'word']