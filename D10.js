const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("ES.A");
let sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("ES.B");
let random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("ES.C");
const me = {
  nome: "Massimiliano",
  surname: "D'orsi",
  age: "27",
};
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("ES.D");
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("ES.E");
me.skills = ["HTML", "CSS"];
console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("ES.F");
me.skills.push("JAVASCRIPT");
console.log(me.skills);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("ES.G");
me.skills.pop();
console.log(me.skills);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("ES.1");
function dice() {
  let pippo = Math.floor(Math.random() * 6 + 1);
  console.log(pippo);
  return pippo;
}
dice();

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("ES.2");
const whoIsBigger = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else return num2;
};
console.log(whoIsBigger(2, 4));
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("ES.3");
const splitMe = function (stringa) {
  let parole = stringa.split(" ");
  return parole;
};
console.log(splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("ES.4");
const deleteOne = function (stringa, bool) {
  if (bool === true) {
    return stringa.substring(1);
  } else bool === false;
  {
    return stringa.slice(0, -1);
  }
};
console.log(deleteOne("tuZIA", true));
console.log(deleteOne("tuZIA", false));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("ES.5");
const onlyLetters = function (str) {
  return str.replace(/[0-9]/g, "");
};
console.log(onlyLetters("I have 4 dogs"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("ES.6");
function isThisAnEmail(stringa) {
  let email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return email.test(stringa);
}
console.log(isThisAnEmail("massimiliano.dorsi@gmail.com"));
console.log(isThisAnEmail("tua.mamma.it"));

//________________________________________________________________________

console.log("ES.6 PER FAR CONTENTO STEFANO");
const isThisAnEmail2 = (str) => {
  for (let i = 0; i < str.length; i++)
    if (str[i] === "@") {
      return true;
    }
  return false;
};
console.log(isThisAnEmail2("massimiliano.dorsi@gmail.com"));
console.log(isThisAnEmail2("tua.mamma.it"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("ES.7");
function whatDayIsIt() {
  let daysOfWeek = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  let currentDate = new Date();
  let currentDay = currentDate.getDay();

  return daysOfWeek[currentDay];
}
console.log(whatDayIsIt());
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(numero) {
  let somma = 0;
  let risultati = [];

  for (let i = 0; i < numero; i++) {
    let valore = dice();
    somma += valore;
    risultati.push(valore);
  }

  let oggettoRisultato = {
    somma: somma,
    valori: risultati,
  };

  return oggettoRisultato;
}

let risultato2 = rollTheDices(3);
console.log(risultato2);

console.log(rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = function (data) {
  let dataIniziale = new Date(data);
  let dataCorrente = new Date();

  let differenzaInMillisecondi = dataCorrente - dataIniziale;

  let giorniTrascorsi = Math.floor(differenzaInMillisecondi / (1000 * 60 * 60 * 24));

  return giorniTrascorsi;
};
console.log(howManyDays("1996-06-22"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday(compleanno) {
  let oggi = new Date();
  let compleannoDate = new Date(compleanno);

  let giornoOggi = oggi.getDate();
  let meseOggi = oggi.getMonth() + 1;

  let giornoCompleanno = compleannoDate.getDate();
  let meseCompleanno = compleannoDate.getMonth() + 1;

  return giornoOggi === giornoCompleanno && meseOggi === meseCompleanno;
}
let compleanno = "1996-06-22";
console.log(isTodayMyBirthday(compleanno));
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const deleteProp = function (obj, string) {
  delete obj[string];
  return obj;
};
let Pippo = {
  nome: "Pippo Baudo",
  età: 87,
  professione: "Conduttore",
};
console.log(deleteProp(Pippo, "età"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = function (movies) {
  let filmPiuRecente = null;

  for (var i = 0; i < movies.length; i++) {
    let film = movies[i];
    let annoFilm = parseInt(film.Year);

    if (!isNaN(annoFilm)) {
      if (filmPiuRecente === null || annoFilm > parseInt(filmPiuRecente.Year)) {
        filmPiuRecente = film;
      }
    }
  }

  return filmPiuRecente;
};
console.log(newestMovie(movies));
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
let countMovies = function (movies) {
  return movies.length;
};
console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(movies) {
  let years = movies.map(function (movie) {
    return movie.Year;
  });

  return years;
}
console.log(onlyTheYears(movies));
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(movies) {
  let lastMillenniumMovies = movies.filter(function (movie) {
    let year = parseInt(movie.Year);
    return year >= 2000 && year <= 2009;
  });

  return lastMillenniumMovies;
}
console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(movies) {
  let sum = 0;

  for (let i = 0; i < movies.length; i++) {
    let year = parseInt(movies[i].Year);
    sum += year;
  }

  return sum;
}

console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(keyword) {
  let results = [];

  for (let i = 0; i < movies.length; i++) {
    let title = movies[i].Title;

    if (title.toLowerCase().includes(keyword.toLowerCase())) {
      results.push(movies[i]);
    }
  }

  return results;
}

console.log(searchByTitle("Lord"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(keyword) {
  let match = [];
  let unmatch = [];

  for (let i = 0; i < movies.length; i++) {
    let title = movies[i].Title;

    if (title.toLowerCase().includes(keyword.toLowerCase())) {
      match.push(movies[i]);
    } else {
      unmatch.push(movies[i]);
    }
  }
  return {
    match: match,
    unmatch: unmatch,
  };
}

console.log(searchAndDivide("Lord"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(index) {
  let moviesCopy = [...movies];
  moviesCopy.splice(index, 1);
  return moviesCopy;
}

console.log(removeIndex(2));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

// /* ESERCIZIO 20
//   Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
// */
// function selectContainerElement() {
//   let containerElement = document.getElementById("container");
//   return containerElement;
// }

// let container = selectContainerElement();

// /* ESERCIZIO 21
//   Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
// */
// function selectTDElements() {
//   let tdElements = document.getElementsByTagName("td");
//   return tdElements;
// }
// let tdElements = selectTDElements();
// /* ESERCIZIO 22
//   Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
// */
// function printTDText() {
//   let tdElements = document.getElementsByTagName("td");
//   for (let i = 0; i < tdElements.length; i++) {
//     let tdText = tdElements[i].textContent;
//     console.log(tdText);
//   }
// }

// /* ESERCIZIO 23
//   Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
// */
// function addRedBackgroundToLinks() {
//   let links = document.getElementsByTagName("a");
//   for (let i = 0; i < links.length; i++) {
//     links[i].style.backgroundColor = "red";
//   }
// }
// /* ESERCIZIO 24
//   Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
// */
// function addElementToList() {
//   let myList = document.getElementById("myList");
//   let newElement = document.createElement("li");
//   let newText = document.createTextNode("Nuovo elemento");
//   newElement.appendChild(newText);
//   myList.appendChild(newElement);
// }
// /* ESERCIZIO 25
//   Scrivi una funzione per svuotare la lista non ordinata con id "myList".
// */
// function clearList() {
//   let myList = document.getElementById("myList");

//   // Rimuovi tutti gli elementi figlio dalla lista
//   while (myList.firstChild) {
//     myList.removeChild(myList.firstChild);
//   }
// }
// /* ESERCIZIO 26
//   Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
// */
// function addClassToTR() {
//   let trElements = document.getElementsByTagName("tr");
//   for (let i = 0; i < trElements.length; i++) {
//     trElements[i].classList.add("test");
//   }
// }
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
const tree = (num) => {
  for (let i = 0; i < num; i++) {
    let star = "";
    let space = num - i;
    if (i === 0) {
      star += " ".repeat(space + 1) + "\n";
    }
    star += " ".repeat(space + 1);
    let zero = 2 * i + 1;
    star += "*".repeat(zero);
    console.log(star);
  }
};
tree(10);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
