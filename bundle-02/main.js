/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
const myAge = 32;
let message = '';
function checkAge() {

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();
console.log(message)
/*
 1. Questa funzione controlla l'età e restituisce un messaggio diverso se maggiorenne o minorenne
 2. La variabile message deve essere una let  
 3. dichiaro le variabili fuori dalla funzione, aggiunto console log
 */

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(colors.length);
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();
/*
1. questa funzione controlla quanti elementi ci sono nell'array e restituisce un messaggio 
3. lenght scritto male
*/

// ESERCIZIO 3
function addNumbers() {
    const userNumber = 2 //parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
/* 1 Questa funzione aggiunge 12 ad un numero scritto dall'utente
2 manca il parseInt al prompt quindi non viene eseguita un'operazione matematica ma una concatenazione di stringhe
*/

// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = 'mymail@mail.com' //prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
/*
1 questa funzione controlla se la mail dell'utente è presente nell'array
2 ho tolto le virgolette da true e false che venivano lette come stringhe quindi non funzionavano
*/


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = true;

            }

        }

    }
    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
    checkAccessImproved();


/*
1 questa funzione controlla se la mail dell'utente è presente nell'array
2 ho tolto le virgolette da true e false che venivano lette come stringhe quindi non funzionavano, mancava una graffa
3
*/


























