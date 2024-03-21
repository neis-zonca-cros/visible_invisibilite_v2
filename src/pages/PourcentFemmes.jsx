import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Scrollama, Step } from 'react-scrollama';

const Modal = ({ isOpen, onClose, streetNames }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 z-[99]">
      <div className="bg-background p-6 w-screen h-screen overflow-y-auto relative">
        
        <button onClick={onClose} className="absolute top-10 right-10 text-background rounded hover:scale-110 transition-transform ease-in-out duration-200 w-fit ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#f6d890" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h2 className="text-xl font-bold mb-4 text-center m-10 text-femmes font-agrandir">Noms de rues féminines</h2>
        <p className="text-center text-font font-agrandir">{streetNames.join(', ')}</p>
      </div>
    </div>
  );
};

export default function PourcentFemmes({ genreDataF, feminineStreetNames }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onStepEnter = ({ index }) => {
    setCurrentStep(index);
    setIsVisible(true);
  };

  const onStepExit = ({ index }) => {
    setIsVisible(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const bgProps = useSpring({
    from: { background: 'linear-gradient(to top, #f6d890 0%, #f6d890 0%)' },
    to: { background: isVisible ? `linear-gradient(to top, #f6d890 ${genreDataF}%, #1c1a1b ${genreDataF}%)` : 'linear-gradient(to top, #f6d890 0%, #f6d890 0%)' },
  });

  return (
    <section id="pourcentFemmes">
      <Scrollama onStepEnter={onStepEnter} onStepExit={onStepExit} offset={0.5}>
        <Step data={{ index: 0 }}>
          <animated.div style={bgProps} className='h-screen relative flex justify-center items-center'>
            <div className="w-1/2 mx-auto flex flex-col justify-end items-center h-3/4">
              <div className="text-center">
                <div className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-[agrandir] text-font mb-4">
                  Ce qui nous laisse {genreDataF}% de rues avec des noms de femmes
                </div>
                <button onClick={openModal} className="font-[agrandir] text-sm mb-8 bg-femmes text-background py-2 px-2 rounded hover:scale-110 transition-transform ease-in-out duration-200 uppercase w-fit">
                  Voir le nom des rues
                </button>
              </div>
            </div>
          </animated.div>
        </Step>
      </Scrollama>


      <Modal isOpen={isModalOpen} onClose={closeModal} streetNames={feminineStreetNames} />
    </section>
  );
}
