import React, { useState, useEffect } from 'react'
import './App.css'
import Data_fetch from './Image/Data_fetch'
import ShowImage from './Image/ShowImage'
import Video_data from './Videos/Video_data'
const App = () => {

  let [type, setType] = useState('photos')

  const typeOfData = (e) => {
    const value = e.target.innerText.toLowerCase();
    setType(value);
  }

  const [images, setImages] = useState([]);
  const [idx, setIdx] = useState(null);
  const [videos, setVideos] = useState([])
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?limit=30')
      .then(res => res.json())
      .then(res => setImages(res));
  }, []);


  return (
    <div id='container' className='app'>

      <nav>
        <div id='left-nav'>
          <div className='menu-icon'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h2>Gallery</h2>
        </div>
        <span>&#8942;</span>
      </nav>
      <hr />

      <section>
        <h3 onClick={typeOfData}>Photos</h3>
        <h3 onClick={typeOfData}>Videos</h3>
        <h3 onClick={typeOfData}>Albums</h3>
      </section>

      {type === "photos" && <Data_fetch images={images} setIdx={setIdx}/>}
      {type === "videos" && <Video_data videos={videos} setVideos={setVideos} setIdx={setIdx} />}
      {type === "albums" && <Data_fetch />}
      {idx!==null && type=='photos' && <ShowImage images={images} idx={idx} setIdx={setIdx}/>}
      {/* {idx!==null && type=='albums' && <ShowImage albums={images} idx={idx} setIdx={setIdx}/>} */}

    </div>

  )
}

export default App