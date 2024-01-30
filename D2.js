/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 8;
let numero2 = 10;
if (numero1 < numero2) {
  console.log("maggiore")
} else {
  console.log("minore")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let numero4 = 4;
let numero5 = 5;
if (numero4 !== numero5) {
  console.log("not equal")
} else {
  console.log("equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let numero20 = 20;
if (numero20 % 5 == 0) {
  console.log("divisibile per 5")
} else {
  console.log("non è divisibile per 5")
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numerouno = 4;
let numerodue = 4;
if (numerouno + numerodue == 8) {
  console.log("8")
} else {
  console.log("errore")
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 60;
let spedizione = 10;
if (totalShoppingCart > 50) {
  console.log("hai diritto alla spedizione gratuita")
} else {
  console.log("spedizione 10 euro")
}
if (totalShoppingCart > 50) {
  console.log("60 euro")
} else {
  console.log("70 euro")
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart2 = 60;
let spedizione2 = 10;
if (totalShoppingCart2 > 50) {
  console.log("hai diritto alla spedizione gratuita")
} else {
  console.log("spedizione 10 euro")
}
if (totalShoppingCart2 - 20) {
  console.log("Sconto Black Friday -20% su ogni prodotto")
} else {
  console.log("Sconto Black Friday non applicabile")
}
if (totalShoppingCart2 - 20) {
  console.log("totale 48 euro")
} else {
  console.log("70 euro")
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let variabile1 = 10;
let variabile2 = 20;
let variabile3 = 30;
if (variabile3 > variabile1 && variabile2) {
  console.log("la variabile 3 ha il valore più alto")
} else {
  console.log("la variabile 3 ha il valore più basso")
}
if (variabile2 > variabile1 && variabile2 < variabile3) {
  console.log("la variabile 2 ha il valore compreso tra la variabile 1 e 3")
} else {
  console.log("la variabile 2 ha il valore più basso")
}
if (variabile1 < variabile2 && variabile3) {
  console.log("la variabile 1 ha il valore più basso")
} else {
  console.log("la variabile 1 ha il valore più alto")
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let esercizio8 = 42;
let esercizio81 = "no";
if (esercizio8 == 42) {
  console.log(typeof 42)
} else {
  console.log("no")
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let num = 20;
if (num % 20 === 0) {
  console.log(num + " è pari")
} else {
  console.log(num + " è dispari")
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}



/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
/* SCRIVI QUI LA TUA RISPOSTA */

/*const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/*const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);
delete me.lastName;
console.log(me);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".  valla a ceracre
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);
delete me.lastName;
console.log(me);
me.skills.splice(me.skills.indexOf('skills', 2));
console.log(me);


/* ESERCIZIO 14 
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10. 
*/
/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
