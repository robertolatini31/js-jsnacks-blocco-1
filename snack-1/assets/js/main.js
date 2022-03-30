// SNACK 1 L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.


// faccio inserire due numeri all'utente

const first_number = parseInt(prompt('Inserisci il primo numero'));

console.log(first_number);

const second_number = parseInt(prompt('Inserisci il secondo numero'));

console.log(second_number);


// controllo il maggiore

if (first_number > second_number) {
    console.log(`il maggiore è: ${first_number}`);
} else if (first_number < second_number) {
    console.log(`il maggiore è: ${second_number}`);
} else {
    console.log(`inseriti numeri uguali`);
}