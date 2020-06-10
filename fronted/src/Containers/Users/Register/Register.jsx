import React from 'react';
import './Register.scss';
import { notification } from 'antd';
import axios from 'axios';
import foto1 from './Captura.PNG'
import { NavLink } from 'react-router-dom';
import facebook from './facebook.png'
import { useHistory } from 'react-router-dom';

const Register = () => {
    const history = useHistory()
    const conectar = (event) => {
        event.preventDefault();
        const user = {
            NombreCompleto: event.target.NombreCompleto.value,
            usuario: event.target.usuario.value,
            email: event.target.email.value,
            password: event.target.password.value,
        }
        axios.post('http://localhost:8000/api/users/register', user)
            .then(res => {
                notification.success({ message: 'Usuario registrado con exito, inicia sesión porfavor' });
                history.push('/login')
            })
            .catch(console.error)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <img src={foto1} alt="foto" />
                </div>
                <div className="col-xs-12">
                    <div class="right-colum text-center">
                        <p className="Facetime"> COOLMEET</p>
                        <p class="info">Registrate para ver fotos y videos de tus amigos </p>
                        <button type="submit" class="btn btn-primary btn-block"><img src={facebook} /> Iniciar sesion con Facebook </button>
                        <p class="or">O</p>
                        <form onSubmit={conectar}>
                            <div class="form-group">
                                <input type="text" name='NombreCompleto' class="form-control"
                                    placeholder="Nombre Completo" />
                            </div>
                            <div class="form-group">
                                <input type="text" name='usuario' class="form-control"
                                    placeholder="Nombre de usuario" />
                            </div>

                            <div class="form-group">
                                <input type="text" name="email" class="form-control"
                                    placeholder="Nombre de usuario o correo electronico" />
                            </div>
                            <div class="form-group">
                                <input type="password" name="password" class="form-control"
                                    placeholder="Contraseña" />
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Registrate</button>
                            <p class="terms"> Al registrarte, aceptas nuestras, <b>Condiciones</b>. Obtén mas información sobre cómo recopilamos,
                        usamos y compartimos tu información en la <b>Política de datos</b>, asi como
                        el uso que hacemos de las cookies y tecnologias similares en nuestra <b>Política de cookies</b> </p>
                            <div>
                                <div class="right-column-login  text-center">
                                    <p>¿Ya estas registrado?  <NavLink to="/login"><a>Inicia sesion</a></NavLink></p>
                                </div>

                            </div>

                        </form>


                    </div>
                </div>
                
            </div>
        </div>

    )
}

export default Register;
