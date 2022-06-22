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
genera.addEvenListener('click', function () {
    
    const username = document.getElementById('nomecognome');
    const distance = document.getElementById('distanza');
    const age = document.getElementById('età');

    let prezzo = distance * 0.21;


        // se l'età è minore di 18

        if (age < 18) {

            // mi calcolo il prezzo scontato del 20%
            hasDiscount = true;
            prezzo = (prezzo - (prezzo * 0.2));
        }

        // se, invece,  l'età è maggiore di 65
        
        if (age > 65) {

            // mi calcolo il prezzo scontato del 40%

            hasDiscount = true;
            prezzo = (prezzo - (prezzo * 0.4));

        }


    // Recupero elemento

    const price = document.getElementById('prezzo');

})





