import React from 'react'
import '../Css/YoutubeVideo.css'

const YoutubeVideo = () =>{

    return (
        <div className='Container_Yotube_Video'>
          <iframe className='Youtube_video' 
        src="https://www.youtube.com/embed/DNjzpHweOTk" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write;
         encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
               
        </div>
    )
}

export default YoutubeVideo