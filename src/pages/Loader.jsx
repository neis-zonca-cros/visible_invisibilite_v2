import React from 'react';
import loader from '../assets/loader.svg';

export default function Loader() {
  return (
    <div className='bg-backgroun h-screen flex justify-center items-center'>
              <img src={loader} alt="Loading..." />
        
      
    </div>
  )
}
