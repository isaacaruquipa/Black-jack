(() => {
    'use strict';
    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'];
    const especiales = ['A', 'J', 'Q', 'K'];

    // Referencias
    const btnPedir = document.querySelector('#btnPedir');
    const btnNuevo = document.querySelector('#btnNuevo');
    const btnDetener = document.querySelector('#btnDetener');
    const puntosHTML = document.querySelectorAll('small');


    const divCartasJugador = document.querySelector("#jugador-cartas");
    const divCartasComputadora = document.querySelector('#computadora-cartas');


    let puntosJugador = 0,
        puntosComputadora = 0;


    const crearDeck = () => {
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo)
            }
        }

        for (let tipo of tipos) {
            for (const esp of especiales) {
                deck.push(esp + tipo)
            }
        }

        console.log(deck);

        deck = _.shuffle(deck);
        console.log(deck)


    }
    crearDeck();








    // Esta función me pide una carta

    const pedirCarta = () => {

        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
        let carta = deck.pop();
        return carta;
    }

    //pediCarta 
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10 :
            valor * 1;
    }

    // Turno computadora
    const turnoComputadora = (puntosMinimos) => {
        do {
            let carta = pedirCarta();
            puntosComputadora = puntosComputadora + valorCarta(carta);
            puntosHTML[1].innerHTML = puntosComputadora;

            //   <img class="carta" src="assets/cartas/2S.png" alt="">
            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta');
            divCartasComputadora.append(imgCarta);
            if (puntosMinimos > 21) break;
        } while (puntosMinimos < puntosJugador && puntosMinimos <= 21);

        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana');
        } else if (puntosComputadora > 21) {
            alert('Jugador gana');
        }




    }




    let valor = valorCarta(pedirCarta())
    console.log(valor)

    // Eventos
    const small = document.querySelector('small');


    btnPedir.addEventListener('click', function() {
        let carta = pedirCarta();
        puntosJugador = puntosJugador + valorCarta(carta);
        puntosHTML[0].innerHTML = puntosJugador;

        //   <img class="carta" src="assets/cartas/2S.png" alt="">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugador.append(imgCarta);


        if (puntosJugador > 21) {
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled = true;
            turnoComputadora(puntosJugador);
            btnPedir.disabled = true;
            btnDetener.disabled = true;

        } else if (puntosJugador === 21) {
            console.warn('21, genail!');



            alert('Ganaste este juego');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    })


    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnNuevo.disabled = true;
        turnoComputadora(puntosJugador);
    })

    //Recetear y crear nuevo juego

    btnNuevo.addEventListener('click', () => {
        puntosComputadora = 0;
        deck = [];
        crearDeck();
        puntosJugador = 0;
        btnPedir.disabled = false;
        btnDetener.disabled = false;

        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML = '';

        puntosHTML[0].innerHTML = 0;
        puntosHTML[1].innerHTML = 0;
    });
})();