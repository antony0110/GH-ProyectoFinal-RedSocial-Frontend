
import React from 'react';
import './UserInfo.scss';
import foto3 from './foto3.jpg'
import {TeamOutlined} from '@ant-design/icons';
import {ScheduleOutlined} from '@ant-design/icons';
import {MessageOutlined} from '@ant-design/icons';
import {connect} from 'react-redux'
 import { addProfilePhoto } from '../../redux/action'; 



const Perfil = (props) => {
 const image = `http://localhost:8000/images/users/${props.user?.imagen}`;  
 const handle = event => {
     event.preventDefault();
    const formData = new FormData();

            formData.set('img', event.target.img.files[0]);
            addProfilePhoto(formData) 
} 
    return (
        <div className="contenedor">
             <form action="" onSubmit={handle}>
                  <input type="file" name="img" id="file" class="input-file"/>
                  <input className="input" type="submit" value="add review" />
            </form> 
            <div className='profile' >
                <div className='perfiles'>
                    <div className='UserFto'   >
                    <img src={image} className='fto1' alt="" />
                    </div>
                </div>
            </div>
            <div className='inf'>
                <div className='nombre' >
                    <p className='names'>{props.user?.NombreCompleto}</p>
                    <p className='titulo'  >Desarrolador full stack developer</p>
                </div>
            </div>
            <div className= 'cuadro' >
            <div className='todainfo' >
            <div className='inf2'>
                <div class="Links">
                   <TeamOutlined />
                   <ScheduleOutlined />
                   <MessageOutlined />
        
                </div>
                </div>
            <div className='inf3'>
                <div class="Links">
                    <a href="#Friends">Friends</a>
                    <a href="#Following">Following</a>
                    <a href="#Message">Message</a>
                </div>
                </div>
            </div>
            </div>
            <div className="fotosUsers">
                {/* <div className='fotosUser' > */}
                <img src={foto3} /> 
                <img src={foto3} alt=""/>
                <img src={foto3} alt=""/>
                <img src={foto3} alt=""/>
                {/* </div> */}
            </div>
        </div>

    )
}

const mapStateToProps = (state) => ({user: state?.user })
export default connect(mapStateToProps)(Perfil);