import React from 'react'
import BasketBall  from '../assets/basketball.json'
import Lottie from 'lottie-react'
import { useRef } from 'react'
import BasketBallTest from '../assets/basketballtest.svg'
const Basketball = () => {

    return (
        <div className='flex-col dark:bg-dark-bg bg-[#f1f2f4] dark:text-primary-text text-primary-light h-screen flex items-center  font-Chakra text-4xl'>
                       <Lottie   animationData={BasketBall} className=' z-0 l:w-8/12 sm:w-6/12 lg:w-4/12  z-1' style={{}}  />
                    



<div>            Coming soon... 
</div>
      </div >    )
}

export default Basketball