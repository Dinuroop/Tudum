import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleContent from '../../components/SingleContent/SingleContent';
import './Profile.css'
export default function Profile() {
  const [content,setContent] = useState([]);
  useEffect(async() => {
    const email = localStorage.getItem('email');
    try{
      console.log("trying");
      console.log(email)
      if(email){
      await axios.get(`https://tudum.onrender.com/api/user/liked/${email}`)
      .then((res)=>{
        console.log(res.data)
        setContent(res.data.movies)
        console.log(content)
      });
      }
    }catch(error){
      console.log(error)
    }
  }, [])
  return (
    <div>
      <span className="pageTitle">WatchList</span>
      <div className="watchlist">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
    </div>
  )
}
