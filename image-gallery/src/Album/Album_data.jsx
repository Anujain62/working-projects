import React from 'react'
import { useState, useEffect } from 'react';
import Data_fetch from '../Image/Data_fetch';
import Video_data from '../Videos/Video_data';


const Album_data = ({ images = [], setIdx, setVideos = () => { }, videos = [] }) => {

 const [show, setShow] = useState("")

 return (

  <div className='album'>

   {show == "" && <div className='container'>
    <div className='al_image show'>
     <img onClick={() => setShow("photo")} src="image.png" />
     <h1 onClick={() => setShow("photo")}>Images</h1>
    </div>
    <div className='al_video show'>
     <img onClick={() => setShow("video")} src="video.png" />
     <h1 onClick={() => setShow("video")}>Videos</h1>
    </div>
   </div>}
   {show === "photo" && (
    <div>
     <button onClick={() => setShow("")}>Back</button>
     <Data_fetch images={images} setIdx={setIdx} />
    </div>
   )
   }
   {show === "video" && (
    <div>
     <button onClick={() => setShow("")}>Back</button>
     <Video_data videos={videos} setIdx={setIdx} setVideos={setVideos} />
    </div>
   )
   }
  </div>
 )
}

export default Album_data
