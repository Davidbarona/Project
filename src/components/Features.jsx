import React from 'react'
import '../Css/Features.css'


const Features = () => {
    return (
        <div>
            <div className='Container_Tittle_Features'>
                <h4 className='Tittle_Features' >Características</h4>
            </div>
            <div className='Big_Container_Features_SVG'>
                <div className='Container_Features_left'>
                    <div className='Container_Features_1'>
                        <img className='SVG_Icon_Features'
                            src={require('../multimedia/Icons/caracteristica_android_pro2.svg').default}
                            alt='mySvgImage' />
                        <div className='Container_Text_Features'>
                            ANDROID 10
                    </div>
                    </div>
                    <div className='Container_Features_2'>
                        <img className='SVG_Icon_Features'
                            src={require('../multimedia/Icons/caracteristica_memoria_pro2.svg').default}
                            alt='mySvgImage' />
                        <div className='Container_Text_Features'>
                            64 GB
                    </div>
                    </div>
                    <div className='Container_Features_1'>
                        <img className='SVG_Icon_Features'
                            src={require('../multimedia/Icons/caracteristica_cpu_pro2.svg').default}
                            alt='mySvgImage' />
                        <div className='Container_Text_Features'>
                            PROCESADOR T618 OCTACORE 2.0 GHz
                   </div>
                    </div>

                </div>
                <div className='Container_Features_right'>
                    <div className='Container_Features_2'>
                        <img className='SVG_Icon_Features'
                            src={require('../multimedia/Icons/caracteristica_ram_pro2.svg').default}
                            alt='mySvgImage' />
                        <div className='Container_Text_Features'>
                            4G RAM
                    </div>
                    </div>
                    <div className='Container_Features_1'>
                        <img className='SVG_Icon_Features'
                            src={require('../multimedia/Icons/caracteristica_pulgadas_pro2.svg').default}
                            alt='mySvgImage' />
                        <div className='Container_Text_Features'>
                            8 PULGADAS
                    </div>
                    </div>
                    <div className='Container_Features_2'>
                        <img className='SVG_Icon_Features'
                            src={require('../multimedia/Icons/caracteristica_bateria_pro2.svg').default}
                            alt='mySvgImage' />
                        <div className='Container_Text_Features'>
                            BATERIA DE 5000 MAH
                            </div>
                    </div>
                </div>
            </div>
            <div className='Features_Promotions'>
                <h2 className='Features_Promotions_Tittle1'>
                    ¡SÉ EL PRIMERO EN TENERLA!</h2>
                <h2 className='Features_Promotions_Tittle2'>
                    Y DISFRUTA SU PREVENTA</h2>
                <button className='Features_Promotions_button' >
                    RESERVA AHORA</button>
            </div>

        </div>
    )
}

export default Features 