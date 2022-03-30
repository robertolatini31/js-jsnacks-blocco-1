// Stampa il cubo dei primi N numeri,dove N è un numero indicato dall’utente.

// chiedo all'utente di quanti numeri vuole il cubo ==> N
const n_user = parseInt(prompt('inserire di quanti N numeri si vuole il cubo:'));

// inizializzo un array vuoto per i cubi
let cubed_numbers = [];

// creo un ciclo di N iterazioni 
for (let i = 0; i < n_user; i++) {
    // aggiungo il cubo per ogni valore di i all' array dei cubi
    cubed_numbers.push(Math.pow(i, 3));
}

// loggo l' array
console.log(cubed_numbers);