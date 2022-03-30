// SNACK 4
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// creo una lista di nomi per gli invitati

let invited_list = ['fabio', 'roberto', 'tiziano', 'fabiola'];

// chiedo il nome all' utente

const user_name = prompt('inserisci il tuo nome');
console.log(user_name);

// creo una variabile di controllo

let control = true;

// creo un ciclo che controlli se è nella lista

for (let i = 0; i < invited_list.length; i++) {
    // scorro la lista
    const element = invited_list[i];
    if (user_name == element) { // controllo sia in lista
        console.log(`Benvenuto ${user_name}`);
        control = false;
    }
}

if (control) {
    console.log(`Mi dispiace ${user_name} lei non è in lista`);
}