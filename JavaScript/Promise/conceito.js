// PROMISE 

// A promessa é um objeto com a promessa de algo irá acontecer. 
// Poderá dar certo ou errado, mas irá acontecer.

let aceitar = false

console.log("Pedir uber");
const promessa = new Promise (( resolve, reject) => {

    if (aceitar){
    return resolve ('Pedido aceito!')
    } 
    return reject ('Pedido negado!')
})

console.log('aguardando');

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log(('finalizado!')))