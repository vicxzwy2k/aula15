/*const paragrafo = document.createElement("p")
// <p> </p> 
paragrafo.innerText = "Isso aqui é um paragrafo"
// <p> Isso aqui é um paragrafo </p> 
document.body.appendChild(paragrafo)
*/
function mostrarNome(){
    const input = document.querySelector('input')
    const nome = input.value 

    input.value = ""
    const nomeUsuario = document.createElement('p')
    nomeUsuario.innerText = nome
    document.body.appendChild(nomeUsuario)
}
