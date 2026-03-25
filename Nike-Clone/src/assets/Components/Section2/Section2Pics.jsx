import React from 'react'

const Section2Pics = ({ img, className }) => {
  return (
   

    <div className={className}>
      <img
        src={img}
        className="w-full h-full object-cover "
        alt=""
      />
    </div>
  );
};

export default Section2Pics;


