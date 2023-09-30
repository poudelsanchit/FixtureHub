import React from 'react'
import { BsArrowBarLeft, BsFillCircleFill } from 'react-icons/bs'
import { FaChevronDown } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
import {LeagueData} from '../Data/Leagues.jsx'
const Sidebar = ({isOpen,setIsOpen}) => {
    const navigate= useNavigate();
    const navigateToLeague= (id) =>{
        navigate(`/football/:${id }`)
    }
 
  return (
<>

                             
{isOpen ?
                    <div className=' transition-all duration-1000  absolute flex flex-col gap-5 rounded-r-2xl left-0 h-screen w-2/3 sm:w-3/12 top-0 z-50 dark:bg-sidebar-bg  bg-[#ffffff]  '>

                        <div className='flex justify-between'>
                            <div className='flex flex-row gap-2 text-[0.6rem] mt-5 ml-3 text-[#2a2c30]'>
                                <BsFillCircleFill color='#FF0000'/>
                                <BsFillCircleFill color='#fdbd1f'/>
                                <BsFillCircleFill color='#4dea32'/>
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
                                        <div className='flex flex-col' >
                                             <div className={isActive ? 'py-2 px-2 flex items-center gap-2 bg-[#2d2f32] rounded-md text-[#e7e1e1]' : "py-2 px-1 flex items-center gap-2 "}  onClick={()=>setIsOpen((value)=>false)}>
                                            <div className='w-4 h-4 bg-[#afd3ac] rounded-sm ' />
                                            <div className='font-semibold font-Roboto'>Football</div>
                                            
                                        </div>
                        {LeagueData.map(
                            ({LeagueId,Image,LeagueName})=>
                            {
                                return <>
                                <div >
                                <NavLink to={`/football/:${LeagueId}`} onClick={() => setIsOpen((value) => false)} >
                                        <div className='px-6 py-2 flex gap-2 items-center'>
                                            <div className='w-5'>
                                                <img src={Image} alt="" />
                                                </div>
                                            <div className='font-roboto'>{LeagueName}</div>
                                        </div>
                                        </NavLink>
                                </div>
                                  
                                </>
                            }
                            )
                        }
                                       

                                        </div>

                                       
                                    )}

                                </NavLink >
                                <NavLink to='basketball/'>
                                    {({ isActive, isPending }) => (

                                        <div className={isActive ? 'py-2 px-2 flex items-center gap-2 bg-[#2d2f32] rounded-md text-[#e7e1e1]' : "py-2 px-1 flex items-center gap-2"} onClick={()=>setIsOpen((value)=>false)}>
                                            <div className='w-4 h-4 bg-[#b797fc] rounded-sm'  />
                                            Basketball
                                        </div>
                                    )}

                                </NavLink>
                                <NavLink to='/cricket'>

                                    {({ isActive, isPending }) => (

                                        <div className={isActive ? 'py-2 px-2 flex items-center gap-2 bg-[#2d2f32] rounded-md text-[#e7e1e1]' : "py-2 px-1 flex items-center gap-2"}  onClick={()=>setIsOpen((value)=>false)}>
                                            <div className='w-4 h-4 bg-[#a7c3dd] rounded-sm' />
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
</>    
  )
}

export default Sidebar