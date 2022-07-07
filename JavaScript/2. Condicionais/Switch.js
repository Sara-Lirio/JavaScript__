switch (expression) {
    case 'a' : 
    //código - declarações
        break
    case 'b' : 
    //código - declarações
        break
    default:
}

let expression = ''

switch (expression) {
    case 'a' : 
    //código - declarações
    console.log('a');
        break /* Se não estiver o break, continuara para a próxima condição*/
    case 'b' : 
    //código - declarações
    console.log('b');
        break
    default:
}


// ---------------------------

function calculadora (num1, operador, num2){
    let resultado

    switch (operador) {
        case '+':
            resultado = num1 + num2
            break
        case '-':
            resultado = num1 - num2
            break
        case '*':
            resultado = num1 * num2
            break
        case '/':
            resultado = num1 / num2
            break 
        default : 
            console.log('Não implementado')
            break   
    }
}

console.log(calculate(4, '/', 8));