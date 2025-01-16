// Snack2
// PRIMA PARTE
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// SECONDA PARTE
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// TERZA PARTE
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// PRIMA PARTE
// creo un array

const squadreCalcio = [
    
    // all'interno dell'array inserisco gli oggetti che descrivono le squadre con le proprietà nome, punti fatti, falli subiti
    {
        "nome": "Roma",
        "punti fatti": 0,
        "falli subiti" : 0,
    },

    {
        "nome": "Lazio",
        "punti fatti": 0,
        "falli subiti" : 0,
    },
    
    {
        "nome": "Milan",
        "punti fatti": 0,
        "falli subiti" : 0,
    },
    
    {
        "nome": "Inter",
        "punti fatti": 0,
        "falli subiti" : 0,
    },
    
    {
        "nome": "Juventus",
        "punti fatti": 0,
        "falli subiti" : 0,
    },
    
    {
        "nome": "Torino",
        "punti fatti": 0,
        "falli subiti" : 0,
    },
    
    {
        "nome": "Genoa",
        "punti fatti": 0,
        "falli subiti" : 0,
    },
    
    {
        "nome": "Cagliari",
        "punti fatti": 0,
        "falli subiti" : 0,
    },
    
    {
        "nome": "Sampdoria",
        "punti fatti": 0,
        "falli subiti" : 0,
    },
    
    {
        "nome": "Fiorentina",
        "punti fatti": 0,
        "falli subiti" : 0,
    },
    
    
    
    
];


console.log(squadreCalcio);






// SECONDA PARTE
// creo due funzioni che genereranno numeri random:


// la prima per la proprietà punti fatti

function numRandomPuntiFatti(min,max){

    let numeroRandom = (Math.floor(Math.random() * (max - min + 1) ) + min);
    return numeroRandom;

};

// richiamo la funzione

console.log(numRandomPuntiFatti(1,20));


// la seconda per la proprietà falli subiti


// TERZA PARTE
// creo un array dove ci saranno gli elementi contenenti i nomi e i falli subiti