let url = 'https://randomuser.me/api'

fetch(url)
.then(resposta => {
    console.log("Primeiro Then")
    console.log(resposta)
    return resposta.json()
})
.then(dados =>{
    console.log("Segundo then")
    console.log(dados)
})