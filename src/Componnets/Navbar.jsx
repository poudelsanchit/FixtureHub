import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { BsMoonFill, BsSun } from 'react-icons/bs';
import { BsSunFill } from 'react-icons/bs';
import { CgMenuLeft, CgArrowDown } from 'react-icons/cg';
import { IoCloseOutline } from 'react-icons/io5';
import { BsFillCircleFill, BsArrowBarLeft } from 'react-icons/bs'
import { FaChevronDown } from 'react-icons/fa'
import { BiFootball, BiBaseball, BiCricketBall } from 'react-icons/bi';

import { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
const Navbar = ({setIsOpe}) => {
    const navigate= useNavigate();
    let menuRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    const handleThemeSwitcher = () => {
        const html = document.querySelector('html');
        if (theme === 'light') {
            setTheme('dark');
            html.classList.add('dark');
        }
        else {
            html.classList.remove('dark');
            setTheme('light')
        }
       console.log(theme) 

    }
    useEffect(()=>{
            localStorage.setItem('theme',theme);
    },[theme])
    useEffect(() => {
        const html = document.querySelector('html');
        html.classList.add('dark');
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsOpen(false);
                console.log(menuRef.current);
            }
        };
        document.addEventListener("mousedown", handler);
    }, [])
    var i=0;
const navigateToHome=()=>{
    navigate('/');
}
useEffect(()=>{
        setIsOpen(isOpen)


},[isOpen])
    return (
        <div className=' text-primary-text  bg-bg-light dark:bg-navbar-bg pt-3 pb-3 top-0 sticky z-99999 shadow-2xl z-50' >
            <div className="flex justify-start gap-5" ref={menuRef}>
                {/* Menu */}
                <div className='text-xl relative flex justify-center items-center ml-3 p-1  border-2 border-[#282828] rounded-lg' onClick={() => setIsOpen((value) => true)}>
                    <div  className='cursor-pointer text-dark-bg dark:text-primary-text'>
                        <CgMenuLeft />
                    </div>
                    <div className='bg-[#FF0000] w-2 h-2 absolute rounded-lg -top-0.5 -right-0.5' />

                </div>
                <div className="text-xl font-Chakra font-semibold cursor-pointer text-primary-light dark:text-primary-text" onClick={navigateToHome}>
                    FixtureHub
                </div>
                
              <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>

                {/* <div className=" text-xl gap-16 pt-2 hidden">

                    <NavLink to={'/'}>
                        <div className='flex justify-center items-center gap-2'>
                            <BiFootball />
                            <div>Football</div>
                        </div>
                    </NavLink>
                    <NavLink to={'/basketball'}>
                        <div className='flex justify-center items-center gap-2'>
                            <BiBaseball />
                            <div>Basketball</div>
                        </div>
                    </NavLink>
                    <NavLink to={'/cricket'}>
                        <div className='flex justify-center items-center gap-2'>
                            < BiCricketBall />
                            <div>Cricket</div>
                        </div>
                    </NavLink>

                </div> */}
                {/* <div className='text-2xl pt-2 font-extrabold text-button'>
                    <FiUser />
                </div> */}
                <button onClick={handleThemeSwitcher} className='p-1  bg-button hover:bg-button-hover absolute top-3 right-8 rounded-md md:right-5 lg:right-10'>
                    {
                        theme == 'light' ? <BsSunFill />
                            :  <BsMoonFill />

                    }
                </button>
            </div>
        </div >
    )
}

export default Navbar