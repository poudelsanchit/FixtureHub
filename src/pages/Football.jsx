import React from 'react'
import PremierLeague from '../assets/premier.png'
import { BsChevronRight } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Football = () => {
    const [teams, setTeams] = useState([]);
    const fetchTable = async () => {
        const teams = await axios.get(`https://apiv3.apifootball.com/?action=get_standings&league_id=152&APIkey=a875bbb5a424ceba7ec9c22e5f5e093a512f103a27f00d5b053859fcf0d9f94b`);
        setTeams(teams.data);

    }
    console.log(teams.slice(0, 5));
    useEffect(() => {
        fetchTable();
    }, []);
    return (
        <div className='bg-dark-bg text-primary-text h-screen'>
            <div className=' p-3'>
                {/* Header */}
                <div className='flex justify-between'>
                    <div className='text-lg font-Chakra flex gap-2'>

                        <div className='w-8 flex items-center'>
                            <img src={PremierLeague} alt="" />
                        </div>
                        <div> <p>Premier League</p>
                            <p className='text-sm text-secondary-text'>England</p>
                        </div>

                    </div>
                    <div className='flex items-center text-2xl'>
                        <BsChevronRight />
                    </div>
                </div>

                {/* Standings */}
                <div className='bg-navbar-bg rounded-md flex'>

                    <table className='w-full'>

                        <tbody className='border-1 font-bold'>
                            <tr>
                                <td> </td>
                                <td>Team</td>
                                <td >MP</td>
                                <td>W</td>
                                <td>D</td>
                                <td  >L</td>
                                <td >Pts</td>
                            </tr>

                        </tbody>
                        {teams.slice(0, 5).map(({ overall_league_position, team_name, overall_league_payed, overall_league_W, overall_league_D, overall_league_L, overall_league_GF, overall_league_GA, overall_league_PTS }) => {
                            return <>
                                <tbody>

                                    <tr className='h-10'>
                                        <td> <div className='w-1 h-11 bg-button'></div></td>
                                        <td >{team_name}</td>
                                        <td >{overall_league_payed}</td>
                                        <td >{overall_league_W}</td>
                                        <td >{overall_league_D}</td>
                                        <td >{overall_league_L}</td>
                                        <td >{overall_league_PTS}</td>
                                    </tr>
                                </tbody>
                            </>
                        })}

                    </table>
                </div>

            </div>

        </div >
    )
}

export default Football