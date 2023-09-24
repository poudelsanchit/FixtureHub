import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BsChevronLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import PremierLeague from '../assets/plwhite.png'
import Laliga from '../assets/laliga.png'
import SerieA from '../assets/serie.png'
import Bundesliga from '../assets/bundesliga.png'

const SingleStandings = ({isOpen}) => {
    const[togglePage,setTogglePage]= useState(1);
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);
    const Prom = [
        {
            promotion: 'UEFA Champions League Group Stage',
            color: `w-2 h-2 bg-[#6e57e0] rounded-sm`,
        },
        {
            promotion: 'Europa League Group Stage',
            color: `w-2 h-2 bg-[#FFA500] rounded-sm`,

        }

    ]
    const { leagueid } = useParams();
    const [LeagueId,setLeagueId]= useState(leagueid.substr(1, leagueid.length - 1));
    const [teams, setTeams] = useState([]);
    const fetchTable = async () => {
        const team = await axios.get(`https://apiv3.apifootball.com/?action=get_standings&league_id=${LeagueId}&APIkey=a875bbb5a424ceba7ec9c22e5f5e093a512f103a27f00d5b053859fcf0d9f94b`);
        setTeams(team.data);
        setIsLoaded(true);
    }
    useEffect(() => {
        fetchTable();
    }, [    LeagueId]);
    useEffect(()=>{
        setLeagueId(leagueid.substr(1, leagueid.length - 1))
    },[isOpen])
    return (
        <>
     
            {isLoaded ? <div className='w-full flex flex-col items-center justify-center bg-dark-bg '>

                <div className=' p-3  md:w-3/5 w-full  border-b-2 border-dark-bg text-primary-text'>
                    {/* Header   */}
                  
                    <div className='flex pb-3 items-center gap-5'>
                    <div className='text-primary-text text-lg p-1  bg-button hover:bg-button-hover rounded-md cursor-pointer ' onClick={()=> navigate('/')}>
                            <BsChevronLeft />
                        </div>
                        <div className='text-lg font-Chakra flex gap-2'>

                            <div className='w-8 flex items-center'>
                                <img src= {LeagueId === '152' ? PremierLeague: LeagueId=== '302'? Laliga:LeagueId=== '207' ? SerieA: LeagueId=== '175'? Bundesliga:null } alt="" />
                            </div>
                            <div> 
                                <p className='font-bold'>
                                {LeagueId === '152' ? 'Premier League': LeagueId=== '302'? 'Laliga':LeagueId=== '207' ? 'Serie A': LeagueId=== '175'? 'Bundesliga':null }
                                </p>
                                <p className='text-sm text-secondary-text'>{LeagueId === '152' ? 'England': LeagueId=== '302'? 'Spain':LeagueId=== '207' ? 'Italy': LeagueId=== '175'? 'Germany':null }</p>
                            </div>
                        </div>
                      
                    </div>
                    <div className='bg-navbar-bg rounded-ss-md  rounded-se-md flex flex-col text-xs sm:text-base'>
                    <div className='flex flex-row border-b-[2px] border-secondary-bg '>
                            <div className={togglePage===1?'w-[50%] flex justify-center py-2 active cursor-pointer rounded-ss-md':'w-[50%] flex justify-center py-2 cursor-pointer'} onClick={()=>setTogglePage(1)}>Standings</div>
                            <div className={togglePage===2?'w-[50%] flex justify-center py-2 active cursor-pointer rounded-se-md':'w-[50%] flex justify-center py-2 cursor-pointer'}   onClick={()=>setTogglePage(2)}>Stats</div>
                        </div>
                        {
                            togglePage===1?<table className='w-full'>

                            <tbody className='font-bold border-b-[0.1px] border-secondary-bg mb-2 h-10'>
                                <tr>
                                    <td> </td>
                                    <td>Rank</td>

                                    <td>Club</td>
                                    <td className='p-0 w-10'>MP</td>
                                    <td className='p-0 w-10'>W</td>
                                    <td className='p-0 w-10'>D</td>
                                    <td className='p-0 w-10'>L</td>
                                    <td className='p-0 w-10'>GF</td>
                                    <td className='p-0 w-10'>GA</td>
                                    <td className='p-0 w-10'>GD</td>
                                    <td className='p-0 w-10'>Pts</td>
                                </tr>

                            </tbody>
                            {
                                teams.map(({ overall_league_position, team_name, overall_league_payed, overall_league_W, overall_league_D, overall_league_L, overall_promotion, overall_league_GF, overall_league_GA, overall_league_PTS }) => {
                                    return <>
                                        <tbody >

                                            <tr className='h-10'>

                                                <td>
                                                    <div className={overall_promotion == "Promotion - Champions League (Group Stage: )" ? 'w-[1px] h-11 bg-button' : overall_promotion == 'Promotion - Europa League (Group Stage: )' ? 'w-[1px] h-11 bg-[#FFA500]' : overall_league_position <= 18 ? '' : 'w-[1px] h-11 bg-[#FF0000]'}></div>
                                                </td>
                                                <td className='w-12'>{overall_league_position}</td>

                                                <td >{team_name}</td>
                                                <td >{overall_league_payed}</td>
                                                <td >{overall_league_W}</td>
                                                <td >{overall_league_D}</td>
                                                <td >{overall_league_L}</td>
                                                <td >{overall_league_GF}</td>
                                                <td >{overall_league_GA}</td>
                                                <td >{overall_league_GF - overall_league_GA}</td>

                                                <td >{overall_league_PTS}</td>
                                            </tr>
                                        </tbody >
                                    </>
                                })
                            }

                        </table>
                        :
                           <table className='w-full'>
                          
                          <tbody className='font-bold border-b-[0.1px] border-secondary-bg mb-2 h-10'>
                                <tr>
                                    <td className='p-0 w-1'> </td>
                                    <td className='p-0 w-10'>Player</td>
                                    <td className='p-0 w-10'>Goals</td>


                                   
                                </tr>

                            </tbody>
                               <tbody >

                                            <tr className='h-10'>
                                            <td>
                                                  1
                                                </td>
                                                <td>
                                                  Halland
                                                </td>
                                                <td className='w-12'>2</td>

                                                

                                            </tr>
                                        </tbody >
                          </table>
                        }
                        
                     
                    </div>
                </div >
                <div className='flex flex-col w-full sm:w-2/4 px-3'>
                    {
                        Prom.map(({ promotion, color }) => {
                            return <>

                                <div className='flex flex-row items-center gap-2 text-primary-text font-Chakra '>
                                    <div className={color}  ></div>
                                    <div>{promotion} </div>
                                </div>
                            </>
                        }


                        )
                    }


                </div>
            </div>
                : <div className='h-screen text-primary-text flex justify-center w-full sm:w-3/5 pt-5  '>Loading....</div>

            }

        </>




    )
}

export default SingleStandings