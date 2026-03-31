import React from 'react'
import Section3HeroText from './Section3HeroText'
import Section3Shop from './Section3Shop'

const Section3 = () => {
    const images = [
        {
            img: 'https://images-static.nykaa.com/uploads/70703269-64eb-4db2-8aaf-1903753bab5b.png?tr=cm-pad_resize,w-225',
            text: "Air Jordan 1"
        },
         {
            img: 'https://images-static.nykaa.com/uploads/0d7f9cba-1d25-4e68-a880-42926a45276d.png?tr=cm-pad_resize,w-225',
            text: "Air Force 1"
        },
         {
            img: 'https://images-static.nykaa.com/uploads/2065d81f-6dca-41a7-a3b9-8033928b0bc5.png?tr=cm-pad_resize,w-225',
            text: "Graphic Tees"
        },
         {
            img: 'https://images-static.nykaa.com/uploads/cea497f0-0300-4b42-8800-815912e151e5.png?tr=cm-pad_resize,w-225',
            text: "Pegasus 41"
        },
         {
            img: 'https://images-static.nykaa.com/uploads/5cd340f4-c8bc-4c55-8fed-49a4fdd31414.png?tr=cm-pad_resize,w-225',
            text: "Tights"
        },
         {
            img: 'https://images-static.nykaa.com/uploads/29c73962-0dc0-4b75-9eac-3d10cf90ea43.png?tr=cm-pad_resize,w-225',
            text: "Metcon"
        },
        {
            img: 'https://images-static.nykaa.com/uploads/2951dbc2-e2af-4d0b-bda2-9065aa7d7282.png?tr=cm-pad_resize,w-225',
            text: "Jackets"
        },
        {
            img: 'https://images-static.nykaa.com/uploads/86dee53b-ebec-4520-bf53-0b0503bf9707.png?tr=cm-pad_resize,w-225',
            text: "Quest"
        },
        {
            img: 'https://images-static.nykaa.com/uploads/09cb6dcc-89ca-47ff-897d-4e4e485285e5.png?tr=cm-pad_resize,w-225',
            text: "Dunk"
        },
        {
            img: 'https://images-static.nykaa.com/uploads/b82593a5-dd23-4500-8a94-a561b8204c59.png?tr=cm-pad_resize,w-225',
            text: "Bottoms"
        },
        {
            img: 'https://images-static.nykaa.com/uploads/417a569f-a915-4a76-b9d1-6cd4e47c5cfe.png?tr=cm-pad_resize,w-225',
            text: "P-6000"
        },
        {
            img: 'https://images-static.nykaa.com/uploads/9695d31a-08eb-4cc7-9456-76d2e609e987.png?tr=cm-pad_resize,w-225',
            text: "Caps"
        },
        {
            img: 'https://images-static.nykaa.com/uploads/982e278e-7de1-446d-8a69-b040a3d451c3.png?tr=cm-pad_resize,w-225',
            text: "Air Max"
        },
        {
            img: 'https://images-static.nykaa.com/uploads/a88d4bb2-1c3c-48a0-b0e1-d4f137a98484.png?tr=cm-pad_resize,w-225',
            text: "Sports Bra"
        },
        {
            img: 'https://images-static.nykaa.com/uploads/cd867f04-eb2a-4022-920a-e63583e32477.png?tr=cm-pad_resize,w-225',
            text: "Court Vision"
        },
        {
            img: 'https://images-static.nykaa.com/uploads/6a59d536-6a77-485f-a6a3-492ac3e37c69.png?tr=cm-pad_resize,w-225',
            text: "Shorts"
        },
    ]
  return (
    <div>
      <Section3HeroText />
      <div  className='mt-10  md:pr-[18%] md:pl-[18%] pl-[5%] pr-[5%] flex flex-wrap  items-center justify-center '>
        {images.map((items, idx) => (
            <Section3Shop 
            key= {idx}
            imgs = {items.img}
            text = {items.text}
            className ='md:h-35 md:w-35 h-20 w-20 object-cover'
            />
        ))}
            </div>

    </div>
  )
}

export default Section3
