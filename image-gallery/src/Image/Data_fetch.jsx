import React from 'react'
import { useState, useEffect } from 'react';
import ShowImage from './ShowImage';

const Data_fetch = ({images, setIdx}) => {
//  const [images, setImages] = useState([]);
//  useEffect(() => {
//   fetch('https://picsum.photos/v2/list?limit=30')
//    .then(res => res.json())
//    .then(res => setImages(res))
//  }, []);

//  const [idx, setIdx] = useState(0);

  return (
  //  <div className='photo'>
  //   {images.map((a, idx) => (
  //    <div id='image' key={idx}>
  //     <img onClick={() => setIdx(idx)} src={a.download_url} alt={a.author} width="300" />
  //    </div>
  //   ))}

  //  <ShowImage idx={idx} setIdx={setIdx}/>
  //  </div>

  <div className="photo">
      {images.map((img, index) => (
        <img id='image'
          key={index}
          src={img.download_url}
          onClick={() => setIdx(index)}   
        />
      ))}
    </div>
  )
}

export default Data_fetch