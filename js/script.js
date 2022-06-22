// Il programma dovrà mostrare un form da compilare con cui chiedere 
// all'utente il numero di chilometri che vuole percorrere e l'età del 
// passeggero.Sulla base di queste informazioni dovrà calcolare il prezzo 
// totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Il recap dei dati e l'output del prezzo finale va stampato in pagina
// (formattato con massimo due decimali, per indicare centesimi sul prezzo).

const genera = document.getElementById('genera');
genera.addEventListener('click', function () {
    
    const inputUsername = document.getElementById('nomecognome');
    const username = inputUsername.value;

    const inputDistance = document.getElementById('distanza');
    const distance = parseInt(inputDistance.value);

    const inputAge = document.getElementById('eta');
    const age = inputAge.value;


    let prezzo = distance * 0.21;

    let offerta = "Tariffa Standard"


    if (age == "junior") {

        prezzo = (prezzo - (prezzo * 0.2));
        offerta = "Sconto Junior";

       } 
       
       else if (age == "senior") {

        prezzo = (prezzo - (prezzo * 0.4));
        offerta = "Sconto Senior";

       } 
       
        const carrozza = Math.floor(Math.random() * 9) + 1;
        const cp = Math.floor(Math.random() * (100000 + 1 - 90000 )) + 90000;


        document.getElementById('nomepassegero').innerHTML = username;
        document.getElementById('offerta').innerHTML = offerta;
        document.getElementById('costobiglietto').innerHTML = prezzo.toFixed(2);
        document.getElementById('carrozza').innerHTML = carrozza;
        document.getElementById('codicecp').innerHTML = cp;

        let ticket = document.getElementById('ticket');
        ticket.classList.remove('hidden');
        ticket.classList.add('show');
      

})
   





