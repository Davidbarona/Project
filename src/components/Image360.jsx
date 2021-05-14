import React from 'react'
import Video from '../multimedia/Videos/Tablet Pro 2_0-giro 360_web_LOW.mp4'
import '../Css/Image360.css' 


const Image360 = () => {
    const videoSrc = Video
    return (
        <div className='Container_Img360'>
            <div className='Container_Video_Img360'>
            <video className ='Video_Img360' autoPlay  muted loop >
                <source src={videoSrc}
                type='video/mp4'/>
            </video>
            </div>
            
            <div className='Container_Features_360'>
                <h1 className='Tittle_Main_360'> PRECIO PREVENTA</h1>
                <h2 className='Price_After'>$159.990</h2>
                <div className='Price_Before'>
                <p className='Tittle_price_Before'>Precio Lanzamiento:</p> 
                <p className='Price_Before_Value'> $199.990</p>
                </div>
                <p className='Dispatch_Img_360'>*Despachos a partir de 8 de Junio</p>
                <button className='Booking_Now'>RESERVA AHORA</button>
                
                </div>
                
        </div>
    )
}

export default Image360