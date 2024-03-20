import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Scrollama, Step } from 'react-scrollama';

export default function PourcentHumain({ genreDataP }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const onStepEnter = ({ index }) => {
    setCurrentStep(index);
    setIsVisible(true);
  };

  const onStepExit = ({ index }) => {
    setIsVisible(false);
  };

  const bgProps = useSpring({
    from: { background: 'linear-gradient(to top, #d9a576 0%, #d9a576 0%)' },
    to: { background: isVisible ? `linear-gradient(to top, #d9a576 ${genreDataP}%, #1c1a1b ${genreDataP}%)` : 'linear-gradient(to top, #d9a576 0%, #d9a576 0%)' },
  });


  return (
    <section id="pourcentHumain">
      <Scrollama onStepEnter={onStepEnter} onStepExit={onStepExit} offset={0.5}>
        <Step data={{ index: 0 }}>
          <animated.div style={bgProps} className='h-screen relative flex justify-center items-center'>
            <div className="w-1/2 mx-auto flex flex-col justify-end items-center h-3/4">
              <div className="text-center">
                <div className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-[agrandir] text-font mb-4">
                  Les {genreDataP}% restantes sont appelées par des noms de personnes
                </div>
              </div>
            </div>
          </animated.div>
        </Step>
      </Scrollama>

    </section>
  );
}
