import React from 'react'
import Video from './Video'
import Section2Pics from './Section2Pics'
import Section2Pics2 from './Section2Pics2'



const Section2 = () => {
  const Images = [
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

  const shop = [
    {
      Img : "https://images-static.nykaa.com/uploads/4db69a3a-ecd6-4dcd-9ecc-79bd252f4ea8.png?tr=cm-pad_resize,w-750",
      text : "Running"
    },
     {
      Img : "https://images-static.nykaa.com/uploads/26bd7a04-9f96-4ea4-aa56-0613eb384872.png?tr=cm-pad_resize,w-750",
      text : "Training"
    },
     {
      Img : "https://images-static.nykaa.com/uploads/1afff54a-c992-4ece-8b78-6aa6a54c9bba.png?tr=cm-pad_resize,w-750",
      text : "Sportswear"
    },
     {
      Img : "https://images-static.nykaa.com/uploads/00a6c246-c5d0-47dd-a453-8f416ff21b4b.png?tr=cm-pad_resize,w-750",
      text : "Cricket"
    },
     {
      Img : "https://images-static.nykaa.com/uploads/ff10cf39-ad05-4490-8030-720ba052f416.png?tr=cm-pad_resize,w-750",
      text : "Football"
    },
     {
      Img : "https://images-static.nykaa.com/uploads/70632942-b27a-4d03-bf14-8a9af65463e2.png?tr=cm-pad_resize,w-750",
      text : "Basketball"
    }

  ]

  return (
    <div>
    
    <Video />
    <h2 className="md:text-4xl text-2xl font-semibold md:mt-10 md:px-20 md:pt-10 mt-5 px-5 mb-2">
    Featured
  </h2>
    <div className="flex flex-wrap pt-10">
     {Images.map((elem, idx) => (
    
    <Section2Pics 
    img={elem.img} 
    key = {idx}
    className="w-1/2 h-1/2 "    />
      ))}
    </div>
  <p  className='md:text-3xl text:xl  md:py-10 py-5 md:pl-10 pl-5 font-semibold md:gap-10 gap5'> Shop by Sport</p>
    <div className='flex overflow-x-auto whitespace-nowrap'>
      
    {shop.map((item, idx) => (
      <Section2Pics2 
        key={idx}
        img={item.Img}
        text={item.text}
        
      />
    ))}
    </div>
    </div>
     
  )
}

export default Section2
