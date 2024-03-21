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
                <div className='flex justify-center w-full mt-4'>
                  <a href="https://www.linkedin.com/in/n%C3%A9%C3%AFs-zonca-cros" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="40" height="40" viewBox="0 0 192 192" className="m-4 hover:scale-110 transition-transform ease-in-out duration-200">
                    {
                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                    <path d="M0,192v-192h192v192z" fill="none"></path>
                    <g fill="#f9f5ea"><g id="surface1">
                    <path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"></path>
                    </g>
                    </g>
                    </g>
                    }
                </svg>
                </a>
                <a href="https://github.com/neis-zonca-cros" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="40" height="40"  className="m-4 hover:scale-110 transition-transform ease-in-out duration-200">
                  <path fill="#f9f5ea" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                </a>
                <a href="mailto:neis.cros@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" class="bg-background m-4 p-1 rounded-full hover:scale-110 transition-transform ease-in-out duration-200">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
                    <path stroke-width="2" stroke="#f9f5ea" stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                </svg>
                </a>

                </div>
                <div class="whitespace-nowrap items-center justify-center flex flex-row p-2">
                <span class="mr-2 font-agrandir">Fait par Néïs avec</span>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>

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
