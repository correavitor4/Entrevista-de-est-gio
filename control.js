//Definição das constantes
const btnStart = document.getElementById("btnStart")
const btnEnd = document.getElementById("btnEnd")
const btn0 = document.getElementById("btn0")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const visor = document.getElementById("visor")

//função que inicia o carregamento
window.onload(addEventListeners())


//função que adiciona os escutadores
function addEventListeners(){

    btnStart.addEventListener("click",startGame)
    btnEnd.addEventListener("click",EndGame)
    btn0.addEventListener("click",btn0TabuleiroClicado)
    btn1.addEventListener("click",btn1TabuleiroClicado)
    btn2.addEventListener("click",btn2TabuleiroClicado)
    btn3.addEventListener("click",btn3TabuleiroClicado)

}




//Funções eventos de botões
function startGame(){
    alert("Jogo iniciando")
    visor.innerHTML= 0
}

function btn0TabuleiroClicado(){
    console.log("Botão 0 clicado")
}
function btn1TabuleiroClicado(){
    console.log("Botão 1 clicado")
}
function btn2TabuleiroClicado(){
    console.log("Botão 2 clicado")
}
function btn3TabuleiroClicado(){
    console.log("Botão 3 clicado")
}
function EndGame(){
    alert("Jogo sendo encerrado!!")
}




