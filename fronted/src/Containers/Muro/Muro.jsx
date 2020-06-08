import React from 'react';
import './Muro.scss';
import foto1 from './foto3.jpg'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';

const Muro = (props) => {
const image = `http://localhost:8000/images/users/${props.user?.imagen}`;    
    return (
        <div className="container">
        <div className="row mt-4">
          <div className="col-3">
            <div className="card text-center d-flex align-items-center pt-3 "  >
           <div  style={{  borderRadius:'50%', overflow:'hidden',width: '100px',height: '100px' }}  >
           <NavLink to="/perfil">  <img src={image} style={{
                  width: '100%',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
              />
          </NavLink>
              </div>
              <h5 className="mt-3"> Bienvenido: {props.user?.usuario}</h5>
              <p>{props.user?.email}</p>
              <a className="mb-3" href="#">Settings</a>
            </div>
          </div>
  
          <div className="col-6">
            <div>
              <div className="card">
                <div className="row d-flex w-100 m-0 p-0" /*style={{  marginLeft:'20px'}} */>
                  <div className="col-2 p-2" /*  style={{  borderRadius:'50%', overflow:'hidden', width: '50px',height: '50px' }} */ >
                  <NavLink to="/perfil"> <img
                      src={image}
                      style={{  width: '100%',
                      marginRight: 'auto',
                      marginLeft: '13px'}}
                    />
                     </NavLink>
                  </div>
                  <div className="col-6 d-flex justify-content-center align-items-center m-0">
                    <h5> {props.user?.NombreCompleto}</h5>
                  </div>
                </div>
                <img src={foto1} class="card-img-top" alt="..."  style={{  width: '92%',marginLeft:'20px'}}    />
                <div className="card-body">
                  <p className="card-text">
                  Sleepy Joe Biden’s 1994 Crime Bill was a total disaster. It was mass incarceration for Black people, many of them innocent. I did Criminal Justice Reform, something Obama & Biden didn’t even try to do - & couldn’t do even if they did try. Biden can never escape his Crime Bill!
                  </p>
                  <a href="#" className="btn btn-primary">Like</a>
                </div>
              </div>
            </div>
          </div>
  
          <div className="col-3">
            <div className="card p-3">
              <h6 className="mt-2 mb-2">Search your friends</h6>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Share something"
              />
              <a href="#" className="btn btn-primary mt-2">Search</a>
            </div>
            <div className="card mt-4 p-3">
              <h6 className="mt-2 mb-2">Start a post...</h6>
              <textarea
                rows="3"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Share something"
              />
              <a href="#" className="btn btn-primary mt-2">Post</a>
            </div>
          </div>
  
        </div>
      </div>
    )
    }
    const mapStateToProps = (state) => ({user: state?.user })
    export default connect(mapStateToProps)(Muro);