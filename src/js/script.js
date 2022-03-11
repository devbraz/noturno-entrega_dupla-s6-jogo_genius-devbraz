const trianguloCima = document.querySelector('.triangulo-cima')
const trianguloDireita = document.querySelector('.triangulo-direita')
const trianguloBaixo = document.querySelector('.triangulo-baixo')
const trianguloEsquerda = document.querySelector('.triangulo-esquerda')
const divCircle = document.querySelector("#circle")

let max = 4
let cima = 1
let direita = 2
let baixo = 3
let esquerda = 4

function numeroAleatorio(max) {
     return Math.floor(Math.random() * max + 1)
}

let random = numeroAleatorio(max)

let sequenciaMaquina = []
let sequenciaJogador = []



function arrayMaquina(random) {

     sequenciaMaquina.push(random)

     for (let counter = 0; counter < sequenciaMaquina.length; counter++ ) {

          if(sequenciaMaquina[counter] === 1 ) {
               setTimeout(() => {
                    acenderLuzSetaCima()
                    setTimeout(() => {
                         apagarLuzSetaCima()
                    }, 600)  
               }, 600 * counter)    
          } 
          
          else if (sequenciaMaquina[counter] === 2) {
               setTimeout(() => {
                    acenderLuzSetaDireita()
                    setTimeout(() => {
                         apagarLuzSetaDireita()
                    }, 600) 
               }, 600 * counter)  
          }
          
          else if (sequenciaMaquina[counter] === 3) {
               setTimeout(() => {
                    acenderLuzSetaBaixo()
                    setTimeout(() => {
                         apagarLuzSetaBaixo()
                    }, 600) 
               }, 600 * counter) 
          } 
          else if (sequenciaMaquina[counter] === 4) {
               setTimeout(() => {  
                    acenderLuzSetaEsquerda()
                    setTimeout(() => {
                         apagarLuzSetaEsquerda()
                    }, 600)  
               }, 600 * counter)   
          }  
     }   
}

const chosenStartButton = document.querySelector("#start-button")
const startEvent = chosenStartButton.addEventListener('click', (event)=>{

     chosenStartButton.classList.add('display')

     const p = document.createElement('p')
     p.innerText = 'Seja bem vindo!'
     divCircle.appendChild(p)

     setTimeout(() => {

          p.innerText = 'O jogo vai começar em breve...'

          setTimeout(() => {
               p.innerText = 'Observe a sequencia a seguir:'
          }, 3000)

          setTimeout(() => {
               
               arrayMaquina(random)

               const eventoClickCima = trianguloCima.addEventListener('click', ()=>{
                    acenderLuzSetaCima()
                    setTimeout(() => {
                         apagarLuzSetaCima()
                    }, 600)  
                    sequenciaJogador.push(1)
               })
               
               const eventoClickDireita = trianguloDireita.addEventListener('click', ()=>{
                    acenderLuzSetaDireita()
                    setTimeout(() => {
                         apagarLuzSetaDireita()
                    }, 600) 
                    sequenciaJogador.push(2)
               })
               
               const eventoClickBaixo = trianguloBaixo.addEventListener('click', ()=>{
                    acenderLuzSetaBaixo()
                    setTimeout(() => {
                         apagarLuzSetaBaixo()
                    }, 600) 
                    sequenciaJogador.push(3)
               })
               
               const eventoClickEsquerda = trianguloEsquerda.addEventListener('click', ()=>{
                    acenderLuzSetaEsquerda()
                    setTimeout(() => {
                         apagarLuzSetaEsquerda()
                    }, 600)  
                    sequenciaJogador.push(4)
               })

          }, 3000)

     }, 3000)

})

let clickJogador = [];
let quantidadeVitoria = 4;



const pontuacaoLista = document.getElementById('pontuacao');

function addPontuacaoAtual(ptAtual){
    const placarAtual = document.createElement('p');
    placarAtual.classList.add('placar_atual');

    placarAtual.innerHTML = `Pontuação Atual: ${ptAtual}`;

    pontuacaoLista.appendChild(placarAtual);
    //*
}

function addPontuacao(qtdpontos){
    //pontuacaoLista.innerHTML = '';
    const listaPontuacao = document.createElement('ol');
    listaPontuacao.classList.add('lista_pontuacao');


    const posicao1 = document.createElement('li');
    const posicao2 = document.createElement('li');
    const posicao3 = document.createElement('li');
    
    
    let primeiroLugar = 0;//vale 11 pontos
    let segundoLugar= 0;
    let terceiroLugar = 0;

    if(qtdpontos > primeiroLugar){
        posicao1.innerHTML = `1º Lugar: ${qtdpontos} pontos`
        primeiroLugar = qtdpontos;
        console.log(primeiroLugar)
    }
   if(qtdpontos <= primeiroLugar){
       posicao1.innerHTML = `1º Lugar: ${primeiroLugar} pontos`
       console.log(primeiroLugar)
   }
   if(qtdpontos > segundoLugar && qtdpontos < primeiroLugar){
        posicao2.innerText = `2º Lugar: ${qtdpontos} pontos`
    }
   if(qtdpontos <= segundoLugar || qtdpontos >= primeiroLugar){
       posicao2.innerHTML = `2º Lugar: ${segundoLugar} pontos`
   }
   if(qtdpontos > terceiroLugar && qtdpontos < segundoLugar){
    posicao3.innerHTML = `3º Lugar: ${qtdpontos} pontos`
    }
    if(qtdpontos <= terceiroLugar || qtdpontos >= segundoLugar){
    posicao3.innerHTML = `3º Lugar: ${terceiroLugar} pontos`
    }

   // posicao3.innerText = `3º Lugar: ${terceiroLugar} pontos`

   listaPontuacao.appendChild(posicao1)
   listaPontuacao.appendChild(posicao2)
   listaPontuacao.appendChild(posicao3)

   pontuacaoLista.appendChild(listaPontuacao)
    
}

function validaDerrota(sequenciaMaquina,clickJogador){
        if(sequenciaMaquina[clickJogador.length -1]  !== clickJogador[clickJogador.length -1]){
            addPontuacao(quantidadeVitoria)
            console.log('infelizmente voce perdeu')
        }
}

function mostrarVitoria(sequenciaMaquina,clickJogador){
    if(sequenciaMaquina.length == clickJogador.length){
        quantidadeVitoria += 1;
       console.log('Parabens voce acertou')
       addPontuacaoAtual(quantidadeVitoria);
    }
}

const div1 = document.getElementById('1');
div1.addEventListener('click', () => { 
    clickJogador.push(1)
    validaDerrota(sequenciaMaquina,clickJogador);
    mostrarVitoria(sequenciaMaquina,clickJogador)
});
//div1.addEventListener('click', () => validaDerrota(sequenciaMaquina,clickJogador))
//div1.addEventListener('click', () => mostrarVitoria(sequenciaMaquina,clickJogador))


const div2 = document.getElementById('2');
div2.addEventListener('click', () => clickJogador.push(2))
div2.addEventListener('click', () => validaDerrota(sequenciaMaquina,clickJogador))
div2.addEventListener('click', () => mostrarVitoria(sequenciaMaquina,clickJogador))


const div3 = document.getElementById('3');
div3.addEventListener('click', () => clickJogador.push(3))
div3.addEventListener('click', () => validaDerrota(sequenciaMaquina,clickJogador))
div3.addEventListener('click', () => mostrarVitoria(sequenciaMaquina,clickJogador))


const div4 = document.getElementById('4');
div4.addEventListener('click', () => clickJogador.push(4))
div4.addEventListener('click', () => validaDerrota(sequenciaMaquina,clickJogador))
div4.addEventListener('click', () => mostrarVitoria(sequenciaMaquina,clickJogador))


const start = document.getElementById('start');
start.addEventListener('click', () => mostrarVitoria(sequenciaMaquina,clickJogador))





//addPontuacao(11)
//addPontuacao(3)
//addPontuacao(1)










