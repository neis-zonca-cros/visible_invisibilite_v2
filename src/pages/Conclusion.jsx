import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);


export default function Conclusion({ genreDataO, genreDataP, genreDataM, genreDataF }) {
  const data = {
    labels: ['Autres', 'Hommes', 'Femmes'],
    datasets: [{
      
      data: [genreDataO, genreDataM, genreDataF],
      backgroundColor: [
        '#769897',
        '#d58a75',
        '#f6d890'
      ],
      hoverOffset: 1
    }]
  };
 

  return (
<section id="conclusion" className="pb-10 flex justify-center items-end h-screen">
  <div className="text-center font-agrandir text-font">
    <div className="flex flex-col justify-center items-center">
      
        <Doughnut data={data} />
      
      <div className="mt-4 text-4xl sm:text-4xl md:text-6xl lg:text-6xl">
        <div className="text-autres">La</div>
        <div className="text-hommes">visible</div>
        <div className="text-femmes">invisibilité</div>
        <div className="text-font text-sm">Les résultats peuvent varier <br></br>entre 1 et 2%</div>
      </div>
    </div>
  </div>
</section>

  )
}

