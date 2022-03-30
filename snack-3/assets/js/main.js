// SNACK 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// creo una variabile di somma e la imposto a 0
let total = 0;

// creo un ciclo per 10 iterazioni
for (let i = 0; i < 10; i++) {
    // chiedo un numero all'utente
    let user_number = parseInt(prompt('inserisci un numero'));
    console.log(`inserito: ${user_number}`);
    total = total + user_number;
    // console.log(`somma parziale: ${total}`);
}

// stampo la somma
// console.log(`somma finale: ${total}`);
    

if (isNaN(total)) {
    console.log(`errore inserito: ${total}`);
 } else {
    console.log(`somma finale: ${total}`);
    
 }