// exercice 1
let tableauNombreAleaTire = [];
let compteur = 0;
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

do {
    let nombreAlea = getRandomArbitrary(0,100);
    // si le nombre n'a pas déjà été tiré    
    if(!tableauNombreAleaTire.includes(nombreAlea)){
        tableauNombreAleaTire.push(nombreAlea);
     } compteur++;
} while(tableauNombreAleaTire.length < 100);
console.log("On a fait " + compteur + " tirages");
console.log(tableauNombreAleaTire);

// exercice 2
let phrase = "Une chaine avec des lettres dans un certain ordre pour donner du sens";
let phraseSansEspaces = phrase.replace(/\s/g,'');
let tableau = Array.from(phraseSansEspaces.toLowerCase());
console.log(tableau.sort());
