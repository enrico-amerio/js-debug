/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

/* 1 questo codice fa un log del valore di i per ogni ciclo 
2 no
3 si, se i è = a 0 la condizione i > 5 non si verificherà mai quindi il ciclo non partirà mai*/


// ESERCIZIO 2
num = 3;
addIfEven(num)
function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}
console.log(addIfEven(num));
/* 1 questo codice da un return se il numero è pari 
2 si, 2 = 0 è sbagliato perchè assegna il valore invece di confrontare, dovrebbe essere 2 == 0 ( o 2 === 0)
3 no */


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++){
        console.log(i);
    }
}
/*
1. Questo loop genera un console log finchè il valore di i è minore di 5
2. nel ciclo for vanno utilizzati i ; e non , 
3.no
*/


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = [];
function displayEvenNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0){
            evenNumbers.push(numbers[i]);
            console.log(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8] 
console.log(evenNumbers);
/*
1. questa funzione deve restituire un nuovo array contenente solo i numeri pari dell'array numbers
2. c'è un ; dopo i++ // nella condizione dell'if c'è assegnazione e non confronto // tolgo il -1 nella condizione del ciclo se no non pusha l'8 // Il return interrompe il ciclo dopo il primo giro, va messo fuori dal ciclo alla fine della funzione // Tolgo il punto e virgola dopo alla tonda dell'if // dichiaro gli array fuori dalla funzione
*/