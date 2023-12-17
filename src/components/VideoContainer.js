import React, { useEffect, useState } from 'react'
import { VIDEO_API_DATA } from '../utils/constatnt'
import Card from './Card';
import { Link } from 'react-router-dom';

function VideoContainer() {

    const [ videos, setVideos]= useState([])

    async function fetchData(){
        let data = await fetch(VIDEO_API_DATA);
        let res = await data.json();
        setVideos(res.items)
       }

    useEffect( ()=>{
      fetchData()
    },[])

  return (
    <div className='flex flex-wrap justify-center align-middle xl:justify-start'>
      {
        videos.map((e, index) =>{
            return <Link key={index}  to={'/watch?v='+e.id}><Card info= {e}/></Link>
        })
      }
    </div>
  )
}


export default VideoContainer
