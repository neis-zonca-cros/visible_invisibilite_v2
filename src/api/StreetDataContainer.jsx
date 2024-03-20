import React, { useState, useEffect } from 'react';
import { fetchStreetData } from '../api/api';
import { countGenre } from '../api/genre';
import { getStreetNamesByGenre } from '../api/getStreetNamesByGenre';
import listePrenoms from '../api/Liste_Prenoms.json'; 
import Accueil from '../pages/Accueil';
import NombreRues from '../pages/NombreRues';
import PourcentAutres from '../pages/PourcentAutres';
import PourcentHumain from '../pages/PourcentHumain';
import PourcentHommes from '../pages/PourcentHommes';
import PourcentFemmes from '../pages/PourcentFemmes';
import Conclusion from '../pages/Conclusion';
import Sidenav from '../components/Sidenav';
import Loader from '../pages/Loader';

function StreetDataContainer() {
    const [loading, setLoading] = useState(true); 
    const [genreData, setGenreData] = useState(null);
    const [numberOfStreets, setNumberOfStreets] = useState(null);
    const [feminineStreetNames, setFeminineStreetNames] = useState([]);
    const [masculineStreetNames, setMasculineStreetNames] = useState([]);
    const [otherStreetNames, setOtherStreetNames] = useState([]);

    useEffect(() => {
        const queryRequest = `
            [out:json];
            area(id:3600120965)->.searchArea;
            (
              way["highway"]["name"](area.searchArea);
            );
            out;
        `;
  
        fetchStreetData(queryRequest)
            .then(data => {
                const streets = data && data.elements ? Array.from(new Set(data.elements.map(element => element.tags.name))).filter(Boolean) : [];
                const filteredStreets = streets.filter(street => !/parking|n°|accès|sortie|acces|vélos/i.test(street) && street.split(/\s+/).length > 1 && !/\d/.test(street));
                setNumberOfStreets(filteredStreets.length);
                // Créez une carte d'objets à partir des données des prénoms
                const mapObjects = new Map();
                listePrenoms.forEach(entry => {
                    mapObjects.set(entry.name.toLowerCase(), entry.genre);
                });

                
                const genreResult = countGenre(filteredStreets, mapObjects);
                setGenreData(genreResult);

                
                const feminineNames = getStreetNamesByGenre(filteredStreets, mapObjects).feminine;
                setFeminineStreetNames(feminineNames);

                const masculineNames = getStreetNamesByGenre(filteredStreets, mapObjects).masculine;
                setMasculineStreetNames(masculineNames);

                const othersNames = getStreetNamesByGenre(filteredStreets, mapObjects).other;
                setOtherStreetNames(othersNames);
                setLoading(false);
            })
            .catch(error => {
                console.error('An error occurred while fetching data:', error);
                setLoading(false);
            });
    }, []);
  
    return (
      <div>
        {loading ? (
          <Loader />
        ) : (
       
          <div>
            {genreData && <Sidenav/>}
            {genreData && <Accueil/>}
            {numberOfStreets && <NombreRues numberOfStreets={numberOfStreets} />}
            {genreData && <PourcentAutres genreDataO={genreData.pourcentO} otherStreetNames={otherStreetNames}/>}
            {genreData && <PourcentHumain genreDataP={genreData.pourcentP} />}
            {genreData && <PourcentHommes genreDataM={genreData.pourcentM} masculineStreetNames={masculineStreetNames}/>}
            {genreData && <PourcentFemmes genreDataF={genreData.pourcentF} feminineStreetNames={feminineStreetNames} />}
            {genreData && <Conclusion genreDataO={genreData.pourcentO} genreDataP={genreData.pourcentP} genreDataM={genreData.pourcentM} genreDataF={genreData.pourcentF}/>}
          </div>
        )}
      </div>
    );
}

export default StreetDataContainer;