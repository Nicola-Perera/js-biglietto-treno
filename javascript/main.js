// Programma per calcolare il prezzo di un biglietto del treno

// prezzo e sconto
const price_per_km = 0.21;
const discount_under18 = 0.8;
const discount_over65 = 0.6;

// interazione con l'utente
alert('Benvenuto! Creiamo insieme il biglietto adatto a te');

// richiesta percorso all'utente
let trip_distance = parseFloat(prompt('Quanti chilometri devi percorrere?'));


// richiesta età dell'utente
let user_age = parseFloat(prompt('Quanti anni hai?'));


// creazione biglietto
let full_price = trip_distance * price_per_km;


// applicazione sconti
let final_price;
if (user_age < 18) {
    final_price = full_price * discount_under18;
}
else if (user_age > 65) {
    final_price = full_price * discount_over65;
}
else {
    final_price = full_price;
}

// stampa biglietto
document.getElementById('ticket_price').innerHTML = final_price.toFixed(2) + '€';


