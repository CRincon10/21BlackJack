/* 
referencia a imagenes de las cartas
C= clover (trebol)
D= diamonds (diamantes)
H= heards (corazones)
S= spades (espadas)
*/

const mi_modulo = ( ()=>{
    'Use strict'

    let deck = []
    const tipos = ['C','D','H','S'],
          especiales = ['A','J','Q','K']
          
    let puntosJugadores=[]

    const btnPedir      =document.querySelector('#btn_pedir'),
          btnNuevoJuego =document.querySelector('#btn_nuevoJuego'),
          btnDetener    =document.querySelector('#btn_detener')
    
    const divCartasJugadores = document.querySelector('#div_cartas'),
          puntosSmallHtml    = document.querySelector('small')

    
    const inicializarJuego = (numJugadores = 2)=>{
        deck =crearDeck(),
        puntosJugadores=[]
    }
    const crearDeck = ()=>{
        deck = []
        for( let i = 2; i<=10;i++){
            for(let tip of tipos){
                deck.push(i+tip)
            }
        }
        for(let tip of tipos){
            for(let esp of especiales){
                deck.push(esp+tip)
            }
        }
        return _.shuffle(deck)

    }

    const pedirCarta = ()=>{
        if(deck.length ===0){
            throw 'No hay cartas'
        }   
        return deck.pop()
    }
    
    const valorCarta = (carta)=>{
        const valor = carta.substring(0,carta.length-1)
            return(isNaN(valor))?
            (valor==='A')?11:10
            : valor*1
    }









})()



export {
   
}


