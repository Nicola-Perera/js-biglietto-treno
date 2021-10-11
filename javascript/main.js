// Programma per calcolare il prezzo di un biglietto del treno

// prezzo e sconto
const price_per_km = 0.21;
const discount_under18 = 0.8;
const discount_over65 = 0.6;

// interazione con l'utente
alert('Benvenuto! Creiamo insieme il biglietto adatto a te');

// richiesta percorso all'utente
let trip_distance = parseInt(prompt('Quanti chilometri devi percorrere?'));
console.log(trip_distance);

// richiesta età dell'utente
let user_age = parseInt(prompt('Quanti anni hai?'));
console.log(user_age);

// creazione biglietto
let full_price = trip_distance * price_per_km;
console.log(full_price);


