import React from 'react'
import cricket from '../assets/cricket.json'
import Lottie from 'lottie-react'

const Cricket = () => {



    return (
        <div className='flex-col dark:bg-dark-bg bg-[#f1f2f4] dark:text-primary-text text-primary-light h-screen flex items-center  font-Chakra text-4xl'>
            <Lottie animationData={cricket} className=' z-0 l:w-8/12 sm:w-6/12 lg:w-4/12  z-1' style={{}} />
            <div>
                Coming soon...
            </div>
        </div >
    )
}

export default Cricket