//Definição das constantes
const btnStart = document.getElementById("btnStart")
const btnEnd = document.getElementById("btnEnd")
const btn0 = document.getElementById("btn0")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const visor = document.getElementById("visor")


var gameStarted = false
var pontos = -1
var sequencia = []
var rodada = 0
var vezJogador = false
var contSequenciaIndice =0


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
    visor.innerHTML= pontos
    gameStarted = true
    proximaRodada()
}

function btn0TabuleiroClicado(){
    verificaBtnDigitado(0)
    // console.log("Botão 0 clicado")
}
function btn1TabuleiroClicado(){
    verificaBtnDigitado(1)
    // console.log("Botão 1 clicado")
}
function btn2TabuleiroClicado(){
    verificaBtnDigitado(2)
    //console.log("Botão 2 clicado")
}
function btn3TabuleiroClicado(){
    verificaBtnDigitado(3)
    //console.log("Botão 3 clicado")
}
function EndGame(){
    alert("Jogo encerrado")
    gameStarted = false
    pontos = -1
    sequencia = []
    rodada = 0
    vezJogador = false
    contSequenciaIndice =0
    visor.innerHTML= pontos+1
}

function sorteia(){
    resultado = Math.floor((Math.random()*3))
    return resultado
}

function addSequencia(){
    num = sorteia()
    sequencia.push(num)
    console.log(sequencia)
}


function verificaBtnDigitado(num){
    console.log("ind: " + contSequenciaIndice)
    if(vezJogador){
        if(sequencia[contSequenciaIndice]!=num){
            alert("GameOver")
            contSequenciaIndice=0
            EndGame()
            vezJogador = false
        }
        else{
            contSequenciaIndice++
            
            
            if(contSequenciaIndice==(sequencia.length)){
                vezJogador = false
                contSequenciaIndice =0
                proximaRodada()
            }
        }
        
    }
    
}

function proximaRodada(){
    pontos++
    visor.innerHTML=pontos
    vezJogador = false
    
    addSequencia()
    exibirSequencia()
    
    vezJogador=true



}

function exibirSequencia(){
    time =0
    for(i=0;i<sequencia.length;i++){
        
        switch(sequencia[i]){
            case 0:
                time+=600
                
                setTimeout(()=>{
                    btn0.style.backgroundColor = "#804d00"
                    
                },time)

                setInterval(()=>{
                    btn0.style.backgroundColor = "red"
                },time+600)

                break
            case 1:
                time+=600
                
                setTimeout(()=>{
                    btn1.style.backgroundColor = "#000066"
                },time)
                setTimeout(()=>{
                    btn1.style.backgroundColor = "blue"
                },time+600)
                break
                
            case 2:
                time+=600
                setTimeout(() => {
                    btn2.style.backgroundColor = "#808000"
                }, time);
                
                setTimeout(()=>{
                    btn2.style.backgroundColor = "yellow"
                },time+600)
                break

            case 3:
                time+=600
                
                setTimeout(() => {
                    btn3.style.backgroundColor = "#1f004d"
                }, time);
                setTimeout(()=>{
                    btn3.style.backgroundColor = "purple"
                },time+600)
                break
            
        }
    
    

}
}