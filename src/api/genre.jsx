import React from "react";

// Mot de liaisons des rues à skip
const COMMON_STREET_WORDS = [
    "Rue", "de", "la", "le", "du", "Avenue", "Chemin", "Route", "Tunnel",
    "Allée", "Place", "Voie", "Boulevard", "des", "Impasse", "Quai",
    "Grande", "et", "du", "les", "", "Montée", "La", "Le", "Du", "Les",
    "rue", "route", "Des"
];

// Fonction pour compter le genre des rues
export function countGenre(streets, mapObjects) {
    let countF = 0;
    let countM = 0;
    let countO = 0;
    let streetsCount = streets.length;

    // Parcours tout notre tableau de rue, 
    // et check si c'est compris dans notre map et check son genre
    for (let i = 0; i < streets.length; i++) {
        let tempTab = streets[i].split(/\s|(?<=l'|s'|d'|L'|S'|D'|Saint-)|-/).filter(Boolean);
        for (let j = 0; j < tempTab.length; j++) {
            if (COMMON_STREET_WORDS.includes(tempTab[j])) {
                continue;
            } else {
                tempTab[j] = tempTab[j].charAt(0).toLowerCase() + tempTab[j].slice(1);
                if (mapObjects.get(tempTab[j]) === 'f') {
                    countF += 1;
                    break;
                } else if (mapObjects.get(tempTab[j]) === 'm') {
                    countM += 1;
                    break;
                }
                if (j + 1 >= tempTab.length) {
                    // console.log(tempTab);
                    countO += 1;
                }
            }
        }
    }

    console.log("Féminin : " + countF);
    console.log("Masculin : " + countM);
    console.log("Other : " + countO);

    let pourcentO = Math.round(100 * countO / streetsCount);
    let pourcentP = Math.round(100 * (countM + countF) / streetsCount);
    let pourcentM = Math.round(100 * countM / streetsCount);
    let pourcentF = Math.round(100 * countF / streetsCount);

    console.log("Femmes : " + pourcentF + "%");
    console.log("Other : " + pourcentO + "%");
    console.log("Persons : " + pourcentP + "%");
    console.log("Hommes : " + pourcentM + "%");

    return { pourcentO, pourcentP, pourcentM, pourcentF };
}