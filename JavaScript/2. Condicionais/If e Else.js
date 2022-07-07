if (true){

} else {

}

let temperatura = 36.5 

if (temperatura >= 37.5) {
    console.log("Febre Alta");
} else if (temperatura <37.5 && temperatura >= 37) {
    console.log("Estado febril");
} else {
    console.log("Normal");
}

// ------------------------

// Limpando código

 
let temperaturaAlta = temperatura >= 37.5
let temperaturaMedia = temperatura <37.5 && temperatura >= 37

if (temperaturaAlta) {
    console.log("Febre Alta");
} else if (temperaturaMedia) {
    console.log("Estado febril");
} else {
    console.log("Normal");
}