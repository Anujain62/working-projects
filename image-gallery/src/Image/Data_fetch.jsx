import React from 'react'
import { useState, useEffect } from 'react';
import ShowImage from './ShowImage';

const Data_fetch = ({images, setIdx}) => {
  return (
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