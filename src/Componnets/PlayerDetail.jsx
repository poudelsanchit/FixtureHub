import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PlayerDetail = ({id}) => {
    const [playerDetails,setPlayerDetails]= useState([]);
    const fetchPlayerDetail=async()=>{
        const playerDetail= await axios.get(`https://apiv3.apifootball.com/?action=get_players&player_id=${id}&APIkey=a875bbb5a424ceba7ec9c22e5f5e093a512f103a27f00d5b053859fcf0d9f94b`);
        setPlayerDetails(playerDetail.data)
    }
    useEffect(()=>{
        fetchPlayerDetail();
    },[])
  return (
    <>
       {playerDetails.slice(0,1).map(({player_image})=>{
        return <>
        <img src={player_image} alt="" className='h-10 w-10 rounded-full ' />
        </>
       })} 

    </>
  )
}

export default PlayerDetail