import React from "react";

const COMMON_STREET_WORDS = [
    "Rue", "de", "la", "le", "du", "Avenue", "Chemin", "Route", "Tunnel",
    "Allée", "Place", "Voie", "Boulevard", "des", "Impasse", "Quai",
    "Grande", "et", "du", "les", "", "Montée", "La", "Le", "Du", "Les",
    "rue", "route", "Des"
];
export function getStreetNamesByGenre(streets, mapObjects) {
    let streetNamesByGenre = {
        feminine: [],
        masculine: [],
        other: []
    };

    for (let i = 0; i < streets.length; i++) {
        let tempTab = streets[i].split(/\s|(?<=l'|s'|d'|L'|S'|D'|Saint-)|-/).filter(Boolean);
        let categorized = false;

        for (let j = 0; j < tempTab.length; j++) {
            if (tempTab[j].toLowerCase() === "périphérique" || tempTab[j].toLowerCase() === "bretelle" || tempTab[j].toLowerCase() === "autoroute" || tempTab[j].toLowerCase() === "tunnel" || tempTab[j].toLowerCase() === "piste") {
                categorized = true;
                break;
            }
            if (COMMON_STREET_WORDS.includes(tempTab[j])) {
                continue;
            } else {
                tempTab[j] = tempTab[j].charAt(0).toLowerCase() + tempTab[j].slice(1);
                if (mapObjects.has(tempTab[j])) {
                    let genre = mapObjects.get(tempTab[j]);
                    if (genre === 'f') {
                        streetNamesByGenre.feminine.push(streets[i]);
                        categorized = true;
                        break;
                    } else if (genre === 'm') {
                        streetNamesByGenre.masculine.push(streets[i]);
                        categorized = true;
                        break;
                    }
                }
            }
        }

        if (!categorized) {
            streetNamesByGenre.other.push(streets[i]);
        }
    }

    return streetNamesByGenre;
}