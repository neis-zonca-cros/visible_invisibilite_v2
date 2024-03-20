import React, { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import { useTransition, animated } from '@react-spring/web';
import { useMediaQuery } from 'react-responsive';
import lyon from '../assets/lyon.jpg';

const Sidenav = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isLargeScreen = useMediaQuery({ minWidth: 992 });

  let backgroundTransition;

  if (isSmallScreen) {
    backgroundTransition = useTransition(isOpen, {
      from: { opacity: 1, transform: 'translateX(0%) translateY(100%)' },
      enter: { opacity: 1, transform: 'translateX(0%) translateY(0%)' },
      leave: { opacity: 1, transform: 'translateX(100%) translateY(0%)' },
    });
  } else if (isMediumScreen || isLargeScreen) {
    backgroundTransition = useTransition(isOpen, {
      from: { opacity: 1, transform: 'translateX(100%) translateY(0%)' },
      enter: { opacity: 1, transform: 'translateX(0%) translateY(0%)' },
      leave: { opacity: 1, transform: 'translateX(0%) translateY(-100%)' },
    });
  }


  return (
    <div>
<div className='fixed bottom-5 right-5 sm:sm:bottom-5 sm:right-5 md:top-5 md:right-5 md:bottom-auto lg:top-5 lg:right-5 lg:bottom-auto z-[99] rounded-full p-2 border-4 border-font radius hover:scale-110 transition-transform ease-in-out duration-200'>
  <Hamburger toggled={isOpen} toggle={toggleMenu} label="Ouvrir le menu" hideOutline={true} color="#f9f5ea" distance="md" />
</div>

      {backgroundTransition((backgroundStyle, item) =>
        item && (
          <animated.div style={backgroundStyle} className='fixed w-full h-screen bg-background flex flex-col justify-center items-center z-[98]'>
             
             <img src={lyon} className='h-[20%] w-auto mx-auto mb-4 rounded-full'></img>
            <div className="text-font text-center">
              <ul>


               
               
                <div className='p-1 rounded-md hover:bg-font hover:scale-110 transition-transform ease-in-out duration-200'>
                  <li className=" bg-background p-2">
                  <a href="#accueil" className="text-font text-xl sm:text-xl md:text-2xl lg:text-2xl uppercase font-['agrandir']" onClick={toggleMenu}>Lyon</a>                  </li>
                </div>
                <div className='p-1 rounded-md hover:bg-font hover:scale-110 transition-transform ease-in-out duration-200'>
                  <li className=" bg-background p-2">
                  <a href="#nombreRues" className="text-font text-xl sm:text-xl md:text-2xl lg:text-2xl uppercase font-['agrandir']" onClick={toggleMenu}>Des milliers d'endroits</a>                  </li>
                </div>
                <div className='p-1 rounded-md hover:bg-autres hover:scale-110 transition-transform ease-in-out duration-200'>
                  <li className=" bg-background p-2">
                  <a href="#pourcentAutres" className="text-autres text-xl sm:text-xl md:text-2xl lg:text-2xl uppercase font-['agrandir']" onClick={toggleMenu}>Les oubliés</a>                  </li>
                </div>

                <div className='p-1 rounded-md hover:bg-humain hover:scale-110 transition-transform ease-in-out duration-200'>
                  <li className=" bg-background p-2">
                  <a href="#pourcentHumain" className="text-humain text-xl sm:text-xl md:text-2xl lg:text-2xl uppercase font-['agrandir']" onClick={toggleMenu}>Beaucoup d'humains</a>                  </li>
                </div>

                <div className='p-1 rounded-md hover:bg-hommes hover:scale-110 transition-transform ease-in-out duration-200'>
                  <li className=" bg-background p-2">
                  <a href="#pourcentHommes" className="text-hommes text-xl sm:text-xl md:text-2xl lg:text-2xl uppercase font-['agrandir']" onClick={toggleMenu}>Les visibles</a>                  </li>
                </div>
                <div className='p-1 rounded-md hover:bg-femmes hover:scale-110 transition-transform ease-in-out duration-200'>
                  <li className=" bg-background p-2">
                  <a href="#pourcentFemmes" className="text-femmes text-xl sm:text-xl md:text-2xl lg:text-2xl uppercase font-['agrandir']" onClick={toggleMenu}>Les invisibles</a>                  </li>
                </div>
                <div className='p-1 rounded-md hover:bg-font hover:scale-110 transition-transform ease-in-out duration-200'>
                  <li className=" bg-background p-2">
                  <a href="#conclusion" className="text-font text-xl sm:text-xl md:text-2xl lg:text-2xl uppercase font-['agrandir']" onClick={toggleMenu}>La visible invisibilité</a>                  </li>
                </div>


                
                
              </ul>
            </div>
          </animated.div>
        )
      )}
    </div>
  );
}

export default Sidenav;
