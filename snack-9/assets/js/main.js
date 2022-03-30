// Calcola la somma e la media dei primi 10 numeri

// creo una variabile per la somma
let somma = 0;

// creo un ciclo dei primi 10 numeri
for (let i = 1; i <= 10; i++) {
    // sommo ogni numero alla somma
    somma = somma + i;
}

// loggo somma totale
console.log(`La somma dei primi 10(1-10) numeri è ${somma}`);

// creo la media della somma dei primi 10 numeri
const media = somma / 10;

//loggo la media
console.log(`la media dei primi 10(1-10) numeri è: ${media}`);