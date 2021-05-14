import React from 'react'
import TabletGamerImg from '../multimedia/Img/Desktop/landing_pro2_desktop_maximo_rendimiento.jpg'
import TabletGamerImgMobile from '../multimedia/Img/Mobile/landing_pro2_mobile_maximo_rendimiento.jpg'
import '../Css/TabletGamer.css'

const TabletGamer = () => {
    return (
        <div className='Container_TabletGamer'>
            <div className='Container_TabletGamer_SVG_Text'>
                <h2 className='TabletGamer_Text'>Máximo rendimiento, ¡Diversión a
                la velocidad de la luz y en alta
                calidad!</h2>
                <img className='SVG_TabletGamerIcon'
                    src={require('../multimedia/Icons/icon_rendimiento_landing.svg').default}
                    alt='mySvgImage' />
            </div>
            <div className='Container_Img_Tablet_Gamer'>
            <img  className='Img_TabletGamer'
             src={TabletGamerImg} alt="image not found :( " />
            </div>
            <div className='Container_Img_Tablet_Gamer_Mobile'>
            <img  className='Img_TabletGamer'
             src={TabletGamerImgMobile} alt="image not found :( " />
            </div>
           
        </div>
    )
}

export default TabletGamer