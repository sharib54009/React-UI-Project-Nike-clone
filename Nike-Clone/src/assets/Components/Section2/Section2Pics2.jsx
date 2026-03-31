import React from 'react'

const Section2Pics2 = ({img, text, className}) => {
  return (
    <div>
     <div className= " object-cover  w-30 md:w-120 overflow-x-auto" >
      <img 
      src={img}
      className=' md:h-150 h-30 md:pl-10 pl-5'
      ></img>
      <p className=' text-xl md:text-2xl font-semibold md:mt-5 mt-2.5 md:ml-10 ml-5'>{text}</p>
    </div>
    </div>
  )
}

export default Section2Pics2
