import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsMoonFill, BsSun } from 'react-icons/bs';
import { BsSunFill } from 'react-icons/bs';
import { CgMenuLeft, CgArrowDown } from 'react-icons/cg';
import { IoCloseOutline } from 'react-icons/io5';
import { BsFillCircleFill, BsArrowBarLeft } from 'react-icons/bs'
import { FaChevronDown } from 'react-icons/fa'
import { BiFootball, BiBaseball, BiCricketBall } from 'react-icons/bi';

import { useState, useEffect, useRef } from 'react';
const Navbar = () => {
    let menuRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState("dark");
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

    }
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

    return (
        <div className=' text-primary-text bg-navbar-bg pt-3 pb-3 top-0 sticky z-99999' >
            <div className="flex justify-start gap-5" ref={menuRef}>
                {/* Menu */}
                <div className='text-xl relative flex justify-center items-center ml-3 p-1  border-2 border-[#282828] rounded-lg'>
                    <div onClick={() => setIsOpen((value) => true)} className='cursor-pointer'>
                        <CgMenuLeft />
                    </div>
                    <div className='bg-[#FF0000] w-2 h-2 absolute rounded-lg -top-0.5 -right-0.5' />

                </div>
                <div className="text-xl font-Chakra font-semibold">
                    FixtureHub
                </div>
                {isOpen ?
                    <div className='transition-all ease-in-out absolute flex flex-col gap-5 rounded-r-2xl left-0 h-screen w-2/3 sm:w-1/6 top-0 z-50 bg-sidebar-bg  '>

                        <div className='flex justify-between'>
                            <div className='flex flex-row gap-2 text-[0.6rem] mt-5 ml-3 text-[#2a2c30]'>
                                <BsFillCircleFill />
                                <BsFillCircleFill />
                                <BsFillCircleFill />
                            </div>
                            <div onClick={() => setIsOpen((value) => false)} className='cursor-pointer'>
                                <BsArrowBarLeft className=' mt-5 mr-3 text-xl text-[#7c818a]' />
                            </div>
                        </div>
                        <div className='pl-6 '>
                            <div className='text-base font-Montserrat tracking-tight font-semibold flex items-center gap-2 '>
                                <FaChevronDown className='text-base ' />
                                Sports
                            </div>
                            <div className=' text-sm font-Montserrat tracking-tight text-[#7a818a] mr-4 mt-2'>
                                <NavLink to='/'>
                                    {({ isActive, isPending }) => (

                                        <div className={isActive ? 'py-2 px-2 flex items-center gap-2 bg-[#2d2f32] rounded-md text-[#e7e1e1]' : "py-2 px-1 flex items-center gap-2"}>
                                            <div className='w-3 h-3 bg-[#afd3ac] rounded-sm' />
                                            Football
                                        </div>
                                    )}

                                </NavLink >
                                <NavLink to='basketball/'>
                                    {({ isActive, isPending }) => (

                                        <div className={isActive ? 'py-2 px-2 flex items-center gap-2 bg-[#2d2f32] rounded-md text-[#e7e1e1]' : "py-2 px-1 flex items-center gap-2"}>
                                            <div className='w-3 h-3 bg-[#b797fc] rounded-sm' />
                                            Basketball
                                        </div>
                                    )}

                                </NavLink>
                                <NavLink to='/cricket'>

                                    {({ isActive, isPending }) => (

                                        <div className={isActive ? 'py-2 px-2 flex items-center gap-2 bg-[#2d2f32] rounded-md text-[#e7e1e1]' : "py-2 px-1 flex items-center gap-2"}>
                                            <div className='w-3 h-3 bg-[#a7c3dd] rounded-sm' />
                                            Cricket
                                        </div>
                                    )}

                                </NavLink>


                            </div>
                        </div>
                        {/* <div className=" hidden close-icon"><IoCloseOutline className='flex items-end text-2xl cursor-pointer md:hidden dark:text-primary' onClick={() => setIsOpen((value) => false)} /></div>
                        <NavLink className='pr-4 pl-4 hidden' to={'/'} onClick={() => setIsOpen((value) => false)}>Football</NavLink>
                        <NavLink className='pr-4 pl-4 hidden' to={'/basketball'} onClick={() => setIsOpen((value) => false)} >BasketBall</NavLink>
                        <NavLink className='pr-4 pl-4 hidden' to={'/cricket'} onClick={() => setIsOpen((value) => false)}> Cricket</NavLink> */}

                    </div>
                    :
                    null

                }

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
                        theme == 'light' ? <BsMoonFill />
                            : <BsSunFill />

                    }
                </button>
            </div>
        </div >
    )
}

export default Navbar