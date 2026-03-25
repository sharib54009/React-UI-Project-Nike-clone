import React from "react";
import Section2HeroText from "./Section2HeroText";

const Video = () => {
  return (
    <div className=" relative h-screen md:h-[calc(100vh_-_72px)] overflow-hidden ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover relative z-0">
        <source media="(min-width:768px)" src="/Desktop2.mp4" />
        <source media="(max-width:767px)" src="/Mobile.mp4" />
        
      </video>
       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-[5]" />

       <div >
        <Section2HeroText />
      </div>
    </div>
  );
};
export default Video;
