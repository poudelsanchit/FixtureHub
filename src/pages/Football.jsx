import React from 'react'
import PremierLeague from '../assets/premier.png'
import PremierLeagueLight from '../assets/pllight.jpg'

import Spain  from './test.json'
import Laliga from '../assets/laliga.png'
import SerieA from '../assets/serie.png'
import Goats from '../assets/goat.jpg'
import Bundesliga from '../assets/bundesliga.jpg'
import { BsChevronRight } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FootballLottie from "../assets/football.json";
import axios from 'axios'
import Lottie from 'lottie-react'
const Football = () => {
    const Prom = [
        {
            promotion: 'UEFA Champions League Group Stage',
            color: `w-2 h-2 bg-[#6e57e0] rounded-sm`,
        },
        {
            promotion: 'Europa League Group Stage',
            color: `w-2 h-2 bg-[#FFA500] rounded-sm`,

        },
        {
            promotion:'Relegation',
            color: `w-2 h-2 bg-[#FF0000] rounded-sm`,
    
        },
    ]
    
    const navigate = useNavigate();
    const navigateToLeague= (id) =>{
        navigate(`/football/:${id }`)
    }
 
    const [isloaded, setIsLoaded] = useState(false);
    const [teams, setTeams] = useState([]);
    const [DummyData, setDummyData] = useState([]);
    const [laliga, setLaliga] = useState([]);
    const [seriea, setSerieA] = useState([]);
    const [bundesliga, setBundesliga] = useState([]);


    const fetchTable = async () => {
        setDummyData(Spain);
        //premier league
        const teams = await axios.get(`https://apiv3.apifootball.com/?action=get_standings&league_id=152&APIkey=a875bbb5a424ceba7ec9c22e5f5e093a512f103a27f00d5b053859fcf0d9f94b`);
        setTeams(teams.data);
        //laliga
        const laliga = await axios.get(`https://apiv3.apifootball.com/?action=get_standings&league_id=302&APIkey=a875bbb5a424ceba7ec9c22e5f5e093a512f103a27f00d5b053859fcf0d9f94b`);
        setLaliga(laliga.data);
        //Serie A
          const seriea = await axios.get(`https://apiv3.apifootball.com/?action=get_standings&league_id=207&APIkey=a875bbb5a424ceba7ec9c22e5f5e093a512f103a27f00d5b053859fcf0d9f94b`);
          setSerieA(seriea.data);
          setIsLoaded(true);
        //bundesliga
        const bundesliga = await axios.get(`https://apiv3.apifootball.com/?action=get_standings&league_id=175&APIkey=a875bbb5a424ceba7ec9c22e5f5e093a512f103a27f00d5b053859fcf0d9f94b`);
        setBundesliga(bundesliga.data);
     

    }
    useEffect(() => {
        fetchTable();
    }, []);
    const Leagues = [
        {
            Image: PremierLeague,
            LeagueName: 'Premier League',
            LeagueCountry: 'England',
            LeagueCode: teams,
            LeagueId: '152',
        },
        {
            Image: Laliga,
            LeagueName: 'Laliga',
            LeagueCountry: 'Spain',
            LeagueCode: laliga,
            LeagueId: '302',

        },
        {
            Image: SerieA,
            LeagueName: 'Serie A',
            LeagueCountry: 'Italy',
            LeagueCode: seriea,
            LeagueId: '207',

        },
        {
            Image: Bundesliga,
            LeagueName: 'Bundesliga',
            LeagueCountry: 'Germany',
            LeagueCode: bundesliga,
            LeagueId: '175',

        }
    ];
   

    return (
        <>
        <div className='flex flex-col items-center '>
         
            <div className=' h-48  w-[95%] lg:w-2/4 mt-2 rounded-lg  sm:mt-5  '>
                    <img src={Goats} alt=""  className='object-cover h-full w-full rounded-lg  '/>
                    
            </div>
            {/* <Lottie animationData={FootballLottie} className='h-48  w-[95%] lg:w-2/4'/> */}
           <div className='dark:text-primary-text text-primary-light w-full md:w-2/4 font-Montserrat font-semibold text-2xl mt-5 px-3'>Standings
           <div className='m-0 h-[0.1rem] w-full bg-button'></div>
           </div> 
            <div className='dark:bg-dark-bg bg-[#ffffff]  shadow-2xl  text-primary-text  flex flex-col items-center w-full lg:w-2/4 mt-0 sm:mt-5 mb-5 rounded-lg '>
                
               
            {
                    isloaded ? <>
                        {
                            Leagues.map(({ Image, LeagueName, LeagueCountry, LeagueCode,LeagueId }) => {
                                return <>
                                    <div className=' p-3  w-full  border-b-2 dark:border-dark-bg border-[#e5e7eb] '>
                                        {/* Header   */}
                                        <div className='flex justify-between pb-3'>
                                            <div className='text-lg font-Chakra flex gap-2'>

                                                <div className='w-9 flex items-center'>
                                                    
                                                    <img src={Image} alt="" />
                                                </div>
                                                <div> <p className='font-bold dark:text-primary-text text-primary-light'>{LeagueName}</p>
                                                    <p className='text-sm text-secondary-text'>{LeagueCountry}</p>
                                                </div>
                                            </div>
                                            <div className='  bg-button hover:bg-button-hover flex items-center justify-center text-2xl cursor-pointer w-7 h-7 rounded-md hover:bg-dark-bg' onClick={e=>navigateToLeague(LeagueId)}>
                                                <BsChevronRight />
                                            </div>
                                        </div>
                                        <div className='dark:bg-navbar-bg bg-[#ffffff] text-[#000000] dark:text-[#ffffff] rounded-md flex'>

                                            <table className='w-full'>

                                                <tbody className='border-1 font-bold'>
                                                    <tr>
                                                        <td> </td>
                                                        <td>Team</td>
                                                        <td className='p-0 w-10 '>MP</td>
                                                        <td className='p-0 w-10 '>W</td>
                                                        <td className='p-0 w-10 '>D</td>
                                                        <td className='p-0 w-10 '>L</td>
                                                        <td className='p-0 w-10 hidden md:table-cell	'>GF</td>
                                                        <td className='p-0 w-10 hidden md:table-cell	'>GA</td>
                                                        <td className='p-0 w-10 hidden md:table-cell	'>GD</td>
                                                        <td className='p-0 w-10 '>Pts</td>
                                                        

                                                    </tr>

                                                </tbody>
                                                {
                                                    LeagueCode.slice(0, 5).map(({  team_name, overall_league_payed, overall_league_W, overall_league_D, overall_league_L, overall_promotion, overall_league_GA, overall_league_PTS,overall_league_GF,team_badge }) => {
                                                        return <>
                                                            <tbody>

                                                                <tr className='h-10'>
                                                                    <td>
                                                                         <div className={overall_promotion !== "Promotion - Champions League (Group Stage: )" ? 'w-[1px] h-11 bg-[#FFA500]' : 'w-[1px] h-11 bg-button'}>
                                                                         </div>
                                                                    </td>
                                                                    <td >    
                                                                        <div className='flex items-center gap-3'>
                                                                             <img src={team_badge} alt=""  className='h-7'/>
                                                                             <div>{team_name}</div>
                                                                        </div>
                                                   
                                                                     </td>
                                                                


                                                                    <td >{overall_league_payed}</td>
                                                                    <td >{overall_league_W}</td>
                                                                    <td >{overall_league_D}</td>
                                                                    <td >{overall_league_L}</td>
                                                                    <td className='hidden md:table-cell	' >{overall_league_GF}</td>
                                                                    <td className='hidden md:table-cell	' >{overall_league_GA}</td>
                                                                    <td className='hidden md:table-cell	' >{overall_league_GF-overall_league_GA}
                                                                    </td>
                                                                    <td >{overall_league_PTS}</td>
                                                            
                                                                </tr>
                                                            </tbody >
                                                        </>
                                                    })
                                                }

                                            </table>
                                        </div>
                                    </div >

                                </>

                            }
                            )
                        }
                    </>
                        : <div className='h-screen'>Loading....</div>
                } 
            </div >
          
            <div className='flex flex-col w-full sm:w-2/4 px-3 '>
            {
                Prom.map(({promotion,color})=>
                { return <>
                
                <div className='flex flex-row items-center gap-2 dark:text-primary-text text-primary-light font-Chakra '>
                    <div  className={ color}  ></div>
                    <div>{promotion} </div>
                </div>
                </>
                }
               )
            }       
                </div>
            </div >
        </>
    )
}

export default Football