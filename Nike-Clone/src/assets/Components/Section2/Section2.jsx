import React from 'react'
import Video from './Video'
import Section2Pics from './Section2Pics'



const Section2 = () => {
  const Users = [
    {
      img :"https://images-static.nykaa.com/uploads/7019e8e5-2115-4e1c-8a07-17c1fc1fcffd.png?tr=cm-pad_resize,w-900"
    },
     {
      img :"https://images-static.nykaa.com/uploads/072cfd1a-313d-4516-bcaa-97378e681bb4.png?tr=cm-pad_resize,w-900"
    },
     {
      img :"https://images-static.nykaa.com/uploads/5907da18-0df7-4299-8617-75b95b5033dc.png?tr=cm-pad_resize,w-900"
    },
     {
      img :"https://images-static.nykaa.com/uploads/a276d32a-dfad-499a-85a0-64188fd1639c.png?tr=cm-pad_resize,w-900"
    }
  ]
  return (
    <div>
    
    <Video />
    <h2 className="text-4xl font-semibold mt-10 px-20 pt-10">
    Featured
  </h2>
    <div className="flex flex-wrap pt-10">
     {Users.map((elem, idx) => (
    
    <Section2Pics 
    img={elem.img} 
    key = {idx}
    className="w-1/2 h-1/2 "    />
      ))}
    </div>
    
    
    </div>
  )
}

export default Section2
