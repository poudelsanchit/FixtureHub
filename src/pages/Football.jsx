import React from 'react'
import PremierLeague from '../assets/plwhite.png'
import Laliga from '../assets/laliga.png'
import SerieA from '../assets/serie.png'
import Bundesliga from '../assets/bundesliga.png'
import { BsChevronRight } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Football = () => {
    const [isloaded, setIsLoaded] = useState(false);
    const [teams, setTeams] = useState([]);
    const [laliga, setLaliga] = useState([]);
    const [seriea, setSerieA] = useState([]);
    const [bundesliga, setBundesliga] = useState([]);


    const fetchTable = async () => {
        //premier league
        const teams = await axios.get(`https://apiv3.apifootball.com/?action=get_standings&league_id=152&APIkey=a875bbb5a424ceba7ec9c22e5f5e093a512f103a27f00d5b053859fcf0d9f94b`);
        setTeams(teams.data);
        //laliga
        const laliga = await axios.get(`https://apiv3.apifootball.com/?action=get_standings&league_id=302&APIkey=a875bbb5a424ceba7ec9c22e5f5e093a512f103a27f00d5b053859fcf0d9f94b`);
        setLaliga(laliga.data);
        //bundesliga
        const bundesliga = await axios.get(`https://apiv3.apifootball.com/?action=get_standings&league_id=175&APIkey=a875bbb5a424ceba7ec9c22e5f5e093a512f103a27f00d5b053859fcf0d9f94b`);
        setBundesliga(bundesliga.data);
        //Serie A
        const seriea = await axios.get(`https://apiv3.apifootball.com/?action=get_standings&league_id=207&APIkey=a875bbb5a424ceba7ec9c22e5f5e093a512f103a27f00d5b053859fcf0d9f94b`);
        setSerieA(seriea.data);
        setIsLoaded(true);

    }
    console.log(teams.slice(0, 5));
    useEffect(() => {
        fetchTable();
    }, []);
    const Leagues = [
        {
            Image: PremierLeague,
            LeagueName: 'Premier League',
            LeagueCountry: 'England',
            LeagueCode: teams,
        },
        {
            Image: Laliga,
            LeagueName: 'Laliga',
            LeagueCountry: 'Spain',
            LeagueCode: laliga,

        },
        {
            Image: SerieA,
            LeagueName: 'Serie A',
            LeagueCountry: 'Italy',
            LeagueCode: seriea,

        },
        {
            Image: Bundesliga,
            LeagueName: 'Bundesliga',
            LeagueCountry: 'Germany',
            LeagueCode: bundesliga,

        }
    ]
    return (
        <div className='bg-dark-bg text-primary-text'>
            {
                isloaded ? <>
                    {
                        Leagues.map(({ Image, LeagueName, LeagueCountry, LeagueCode }) => {
                            return <>
                                <div className=' p-3'>
                                    {/* Header   */}
                                    <div className='flex justify-between pb-3'>
                                        <div className='text-lg font-Chakra flex gap-2'>

                                            <div className='w-8 flex items-center'>
                                                <img src={Image} alt="" />
                                            </div>
                                            <div> <p className='font-bold'>{LeagueName}</p>
                                                <p className='text-sm text-secondary-text'>{LeagueCountry}</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center text-2xl'>
                                            <BsChevronRight />
                                        </div>
                                    </div>
                                    <div className='bg-navbar-bg rounded-md flex'>

                                        <table className='w-full'>

                                            <tbody className='border-1 font-bold'>
                                                <tr>
                                                    <td> </td>
                                                    <td>Team</td>
                                                    <td className='p-0 w-10'>MP</td>
                                                    <td className='p-0 w-10'>W</td>
                                                    <td className='p-0 w-10'>D</td>
                                                    <td className='p-0 w-10'>L</td>
                                                    <td className='p-0 w-10'>Pts</td>
                                                </tr>

                                            </tbody>
                                            {
                                                LeagueCode.slice(0, 5).map(({ overall_league_position, team_name, overall_league_payed, overall_league_W, overall_league_D, overall_league_L, overall_promotion, overall_league_GA, overall_league_PTS }) => {
                                                    return <>
                                                        <tbody>

                                                            <tr className='h-10'>
                                                                <td> <div className={overall_promotion !== "Promotion - Champions League (Group Stage: )" ? 'w-[1px] h-11 bg-[#FFA500]' : 'w-[1px] h-11 bg-button'}></div></td>
                                                                <td >{team_name}</td>
                                                                <td >{overall_league_payed}</td>
                                                                <td >{overall_league_W}</td>
                                                                <td >{overall_league_D}</td>
                                                                <td >{overall_league_L}</td>
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
            } </div >
    )
}

export default Football