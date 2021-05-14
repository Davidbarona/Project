import React from 'react'
import Banner from '../multimedia/Videos/BannerDesk.mp4'
import '../Css/MainVideo.css'


const MainVideo = () =>{
   
    const videoSrc = Banner  
    return (
        <div className='Container_Video_Banner'>
            <div className='Container_Only_Video'>
            <video className ='Video_Main' autoPlay  muted loop >
                <source src={videoSrc}
                type='video/mp4'/>
            </video>
            </div>
          
            <div className='Container_Tittle_Main'>
                <h1 className='Tittle_Main'>
                La Tablet más avanzada del mundo para niños</h1>
                </div>
                <div className='Container_Description_Main'>
                   <h3 className='Description_Main'>Con Funda extra resistente y sistema 
                       inteligente Antibullying</h3>
                </div>
         </div>
         
         
    )
}

export default  MainVideo