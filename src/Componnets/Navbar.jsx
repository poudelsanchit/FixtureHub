import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsMoonFill, BsSun } from 'react-icons/bs';
import { BsSunFill } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';

import { BiFootball, BiBaseball, BiCricketBall } from 'react-icons/bi';

import { useState, useEffect } from 'react';
const Navbar = () => {
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
    }, [])

    return (
        <div className=' text-primary-text bg-navbar-bg pt-3 pb-3 top-0 sticky z-99999'>
            <div className="flex justify-around ">
                <div className="text-xl font-Roboto">
                    Fixture Hub
                </div>
                <div className=" text-xl gap-16 pt-2 hidden">

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

                </div>
                {/* <div className='text-2xl pt-2 font-extrabold text-button'>
                    <FiUser />
                </div> */}
                <button onClick={handleThemeSwitcher} className='p-1  bg-button hover:bg-button-hover absolute top-5 right-8 rounded-md md:right-5 lg:right-10'>
                    {
                        theme == 'light' ? <BsMoonFill />
                            : <BsSunFill />

                    }
                </button>
            </div>
        </div>
    )
}

export default Navbar