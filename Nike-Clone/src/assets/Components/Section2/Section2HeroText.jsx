import React from 'react'
import Section2Btn1 from './Section2Btn1'
import Section2Btn2 from './Section2Btn2'

const Section2HeroText = () => {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-end px-4 pb-10 md:pb-20 text-center">

      <div className="max-w-[500px] w-full">

        <h1 className="text-2xl sm:text-3xl md:text-6xl font-extrabold tracking-tight text-white">
          RACE THE NIGHT AWAY
        </h1>

        <p className="text-white text-xs sm:text-sm md:text-base mt-3">
          The After Dark Tour is back. Built for women, powered by Nike.
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Section2Btn1 />
          <Section2Btn2 />
        </div>

      </div>

    </div>
  );
};

export default Section2HeroText
