import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

export const Player = () => {

  const {id}=useParams();
  const navigate=useNavigate();

  const[apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGNmYjM2MGEzYWIzNDEwZmE2YmRhOTg0OTNmMWNkZiIsIm5iZiI6MTc0MzMzMDM5My4xMjEsInN1YiI6IjY3ZTkxYzU5YWY3NTJhM2IyNGY2ZTdjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qyvd4O8bFd67CoFgDIx9l7hbf8n-iuWkC-4oBmFOhS8'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));

  },[])




  return (
    <div className='player'>
        <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
        <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}title='trailer' frameBorder='0' allowFullScreen ></iframe>
        <div className="player-info">
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
    </div>
  )
}
