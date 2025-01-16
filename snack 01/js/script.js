// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

//  creo un array 

const biciclette = [
    // all'interno dell'array inserisco gli oggetti che descrivono la bici con le proprietà nome e peso
    {
        "nome": "bicicletta01",
        "peso": 200,
    },
    
    {
        "nome": "bicicletta02",
        "peso": 100,
    },
    
    {
        "nome": "bicicletta03",
        "peso": 230,
    },
    
    {
        "nome": "bicicletta04",
        "peso": 140,
    },
    
    {
        "nome": "bicicletta05",
        "peso": 200,
    },
    
    {
        "nome": "bicicletta06",
        "peso": 290,
    },
    
    {
        "nome": "bicicletta07",
        "peso": 450,
    },
    
    {
        "nome": "bicicletta08",
        "peso": 340,
    },
    
    {
        "nome": "bicicletta09",
        "peso": 200,
    },
    
    {
        "nome": "bicicletta10",
        "peso": 310,
    },
    
    
];


console.log(biciclette);




// CONFRONTO TRA LE BICI CHI HA IL PESO MINORE

// Prima di confrontare:
// creo un ciclo for per estrapolare quello che c'è nell'array
for (let i = 0; i < biciclette.length; i++) {

    // individuo l'elemento Iesimo all'interno dell'array
    let indicebiciclette = biciclette[i];
    // console.log(indicebiciclette);
    
    // ricavo la proprietà "peso" dell'oggetto Iesimo
    let valorePeso = indicebiciclette.peso;
    
    console.log(valorePeso);



   
};


// Confronto tra gli elementi dell'array chi ha il peso minore

//inizializzo una variabile prendendo il primo elemento dell'array

let pesoMinore = biciclette[0];

// creo un ciclo per confrontare il peso

for(let i = 0; i < biciclette.length; i++){

    // SE l'elemento iesimo estrapolato dall'array ha un peso minore rispetto al valore dell'oggetto della prima array allora il peso sarà inferiore

    if(biciclette[i].peso < pesoMinore.peso) {
        pesoMinore = biciclette[i];
    }
};

console.log(pesoMinore);



// stampo in pagina la bici con peso minore

// Richiamo dall'HTML 
biciclettaPiuLeggera.innerText = `la bici più leggera è ${pesoMinore.nome}`