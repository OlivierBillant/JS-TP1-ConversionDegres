//On cree une fonction qui converti les degres Celsius en degres Farhenheit

function conversionCtoF(degreCelsius) {
    const Farhenheit = 32;
    return ("Votre température de " + degreCelsius + " équivaut à " + (degreCelsius * 9 / 5 + Farhenheit).toFixed(2)
        + " degrés Farhenheit");
}

console.log(conversionCtoF(0));
console.log(conversionCtoF(32));

function conversionFtoC(degreFarhenheit) {
    const Farhenheit = 32
    return ("Votre température de " + degreFarhenheit + " équivaut à "
        + ((degreFarhenheit - Farhenheit) * 5 / 9).toFixed(2) + " degrés Celsius")
}

console.log(conversionFtoC(32));
console.log(conversionFtoC(64));

// A l'aide de la méthode Math.random, écrivez un programme qui s'arrête 
// lorsque tous les nombres de la plage [0;100[ sont tirés au sort.
// Indiquer le nombre de tirage nécessaire.

let nombre;
let nombreTire = 0;
let nombreTirage = 0;
const borneSup = 100;
const borneInf = 0;
let tableauNombreTire = [];
var moyenneTirage = 0;

function tirageMathRound(occurence) {
    for (let i = 0; i < occurence; i++) {
        //On reset les valeurs utilisées dans la boucle while
        nombreTirage = 0;
        nombreTire = 0;
        tableauNombreTire = [];

        while (nombreTire < (borneSup - 1)) {
            nombre = Math.round((Math.random() * borneSup));
            nombreTirage++;

            if (tableauNombreTire.length < 1) {
                ajoutNombre(nombre)
            } else {
                if (!dejaTire(nombre)) {
                    ajoutNombre(nombre);
                    // afficheNombre(nombre);
                    nombreTire++;
                }
                // console.log("Nombre de tirages : " +nombreTirage);
            }
        }


        //En dehors de la while on calcule la moyenne pondérée.
        //On prend en compte les cas i == 0 et i == 1
        if (i == 0) {
            moyenneTirage = nombreTirage;
        } else if (i == 1) {
            moyenneTirage = (moyenneTirage + nombreTirage) / 2
        } else {
            moyenneTirage = (moyenneTirage * (i - 1) / i + nombreTirage / i);
        }
    }
}
tirageMathRound(10000);


console.log("Moyenne des tirages " + moyenneTirage.toFixed(2));

function ajoutNombre(nombre) {
    tableauNombreTire.push(nombre);
}

function dejaTire(nombre) {
    for (let i = 0; i < tableauNombreTire.length; i++) {
        if (nombre == tableauNombreTire[i]) {
            return true;
        }
    }
}

function afficheNombre(nombre) {
    console.log(nombre);
}

function afficherTableauNombreTire() {
    console.log("Liste complète");
    for (let i = 0; i < tableauNombreTire.length; i++) {
        console.log(tableauNombreTire[i]);
    }
}

//
//"une chaine avec des lettres dans un certain ordre pour donner du sens"
let phraseATrier = "une chaine avec des lettres dans un certain ordre pour donner du sens";
console.log(phraseATrier);
phraseATrier = phraseATrier.split("").sort().join("").trim();
console.log(phraseATrier);


// Mettre en majuscule la première lettre de chaque mot d’une phrase. La phrase utilisée dans la solution est la suivante :
// "une phrase sans majuscule"
let phraseAModifier = "une phrase sans majuscule";
let motDeLaPhrase = [];
let nouvellePhrase = [];
motDeLaPhrase = phraseAModifier.split(" ");

// motDeLaPhrase.forEach(element => {
//     console.log(element);
// });

motDeLaPhrase.forEach(element => {
    let lettresDuMot = element.split("");
    lettresDuMot[0] = lettresDuMot[0].toUpperCase();
    element = lettresDuMot.join("");
    console.log(element);
    nouvellePhrase.push(element);
});

phraseAModifier = nouvellePhrase.join(" ");
console.log(phraseAModifier);