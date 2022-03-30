// Stampa le potenze di 2 fino a 1000

// inizializzo una variabile a 2
const pow_number = 2;

// inizializzo una variabile a cui assegnare le potenze da stampare
let print_number = 0;

// creo un ciclo che stampa potenze fino al valore 1000 delle potenze
for (let i = 0; print_number < 1000; i++) {
    // elevo 2 a potenza crescente
    print_number = Math.pow(pow_number,i);
    // loggo il valore della potenza solo finchè è < 1000
    if (print_number < 1000) {
        console.log(`2 elevato a ${i} è pari a: ${print_number}`);
    }
    
}