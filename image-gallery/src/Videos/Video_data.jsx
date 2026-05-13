import React from 'react'
import { useState, useEffect } from 'react';

const Video_data = ({videos, setIdx, setVideos}) => {

 const [videoUrls, setVideoUrls] = useState({});

 useEffect(() => {
  fetch("https://images-api.nasa.gov/search?q=earth&media_type=video")
   .then(res => res.json())
   .then(res => setVideos(res.collection.items));
 }, []);

 const getVideoLink = async (href, index) => {
    if (videoUrls[index]) return; // already fetched

    const res = await fetch(href);
    const data = await res.json();

    // mp4 find 
    const mp4 = data.find(item => item.includes(".mp4"));

    setVideoUrls(prev => ({
      ...prev,
      [index]: mp4
    }));
  };

   useEffect(() => {
    if (videos.length === 0) return;

    videos.forEach((video, index) => {
      getVideoLink(video.href, index);
    });

  }, [videos]);

 console.log(videos[0]?.href);
 return (
  <div className="photo">
   {videos.map((video, index) => (
        <div id='video' key={index} style={{ marginBottom: "20px" }}>
          {videoUrls[index] && (
            <video width="400" controls>
              <source src={videoUrls[index]} type="video/mp4" />
            </video>
          )}
        </div>
      ))}
  </div>
 )
}

export default Video_data
