import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Scrollama, Step } from 'react-scrollama';

export default function PourcentAutres({ genreDataO, otherStreetNames }) {
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
              </div>
            </div>
          </animated.div>
        </Step>
      </Scrollama>
    </section>
  );
}
