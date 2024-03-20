import React from 'react'

export default function NombreRues({numberOfStreets}) {
  return (
    <section id="nombreRues" className='h-screen'>
        <div className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-[agrandir] relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-font">
        Ici, il y a {numberOfStreets} rues différentes
        </div>
    </section>
  )
}
