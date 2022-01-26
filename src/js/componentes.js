const miModulo = (()=>{
    

    let deck = []
    const tipos = ['C','D','H','S'],
          especiales = ['A','J','Q','K'];

    let puntosJugadores = []

    const btnPedir =  document.querySelector('#btn_pedir'),
          btnDetener = document.querySelector('#btn_detener'),
          btnNuevoJuego = document.querySelector('#btn_nuevoJuego');


    const divCartasJugadores = document.querySelectorAll('.div_cartas'),
          puntosSmallHtml = document.querySelectorAll('small'),
          divcards = document.querySelector('#cards'),
          divcardsCm = document.querySelector('#cards_computadora');


    const inicializarJuego = (numJugadores = 2) =>{
        deck = crearDeck();
        puntosJugadores=[]; 
        
        for(let i=0;i<numJugadores;i++){
            puntosJugadores.push(0)
        }
        puntosSmallHtml.forEach(elem =>elem.innerText = 0)
        divCartasJugadores.forEach(elem =>elem.innerText = '')
            
        btnPedir.disabled = false
        btnDetener.disabled =false

        divcards.classList.add('espacio')
        divcardsCm.classList.add('espacio')

    }      

    const crearDeck = ()=>{
        deck = []
        for(let i = 2;i <=10;i++){
            for(let tipo of tipos){
                deck.push(i+tipo)
            }
        }
        for(let tipo of tipos){
            for(let esp of especiales){
                deck.push(esp+tipo)
            }
        } 
        
        return shuffleDeck(deck) 
    }

    /*Funcion para barajar el deck*/
    const shuffleDeck = (i)=>{
        i.sort(()=>Math.random()-0.5)
        return i
    }

    const pedirCarta = ()=>{
        if(deck.length === 0){
            throw 'No hay cartas en el deck'
        }
        return deck.pop()
    } 
    const valorCarta = (carta)=>{
        const valor = carta.substring(0,carta.length-1)
        return (isNaN(valor))?
            (valor==='A')? 11:10
            : valor *1;
    }

    let acumularPuntos = (carta, turno)=>{
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta)
        puntosSmallHtml[turno].innerText = puntosJugadores[turno]

        return puntosJugadores[turno]
    }

    const crearCartaImg = (carta,turno)=>{
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/img/cartas/${carta}.png`                  //`assets/cartas/${carta}.png`
        imgCarta.classList.add('carta')
        divCartasJugadores[turno].append(imgCarta)
    }

    const determinarGanador = ()=>{

        const [puntosMinimos, puntosComputadora] = puntosJugadores

        setTimeout(()=>{
            if( puntosComputadora===puntosMinimos){
                alert('Nadie gana')
            }else if(puntosMinimos>21){
                alert('Computadora ha ganado')
            }else if(puntosComputadora>21){
                alert('Has ganado')
            }else{
                alert('Computadora ha ganado')
            }
        },250)
    }


    //TURNO DE LA COMPUTADORA
    
    const turnoComputadora =(puntosMinimos)=>{
        let puntosComputadora = 0;
        do{
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length -1 )
            crearCartaImg(carta, puntosJugadores.length -1)
        }while((puntosComputadora<puntosMinimos)&&(puntosMinimos<=21))
        determinarGanador()
    }

    //TURNO DEL JUGADOR
    btnPedir.addEventListener('click', ()=>{
        const carta = pedirCarta();
        
        const puntosJugador = acumularPuntos(carta, 0 ) //turno es la posicion 0 del arreglo osea el primer jugador
        crearCartaImg(carta,0)

        
        if(puntosJugador > 21){
            console.warn('Lo siento perdiste')
            btnPedir.disabled = true
            btnDetener.disabled =true
            turnoComputadora(puntosJugador)
        }else if(puntosJugador===21){
            console.warn('21, lo lograste')
            btnPedir.disabled = true
            btnDetener.disabled =true
            turnoComputadora(puntosJugador)
        }
    })
    btnDetener.addEventListener('click',()=>{
        btnPedir.disabled = true
        btnDetener.disabled =true
        turnoComputadora( puntosJugadores[0] );
    })
    btnNuevoJuego.addEventListener('click',()=>{
        inicializarJuego()
       
    })

    return {
        nuevoJuego: inicializarJuego   
    };

})()



export{
    miModulo
}



