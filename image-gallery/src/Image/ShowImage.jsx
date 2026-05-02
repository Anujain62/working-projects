import React from 'react'
import { useState, useEffect } from 'react';

export const ShowImage = ({ images, idx, setIdx }) => {
 return (
  <div id="showImg">


   <button className="close-btn" onClick={() => setIdx(null)}>&#10005;</button>

   {images[idx] && (
    <img src={images[idx].download_url} width="600" />
   )}

   <div>

    <button onClick={() => idx !== 0 && setIdx(idx - 1)}>Back</button>

    <button onClick={() => idx < images.length - 1 && setIdx(idx + 1)}>
     Next
    </button>
   </div>

  </div>
 )
}


export default ShowImage