import React from "react";

export async function fetchStreetData(queryRequest) {
    return fetch("https://overpass-api.de/api/interpreter", {
        method: 'POST',
        mode: 'cors',
        body: "data=" + encodeURIComponent(queryRequest)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}