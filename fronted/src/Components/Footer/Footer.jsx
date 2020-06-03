import React from 'react';
import './Footer.scss';
import {InstagramOutlined} from '@ant-design/icons';
import {GithubOutlined} from '@ant-design/icons';
//import { NavLink } from 'react-router-dom';
import {TwitterOutlined} from '@ant-design/icons';
import {FacebookOutlined} from '@ant-design/icons';
const Footer = () => {
    return (
        <footer className="footer">
          <div className="Letras" >
        <p className='sobreMi' >ABOUT US</p> 
        <p className='contacto'  >CONTACT</p> 
          </div>
          <div className='Copy'>
         <p className='copyright'> @Copyright Company Antony Gomez Carrasco </p> 
        
          </div>
        </footer>
    )
}
export default Footer;