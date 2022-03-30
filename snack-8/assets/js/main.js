// Chiedi un numero di 4 cifre all’utente 
// e calcola la somma di tutte le cifre che compongono il numero

// inizializzo un array per il numero inserito
let array_number_user = [];

// inizializzo variabile di controllo
let control = true;

// creo un ciclo per far inserire all'utente un numero di sole 4 cifre
for (let i = 0; control ; i++) {
    // chiedo un numero(come stringa) di 4 cifre all'utente
    let number_user_string = prompt('inserire un numero di 4 cifre');
    //trasformo la stringa in un array di numeri
    array_number_user = Array.from(number_user_string, x => parseInt(x)); 
    // controllo sia stato inserito un numero di 4 cifre
    if (array_number_user.length == 4) {
        // loggo l'array di numeri creato
        console.log(`Cifre del numero inserito: ${array_number_user}`);
        // creo una variabile somma
        let somma = 0;
        // creo un ciclo che mi somma i numeri del numero di 4 cifre
        for(let d = 0; d < 4; d++){
            // sommo a somma i valori dell'array
            somma = somma + array_number_user[d];
        }
        console.log(`La somma delle 4 cifre è: ${somma}`);
        control = false;
     }
}