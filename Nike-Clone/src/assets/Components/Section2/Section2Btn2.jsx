import React from 'react'
import {Play} from 'lucide-react'

const Section2Btn2 = () => {
  return (
    <div>
        <button className='bg-white rounded-full text-black items-center px-5 md:px-8 py-0.5 md:py-2 text-[15px] md:text-[20px] font-medium md:font-semibold flex gap-1 md:gap-2 hover:bg-gray-200'>Watch 
           <div className='py-0.5  w-fit inline-flex'> <Play className='md:w-5 e-2.5 w-4 md:h-6 ' /></div>
        </button>
    </div>
  )
}

export default Section2Btn2
