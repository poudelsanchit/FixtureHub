import React from 'react'
import {FiGithub} from 'react-icons/fi'
const BottomNavBar = () => {
  return (
    <div className='bg-navbar-bg text-primary-text font-roboto h-14 flex items-center px-8 justify-around'>
        <a  href='https://github.com/poudelsanchit/FixtureHub' target='_blank'>
        <FiGithub className='text-lg cursor-pointer'/>

        </a>
     <div className='text-sm'>© 2023 - Sanchit Poudel</div>

    </div>
  )
}

export default BottomNavBar