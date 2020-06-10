import React from 'react';
import './Header.scss';
import {WechatOutlined} from '@ant-design/icons';
import {HomeOutlined} from '@ant-design/icons';
import {UserOutlined} from '@ant-design/icons';
import {CommentOutlined} from '@ant-design/icons';
import {ExportOutlined} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { logout} from "../../redux/action";
import { connect } from "react-redux";

const Header = (props) => {
    return (
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
       <NavLink to="/"><a class="navbar-brand">COOLMEET</a><WechatOutlined className='logo'/></NavLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
{props?.user ?
         <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
         <ul class="navbar-nav ml-auto">
           <li class="nav-item">
           <NavLink to="/Muro"><a class="nav-link"><CommentOutlined className='logo3'/>Muro</a></NavLink>
           </li>
           <li class="nav-item">
           <NavLink to="/Perfil"><a class='nav-link'> <UserOutlined className='logo2' /> {props.user.usuario}</a></NavLink>
           </li>
           <li class="nav-item">
           <NavLink to="/"><a  class='nav-link' onClick={logout} > <ExportOutlined  style={{marginBottom:'8px'}}   className='logo2'/> Logout</a></NavLink>
           </li>
       
         </ul>
   </div>
        
        :
        <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
        <ul class="navbar-nav ml-auto">
          <li class="nav-item ">
          <NavLink to="/"><a class="nav-link"> <HomeOutlined className='logo3'/> Home</a></NavLink>
          </li>
          <li class="nav-item">
          <NavLink to="/login"> <a class="nav-link">Sign in</a> </NavLink>
          </li>
          <li class="nav-item">
          <NavLink to="/register">  <a class="nav-link">Sign up</a></NavLink>
          </li>
        </ul>
       </div>
       
}                    
      </nav>

    )
}

const mapStateToProps = (state) => ({user: state?.user })
export default connect(mapStateToProps)(Header);