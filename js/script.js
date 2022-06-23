// Il programma dovrà mostrare un form da compilare con cui chiedere 
// all'utente il numero di chilometri che vuole percorrere e l'età del 
// passeggero.Sulla base di queste informazioni dovrà calcolare il prezzo 
// totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Il recap dei dati e l'output del prezzo finale va stampato in pagina
// (formattato con massimo due decimali, per indicare centesimi sul prezzo).


// FORM ELEMENTS 
const nameField = document.getElementById('nomecognome');
const kmsField = document.getElementById('distanza');
const ageField = document.getElementById('eta');
const confirmButton = document.getElementById('genera');
const cancelButton = document.getElementById('annulla');
const buyButton = document.getElementById('buy');

// TICKET ELEMENTS
const ticketSection = document.getElementById('ticket');
const passengerElement = document.getElementById('nomepasseggero');
const rateElement = document.getElementById('offerta');
const carElement = document.getElementById('carrozza');
const pnrElement = document.getElementById('codicecp');
const priceElement = document.getElementById('costobiglietto');


confirmButton.addEventListener('click', function () {
    
    // Prendo i valori dal form 

    const nameValue = nameField.value;
    const kmsValue = kmsField.value;
    const ageValue = ageField.value;

    // ! VALIDATION

    if (!nameValue.trim() || isNaN(kmsValue) || kmsValue < 1) {
        ticketSection.classList.add('d-none');
        alert('Hai inserito valori non validi');
        return;
    }
    
    // Calcolo del prezzo base 

    let rateName = 'Tariffa Ordinaria'
    let price = 0.21 * kmsValue;

    // Verifico eventuale sconto

    if (ageValue === "junior") {

        price *= 0.8;
        rateName = "Tariffa Junior";

    } 
       
    else if (ageValue === "senior") {

        prezzo *= 0.6;
        rateName = "Tariffa Senior";

    } 
    
    const car = Math.floor(Math.random() * 9) + 1;
    const pnr = Math.floor(Math.random() * (100000 + 1 - 90000 )) + 90000;

    // Mostrare i dati nel biglietto

    passengerElement.innerText = nameValue;
    rateElement.innerText = rateName;
    carElement.innerText = '9';
    pnrElement.innerText = '94873';
    priceElement.innerText = '€' + price.toFixed(2);

     // Mostrare il biglietto

     ticketSection.classList.remove('d-none');

});

buyButton.addEventListener('click', function() {
    alert('Il tuo biglietto è stato acquistato');
    window.location.reload();
})

cancelButton.addEventListener('click', function() {
    nameField.value = '';
    kmsField.value = '1';
    ageField.value = '';

    ticketSection.classList.add('d-none');
})





