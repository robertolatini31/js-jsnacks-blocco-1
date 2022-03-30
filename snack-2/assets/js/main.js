// SNACK 2 
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// faccio inserire due numeri all'utente

const first_string = prompt('Inserisci la prima parola');

console.log(first_string);

const second_string = prompt('Inserisci la seconda parola');

console.log(second_string);


// controllo il maggiore

if (first_string.length > second_string.length) {
    console.log(`la parola più lunga è: ${first_string}`);
} else if (first_string.length < second_string.length) {
    console.log(`la parola più lunga è: ${second_string}`);
} else {
    console.log(`inserite parole con lunghezza uguale`);
}