import React from 'react'

import video1 from "../Components/Assets/video1.mp4"
import ram from "../Components/Assets/ram1.png"

const Main = () => {
  return (
    <div id='Book' >
       <div className='w-full h-[650px] overflow-y-hidden overflow-x-hidden  max-sm:hidden'>
          <video autoPlay muted loop className='w-full '>
            <source src={video1} type='video/mp4'/>
          </video>

          
       </div>
       <div className='sm:hidden'>
          <img src={ram}  alt='ram' className='mt-12'/>
       </div>
    </div>
  )
}

export default Main