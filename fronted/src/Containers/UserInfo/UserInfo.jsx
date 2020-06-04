import React from 'react';
import './UserInfo.scss';
import foto from './foto1.jpg'

const Perfil = () => {

    return (
        <div className="contenedor">
            <div className='profile' >
                <div className='perfil'>
                    <img src={foto} className='fto1' alt="" />
                </div>
            </div>
            <div className='inf'>
                <div className='nombre' >
                <p className='names'>ANTONY GOMEZ CARRASCO</p>

                </div>
            </div>
        </div>

    )
}
export default Perfil;