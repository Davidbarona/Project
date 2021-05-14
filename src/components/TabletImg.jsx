import React from 'react'
import tablet from '../multimedia/Img/Desktop/landing_pro2_desktop_inteligencia_artificial.jpg'
import tabletMobile from '../multimedia/Img/Mobile/landing_pro2_mobile_inteligencia_artificial.jpg'
import '../Css/TabletImg.css'

const TabletImg = () => {
    return (
        <div className='Main_Container_AI'>

            <div className='Container_Tittle_Tableimg'>
                <p className='Tittle_Tableimg'>¡TABLET PARA NIÑOS CON <b>SUPERPODERES</b>! </p>
            </div>
            <div className='Container_Img_AI'>
                <div className='Container_AI'>
                    <img className='AI_SVG'
                        src={require('../multimedia/Icons/icon_cyberbullying_landing.svg').default}
                        alt='mySvgImage' />
                    <h2 className='Text_AI_SVG' >Software de Inteligencia artificial</h2>
                </div>
                <div className='Container_Img_AI_Tablet'>
                    <img className='Tablet_Img' src={tablet} alt="image not found :( " />
                </div>
                <div className='Container_Img_AI_Tablet_Mobile'>
                    <img className='Tablet_Img' src={tabletMobile} alt="image not found :( " />
                </div>

            </div>
            <div className='Container_Text_Description_Button_TableImg'>

                <div className='Container_Tittle_Text_Tablet_Img'>
                    <h2 className='Tittle_Tablet_Img'>MÁS ALMACENAMIENTO, MÁS DIVERSIÓN </h2>
                    <p className='Text_Tablet_Img'>64 GB en almacenamiento</p>
                </div>

                <div className='Container_Button_Tablet_Img'>
                    <button className='Booking_Now_1'>
                        <div className='Text_Button_Booking_Now'>

                            RESERVAR AHORA
                </div>
                        <img className='Tablet_Img_Icon_Svg'
                            src={require('../multimedia/Icons/reserva_mas.svg').default}
                            alt='mySvgImage' />
                    </button>
                </div>
            </div>




        </div>
    )
}

export default TabletImg