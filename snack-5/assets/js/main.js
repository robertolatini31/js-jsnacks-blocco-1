// SNACK 5
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// creo array vuoto

let odd_numbers = [];

// creo ciclo richiesta 6 numeri

for (let i = 0; i < 6; i++) {
    // chiedo il numero
    let element = parseInt(prompt('inserisci un numero'));
    // controllo sia numero dispari
    if (isNaN(element)){
    } else if (element % 2 != 0) {
        // aggiungo alla lista
        odd_numbers.push(element);
    }
}
    
console.log(odd_numbers);