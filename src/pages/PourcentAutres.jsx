import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Scrollama, Step } from 'react-scrollama';

const Modal = ({ isOpen, onClose, streetNames }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 z-[99]">
      <div className="bg-background p-6 w-screen h-screen overflow-y-auto relative">
        
        <button onClick={onClose} className="absolute top-10 right-10 text-background rounded hover:scale-110 transition-transform ease-in-out duration-200 w-fit ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#769897" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h2 className="text-xl font-bold mb-4 text-center m-10 text-autres font-agrandir">Noms de rues autres</h2>
        <p className="text-center text-font font-agrandir">{streetNames.join(', ')}</p>
      </div>
    </div>
  );
};

export default function PourcentAutres({ genreDataO, otherStreetNames }) {
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
    from: { background: 'linear-gradient(to top, #769897 0%, #769897 0%)' },
    to: { background: isVisible ? `linear-gradient(to top, #769897 ${genreDataO}%, #1c1a1b ${genreDataO}%)` : 'linear-gradient(to top, #769897 0%, #769897 0%)' },
  });

  return (
    <section id="pourcentAutres">
      <Scrollama onStepEnter={onStepEnter} onStepExit={onStepExit} offset={0.5}>
        <Step data={{ index: 0 }}>
          <animated.div style={bgProps} className='h-screen relative flex justify-center items-center'>
            <div className="w-1/2 mx-auto flex flex-col justify-end items-center h-3/4">
              <div className="text-center">
                <div className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-[agrandir] text-font mb-4">
                  {genreDataO}% de celles-ci sont appelées par des noms de plantes, animaux ou autres
                </div>
                <button onClick={openModal} className="font-[agrandir] text-sm mb-8 bg-background text-autres py-2 px-2 rounded hover:scale-110 transition-transform ease-in-out duration-200 uppercase w-fit">
                  Voir le nom des rues
                </button>
              </div>
            </div>
          </animated.div>
        </Step>
      </Scrollama>
      <Modal isOpen={isModalOpen} onClose={closeModal} streetNames={otherStreetNames} />

    </section>
  );
}
