import React from 'react';
import bus from '../assets/bus.png'; 

export default function Accueil() {
  return (
    <section id="accueil" className='h-screen relative'>
      <img src={bus} alt="Image d'un bus TCL" className="fixed top-5 left-1/2 -translate-x-1/2 h-48 lg:h-1/4 md:h-1/4 z-[97]" />
      <div className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-[agrandir] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-font z-10">
        Bienvenue à Lyon !
      </div>
    </section>
  )
}

