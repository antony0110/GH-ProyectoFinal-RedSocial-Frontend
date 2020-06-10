import React, { useEffect } from 'react';
import './Muro.scss';
import foto1 from './foto3.jpg'
import { connect } from 'react-redux'
import {LikeOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { addPost, posts,likes } from '../../redux/action';

const Muro = (props) => {
  const image = `http://localhost:8000/images/users/${props.user?.imagen}`;
  useEffect(() => {
    posts()

  }, []);
  const handle = event => {
    event.preventDefault();
    const formData = new FormData();

    if (event.target.img.files[0]) formData.set('imagen', event.target.img.files[0]);
    formData.set('name', event.target.name.value);
    formData.set('descripcion', event.target.descripcion.value);
    addPost(formData)

  }
  return (
    <div className='todo'  >
    <div className="container">
      <div className="row mt-4">
        <div className="col-3">
          <div className="card text-center d-flex align-items-center pt-3 "  >
            <div style={{ borderRadius: '50%', overflow: 'hidden', width: '100px', height: '100px' }}  >
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
          <div className="row">
            <div className="card mt-7 p-3 w-100">
              <h6 className="mt-2 mb-2">Comienza a postear...</h6>
              <form action="" onSubmit={handle}>
                <div>
                  <input type="text" placeholder="Titulo del post...." className="form-control mt-3" name="name" />
                </div>
                <div>
                  <input type="text" placeholder="Descripcion......" className="form-control mt-3" name="descripcion" />
                </div>
                <div>
                  <input type="file" name="img" id="file" class="input-file mt-3  " />
                </div>
                <div> 
                  <button className="btn-primary mt-2" type="submit">Post </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            {props.posts.map(post => {
              const imagen = `http://localhost:8000/images/posts/${post?.imagen}`;
              const img = `http://localhost:8000/images/users/${post?.user.imagen}`;

              return <div className=' d-flex align-items-center pt-3 w-100 '>
                <div className='d.flex  p-0 m-0 h-auto post align-items-start  '>
                </div>
                <div className="card posts ">
                  <div className="row d-flex w-100 m-0 p-0 cabezado   " /*style={{  marginLeft:'20px'}} */>
                    <div className="col-2 p-2" /*  style={{  borderRadius:'50%', overflow:'hidden', width: '50px',height: '50px' }} */ >
                      <NavLink to="/perfil"> <img
                        src={img}
                        style={{
                          width: '100%',
                          marginRight: 'auto',
                          marginLeft: '13px'
                        }}
                      />
                      </NavLink>
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center m-0">
                      <h5> {post?.user?.usuario}</h5>

                    </div>

                  </div>
                  <p className="card-text form-control  title">
                    {post?.name}
                     
                  </p>
                  {post?.imagen ?
                    <img src={imagen} class="card-img-top" alt="..." style={{ width: '92%', marginLeft: '20px' }} />
                    : ""
                  }

                  <div className="card-body PiePag  ">
                    <p className="card-text descripcion form-control  ">
                      {post?.descripcion}
                    </p>
                    <div className='d-flex align-items-center  '   >
                <button type='button' onClick={ () =>likes(post.id,post)} className="  botonlike  "><LikeOutlined   className='like' /> </button> <p className='m-0 ml-2 '  > <p className='d-flex align-items-center m-0'>{(post.likes).length}</p></p> 
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>


        </div>

        <div className="col-3">
          <div className="card p-3">
            <h6 className="mt-2 mb-2">Search your friends</h6>
            <input
              type="text"
              className="form-control"


              placeholder="Share something"
            />
            <a href="#" className="btn btn-primary">Search</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
const mapStateToProps = (state) => ({ user: state?.user, posts: state?.posts })
export default connect(mapStateToProps)(Muro);