
import React ,{useEffect} from 'react';
import './UserInfo.scss';
import foto3 from './foto3.jpg'
import {TeamOutlined} from '@ant-design/icons';
import {ScheduleOutlined,CameraOutlined,MessageOutlined} from '@ant-design/icons';
import {connect} from 'react-redux'
import { addProfilePhoto, getUserInfo } from '../../redux/action'; 



const Perfil = (props) => {
const image = `http://localhost:8000/images/users/${props.user?.imagen}`;  
useEffect(() => {
    getUserInfo()
   },[]);
 const handle = event => {
     event.preventDefault();
    const formData = new FormData();

            formData.set('img', event.target.img.files[0]);
            addProfilePhoto(formData) 
            
} 

    return (
    

        <div className="contenedor">
            
                  
            <div className='profile' >
                <div className='perfiles'>
                    <div className='UserFto'   >
                    <img src={image} className='fto1' alt="" />
                    </div>
                </div>
            </div>
                    <div className="subirFoto">

                    <form  action="" onSubmit={handle}>
               
        <input type="file" className="desaparecer" name="img"  />
  
                <button type="submit" className="desaparecer"><svg class="bi bi-camera" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 5C7.343 5 5 6.343 5 8a4 4 0 0 1 4-4v1z"/>
  <path fill-rule="evenodd" d="M14.333 3h-2.015A5.97 5.97 0 0 0 9 2a5.972 5.972 0 0 0-3.318 1H1.667C.747 3 0 3.746 0 4.667v6.666C0 12.253.746 13 1.667 13h4.015c.95.632 2.091 1 3.318 1a5.973 5.973 0 0 0 3.318-1h2.015c.92 0 1.667-.746 1.667-1.667V4.667C16 3.747 15.254 3 14.333 3zM1.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM9 13A5 5 0 1 0 9 3a5 5 0 0 0 0 10z"/>
  <path d="M2 3a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1z"/>
</svg></button>
                  {/* <input className="input" type="submit" value="Add" /> */}
                  </form> 
                    </div>
                    
            <div className='inf'>
                <div className='nombre' >
                    <p className='names'>{props.user?.NombreCompleto}</p>
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
            <div className="fotosUsers" >
            {props?.user?.post?.map(post => {
            const imagen = `http://localhost:8000/images/posts/${post?.imagen}`;
            console.log(imagen)
            return <div className='fotosUser'>
             <div >
             { post.imagen? 
                <img src={imagen}  />
                : ""
                }  
            </div>
    
            </div>
         
            })
}
            </div>
        </div>

    )
}

const mapStateToProps = (state) => ({user: state?.user })
export default connect(mapStateToProps)(Perfil);